"use client";
import { List, Task } from "@prisma/client";
import { useEffect, useState } from "react";
interface ListWithTasks extends List {
  tasks: Task[];
}

export default function Kanboard({
  listsWithTasks,
}: {
  listsWithTasks: ListWithTasks[];
}) {
  const [lists, setLists] = useState<ListWithTasks[]>(listsWithTasks);

  function handleDragStart(event: React.DragEvent<HTMLLIElement>, task: Task) {
    event.dataTransfer.setData("task", JSON.stringify(task));
  }

  function handleDragEnd(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = "move";
  }

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    const task = JSON.parse(event.dataTransfer.getData("task")) as Task;
    const sourceList = lists.find((list) => list.id === task.listId);
    const targetList = lists.find((list) => list.id === event.currentTarget.id);
    if (sourceList && targetList && sourceList.id !== targetList.id) {
      const updatedLists = lists.map((list) => {
        if (list.id === sourceList.id) {
          return {
            ...list,
            tasks: list.tasks.filter((t) => t.id !== task.id),
          };
        } else if (list.id === targetList.id) {
          task.listId = targetList.id;
          return {
            ...list,
            tasks: [...list.tasks, task],
          };
        }
        return list;
      });
      setLists(updatedLists);
    }
  }

  return (
    <div className="flex flex-wrap w-full gap-4 justify-center items-center">
      {lists &&
        lists.map((list) => (
          <div
            key={list.id}
            className="bg-secondary text-primary w-80 p-4 rounded-md min-h-80"
            onDrop={(event) => handleDrop(event)}
            onDragOver={(event) => handleDragEnd(event)}
            id={list.id}
          >
            <h3 className="">{list.title}</h3>
            <ul className="flex flex-col gap-2">
              {list.tasks.map((task) => (
                <li
                  key={task.id}
                  className="p-2 text-secondary bg-primary rounded-md my-4"
                  draggable
                  onDragStart={(e) => handleDragStart(e, task)}
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
