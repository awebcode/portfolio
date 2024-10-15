"use client";

import React, { useEffect, useState } from "react";
import { Controller, FormProvider, useForm, useFieldArray,FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ErrorMessage } from "@hookform/error-message";
import { Textarea } from "@/components/ui/textarea";
import TagInput from "./TagInput";
import BlurFade from "@/components/ui/blur-fade";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PrimaryButton from "@/components/reusables/buttons/PrimaryButton";
import { ProjectFormSchema } from "@/types/zodSchema/project/types";
import { createProject, getSingleProject, updateProject } from "../actions";
import TitleSubtitle from "@/components/reusables/contents/TitleSubtitle";
import { useRouter } from "next/navigation";

// TypeScript type from Zod schema
type ProjectFormData = z.infer<typeof ProjectFormSchema>;

export default function CreateProjectForm({ id }: { id: string }) {
  const router = useRouter();
  const methods = useForm<ProjectFormData>({
    resolver: zodResolver(ProjectFormSchema),
    mode: "all",
    defaultValues: {
      technologies: [],
    },
  });

  const {
    control,
    handleSubmit,
    reset,
    register,
    setValue,
    formState: { isSubmitting},
  } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "links",
  });

  useEffect(() => {
    if (id) {
      getSingleProject(id)
        .then((project) => {
          if (project) reset(project as any);
        })
        .catch((error) => {
          console.error("Failed to fetch project data:", error);
          toast.error("Could not load project details.");
        });
    }
  }, [id, reset]);

  const onSubmit = async (data: ProjectFormData) => {
    try {
      if (id) {
        await updateProject(id, data);
        toast.success("Project updated successfully!");
      } else {
        await createProject(data);
        toast.success("Project created successfully!");
      }
      router.push("/");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to create project. Please try again.");
    }
  };

  return (
    <div className="max-w-lg w-full mx-auto p-8 shadow-input rounded-md">
      <BlurFade inView delay={0.5} className="flex flex-col gap-2">
        <TitleSubtitle
          subTitlePosition="bottom"
          title={
            <>
              {id ? (
                <>
                  Edit <span className="text-primary">Project</span>
                </>
              ) : (
                <>
                  Create New <span className="text-primary">Project</span>
                </>
              )}
            </>
          }
          subtitle={`Fill out the form below to ${id ? "edit" : "create"} your project.`}
        />
      </BlurFade>

      <FormProvider {...methods}>
        <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
          <LabelInputContainer>
            <Label htmlFor="title">Title</Label>
            <Input id="title" {...register("title")} placeholder="Project Title" />
            <FormError name="title" />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="href">Project URL</Label>
            <Input
              id="href"
              {...register("href")}
              placeholder="https://your-project-url.com"
              type="url"
            />
            <FormError name="href" />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="dates">Project Dates</Label>
            <Input
              id="dates"
              {...register("dates")}
              placeholder="October 2024 - Present"
            />
            <FormError name="dates" />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="status">Status</Label>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>
                  <SelectContent id="status">
                    <SelectGroup>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                      <SelectItem value="Disabled">Disabled</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            <FormError name="status" />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              {...register("description")}
              placeholder="Describe your project here..."
            />
            <FormError name="description" />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="technologies">Technologies</Label>
            <Controller
              name="technologies"
              control={control}
              render={({ field: { value } }) => (
                <TagInput
                  value={value}
                  onChange={(tags) => setValue("technologies", tags)}
                  placeholder="Type a technology and press Enter or ','"
                />
              )}
            />
            <FormError name="technologies" />
          </LabelInputContainer>
          {/* Image video */}
          {/* Image URL */}
          <LabelInputContainer>
            <Label htmlFor="image">Image URL</Label>
            <Input id="image" {...register("image")} placeholder="Image URL (optional)" />
            <div className="text-rose-500 text-base">
              <ErrorMessage name="image" />
            </div>
          </LabelInputContainer>

          {/* Video URL */}
          <LabelInputContainer>
            <Label htmlFor="video">Video URL</Label>
            <Input id="video" {...register("video")} placeholder="Video URL (optional)" />
            <div className="text-rose-500 text-base">
              <ErrorMessage name="video" />
            </div>
          </LabelInputContainer>

          <LinksInput
            fields={fields}
            append={append}
            remove={remove}
            register={register}
          />

          <PrimaryButton type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting
              ? id
                ? "Editing Project..."
                : "Creating Project..."
              : id
              ? "Edit Project"
              : "Create Project"}
          </PrimaryButton>
        </form>
      </FormProvider>
    </div>
  );
}

// Reusable container component
const LabelInputContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mb-4">{children}</div>
);

// Reusable form error display component
const FormError: React.FC<{ name: string }> = ({ name }) => (
  <div className="text-rose-500 text-base">
    <ErrorMessage name={name} />
  </div>
);





const LinksInput: React.FC<{
  fields: any[];
  append: (link: { name: string; href: string }) => void;
  remove: (index: number) => void;
  register: any;
}> = ({ fields, append, remove, register }) => {
  const handleAddLink = () => {
    append({ name: "", href: "" }); // Add a new link input
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission on Enter key
      handleAddLink(); // Add a new link
    }
  };

  return (
    <div className="mb-4">
      <Label>Links</Label>

      {fields.map((field, index) => (
        <div key={field.id} className="flex-between gap-2 mb-2">
          <LabelInputContainer>
            <Input
              placeholder="Link Name"
              {...register(`links.${index}.name`)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
            <FormError name={`links.${index}.name`} />
          </LabelInputContainer>

          <LabelInputContainer>
            <Input
              placeholder="https://link-url.com"
              {...register(`links.${index}.href`)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
            <FormError name={`links.${index}.href`} />
          </LabelInputContainer>

          <button type="button" onClick={() => remove(index)} className="text-red-500">
            Remove
          </button>
        </div>
      ))}

      <PrimaryButton type="button" onClick={handleAddLink}>
        Add Link
      </PrimaryButton>
    </div>
  );
};
