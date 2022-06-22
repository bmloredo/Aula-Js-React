const express = require("express");
const api = express();
const cors = require("cors");
const data = require("./times.json");

api.use(express.json());

//Definir origem que pode acessar a API
api.use(
  cors({
    origin: "*",
    method: "GET",
  })
);

/*
api.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
*/

/*const corsOptions = {
    origin: 'http://localhost:3000/',
    optionsSuccessStatus: 200
}
api.use(cors(corsOptions))
*/

api.get("/", (req, res) => {
  res.json(data);
});

api.get("/:id", function (req, res) {
  const { id } = req.params;
  const teams = data.find((tim) => tim.id === id);

  if (!teams) return res.status(204).json;

  res.json(teams);
});

api.listen(8080, () => {
  console.log("Server is running at http://localhost:8080");
});
