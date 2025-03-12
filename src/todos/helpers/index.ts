import { Todo } from "@prisma/client";

export async function createTodo(description: string): Promise<Todo> {
  const body = {
    description,
  };

  const todo = await fetch("/api/todos/", {
    body: JSON.stringify(body),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resp) => resp.json());

  return todo;
}

export async function updateTodoStatus(
  id: string,
  complete: boolean
): Promise<Todo> {
  const body = {
    complete,
  };

  const todo = await fetch(`/api/todos/${id}`, {
    body: JSON.stringify(body),
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resp) => resp.json());

  return todo;
}

export async function clearCompleted(): Promise<Todo[]> {
  const todos = await fetch("/api/todos/", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resp) => resp.json());

  return todos;
}
