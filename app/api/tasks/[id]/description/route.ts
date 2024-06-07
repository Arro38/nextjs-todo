import { updateTaskDescription } from "@/prisma/tasks";

export const PUT = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const { description } = await request.json();
  const task = await updateTaskDescription(params.id, description);
  return new Response(JSON.stringify(task), { status: 200 });
};
