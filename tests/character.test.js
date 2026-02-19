const request = require("supertest");
const app = require("../src/app");

describe("GET /characters", () => {

  test("get characters", async () => {
    const response = await request(app).get("/characters");
    expect(response.status).toBe(200);
  });

  test("get characters with different page", async () => {
    const response = await request(app).get("/characters/5");
    expect(response.status).toBe(200);
  });

  test("get characters with invalid page", async () => {
    const response = await request(app).get("/characters/80");
    expect(response.status).toBe(404);
  });

  test("response contains array", async () => {
    const response = await request(app).get("/characters");
    expect(Array.isArray(response.body.results)).toBe(true);
  });

  test("response contains array with choosed page", async () => {
    const response = await request(app).get("/characters/6");
    expect(Array.isArray(response.body.results)).toBe(true);
  });

  test("only alive character", async () => {
    const response = await request(app).get("/characters");
    expect(response.body.results.length).toBeGreaterThan(0);
    response.body.results.forEach(character => {
      expect(character.status).toBe("Alive");
    });
  });

  test("name without spaces", async () => {
    const response = await request(app).get("/characters");
    response.body.results.forEach(ch => {
      expect(ch.name).not.toContain(" ");
    });
  });

  test("names without spaces with choosen page ", async () => {
    const response = await request(app).get("/characters/3");
    response.body.results.forEach(character => {
      expect(character.name).not.toContain(" ");
    });
  });

});