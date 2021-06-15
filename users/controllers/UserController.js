const database = require("../database/models");

const controller = {
  indexAll: async (req, res) => {
    const users = await database.User.findAll({
      attributes: ["id", "email", "createdAt", "updatedAt"],
    });
    return res.json(users);
  },
  store: async (req, res) => {
    const { email, password } = req.body;
    const user = await database.User.create({
      email,
      password,
    });
    return res.json({
      email: user.email,
      id: user.id,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  },
};

module.exports = controller;
