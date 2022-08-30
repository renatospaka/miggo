import { RequestHandler } from "express";
import { Sequelize } from "sequelize";
import { UserController } from "./controller";

export function getUser(sequelize: Sequelize): RequestHandler {
  const userController = new UserController(sequelize)
  return (req, res) => {
    if (req.params.uuid) {
      userController.getbyId(req.params.uuid)
        .then(user => {
          return res.status(200).send(user)
        })
        .catch(err => {
          console.error(err)
          return res.status(404).send('NOT FOUND')
        })
    } else {
      userController.getAll()
        .then(users => {
          return res.status(200).send(users)
        })
        .catch(err => {
          console.error(err)
          return res.status(500).send('SERVER ERROR')
        })      
    }
  }
}