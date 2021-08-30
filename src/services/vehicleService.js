const { vehicle } = require("../database/models");

module.exports = {
    findOne: async (id) => {
        return await vehicle.findByPk(id, {
            include: ["properties"]
        });
    },
    findAll: async () => {
        return await vehicle.findAll({
            include: ["properties"]
        });
    },
    create: async (payload) => {
        return await vehicle.create({
            ...payload
        });
    },
    update: async (id, payload) => {
        return await vehicle.update(
            {...payload},
            { where: { id: id } }
        );
    },
    delete: async (id) => {
        return await vehicle.destroy({
            where: {id: id}
        });
    },
};