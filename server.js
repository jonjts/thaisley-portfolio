const express = require("express");
require('dotenv').config()
const baseDir = `${__dirname}/build/`;
const app = express(express.static(`${baseDir}`));
const port = process.env.PORT;

app.use(express.static(`${baseDir}`));

app.get("*", (req, res) => res.sendFile("index.html", { root: baseDir }));

app.listen(port ? port : 4000, () =>
  console.log(`Servidor subiu com sucesso em http://localhost:${port}`)
);