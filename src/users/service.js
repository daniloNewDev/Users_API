const { v4: uuid } = require("uuid")
const UserModel = require("./model")

class Service {
  constructor() {}
  async getAll() {
    try {
      const users = await UserModel.find()
      return users
    } catch (error) {
      console.log("--------------------------------")
      console.log(error.message)
      throw new Error(error.message)
    }
  }
  async getById(idUser) {
    try {
      const user = await UserModel.find({
        _id: idUser,
      })
      return user
    } catch (error) {
      console.log("--------------------------------")
      console.log(error.message)
      throw new Error(error.message)
    }
  }
  async add(user) {
    try {
      const newUser = new UserModel(user)
      await newUser.save()
      return newUser
    } catch (error) {
      console.log("--------------------------------")
      console.log(error.message)
      throw new Error(error.message)
    }
  }
  async edit(idUser, dataUser) {
    const user = await UserModel.findById(idUser)
    if (!user) throw new Error("User not found!")
    user.nome = dataUser.nome
    user.idade = dataUser.idade
    await user.save()
    return user
  }
  async remove(id) {
    try {
      await UserModel.deleteOne({
        _id: id,
      })
    } catch (error) {
      console.log("--------------------------------")
      console.log(error.message)
      throw new Error(error.message)
    }
  }
}

const UserService = new Service()

module.exports = UserService
