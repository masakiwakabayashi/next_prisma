"use client";
import { addMemo } from "@/app/actions";

export function AddMemoForm() {
  return (
    <form action={addMemo} className="flex gap-2">
      <input
        type="text"
        name="title"
        placeholder="New todo"
        className="flex-grow px-2 py-1 border rounded text-gray-800"
        required
      />
      <button
        type="submit"
        className="px-4 py-1 bg-blue-500 text-white rounded"
      >
        Add
      </button>
    </form>
  );
}
