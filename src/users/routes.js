//    Router é um recurso do Express que permite criar um arquivo de Rotas para exportar dados para a aplicação.
const { Router } = require("express");
const UserController = require("./controller");
const router = new Router();

router.get("/", UserController.getAll);

router.get("/:id", UserController.getById);

router.post("/", UserController.add);

/*router.put("/:id", UserController.edit);

router.delete("/:id", UserController.deleteUser); */

module.exports = router;
