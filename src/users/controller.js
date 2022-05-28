//  Classe controller.
const { v4: uuid } = require("uuid");
const userList = [
  {
    nome: "Danilo",
    idade: 36,
    id: 01,
  },
  {
    nome: "Moshe",
    idade: 80,
    id: 02,
  },
  {
    nome: "Shlomo",
    idade: 89,
    id: 03,
  },
];

class Controller {
  getAll(req, res) {
    res.json(userList);
  }
  getById(req, res) {
    const idUser = req.params.id;
    const user = userList.filter((u) => {
      return u.id === idUser;
    });
    res.json(user);
  }
  add(req, res) {
    const user = req.body;
    user.id = uuid();
    userList.push(user);
    res.json(user);
  }
}
const UserController = new Controller();
module.exports = UserController;
