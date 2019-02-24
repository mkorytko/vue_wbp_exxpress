const history = require('connect-history-api-fallback');
const express = require("express");
const path = (dir) => require("path").resolve(__dirname, dir);
const app = express();

app.use(history());

app.use("/", express.static(path("public")));

app.listen(3051, () => console.log("Server is run on 3051"));