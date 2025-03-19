import { prisma } from "@/prisma";
import bcrypt from "bcryptjs";

export async function signInEmailPassword(email: string, password: string) {
  if (!email || !password) {
    return null;
  }

  const userExists = await prisma.user.findUnique({ where: { email } });

  if (!userExists) {
    const createdUser = await prisma.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password),
        name: email.split("@")[0],
      },
    });

    return createdUser;
  }

  if (!bcrypt.compareSync(password, userExists.password ?? "xx")) {
    return null;
  }

  return userExists;
}
