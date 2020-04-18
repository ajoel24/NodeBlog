const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const _ = require("lodash");
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
const contactText =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum, saepe inventore quo dolores beatae totam sunt, ipsa numquam neque libero voluptates non illum modi. Minus laboriosam ipsum soluta quam.";
const copyrightYear = new Date().getFullYear();
const POSTS = [];

app.get("/", (req, res) => {
	res.render("index", {
		pageTitle: "Blog | Home",
		homeText,
		copyrightYear,
		POSTS,
	});
});

app.get("/about", (req, res) => {
	res.render("about", {
		pageTitle: "Blog | About",
		aboutText,
		copyrightYear,
	});
});

app.get("/contact", (req, res) => {
	res.render("contact", {
		pageTitle: "Blog | Contact",
		contactText,
		copyrightYear,
	});
});

app.get("/compose", (req, res) => {
	res.render("compose", {
		pageTitle: "Blog | Compose",
		copyrightYear,
	});
});

app.post("/composeInput", (req, res) => {
	const post = {
		postTitle: req.body.postTitle,
		postBody: req.body.postBody,
	};
	POSTS.push(post);
	res.redirect("/");
});

app.get("/posts/:urlPostTitle", (req, res) => {
	const requestTitle = _.lowerCase(req.params.urlPostTitle);
	POSTS.forEach((post) => {
		const title = _.lowerCase(post.postTitle);
		if (title == requestTitle) {
			res.render("post", {
				pageTitle: `Blog | ${post.postTitle}`,
				postTitle: post.postTitle,
				postBody: post.postBody,
				copyrightYear,
			});
			return;
		}
	});
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
