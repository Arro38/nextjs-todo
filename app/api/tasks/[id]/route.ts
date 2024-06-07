import { NextResponse } from "next/server";
import { deleteTask, getTask, updateTask } from "@/prisma/tasks";

export const GET = async ({ params }: { params: { id: string } }) => {
  try {
    const task = await getTask(params.id);
    return NextResponse.json(task, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};

export const PUT = async ({
  params,
  body,
}: {
  params: { id: string };
  body: { title: string; isCompleted: boolean };
}) => {
  try {
    const task = await updateTask(params.id, body);
    return NextResponse.json(task, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};

export const DELETE = async ({ params }: { params: { id: string } }) => {
  try {
    const task = await deleteTask(params.id);
    return NextResponse.json(task, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
