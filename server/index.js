var express = require("express");
var dao = require("./mongo-dao");
var app = express();

app.use(express.json()); //Parse JSON body

//server start up
const port = 4000;
console.log(
  "Open a browser to http://localhost:" + port + " to view the application"
);
app.listen(port);

app.get("/books", (req, res) => {
  dao.findAllBooks((books) => {
    if (!books) {
      res.status(404).end();
    } else {
      res.send(books);
    }
  });
});

app.get("/books/:isbn", (req, res) => {
  dao.findBook(req.params.isbn, (book) => {
    if (!book) {
      res.status(404).end();
    } else {
      res.send(book);
    }
  });
});

app.delete("/books/:isbn", (req, res) => {
  dao.deleteBook(req.params.isbn, (ok) => {
    if (!ok) {
      res.status(404).end();
    } else {
      res.end();
    }
  });
});

app.put("/books/:isbn", (req, res) => {
  dao.updateBook(req.params.isbn, req.body, (ok) => {
    if (!ok) {
      res.status(404).end();
    } else {
      res.end();
    }
  });
});

app.post("/books", (req, res) => {
  dao.addBook(req.body, (ok) => {
    if (!ok) {
      res.status(500).end();
    } else {
      res.end();
    }
  });
});
