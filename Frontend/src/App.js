import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

export default () => (
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      {routes.map((route, index) => {
        const { path, exact } = route;
        const Layout = route.layout || React.Fragment;
        return (
          <Route
            key={index}
            path={path}
            exact={exact}
            component={withTracker(props => (
              <Layout>
                <route.component {...props} />
              </Layout>
            ))}
          />
        );
      })}
    </div>
  </Router>
);
