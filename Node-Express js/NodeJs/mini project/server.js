const http = require("http");
const fs = require("fs");
const path = require("path");
const router = require("./router");
const logger = require("./logger");

const PORT = 3000;

const server = http.createServer((req, res) => {
    logger(req);

   
    if (req.url === "/" && req.method === "GET") {
        fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    } else {
        router(req, res);
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
