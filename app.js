const express = require('express');
const cors = require("cors");
const methodOverride = require("method-override");

const app = express()
const port = process.env.PORT

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride("_method"));
app.use(cors('no-cors'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//Routes
const vehiclesApiRoutes = require("./src/routes/api/vehiclesApiRoutes");
const propertiesApiRoutes = require("./src/routes/api/propertiesApiRoutes");
app.use("/api/vehicles", vehiclesApiRoutes);
app.use("/api/properties", propertiesApiRoutes);

app.get('/', async (req, res) => {
  res.send("Server side")
})
