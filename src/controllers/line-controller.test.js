const { writeFile } = require("fs");
const { promisify } = require("util");
const writeFileAsync = promisify(writeFile);

const request = require("supertest");
const app = require ("../app");
const faker = require("faker");

const userName = faker.name.findName();
const userEmail = faker.internet.email();
const userId = faker.random.uuid();

describe("Tests: createUser", () => {
    it("Create valid user", async () => {
        const body = {
            "id": userId,
            "name": userName,
            "email": userEmail,
            "gender": "F"
        }
        const response = await request(app).post("/createUser").send(body);
        expect(response.statusCode).toBe(201);
    });
    it("Create existing user", async () => {
        const body = {
            "id": userId,
            "name": userName,
            "email": userEmail,
            "gender": "F"
        }
        const response = await request(app).post("/createUser").send(body);
        expect(response.statusCode).toBe(400);
        expect(response.text).toContain("User already exists");
    });
    it("Create user with invalid email", async () => {
        const body = {
            "id": userId,
            "name": userName,
            "email": "ana@d&d",
            "gender": "F"
        }
        const response = await request(app).post("/createUser").send(body);
        expect(response.statusCode).toBe(400);
        expect(response.text).toContain("Invalid Email");
    });
});

describe ("Tests: addToLine", () =>{
    it("Add valid user", async () => {
        const body = {
            "id": userId,
        }
        const response = await request(app).post("/addToLine").send(body);
        expect(response.statusCode).toBe(201);
    });
    it("Add existing user", async () => {
        const body = {
            "id": userId,
        }
        const response = await request(app).post("/addToLine").send(body);
        expect(response.statusCode).toBe(500);
        expect(response.text).toContain("User already exists");
    });
    it("Add not existing user", async () => {
        const body = {
            "id": "d&d",
        }
        const response = await request(app).post("/addToLine").send(body);
        expect(response.statusCode).toBe(400);
        expect(response.text).toContain("User not found");
    });
});

describe ("Tests: findPosition", () =>{
    it("Search valid user", async () => {
        const body = {
            "email": userEmail,
        }
        const response = await request(app).post("/findPosition").send(body);
        expect(response.statusCode).toBe(201);
    });
    it("Search not existing user", async () => {
        const body = {
            "email": "ana@ddd.com",
        }
        const response = await request(app).post("/findPosition").send(body);
        expect(response.statusCode).toBe(400);
        expect(response.text).toContain("Email not found");
    });
    it("Search user with invalid email", async () => {
        const body = {
            "email": "ana@d&d",
        }
        const response = await request(app).post("/findPosition").send(body);
        expect(response.statusCode).toBe(400);
        expect(response.text).toContain("Invalid Email");
    });
});

describe ("Tests: filterLine", () =>{
    it("Search users by gender", async () => {
        const body = {
            "gender": "F",
        }
        const response = await request(app).post("/filterLine").send(body);
        expect(response.statusCode).toBe(201);
    });
    it("Search for unregistered gender", async () => {
        const body = {
            "gender": "d&d",
        }
        const response = await request(app).post("/filterLine").send(body);
        expect(response.statusCode).toBe(400);
        expect(response.text).toContain("Gender not found");
    });
});

describe ("Tests: showLine", () =>{
    it("Returns all line", async () => {
        const response = await request(app).post("/showLine");
        expect(response.statusCode).toBe(201);
    });
    it("Returns empty line", async () => {
        await writeFileAsync("src/data/line.json", "[]");
        const response = await request(app).post("/showLine");
        expect(response.statusCode).toBe(400);
        expect(response.text).toContain("Line is empty");
    });
});

describe ("Tests: popLine", () =>{
    it("Remove first user", async () => {
        const body = {
            "id": userId,
        }
        const xd = await request(app).post("/addToLine").send(body);
        const response = await request(app).post("/popLine");
        expect(response.statusCode).toBe(201);
    });
    it("Remove user in empty line", async () => {
        await writeFileAsync("src/data/line.json", "[]");
        const response = await request(app).post("/popLine");
        expect(response.statusCode).toBe(400);
        expect(response.text).toContain("Line is empty");
    });
});

