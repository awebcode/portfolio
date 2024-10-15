import { Status } from "@prisma/client";
import { z } from "zod";

// Define the Zod Schema for Validation
export const ProjectFormSchema = z.object({
  title: z.string().min(2, "Title must have at least 2 characters"),
  href: z.string().url("Invalid URL format"),
  dates: z.string().min(5, "Dates must be provided"),
  status: z.nativeEnum(Status, {
    required_error: "Status is required",
  }), // Using nativeEnum for simpler enum handling
  description: z.string().min(10, "Description must be at least 10 characters long"),
  technologies: z.array(z.string()).min(1, "At least one technology must be selected"),
  links: z
    .array(
      z.object({
        type: z.string().min(1, "Link type is required"),
        href: z.string().url("Invalid URL format"),
        icon: z.string().min(1, "Icon URL is required"),
      })
    )
    .min(1, "At least one link is required"),
  image: z.string().url("Invalid image URL format").optional(),
  video: z.string().url("Invalid video URL format").optional(),
});

// Infer the TypeScript type from the Zod schema
export type ProjectFormData = z.infer<typeof ProjectFormSchema>;
