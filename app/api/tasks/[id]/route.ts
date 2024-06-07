import { NextResponse } from "next/server";
import {
  deleteTask,
  getTask,
  updateTaskTitle,
  updateTaskDescription,
  updateTaskListId,
  updateTaskStatus,
} from "@/prisma/tasks";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
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

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
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
