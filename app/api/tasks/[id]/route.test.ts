/**
 * @jest-environment node
 */
import { createList } from "@/prisma/lists";

import { GET, DELETE } from "./route";
import { PUT as PUTTITLE } from "./title/route";
import { PUT as PUTDESCRIPTION } from "./description/route";
import { PUT as PUTLISTID } from "./listId/route";
import { PUT as PUTSTATUS } from "./isCompleted/route";
import { createTask } from "@/prisma/tasks";
const request = {} as Request;
describe("/api/tasks/[id]", () => {
  it("GET - returns one task", async () => {
    const list = await createList({ title: "test" });
    const task = await createTask({
      title: "test",
      description: "test",
      listId: list.id,
    });

    const response = await GET(request, { params: { id: task.id } });
    expect(response.status).toBe(200);
  });
  it("DELETE - deletes a task", async () => {
    const list = await createList({ title: "test" });
    const task = await createTask({
      title: "test",
      description: "test",
      listId: list.id,
    });
    const response = await DELETE(request, { params: { id: task.id } });
    expect(response.status).toBe(200);
  });
  it("PUT - updates a task title", async () => {
    const list = await createList({ title: "test" });
    const task = await createTask({
      title: "test",
      description: "test",
      listId: list.id,
    });
    const requestObj = {
      json: async () => ({ title: "test3" }),
    } as Request;
    const response = await PUTTITLE(requestObj, {
      params: { id: task.id },
    });
    expect(response.status).toBe(200);
  });
  it("PUT - updates a task description", async () => {
    const list = await createList({ title: "test" });
    const task = await createTask({
      title: "test",
      description: "test",
      listId: list.id,
    });
    const requestObj = {
      json: async () => ({ description: "test3" }),
    } as Request;
    const response = await PUTDESCRIPTION(requestObj, {
      params: { id: task.id },
    });
    expect(response.status).toBe(200);
  });
  it("PUT - updates a task listId", async () => {
    const list = await createList({ title: "test" });
    const task = await createTask({
      title: "test",
      description: "test",
      listId: list.id,
    });
    const requestObj = {
      json: async () => ({ listId: list.id }),
    } as Request;
    const response = await PUTLISTID(requestObj, {
      params: { id: task.id },
    });
    expect(response.status).toBe(200);
  });
  it("PUT - updates a task status", async () => {
    const list = await createList({ title: "test" });
    const task = await createTask({
      title: "test",
      description: "test",
      listId: list.id,
    });
    const requestObj = {
      json: async () => ({ isCompleted: true }),
    } as Request;
    const response = await PUTSTATUS(requestObj, {
      params: { id: task.id },
    });
    expect(response.status).toBe(200);
  });
});
