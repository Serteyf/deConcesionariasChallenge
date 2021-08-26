const { vehicle } = require("../database/models");

module.exports = {
    findOne: async (id) => {
        return await vehicle.findByPk(id);
    },
    findAll: async () => {
        return await vehicle.findAll();
    },
    create: async (attributes) => {
        return await vehicle.create(
            attributes
        );
    },
    destroy: async (id) => {
        return await vehicle.destroy({
            where: {id: id}
        });
    },
    update: async (id, attributes) => {
        return await vehicle.update(
            attributes,
            { where: {id: id} }
        );
    }
};