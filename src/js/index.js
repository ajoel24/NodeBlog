const express = require("express");
const path = require("path");
const app = express();

const pathToViews = path.join(__dirname, "public", "views");

app.set("view engine", "ejs");
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.render(pathToViews + "index.ejs");
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
