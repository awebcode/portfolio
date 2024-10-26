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
import Container from "./reusables/contents/Container";
import Wrapper from "./reusables/contents/Wrapper";

import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { X } from "lucide-react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Meteors } from "./ui/meteors";
import { ResumeIcon } from "@radix-ui/react-icons";
const CONTACT_ITEMS = [
  {
    icon: <CiPhone className="w-4 md:w-5 h-4 md:h-5" />,
    content: DATA.contact.tel,
  },
  {
    icon: <CiMail className="w-4 md:w-5 h-4 md:h-5" />,
    content: DATA.contact.email,
  },
  {
    icon: <CiLocationOn className="w-4 md:w-5 h-4 md:h-5" />,
    content: "Everywhere in the world.",
  },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    icon: <FaGithub className="w-4 md:w-5 h-4 md:h-5" />,

    url: DATA.contact.social.GitHub.url,
  },

  {
    label: "LinkedIn",
    icon: <FaLinkedin className="w-4 md:w-5 h-4 md:h-5" />,
    url: DATA.contact.social.LinkedIn.url,
  },
  {
    label: "X",
    icon: <X className="w-4 md:w-5 h-4 md:h-5" />,
    url: DATA.contact.social.X.url,
  },
  {
    label: "Facebook",
    icon: <FaFacebook className="w-4 md:w-5 h-4 md:h-5" />,
    url: DATA.contact.social.facebook.url,
  },
  {
    label:"Resume",
    icon: <ResumeIcon className="w-4 md:w-5 h-4 md:h-5" />,
    url: DATA.contact.social.Resume.url
  }
];

// Zod Schema for Validation
const ContactFormSchema = z.object({
  name: z.string().min(2, "First name must have at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

// Typescript type from Zod schema
type ContactFormData = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
  const isMobile=useMediaQuery("(max-width: 768px)");
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

      toast.success("Message sent successfully!", {
        description: "I will get back to you as soon as possible.",
        duration: 5000,
        dismissible: true,
        position:"top-center"
      });
      reset(); // Reset the form
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.", {
        duration: 3000,
        dismissible: true,
      });
    }
  };

  return (
    <Wrapper id="contact">
      <Container className=" mx-auto shadow-md md:hover:border-2 rounded-xl md:hover:border-primary transition-all duration-300">
        <div className=" flex flex-col-reverse md:flex-row items-center w-full mx-auto shadow-input rounded-md">
          {/* Left Side */}
          <div className="flex flex-col basis-1/3 p-4 md:border-r border-primary/50 ">
            <ContactInformation />
          </div>

          {/* Right Side */}
          <div className="flex-1 p-4">
            <BlurFade inView={!isMobile} delay={0.2} className="flex flex-col gap-2">
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
      <h2 className="text-xl font-syncopate font-bold  sm:text-2xl">
        Contact <span className="text-primary">Info.</span>
      </h2>
      <p className="mx-auto text-muted-foreground text-base leading-7">
        Feel free to reach out via any of the following channels:
      </p>

      <div className="mt-4 space-y-2">
        {CONTACT_ITEMS.map((item, index) => (
          <p key={index} className="group cursor-pointer flex-center justify-start gap-2">
            <span className="p-2 md:p-3  bg-gray-100 dark:bg-gray-700 dark:text-gray-200 group-hover:bg-emerald-100 dark:group-hover:text-emerald-500 text-gray-500 rounded-full transition-all">
              {item.icon}
            </span>
            {item.content}
          </p>
        ))}
      </div>

      <div className="mt-4 space-y-2">
        {SOCIAL_LINKS.map((link, index) => (
          <p key={index} className="group cursor-pointer flex-center justify-start gap-2">
            <span className="p-2 md:p-3  bg-gray-100 dark:bg-gray-700 dark:text-gray-200 group-hover:bg-emerald-100 dark:group-hover:text-emerald-500 text-gray-500 rounded-full transition-all">
              {link.icon}
            </span>
            <Link href={link.url} className="text-blue-500 hover:underline">
              {link.label}
            </Link>
          </p>
        ))}
      </div>
      <Meteors number={8} />
    </>
  );
};
