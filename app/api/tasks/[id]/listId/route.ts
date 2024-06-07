import { updateTaskListId } from "@/prisma/tasks";

export const PUT = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const { listId } = await request.json();
  const task = await updateTaskListId(params.id, listId);
  return new Response(JSON.stringify(task), { status: 200 });
};
