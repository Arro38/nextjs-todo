/**
 * @jest-environment node
 */
import { GET, POST } from "./route";
import { createList } from "@/prisma/lists";

describe("/api/tasks", () => {
  it("GET - returns all tasks", async () => {
    const response = await GET();
    expect(response.status).toBe(200);
  });
  it("POST - creates a new task", async () => {
    const list = await createList({ title: "test" });
    const requestObj = {
      json: async () => ({
        title: "test",
        description: "test",
        listId: list.id,
      }),
    } as Request;

    const response = await POST(requestObj);
    expect(response.status).toBe(201);
  });
});
