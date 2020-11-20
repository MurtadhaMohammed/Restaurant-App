import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import AppContainer from "./components/appContainer";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./css/app.css";
import "./css/custom.css";
import "./css/animation.css";
import { ConfigProvider } from "antd";
import { Home, Items, Users, Reports, Login } from "./screens";
//import { createUser, getUsers } from "./db/controllers";
import { MainStore } from "./store";

function App() {
  const { isLogin } = MainStore();
  useEffect(() => {
    // const user = {
    //   name: "مرتضى علي",
    //   username: "murtadha@66",
    //   password: "1234",
    //   type: 2,
    // };

    // createUser(user, (resp) => {
    //   if (resp.status) {
    //     alert("create succefully");
    //     console.log(resp.user);
    //   } else {
    //     alert("error");
    //   }
    // });

    // getUsers((resp) => {
    //   if (resp.status) {
    //     console.log(resp.users);
    //   } else {
    //     alert("error");
    //   }
    // });
  }, []);
  return (
    <ConfigProvider direction="rtl">
      {!isLogin ? (
        <Login />
      ) : (
        <Router>
          <AppContainer>
            <Switch pla>
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
        </Router>
      )}
    </ConfigProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
