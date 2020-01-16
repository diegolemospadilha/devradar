const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

const app = express();

mongoose.connect(
  "mongodb+srv://diegolp:NRgvJFBSTRnrJwPK@cluster0-at1kx.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(routes);

app.get("/", (request, response) => {
  response.send("Hello Worldii");
});

app.listen(3333);
