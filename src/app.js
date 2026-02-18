const express = require("express");
const characterRoutes = require("./characters/characterRoutes");

const app = express();
app.use(express.json());
app.use("/", characterRoutes);

module.exports = app;

app.listen(3000, () => {
    console.log("Running api on http://localhost:3000");
});