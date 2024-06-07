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

export const POST = async ({
  body,
}: {
  body: { title: string; description: string; listId: string };
}) => {
  try {
    const task = await createTask(body);
    return NextResponse.json(task, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
