"use client";
import { Memo } from "@/lib/validate";
import { deleteMemo } from "@/app/actions";

export function MemoList({ memos }: { memos: Memo[] }) {
  return (
    <ul className="mt-4">
      {memos.map(
        (memo) =>
          memo.id !== undefined && (
            <li key={memo.id} className="flex items-center gap-2 mb-2">
              <span>
                {memo.title}
              </span>
              <br />
              <span>
                {memo.content}
              </span>
              <form action={() => deleteMemo(memo.id!)}>
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
