import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST() {
  await prisma.todo.deleteMany();
  await prisma.user.deleteMany();

  await prisma.user.create({
    data: {
      email: "test1@gmail.com",
      password: bcrypt.hashSync("123456"),
      roles: ["admin", "user", "super-user"],
      todos: {
        createMany: {
          data: [
            {
              description: "Recolectar la piedra del Alma",
            },
            {
              description: "Recolectar la piedra del Tiempo",
            },
            {
              description: "Recolectar la piedra del Realidad",
            },
            {
              description: "Recolectar la piedra del Espacio",
            },
            {
              description: "Recolectar la piedra del Mente",
            },
            {
              description: "Recolectar la piedra del Poder",
              complete: true,
            },
          ],
        },
      },
    },
  });

  return NextResponse.json({
    message: "Seed executed",
  });
}
