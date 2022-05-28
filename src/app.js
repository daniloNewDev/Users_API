const express = require("express");
const app = express();
const userRouter = require("./users/routes");

//  Forma de ler JSON
//Middlewares:recursos que são executados entre requisições e respostas.
app.use(express.json());

//  A definição de rota aceita a seguinte estrutura:
/*
          app.MÉTODO(PATH, HANDLER)
              "app" é uma instância do express;
              "MÉTODO" é um método de solicitação HTTP;
              "PATH" é um caminho no servidor;
              "HANDLER" é a função executada quando a rota é correspondida.
*/
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

module.exports = app;
