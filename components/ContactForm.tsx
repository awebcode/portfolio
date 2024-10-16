"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { cn } from "@/utils/cn";
import { toast } from "sonner";
import { ErrorMessage } from "@hookform/error-message";
import { Textarea } from "./ui/textarea";
import { DATA } from "./data/DATA";
import Link from "next/link";
import PrimaryButton from "./reusables/buttons/PrimaryButton";
import BlurFade from "./ui/blur-fade";
import TitleSubtitle from "./reusables/contents/TitleSubtitle";
import Container from "./reusables/contents/Container";
import Wrapper from "./reusables/contents/Wrapper";

// Email Sending Setup (using Resend)

// Zod Schema for Validation
const ContactFormSchema = z.object({
  name: z.string().min(2, "First name must have at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

// Typescript type from Zod schema
type ContactFormData = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
  const methods = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    mode: "all",
  });

  const {
    handleSubmit,
    reset,
    register,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: ContactFormData) => {
    try {
      await fetch("/api/resend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));

      toast.success("Message sent successfully!");
      reset(); // Reset the form
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <Wrapper>
      <Container className=" mx-auto shadow-md md:hover:border-2 rounded-xl md:hover:border-primary transition-all duration-300">
        <div className=" flex flex-col-reverse md:flex-row items-center w-full mx-auto shadow-input rounded-md">
          {/* Left Side */}
          <div className="flex flex-col basis-1/3 p-4 md:border-r border-primary ">
            <ContactInformation />
          </div>

          {/* Right Side */}
          <div className="flex-1 p-4">
            <BlurFade inView delay={0.5} className="flex flex-col gap-2">
              <h2 className="text-3xl font-syncopate font-bold tracking-tighter sm:text-5xl">
                <span className="text-primary">Get in</span> Touch.
              </h2>
              <p className="mx-auto text-muted-foreground text-base leading-7">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.facebook.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on facebook
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all soliciting or fill
                out the form and I’ll get back to you shortly.
              </p>
            </BlurFade>

            <FormProvider {...methods}>
              <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <LabelInputContainer>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" {...register("name")} placeholder="John Doe" />
                  <div className="text-rose-500 text-base">
                    <ErrorMessage name="name" />
                  </div>
                </LabelInputContainer>

                {/* Email */}
                <LabelInputContainer>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    {...register("email")}
                    placeholder="john.doe@example.com"
                    type="email"
                  />
                  <div className="text-rose-500 text-base">
                    <ErrorMessage name="email" />
                  </div>
                </LabelInputContainer>

                {/* Message */}
                <LabelInputContainer>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Your message here..."
                    className="w-full h-24 p-2 border rounded-md focus:outline-none"
                  />
                  <div className="text-rose-500 text-base">
                    <ErrorMessage name="message" />
                  </div>
                </LabelInputContainer>

                <PrimaryButton
                  type="submit"
                  className={cn(
                    "bg-indigo-500 hover:bg-primary/80",
                    isSubmitting && "opacity-50 cursor-not-allowed"
                  )}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </PrimaryButton>
              </form>
            </FormProvider>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={cn("flex flex-col space-y-2 mb-4", className)}>{children}</div>;


const ContactInformation = () => {
  return (
    <>
      <TitleSubtitle
        subTitlePosition="bottom"
        title={
          <>
            Contact <span className="text-primary">Information</span>
          </>
        }
        subtitle="Feel free to reach out via any of the following channels:"
      />
      
      <ul className="mt-4 space-y-2">
        <p>
          <strong className="text-gray-600 dark:text-gray-200">Phone:</strong> {DATA.contact.tel}
        </p>
        <p>
          <strong className="text-gray-600 dark:text-gray-200">Email:</strong> {DATA.contact.email}
        </p>
        <li>
          <strong className="text-gray-600 dark:text-gray-200">Github:</strong>{" "}
          <Link
            href={DATA.contact.social.GitHub.url}
            className="text-blue-500 hover:underline"
          >
            GitHub Profile
          </Link>
        </li>
        <li>
          <strong className="text-gray-600 dark:text-gray-200">LinkedIn:</strong>{" "}
          <Link
            href={DATA.contact.social.LinkedIn.url}
            className="text-blue-500 hover:underline"
          >
            LinkedIn Profile
          </Link>
        </li>
        <li>
          <strong className="text-gray-600 dark:text-gray-200">Twitter:</strong>{" "}
          <Link
            href={DATA.contact.social.X.url}
            className="text-blue-500 hover:underline"
          >
            Twitter Profile
          </Link>
        </li>
      </ul>
    </>
  );
}
