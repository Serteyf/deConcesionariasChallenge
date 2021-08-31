const express = require('express');
const cors = require("cors");
const path = require("path");
const methodOverride = require("method-override");
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000
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
app.use('/manifest.json', express.static(path.join(__dirname, "client/build/manifest.json")));
if(process.env.NODE_ENV === 'production'){
  console.log('process.env.DATABASE_URL:', process.env.DATABASE_URL)
  console.log(process.env.NODE_ENV);
  // console.log('process.env:', process.env)
  app.use(express.static(path.join(__dirname, "client/build")))
  app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  
})
}
app.get('/', async (req, res) => {
  res.send("hello world")
  console.log('process.env.DATABASE_URL:', process.env.DATABASE_URL)
  console.log(process.env.NODE_ENV);
})




