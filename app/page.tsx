import Kanboard from "@/components/Kanboard";
import { getLists } from "@/prisma/lists";

export default async function Home() {
  const lists = await getLists();
  return (
    <main className="mx-4 flex flex-col gap-6 items-center justify-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Trello like app Beta 1.1
      </h1>
      <p className="text-lg text-gray-600">
        This is a simple Trello like app built with Next.js and Prisma.
      </p>
      <p className="text-lg text-gray-600">
        You can create, update and delete lists and tasks.
      </p>
      <p className="text-lg text-gray-600">
        You can drag and drop tasks between lists.
      </p>
      <p className="text-lg text-gray-600">
        This app is using MongoDB as the database.
      </p>
      <Kanboard lists={lists} />
    </main>
  );
}
