import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./components/appContainer";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./css/app.css";
import "./css/custom.css";
import "./css/animation.css";
import { ConfigProvider } from "antd";
import { Home, Items, Users, Reports } from "./screens";

function App() {
  return (
    <Router>
      <ConfigProvider direction="rtl">
        <AppContainer>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/items">
              <Items />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/reports">
              <Reports />
            </Route>
          </Switch>
        </AppContainer>
      </ConfigProvider>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
