import { NextResponse } from "next/server";
import { createTask, getTasks } from "@/prisma/tasks";

export const GET = async () => {
  try {
    const tasks = await getTasks();
    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};

export const POST = async (request: Request) => {
  try {
    const body: { title: string; description: string; listId: string } =
      await request.json();
    if (!body.title || !body.description || !body.listId) {
      return NextResponse.json({ error: "Bad request" }, { status: 400 });
    }
    const task = await createTask(body);
    return NextResponse.json(task, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
