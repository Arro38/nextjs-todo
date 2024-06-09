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

export const updateTaskTitle = async (id: string, title: string) => {
  const updatedTask = await prisma.task.update({
    where: { id },
    data: { title },
  });
  return updatedTask;
};

export const updateTaskDescription = async (
  id: string,
  description: string
) => {
  const updatedTask = await prisma.task.update({
    where: { id },
    data: { description },
  });
  return updatedTask;
};

export const updateTaskListId = async (id: string, listId: string) => {
  const updatedTask = await prisma.task.update({
    where: { id },
    data: { listId },
  });
  return updatedTask;
};

export const updateTaskStatus = async (id: string, isCompleted: boolean) => {
  const updatedTask = await prisma.task.update({
    where: { id },
    data: { isCompleted },
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
