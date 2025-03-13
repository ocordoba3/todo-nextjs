export const revalidate = 0;
export const dynamic = "force-dynamic";

import prisma from "@/lib/prisma";
import { NewTodo } from "@/todos/components/NewTodo";
import { TodoItem } from "@/todos/components/TodoItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Server To Do list",
  description: "Things you have to do",
};

const ServerTodosPage = async () => {
  const todos = await prisma.todo.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <section className="relative flex flex-col overflow-hidden">
      <div className="w-full max-w-6xl px-4 md:px-1">
        <NewTodo />
        <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:pt-8">
          <div className="w-full">
            <div className="-my-6">
              {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerTodosPage;
