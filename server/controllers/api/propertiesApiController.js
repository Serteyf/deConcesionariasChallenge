const propertyService = require("../../services/propertyService")

const propertiesController = {
    // Show all properties
    getAll: async (req, res) => {
        const allProperties = await propertyService.findAll();

        res.json({
            meta: {
                status: 200,
                count: allProperties.length,
                url: "/api/properties/index"
            },
            data: allProperties
        })
    },
    // Get one property
    getOne: async (req, res) => {
        const oneProperty = await propertyService.findOne(req.params.id);

        res.json({
            meta: {
                status: 200,
                url: `/api/properties/index/${req.params.id}`
            },
            data: oneProperty
        })

    },
    // Add a property
    add: async (req, res) => {
        const _body = {
            name: req.body.name,
            categoryId: req.body.categoryId
        }

        const createProperty = await propertyService.create(_body)
        res.json({
            meta: {
                status: 200,
                url: '/api/properties/add'
            },
        data: createProperty
        })
    },
    // Edit a property
    edit: async (req, res) => {
        const _body = {
            name: req.body.name,
            categoryId: req.body.categoryId
        }
        await propertyService.update(req.params.id, _body)
        res.json({
            meta: {
                status: 200,
                url: `/api/properties/edit/${req.params.id}`
            },
            data: `Property number ${req.params.id} updated`
        })

    },
    // Delete a property
    delete: async (req, res) => {
        await propertyService.destroy(req.params.id);

        res.json({
        meta: {
            status: 200,
            url: `/api/properties/delete/${req.params.id}`
        },
        data: `Property with id: ${req.params.id} deleted succesfully`
        })
    },
}

module.exports = propertiesController;