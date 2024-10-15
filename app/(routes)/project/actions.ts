"use server";
import { ProjectFormSchema, ProjectFormData } from "@/types/zodSchema/project/types"; // Adjust path as needed
import { prisma } from "@/lib/prisma";
import type { Project } from "@prisma/client";
import { revalidatePath } from "next/cache";

// Create a project
export async function createProject(data: ProjectFormData): Promise<Project> {
  try {
    const validatedData = ProjectFormSchema.parse(data);

    const project = await prisma.project.create({
      data: {
        title: validatedData.title,
        href: validatedData.href,
        dates: validatedData.dates,
        status: validatedData.status,
        description: validatedData.description,
        technologies: validatedData.technologies,
        links: {
          create: validatedData.links, // Create the links directly
        },
        image: validatedData.image,
        video: validatedData.video,
      },
    });

    revalidatePath("/");
    return project;
  } catch (error) {
    console.error("Error creating project:", error);
    revalidatePath("/");
    throw error;
  }
}

// Get all projects
export async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      include: {
        links: true, // Include related links if needed
      },
    });
     
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}

// Get a single project by ID
export async function getSingleProject(id: string): Promise<Project | null> {
  try {
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        links: true, // Include related links if needed
      },
    });
    return project;
  } catch (error) {
    console.error("Error fetching project by ID:", error);
    throw error;
  }
}

// Update a project
export async function updateProject(id: string, data: ProjectFormData): Promise<Project> {
  try {
    const validatedData = ProjectFormSchema.parse(data);

    const project = await prisma.project.update({
      where: { id },
      data: {
        title: validatedData.title,
        href: validatedData.href,
        dates: validatedData.dates,
        status: validatedData.status,
        description: validatedData.description,
        technologies: validatedData.technologies,
        links: {
          deleteMany: {}, // Optionally delete existing links
          create: validatedData.links, // Create new links
        },
        image: validatedData.image,
        video: validatedData.video,
      },
    });

    revalidatePath("/");
    return project;
  } catch (error) {
    console.error("Error updating project:", error);
    revalidatePath("/");
    throw error;
  }
}

// Delete a project
export async function deleteProject(id: string): Promise<void> {
  try {
    await prisma.project.delete({
      where: { id },
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Error deleting project:", error);
    throw error;
  }
}
