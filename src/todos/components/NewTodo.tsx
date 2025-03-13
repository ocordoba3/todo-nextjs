"use client";

import { IoTrashOutline } from "react-icons/io5";
// import { clearCompleted, createTodo } from "../helpers";
import { FormEvent, useState } from "react";
import { createTodo, clearCompleted } from "../actions";

export const NewTodo = () => {
  const [description, setDescription] = useState("");
  // Rest API
  // const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!description) {
      return;
    }
    // Rest API
    // await createTodo(description);
    // router.refresh();
    await createTodo(description);
    setDescription("");
  }

  // Rest API
  // async function handleClear() {
  //   await clearCompleted();
  //   router.refresh();
  // }

  return (
    <form className="flex w-full mt-8 mx-4" onSubmit={handleSubmit}>
      <input
        value={description}
        onChange={({ target: { value } }) => setDescription(value)}
        type="text"
        className="w-6/12 pl-3 pr-3 py-1 text-black rounded-lg border-2 border-gray-200 outline-none focus:border-[#85C7F2] transition-all"
        placeholder="¿Qué quieres hacer?"
      />

      <button
        type="submit"
        className="flex items-center text-sm justify-center rounded ml-2 bg-[#85C7F2] p-2 text-white hover:bg-sky-700 transition-all"
      >
        Agregar
      </button>

      <button
        onClick={clearCompleted}
        type="button"
        className="flex text-sm items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all"
      >
        <IoTrashOutline />
        Eliminar completados
      </button>
    </form>
  );
};
