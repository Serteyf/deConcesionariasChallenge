const express = require('express')
const methodOverride = require("method-override");

const app = express()
const port = process.env.PORT
const { Category } = require("./database/models")

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride("_method"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//Routes
const vehiclesApiRoutes = require("./routes/api/vehiclesApiRoutes");
const propertiesApiRoutes = require("./routes/api/propertiesApiRoutes");
app.use("/api/vehicles", vehiclesApiRoutes);
app.use("/api/properties", propertiesApiRoutes);

app.get('/', async (req, res) => {
  const cat = await Category.findAll();
  res.send(cat)
})
