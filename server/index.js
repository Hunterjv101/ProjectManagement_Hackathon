const express = require("express");
const dao = require("./mongo-dao");
const app = express();

app.use(express.json());

const port = 4000;
console.log(
  "Open a browser to http://localhost:" + port + " to view the application"
);
app.listen(port);

app.get("/projects", (req, res) => {
  dao.getAllProjects(function (data) {
    res.send(data);
  });
});

app.get("/tasks", (req, res) => {
  dao.getAllTasks(function (data) {
    res.send(data);
  });
});
