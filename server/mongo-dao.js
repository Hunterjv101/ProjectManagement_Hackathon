const mongodb = require("mongodb");
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "project_managementdb";
let collection;
let db;

async function startup() {
  let client = new MongoClient(url);
  await client.connect();
  db = client.db(dbName);
}
startup();

module.exports.getAllProjects = function (callback) {
  let collection = db.collection("projects");
  let dataPromise = collection.find({}).toArray();
  dataPromise.then((projects) => callback(projects));
};

module.exports.getAllTasks = function (callback) {
  let collection = db.collection("project_tasks");
  let dataPromise = collection.find({}).toArray();
  dataPromise.then((tasks) => callback(tasks));
};

module.exports.deleteProject = function (project_id, callback) {
  let collection = db.collection("projects");
  console.log(project_id);
  let dataPromise = collection.deleteOne({ project_id: parseInt(project_id) });
  dataPromise.then((ok) => callback(ok));
};
module.exports.deleteTask = function (task_id, callback) {
  let collection = db.collection("project_tasks");
  console.log(task_id);
  let dataPromise = collection.deleteOne({ task_id: parseInt(task_id) });
  dataPromise.then((ok) => callback(ok));
};

module.exports.addProject = function (newFormData, callback) {
  let collection = db.collection("projects");
  console.log(newFormData); // Check if the data received from the client is correct
  collection.insertOne(newFormData, (err, result) => {
    if (err) {
      console.error("Error inserting document:", err);
      callback(false);
    } else {
      console.log("Successfully inserted document:", result.insertedId);
      callback(true);
    }
  });
};
module.exports.addTask = function (newFormData, callback) {
  let collection = db.collection("project_tasks");
  console.log(newFormData); // Check if the data received from the client is correct
  collection.insertOne(newFormData, (err, result) => {
    if (err) {
      console.error("Error inserting document:", err);
      callback(false);
    } else {
      console.log("Successfully inserted document:", result.insertedId);
      callback(true);
    }
  });
};
