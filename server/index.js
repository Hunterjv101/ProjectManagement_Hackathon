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

app.get("/project_tasks", (req, res) => {
  dao.getAllTasks(function (data) {
    res.send(data);
  });
});

app.delete("/projects/:ID", (req, res) => {
  dao.deleteProject(req.params.ID, function (data) {
    (ok) => {
      if (!ok) {
        res.status(404).end();
      } else {
        res.end();
      }
    };
  });
});
app.delete("/project_tasks/:ID", (req, res) => {
  dao.deleteTask(req.params.ID, function (data) {
    (ok) => {
      if (!ok) {
        res.status(404, req.params.ID).end();
      } else {
        res.end();
      }
    };
  });
});

app.post("/projects", (req, res) => {
  dao.addProject(req.body, (ok) => {
    if (!ok) {
      res.status(500).end();
    } else {
      res.end();
    }
  });
});

app.post("/project_tasks", (req, res) => {
  dao.addTask(req.body, (ok) => {
    if (!ok) {
      res.status(500).end();
    } else {
      res.end();
    }
  });
});
