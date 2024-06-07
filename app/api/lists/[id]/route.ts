import { deleteList, getList, updateList } from "@/prisma/lists";
import { NextResponse } from "next/server";

export const GET = async ({ params }: { params: { id: string } }) => {
  try {
    const list = await getList(params.id);
    return NextResponse.json(list, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};

export const DELETE = async ({ params }: { params: { id: string } }) => {
  try {
    const list = await deleteList(params.id);
    return NextResponse.json(list, { status: 200 });
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
    const body: { title: string } = await request.json();
    if (!body.title) {
      return NextResponse.json({ error: "Bad request" }, { status: 400 });
    }
    const list = await updateList(params.id, body);
    return NextResponse.json(list, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
