import { createList, getLists } from "@/prisma/lists";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const lists = await getLists();
    return NextResponse.json(lists, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};

export const POST = async (request: Request) => {
  try {
    const body: { title: string } = await request.json();
    const list = await createList(body);
    return NextResponse.json(list, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
};
