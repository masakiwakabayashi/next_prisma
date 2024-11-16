"use client";
import { Todo } from "@/lib/validate";
import { toggleTodo, deleteTodo } from "@/app/actions";

export function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <ul className="mt-4">
      {todos.map(
        (todo) =>
          todo.id !== undefined && (
            <li key={todo.id} className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id!, !todo.completed)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.title}
              </span>
              <form action={() => deleteTodo(todo.id!)}>
                <button type="submit" className="ml-2 text-red-500">
                  Delete
                </button>
              </form>
            </li>
          )
      )}
    </ul>
  );
}
