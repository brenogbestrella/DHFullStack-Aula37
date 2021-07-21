const database = require('../database/models/index');

const controller = {
    indexAll: async (req, res) => {
        let offset = 0;

        if(req.query.count && req.query.page) {
            offset = req.query.count * req.query.page - req.query.count;
        }

        const users = await database.User.findAll({
            attributes: ['id', 'email', 'createdAt', 'updatedAt'],
            limit: Number(req.query.count),
            offset,
        });
        return res.json(users);
    },
    store: async (req, res) => {        
        const { email, password } = req.body;
        const user = await database.User.create({
            email,
            password
        });
        return res.json({
            email: user.email,
            id: user.id,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        });
    }
}

module.exports = controller;