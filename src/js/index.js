const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(express.static("public"));
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.render("index");
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
