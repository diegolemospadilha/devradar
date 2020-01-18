const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const http = require("http");
const cors = require("cors");
const { setupWebsocket } = require("./websocket");

const app = express();
const server = http.Server(app);

setupWebsocket(server);

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

server.listen(3333);
