"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

function sleep(seconds: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
}

export async function updateTodoStatus(id: string, complete: boolean) {
  await sleep(3);
  const todo = await prisma.todo.findFirst({ where: { id } });

  if (!todo) {
    throw "To Do not found";
  }

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { complete },
  });

  revalidatePath("/dashboard/server-todos");
  return updatedTodo;
}

export async function createTodo(description: string) {
  if (!description) {
    throw "Description is required";
  }

  const createdTodo = await prisma.todo.create({ data: { description } });

  revalidatePath("/dashboard/server-todos");
  return createdTodo;
}

export async function clearCompleted() {
  const completedTodos = await prisma.todo.deleteMany({
    where: { complete: true },
  });

  revalidatePath("/dashboard/server-todos");
  return completedTodos;
}
