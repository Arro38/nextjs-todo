/**
 * @jest-environment node
 */
import { GET, POST } from "./route";

describe("/api/lists", () => {
  it("GET - returns all lists", async () => {
    const response = await GET();
    expect(response.status).toBe(200);
  });
  it("POST - creates a new list", async () => {
    const requestObj = {
      json: async () => ({ title: "test" }),
    } as Request;

    const response = await POST(requestObj);
    expect(response.status).toBe(201);
  });
});
