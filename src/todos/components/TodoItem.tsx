"use client";

import { Todo } from "@prisma/client";
import { updateTodoStatus } from "../actions";
import { startTransition, useOptimistic } from "react";
// import { updateTodoStatus } from "../helpers";
// import { useRouter } from "next/navigation";

interface Props {
  todo: Todo;
}

export const TodoItem = ({ todo }: Props) => {
  const [todoOptimistic, toogleTodoOptimistic] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({
      ...state,
      complete: newCompleteValue,
    })
  );
  // Used on REST Api
  // const router = useRouter();
  // async function handleStatus() {
  //   await updateTodoStatus(todo.id, !todo.complete);
  //   router.refresh();
  // }

  async function onToggle() {
    try {
      startTransition(() => toogleTodoOptimistic(!todoOptimistic.complete));
      await updateTodoStatus(todoOptimistic.id, !todoOptimistic.complete);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      startTransition(() => toogleTodoOptimistic(!todoOptimistic.complete));
    }
  }

  return (
    <div className="relative pl-12 py-6 group">
      {todoOptimistic.complete ? (
        <div className="font-medium text-xs text-green-500 mb-1 sm:mb-0">
          Completed
        </div>
      ) : (
        <div className="font-medium text-xs text-[#60a5d3] mb-1 sm:mb-0">
          To do
        </div>
      )}
      <div
        className={`flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-8 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 ${
          todoOptimistic.complete ? "after:bg-green-600" : "after:bg-[#85C7F2]"
        } after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-8 after:-translate-x-1/2 after:translate-y-1.5`}
      >
        <div className="flex flex-wrap text-xl font-bold text-slate-900">
          <span className="w-full">{todoOptimistic.description}</span>
          <time className="inline-flex items-center justify-center text-xs font-semibold w-fit px-2 h-6 mb-3 sm:mb-0 text-gray-600 bg-gray-200 rounded-full">
            Created at:{" "}
            {new Date(todoOptimistic.createdAt).toLocaleDateString()}
          </time>
          {/* Botón al hacer hover */}
          <button
            onClick={onToggle}
            className={`ml-2 px-4 text-sm font-semibold text-white ${
              !todoOptimistic.complete ? "bg-green-500 " : "bg-[#60a5d3]"
            } rounded opacity-0 group-hover:opacity-100 transition-opacity`}
          >
            {todoOptimistic.complete ? "Mover a To Do" : "Completar"}
          </button>
        </div>
      </div>
    </div>
  );
};
