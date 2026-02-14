const fs = require("fs");
const events = require("./events");


function readUsers() {
    return new Promise((resolve, reject) => {
        fs.readFile("users.json", "utf8", (err, data) => {
            if (err) reject(err);
            else resolve(JSON.parse(data));
        });
    });
}

module.exports = async (req, res) => {


    if (req.url === "/health" && req.method === "GET") {
        return res.end(JSON.stringify("Server is  OK"));
    }

    if (req.url === "/login" && req.method === "POST") {
        events.emit("userLogin");
        return res.end(JSON.stringify("User logged in"));
    }

    if (req.url === "/users" && req.method === "GET") {
        try {
            const users = await readUsers();
            events.emit("dataFetched");
            return res.end(JSON.stringify(users));
        } catch {
            res.writeHead(500);
            return res.end("Error reading users");
        }
    }
};
