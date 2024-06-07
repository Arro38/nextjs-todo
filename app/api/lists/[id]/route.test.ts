/**
 * @jest-environment node
 */
import { createList } from "@/prisma/lists";

import { GET, DELETE, PUT } from "./route";
const request = {} as Request;

describe("/api/lists/[id]", () => {
  it("GET - returns one list", async () => {
    const list = await createList({ title: "test" });
    const response = await GET(request, { params: { id: list.id } });
    expect(response.status).toBe(200);
  });
  it("DELETE - deletes a list", async () => {
    const list = await createList({ title: "test" });
    const response = await DELETE(request, { params: { id: list.id } });
    expect(response.status).toBe(200);
  });
  it("PUT - updates a list", async () => {
    const list = await createList({ title: "test" });
    const requestObj = {
      json: async () => ({ title: "test" }),
    } as Request;
    const response = await PUT(requestObj, {
      params: { id: list.id },
    });
    expect(response.status).toBe(200);
  });
});
