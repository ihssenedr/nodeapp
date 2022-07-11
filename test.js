const request = require("supertest");
const app = require("./app");

describe("GET /", () => {
    it("responds with users", (done) => {
        request(app).get("/users").expect(200, done);
    })
});