import { updateTaskTitle } from "@/prisma/tasks";

export const PUT = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const { title } = await request.json();
  const task = await updateTaskTitle(params.id, title);
  return new Response(JSON.stringify(task), { status: 200 });
};
