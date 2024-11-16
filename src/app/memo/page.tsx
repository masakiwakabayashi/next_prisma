import { prisma } from "@/lib/prisma";
import { MemoList } from "@/components/Memo/MemoList";
import { AddMemoForm } from "@/components/Memo/AddMemoForm";

export default async function Home() {
  const memos = await prisma.memo.findMany({
    select: {
      id: true,
      title: true,
      content: true,
    },
  });

  return (
    <main className="max-w-4xl mx-auto mt-4 ml-4">
      <h1 className="text-2xl font-bold mb-4">Memo List</h1>
      <AddMemoForm />
      <MemoList memos={memos} />
    </main>
  );
}
