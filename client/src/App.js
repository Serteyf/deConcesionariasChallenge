import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AddProperty from "./components/Properties/AddProperty"
import EditProperty from "./components/Properties/EditProperty"
import ShowProperties from "./components/Properties/ShowProperties"

import AddVehicle from "./components/Vehicles/AddVehicle"
import EditVehicle from "./components/Vehicles/EditVehicle"
import ShowVehicles from "./components/Vehicles/ShowVehicles"

import Header from "./components/Header"
import HomeScreen from "./components/HomeScreen";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/properties" component={ShowProperties} />
          <Route exact path="/properties/add" component={AddProperty} />
          <Route exact path="/properties/edit" component={EditProperty} />

          <Route exact path="/vehicles" component={ShowVehicles} />
          <Route exact path="/vehicles/add" component={AddVehicle} />
          <Route exact path="/vehicles/edit" component={EditVehicle} />

          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </Router>
    );
  }
}

export default App;