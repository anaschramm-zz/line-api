const { readFile, writeFile } = require("fs");
const { promisify } = require("util");
const { v4: uuidv4 } = require('uuid');

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

const filePathUsers = "src/data/users.json";
const filePathLine = "src/data/line.json";

const linePosition = [];

exports.createUser = async (req, res) => {
    try {
        const users = JSON.parse(await readFileAsync(filePathUsers, "utf8"));
        const data = {
            "id": uuidv4(),
            "name": req.body.name,
            "email": req.body.email,
            "gender": req.body.gender
        }
        users.push(data);
        await writeFileAsync(filePathUsers, JSON.stringify(users));
        res.status(201).send(data);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

exports.addToLine = async (req, res) => {
    try {
        const users = JSON.parse(await readFileAsync(filePathUsers, "utf8"));
        const line = JSON.parse(await readFileAsync(filePathLine, "utf8"));
        for (const data of users) {
            line.push(data);
        }
        const searchLine = line.find(user => user.id == req.body.id);
        if (searchLine) {
            linePosition.push(searchLine);
            await writeFileAsync(filePathLine, JSON.stringify(linePosition));
            res.status(201).send((linePosition.findIndex(user => user.id == req.body.id) + 1).toString());
        } else {
            res.status(400).send({ message: "ID not found" });
        }
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

exports.findPosition = async (req, res) => {
    try {
        const lineUsers = [];
        const users = JSON.parse(await readFileAsync(filePathLine, "utf8"));
        for (const data of users) {
            lineUsers.push(data);
        }
        const searchLine = line.findIndex(user => user.email == req.body.email);
        if (searchLine !== -1) {
            res.status(201).send((searchLine + 1).toString());
        } else {
            res.status(400).send({ message: "email not found" });
        }
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

exports.showLine = async (req, res) => {
    try {
        const lineUsers = [];
        const users = JSON.parse(await readFileAsync(filePathLine, "utf8"));
        for (var i = 0; i < users.length; i++) {
            const position = {
                ...users[i],
                "position": i + 1
            }
            lineUsers.push(position);
        }
        res.status(201).send(lineUsers);
    } catch (error) {
        res.status(400).send({ message: "data not found" });
    }
}

exports.filterLine = async (req, res) => {
    try {
        const lineUsers = [];
        const users = JSON.parse(await readFileAsync(filePathLine, "utf8"));
        for (var i = 0; i < users.length; i++) {
            const position = {
                ...users[i],
                "position": i + 1
            }
            lineUsers.push(position);
        }
        const filterGender = lineUsers.filter((user) => {
            return user.gender == req.body.gender;
        })
        res.status(201).send(filterGender);
    } catch (error) {
        res.status(400).send({ message: "data not found" });
    }
}

exports.popLine = async (req, res) => {
    try {
        const users = require("../data/line.json")
        const removedUser = users[0];
        users.shift();
        await writeFileAsync(filePathLine, JSON.stringify(users));

        res.status(201).send(removedUser);
    } catch (error) {
        res.status(400).send({ message: "data not found" });
    }
}