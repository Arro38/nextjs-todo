import { Task } from "@prisma/client";
import prisma from "./prisma";

export const getTasks = async () => {
  const tasks = await prisma.task.findMany();
  return tasks;
};

export const getTasksFromList = async (listId: string) => {
  const tasks = await prisma.task.findMany({ where: { listId } });
  return tasks;
};

export const getTask = async (id: string) => {
  const task = await prisma.task.findUnique({ where: { id } });
  return task;
};

export const createTask = async ({
  title,
  description,
  listId,
}: {
  title: string;
  description: string;
  listId: string;
}) => {
  const list = await prisma.list.findUnique({ where: { id: listId } });
  if (!list) {
    throw new Error("List not found");
  }
  const newTask = await prisma.task.create({
    data: { title, description, listId, isCompleted: false },
  });
  return newTask;
};

export const deleteTask = async (id: string) => {
  const deletedTask = await prisma.task.delete({ where: { id } });
  return deletedTask;
};

export const updateTask = async (
  id: string,
  { title, isCompleted }: { title: string; isCompleted: boolean }
) => {
  const updatedTask = await prisma.task.update({
    where: { id },
    data: { title, isCompleted },
  });
  return updatedTask;
};

export const updateTaskStatus = async (id: string, status: boolean) => {
  const updatedTask = await prisma.task.update({
    where: { id },
    data: { isCompleted: status },
  });
  return updatedTask;
};

export const deleteTasks = async (ids: string[]) => {
  const deletedTasks = await prisma.task.deleteMany({
    where: { id: { in: ids } },
  });
  return deletedTasks;
};

export const deleteTasksFromList = async (listId: string) => {
  const deletedTasks = await prisma.task.deleteMany({ where: { listId } });
  return deletedTasks;
};
