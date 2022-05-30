//  Classe controller.

const UserService = require("./service")

class Controller {
  async getAll(req, res) {
    try {
      const users = await UserService.getAll()
      res.json(users)
    } catch (error) {
      res.status(500)
      res.send(error.message)
    }
  }
  async getById(req, res) {
    try {
      const idUser = req.params.id
      const user = await UserService.getById(idUser)
      res.json(user)
    } catch (error) {
      res.status(500)
      res.send(error.message)
    }
  }
  async add(req, res) {
    try {
      const user = await UserService.add(req.body)
      res.json(user)
    } catch (error) {
      res.status(500)
      res.send(error.message)
    }
  }
  async edit(req, res) {
    try {
      const idUser = req.params.id
      const userData = req.body
      const userEdited = await UserService.edit(idUser, userData)
      res.json(userEdited)
    } catch (error) {
      res.status(500)
      res.send(error.message)
    }
  }

  async remove(req, res) {
    try {
      const idUser = req.params.id
      await UserService.remove(idUser)
      res.json({ success: true })
    } catch (error) {
      res.status(500)
      res.send(error.message)
    }
  }
}
const UserController = new Controller()
module.exports = UserController
