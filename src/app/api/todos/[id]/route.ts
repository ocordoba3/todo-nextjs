import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Args {
  params: {
    id: string;
  };
}

const getTodo = async (id: string) => {
  return await prisma.todo.findFirst({ where: { id } });
};

export async function GET(request: Request, { params }: Args) {
  const { id } = await params;
  const todo = await getTodo(id);

  if (!todo) {
    return NextResponse.json({
      message: "No element found",
    });
  }

  return NextResponse.json(todo);
}

export async function PATCH(request: Request, { params }: Args) {
  const { id } = await params;

  // Check if register exists
  const todo = await getTodo(id);

  if (!todo) {
    return NextResponse.json({
      message: "No element found",
    });
  }

  const { description, complete = false } = await request.json();

  if (!description) {
    return NextResponse.json(
      { message: "description is required" },
      { status: 400 }
    );
  }

  if (typeof complete !== "boolean") {
    return NextResponse.json(
      { message: "complete value must be boolean" },
      { status: 400 }
    );
  }

  const result = await prisma.todo.update({
    data: { description, complete },
    where: { id },
  });

  return NextResponse.json(result);
}
