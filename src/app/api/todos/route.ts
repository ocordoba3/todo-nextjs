import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = Number(searchParams.get("take") ?? "10");
  const skip = Number(searchParams.get("skip") ?? "0");

  if (isNaN(take)) {
    return NextResponse.json(
      { message: "Take value is not valid" },
      { status: 400 }
    );
  }
  if (isNaN(skip)) {
    return NextResponse.json(
      { message: "Skip value is not valid" },
      { status: 400 }
    );
  }

  const results = await prisma.todo.findMany({ take, skip });

  return NextResponse.json({
    results,
  });
}

export async function POST(request: Request) {
  const { description } = await request.json();

  if (!description) {
    return NextResponse.json(
      { message: "description is required" },
      { status: 400 }
    );
  }

  const result = await prisma.todo.create({ data: { description } });

  return NextResponse.json(result);
}

export async function DELETE() {
  const result = await prisma.todo.deleteMany({ where: { complete: true } });

  return NextResponse.json(result);
}
