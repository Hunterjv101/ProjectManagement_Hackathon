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
