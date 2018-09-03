import React from "react";
import { createBrowserHistory } from "history";
import { render } from 'react-dom';
import { Router, Route, Switch } from "react-router-dom";
import "assets/css/material-dashboard-react.css?v=1.4.1";
import indexRoutes from "routes/index.jsx";

// setup fake backend


const hist = createBrowserHistory();

render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
      {/* <privateRouter exact path="/" component={HomePage} /> */}
    </Switch>
  </Router>,
  
  document.getElementById("root")
);
