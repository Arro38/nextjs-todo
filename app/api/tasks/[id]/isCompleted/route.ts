import { updateTaskStatus } from "@/prisma/tasks";

export const PUT = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const { isCompleted } = await request.json();
  const task = await updateTaskStatus(params.id, isCompleted);
  return new Response(JSON.stringify(task), { status: 200 });
};
