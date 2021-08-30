import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css'

import AddProperty from "./components/Properties/AddProperty"
import ShowProperties from "./components/Properties/ShowProperties"

import AddVehicle from "./components/Vehicles/AddVehicle"
import ShowVehicles from "./components/Vehicles/ShowVehicles"
import Dashboard from "./components/Dashboard/Dashboard"

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

          <Route exact path="/vehicles" component={ShowVehicles} />
          <Route exact path="/vehicles/add" component={AddVehicle} />
          <Route path="/vehicles/:id/dashboard" component={Dashboard}/>
          
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </Router>
    );
  }
}

export default App;