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
  request,
}: {
  params: { id: string };
  request: Request;
}) => {
  try {
    const body: { title: string; isCompleted: boolean } = await request.json();
    if (!body.title || !body.isCompleted) {
      return NextResponse.json({ error: "Bad request" }, { status: 400 });
    }
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
