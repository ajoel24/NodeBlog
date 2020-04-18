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
const homeText =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum, saepe inventore quo dolores beatae totam sunt, ipsa numquam neque libero voluptates non illum modi. Minus laboriosam ipsum soluta quam.";
const aboutText =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum, saepe inventore quo dolores beatae totam sunt, ipsa numquam neque libero voluptates non illum modi. Minus laboriosam ipsum soluta quam.";
const copyrightYear = new Date().getFullYear();

app.get("/", (req, res) => {
	res.render("index", {
		homeText,
		copyrightYear,
	});
});

app.get("/about", (req, res) => {
	res.render("about", {
		aboutText,
		copyrightYear,
	});
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
