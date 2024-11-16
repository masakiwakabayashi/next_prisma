"use server";

import { prisma } from "@/lib/prisma";
import { TodoSchema, MemoSchema } from "@/lib/validate";
import { revalidatePath } from "next/cache";

// Todo

export async function addTodo(
  formData: FormData
) {
  const title = formData.get("title") as string;
  const validatedData = TodoSchema.parse({ title, completed: false });

  await prisma.todo.create({
    data: validatedData,
  });

  revalidatePath("/");
}

export async function toggleTodo(
  id: number,
  completed: boolean
) {
  await prisma.todo.update({
    where: { id },
    data: { completed },
  });

  revalidatePath("/");
}

export async function deleteTodo(
  id: number
) {
  await prisma.todo.delete({
    where: { id },
  });

  revalidatePath("/");
}


// Memo

export async function addMemo(
  formData: FormData
) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const validatedData = MemoSchema.parse({ title, content });

  await prisma.memo.create({
    data: validatedData,
  });

  revalidatePath("/");
}


export async function updateMemo(
  id: number,
  formData: FormData
) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const validatedData = MemoSchema.parse({ title, content });

  await prisma.memo.update({
    where: { id },
    data: validatedData
  });

  revalidatePath("/");
}


export async function deleteMemo(
  id: number
) {
  await prisma.memo.delete({
    where: { id },
  });

  revalidatePath("/");
}

