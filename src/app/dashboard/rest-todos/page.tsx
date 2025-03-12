import prisma from "@/lib/prisma";
import { NewTodo } from "@/todos/components/NewTodo";
import { TodoItem } from "@/todos/components/TodoItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "To Do list",
  description: "Things you have to do",
};

const RestTodosPage = async () => {
  const todos = await prisma.todo.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col bg-slate-50 overflow-hidden">
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

export default RestTodosPage;
