import { deleteList, getList, updateList } from "@/prisma/lists";
import { NextResponse } from "next/server";

export const GET = async ({ params }: { params: { id: string } }) => {
  const list = await getList(params.id);
  return NextResponse.json(list, { status: 200 });
};

export const DELETE = async ({ params }: { params: { id: string } }) => {
  const list = await deleteList(params.id);
  return NextResponse.json(list, { status: 200 });
};

export const PUT = async ({
  params,
  body,
}: {
  params: { id: string };
  body: { title: string };
}) => {
  const list = await updateList(params.id, body);
  return NextResponse.json(list, { status: 200 });
};
