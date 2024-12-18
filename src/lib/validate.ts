import { z } from "zod";

export const TodoSchema = z.object({
  id: z.number().optional(),
  title: z.string().min(1, "Title is required"),
  completed: z.boolean().default(false),
});

export type Todo = z.infer<typeof TodoSchema>;

export const MemoSchema = z.object({
  id: z.number().optional(),
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Title is required"),
});

export type Memo = z.infer<typeof MemoSchema>;
