import { List, Task } from "@prisma/client";
// interface List + Tasks[] included
interface ListWithTasks extends List {
  tasks: Task[];
}

export default function Kanboard({ lists }: { lists: ListWithTasks[] }) {
  return (
    <div className="flex flex-wrap w-full gap-4 justify-center items-center">
      {lists.map((list) => (
        <div
          key={list.id}
          className="bg-secondary text-primary w-80 p-4 rounded-md min-h-80"
        >
          <h3 className="">{list.title}</h3>
          <ul>
            {list.tasks.map((task) => (
              <li
                key={task.id}
                className="p-2 text-secondary bg-primary rounded-md my-4"
              >
                {task.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
