import { createList, getLists } from "@/prisma/lists";
import { NextResponse } from "next/server";

export const GET = async () => {
  const lists = await getLists();
  return NextResponse.json(lists, { status: 200 });
};

export const POST = async ({ body }: { body: { title: string } }) => {
  const list = await createList(body);
  return NextResponse.json(list, { status: 201 });
};
