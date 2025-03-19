import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface User {
    roles?: string[];
    isActive?: boolean;
    password?: string;
  }

  interface Session {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    roles: string[];
    id: string;
    isActive: boolean;
  }
}
