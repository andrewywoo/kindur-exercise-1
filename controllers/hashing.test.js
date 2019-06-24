const request = require("supertest");
const app = require("../app");

describe("Test GET message before POST", () => {
  test("It should return a 404", async done => {
    const response = await request(app).get("/message/testing");
    expect(response.statusCode).toBe(404);
    done();
  });
});

describe("Test POST Message", () => {
  test("It should save hash of message and return digest with a status code 201", async done => {
    const httpRequest = request(app).post("/message");
    httpRequest.send({ message: "foo" });
    const response = await httpRequest;
    expect(response.statusCode).toBe(201);
    expect(response.body.digest).toBe(
      "2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae"
    );
    done();
  });
});

describe("Test GET message after POST", () => {
  test("It should save message hash and return original message using hash", async done => {
    const expectedHash =
      "2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae";
    const httpRequest = request(app).post("/message");
    httpRequest.send({ message: "foo" });
    const response = await httpRequest;
    expect(response.statusCode).toBe(201);
    expect(response.body.digest).toBe(expectedHash);
    const response2 = await request(app).get("/message/" + expectedHash);
    expect(response2.statusCode).toBe(200);
    expect(response2.body.message).toBe("foo");
    done();
  });
});

describe("Test POST Message without body", () => {
  test("It should send back status code 400", async done => {
    const httpRequest = request(app).post("/message");
    const response = await httpRequest;
    expect(response.statusCode).toBe(400);
    done();
  });
});
