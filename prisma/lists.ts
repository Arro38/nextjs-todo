import { List } from "@prisma/client";
import prisma from "./prisma";

export const getLists = async () => {
  const lists = await prisma.list.findMany();
  return lists;
};

export const getList = async (id: string) => {
  const list = await prisma.list.findUnique({ where: { id } });
  return list;
};

export const createList = async ({ title }: { title: string }) => {
  const newList = await prisma.list.create({ data: { title } });
  return newList;
};

export const deleteList = async (id: string) => {
  // delete all tasks from the list
  await prisma.task.deleteMany({ where: { listId: id } });
  // delete the list
  const deletedList = await prisma.list.delete({ where: { id } });
  return deletedList;
};

export const updateList = async (id: string, { title }: { title: string }) => {
  const updatedList = await prisma.list.update({
    where: { id },
    data: { title },
  });
  return updatedList;
};

export const updateListTitle = async (id: string, title: string) => {
  const updatedList = await prisma.list.update({
    where: { id },
    data: { title },
  });
  return updatedList;
};
