const { property } = require("../database/models");

module.exports = {
    findOne: async (id) => {
        return await property.findByPk(id);
    },
    findAll: async () => {
        return await property.findAll();
    },
    create: async (attributes) => {
        return await property.create(
            attributes
        );
    },
    destroy: async (id) => {
        return await property.destroy({
            where: {id: id}
        });
    },
    update: async (id, attributes) => {
        return await property.update(
            attributes,
            { where: {id: id} }
        );
    }
};