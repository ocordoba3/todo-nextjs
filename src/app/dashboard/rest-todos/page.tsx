import prisma from "@/lib/prisma";
import { TodoItem } from "@/todos/components/TodoItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "To Do list",
  description: "Things you have to do",
};

const RestTodosPage = async () => {
  const todos = await prisma.todo.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-1">
        <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
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

export default RestTodosPage;
