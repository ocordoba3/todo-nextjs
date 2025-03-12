import { Todo } from "@prisma/client";

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
