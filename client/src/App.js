import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import PropertyScreen from "./screens/PropertyScreen";
import VehicleScreen from "./screens/VehicleScreen";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/properties" component={PropertyScreen} />
          <Route exact path="/vehicles" component={VehicleScreen} />
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </Router>
    );
  }
}

export default App;