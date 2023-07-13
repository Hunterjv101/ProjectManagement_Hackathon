const mongodb = require("mongodb");
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "bookdb";
const collectionName = "books";
let collection;

async function startup() {
  let client = new MongoClient(url);
  await client.connect();
  var db = client.db(dbName);
  collection = db.collection(collectionName);
}
startup();

module.exports.findAllBooks = function (callback) {
  let dataPromise = collection.find({}).toArray();
  dataPromise.then((books) => callback(books));
};

module.exports.findBook = function (isbn, callback) {
  let dataPromise = collection.findOne({ isbn: isbn });
  dataPromise.then((books) => callback(books));
};

module.exports.deleteBook = function (isbn, callback) {
  let dataPromise = collection.deleteOne({ isbn: isbn });
  dataPromise.then((ok) => callback(ok));
};

module.exports.updateBook = function (isbn, book, callback) {
  delete book._id;
  let dataPromise = collection.updateOne(
    { isbn: isbn },
    { $set: book },
    { upsert: true },
    callback
  );
  dataPromise.then((ok) => callback(ok));
};

module.exports.addBook = function (book, callback) {
  delete book._id;
  let dataPromise = collection.insertOne(book);
  dataPromise.then((ok) => callback(ok));
};
