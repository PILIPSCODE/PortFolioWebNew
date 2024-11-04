"use server";
import { prisma } from "@/app/libs/prismaDb";
import { EditTechnologyPortfolio, Services, ServicesWithRelation } from "@/interface";
import { Blog } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod"; // Import zod for validation

// Define schema for portfolio validation
const portfolioSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  github: z.string().optional(),
  link: z.string().optional(),
});
// Define schema for blog validation
const blogSchema = z.object({
  Title: z.string().min(1),
  description: z.string().min(1),
  img: z.string().min(1),
});

// Update AddPortfolio function to use zod validation
export const AddPortfolio = async (
  img:EditTechnologyPortfolio,
  prevSate: any,
  formData: FormData
) => {

  const validatedFields = portfolioSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors)
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {

    const createproject = await prisma.project.create({
      data: {
        name: validatedFields.data.name,
        link: validatedFields.data.link ?? '',
        github: validatedFields.data.github ?? '',
        img:img.id,
        description: validatedFields.data.description,
      },
      include: {
        technology: true,
      },
    });

    await prisma.technolgy.createMany({
      data: img.technology.map((e) => {
        return {
          technology: e.technology,
          projectId: createproject.id,
        };
      }),
    });
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/");
  revalidatePath("/admin/Portfolio");
  redirect("/admin/Portfolio");
};

// Update DeletePortfolio function
export const DeletePortfolio = async (id: string) => {
  try {
    await prisma.technolgy.deleteMany({
      where: {
        projectId: id,
      },
    });
    await prisma.project.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/");
  revalidatePath("/admin/Portfolio");
  redirect("/admin/Portfolio");
};

// Update UpdatePortfolio function to use zod validation
export const UpdatePortfolio = async (
  id: EditTechnologyPortfolio,
  prevSate: any,
  formData: FormData
) => {
  const validatedFields = portfolioSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors)
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    await prisma.project.update({
      where: {
        id: id.id,
      },
      data: {
        name: validatedFields.data.name,
        link: validatedFields.data.link,
        github: validatedFields.data.github,
        description: validatedFields.data.description,
      },
    });

    await prisma.technolgy.deleteMany({
        where: {
            projectId: id.id,
        },
    });

    await prisma.technolgy.createMany({
        data: id.technology.map((e) => {
            return {
                technology: e.technology,
                projectId: id.id,
            };
        }),
    });

  } catch (error) {
    console.log(error);
  }
  revalidatePath("/admin/Portfolio");
  revalidatePath("/");
  redirect("/admin/Portfolio")
};

// Update AddBlog function to use zod validation
export const AddBlog = async (body: Blog) => {
  try {
    const result = blogSchema.safeParse(body); // Validate input

    if (!result.success) {
      console.log(result.error.flatten().fieldErrors); // Log validation errors
      return;
    }

    const { Title, description, img } = result.data;

    const createproject = await prisma.blog.create({
      data: {
        Title,
        img,
        description,
      },
    });

    return createproject;
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/");
  revalidatePath("/admin/Blog");
  redirect("/admin/Blog");
};

// ... existing code ...
