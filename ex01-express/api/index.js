import "dotenv/config";
import express from "express";

console.log("ola, turma!!!")

console.log(process.env.MY_SECRET);

const app = express();

app.get("/", (req, res) => {
  res.send("Bem-vindo ao Express de Elcio josé!");
});

app.listen(3000, () =>
  console.log(''),
);