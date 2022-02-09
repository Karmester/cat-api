const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

let cats = [
	{
		id: 1,
		name: "Lukrécia",
		color: "black",
	},
	{
		id: 2,
		name: "Szerénke",
		color: "white",
	},
	{
		id: 3,
		name: "Tom",
		color: "gray",
	},
];

app.get("/api/cats", (req, res) => {
	res.json(cats);
});

app.post("/api/cats", (req, res) => {
	const newCat = {
		id: Math.random(),
		name: req.body.name,
		color: req.body.color,
	};
	cats.push(newCat);
	res.sendStatus(204);
});

app.delete("/api/cats/:catId", (req, res) => {
	const newCatsList = cats.filter((cat) => Number(req.params.catId) !== cat.id);
	cats = newCatsList;
	res.sendStatus(204);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
