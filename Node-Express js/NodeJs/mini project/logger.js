const fs = require("fs");

module.exports = (req) => {
    const log = `${new Date().toISOString()} | ${req.method} | ${req.url}\n`;
    fs.appendFile("requests.log", log, () => {});
};
