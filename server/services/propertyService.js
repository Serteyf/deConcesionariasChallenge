const { property } = require("../database/models");

module.exports = {
    findOne: async (id) => {
        return await property.findByPk(id, {
            include:["category"]
        });
    },
    findAll: async () => {
        return await property.findAll({
            include: ["category"]
        });
    },
    create: async (payload) => {
        return await property.create({
            ...payload
        });
    },
    update: async (id, payload) => {
        return await property.update(
            {...payload},
            { where: {id: id} }
        );
    },
    delete: async (id) => {
        return await property.destroy({
            where: {id: id}
        });
    }
};