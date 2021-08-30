const { category, property, vehicle, vehicleProperty } = require("./database/models");

const func = async (req, res) => {
    const all = category.findAll()
    console.log(res.json(all))

}

func()