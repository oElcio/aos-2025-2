import "dotenv/config";
import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from 'uuid';


console.log("ola, turma!!!")

console.log("MY_SECRET", process.env.MY_SECRET);
console.log("PYTHON_ROOT", process.env.PYTHON_ROOT);

const app = express();

app.use(cors());
app.use((req, res, next) => {
  console.log('${req.method} ${req.path} - ${req.ip}');
  next();
});
app.get("/", (req, res) => {
  res.send("Bem-vindo ao Express de Elcio josé!");
});

app.get("/", (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.get("/random", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100000);
  res.send({ randomNumber });
});

app.get("/inspiration", (req, res) => {
  const numberRandom = Math.floor(Math.random() * 14);
    const FrasesMotivacionais = [
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Acredite em você e todo o resto virá naturalmente.",
    "Não espere por oportunidades, crie-as.",
    "Grandes conquistas nascem de grandes sacrifícios.",
    "Você é mais forte do que imagina.",
    "Coragem é a resistência ao medo, domínio do medo, e não a ausência dele.",
    "Tudo o que você sempre quis está do outro lado do medo.",
    "Seja a mudança que você quer ver no mundo.",
    "Nunca é tarde demais para ser aquilo que você poderia ter sido.",
    "Persista. Se fosse fácil, qualquer um faria.",
    "Dê o seu melhor até que o seu melhor seja ainda melhor.",
    "O fracasso é apenas a oportunidade de começar de novo com mais inteligência.",
    "Você nunca sabe que resultados virão da sua ação. Mas se você não fizer nada, não existirão resultados.",
    "A maior glória em viver não está em nunca cair, mas em levantar-se a cada queda.",
    "Não conte os dias, faça os dias contarem."
];
    res.send({ quotes: FrasesMotivacionais[numberRandom] });
});

app.post("/", (req, res) => {
  return res.send('Received a POST HTTP method');
});

app.put("/", (req, res) => {
  return res.send('Received a PUT HTTP method');
});

app.delete("/", (req, res) => {
  return res.send('Received a DELETE HTTP method');
});
app.listen(3000, () =>  
  console.log('Example app listening on port 3000!'),
);