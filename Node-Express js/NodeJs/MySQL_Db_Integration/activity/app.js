const express = require("express");
require("dotenv").config();

const app = express();
const route = require("./routes/route");

app.use(express.json());
app.use("/api/employees", route);

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
