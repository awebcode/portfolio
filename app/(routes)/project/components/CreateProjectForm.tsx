"use client";

import React, { useEffect } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ErrorMessage } from "@hookform/error-message";
import { Textarea } from "@/components/ui/textarea";
import TagInput from "./TagInput"; // Import the new TagInput component
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

// Typescript type from Zod schema
type ProjectFormData = z.infer<typeof ProjectFormSchema>;

export default function CreateProjectForm({ id }: { id: string }) {
  const methods = useForm<ProjectFormData>({
    resolver: zodResolver(ProjectFormSchema),
    mode: "all",
    defaultValues: {
      technologies: [],
      links: [{ type: "", href: "", icon: "" }], // Default structure for links
    },
  });

  const {
    control,
    handleSubmit,
    reset,
    register,
    setValue,

    formState: { isSubmitting },
  } = methods;

  // Fetch and set project data if in edit mode
  useEffect(() => {
    if (id) {
      getSingleProject(id)
        .then((project) => {
          if (project) {
            reset(project as any); // Correct way to populate form with fetched data
          }
        })
        .catch((error) => {
          console.error("Failed to fetch project data:", error);
          toast.error("Could not load project details.");
        });
    }
  }, [id, reset]); // Dependency on ID and reset function

  const onSubmit = async (data: ProjectFormData) => {
    try {
      if (id) {
        await updateProject(id, data);
        toast.success("Project updated successfully!");
      } else {
        await createProject(data);
        toast.success("Project created successfully!");
      }

      reset(); // Reset the form
    } catch (error) {
      console.error(error);
      toast.error("Failed to create project. Please try again.");
    }
  };

  return (
    <div
      id="create-project"
      className="max-w-lg w-full mx-auto p-8 shadow-input rounded-md"
    >
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
          {/* Title */}
          <LabelInputContainer>
            <Label htmlFor="title">Title</Label>
            <Input id="title" {...register("title")} placeholder="Project Title" />
            <div className="text-rose-500 text-base">
              <ErrorMessage name="title" />
            </div>
          </LabelInputContainer>

          {/* Href */}
          <LabelInputContainer>
            <Label htmlFor="href">Project URL</Label>
            <Input
              id="href"
              {...register("href")}
              placeholder="https://your-project-url.com"
              type="url"
            />
            <div className="text-rose-500 text-base">
              <ErrorMessage name="href" />
            </div>
          </LabelInputContainer>

          {/* Dates */}
          <LabelInputContainer>
            <Label htmlFor="dates">Project Dates</Label>
            <Input
              id="dates"
              {...register("dates")}
              placeholder="October 2024 - Present"
            />
            <div className="text-rose-500 text-base">
              <ErrorMessage name="dates" />
            </div>
          </LabelInputContainer>

          {/* status */}
          <LabelInputContainer>
            <Label htmlFor="status">Status</Label>
            <Controller
              name={"status"}
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>
                  <SelectContent id="status">
                    <SelectGroup>
                      <SelectItem value={"Active"}>Active</SelectItem>
                      <SelectItem value={"Pending"}>Pending</SelectItem>
                      <SelectItem value={"Completed"}>Completed</SelectItem>
                      <SelectItem value={"Disabled"}>Disabled</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            <div className="text-rose-500 text-base">
              <ErrorMessage name="status" />
            </div>
          </LabelInputContainer>

          {/* Description */}
          <LabelInputContainer>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              {...register("description")}
              placeholder="Describe your project here..."
              className="w-full h-24 p-2 border rounded-md focus:outline-none"
            />
            <div className="text-rose-500 text-base">
              <ErrorMessage name="description" />
            </div>
          </LabelInputContainer>

          {/* Technologies */}
          <LabelInputContainer>
            <Label htmlFor="technologies">Technologies</Label>
            <Controller
              name="technologies"
              control={control}
              render={({ field: { value } }) => (
                <TagInput
                  value={value}
                  onChange={(tags) => setValue("technologies", tags)} // Update the form state
                  placeholder="Type a technology and press Enter or ','"
                />
              )}
            />
            <div className="text-rose-500 text-base">
              <ErrorMessage name="technologies" />
            </div>
          </LabelInputContainer>

          {/* Links */}
          <LabelInputContainer>
            <Label htmlFor="links">Links</Label>
            <Input
              id="links"
              {...register("links.0.type")}
              placeholder="Link Type (e.g., Website)"
            />
            <Input
              id="links"
              {...register("links.0.href")}
              placeholder="https://link-url.com"
            />
            <Input id="links" {...register("links.0.icon")} placeholder="Icon URL" />
            <div className="text-rose-500 text-base">
              <ErrorMessage name="links.0.type" />
              <ErrorMessage name="links.0.href" />
              <ErrorMessage name="links.0.icon" />
            </div>
          </LabelInputContainer>

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

          <PrimaryButton type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting && !id ? "Creating Project..." : "Create Project"}
            {isSubmitting && id ? "Edit Project..." : "Edit Project"}
          </PrimaryButton>
        </form>
      </FormProvider>
    </div>
  );
}

// Helper component for label and input container
const LabelInputContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};
