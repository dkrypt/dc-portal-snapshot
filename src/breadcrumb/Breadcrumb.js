import React from "react";
import { Breadcrumb } from "react-bootstrap";
// import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

import "./breadcrumb.css"

export default function SimpleBreadcrumbs(props) {
  console.log("Breadcrumbs Header: ", props.headerText)
  return (
    <Route>
      {({ location }) => {
        const pathnames = location.pathname.split("/").filter((x) => x);
        return (
          <Breadcrumb  aria-label="Breadcrumb" style={{ color: "grey" }}>
            {pathnames.map((value, index) => {
              console.log("pathnames.length: ", pathnames.length);
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;
              console.log("Last: ", last, to);
              return last ? (
                <span key={index} style={{ textDecoration: "none" }}>{"/" + value}</span>
              ) : (
                <Link
                  color="inherit"
                  to={to}
                  key={index}
                  onClick={props.clickEvent.bind(this, {
                    pageName: props.pageName,
                    headerText: props.headerText,
                  })}
                >
                  <span>{value}</span>
                </Link>
              );
            })}
          </Breadcrumb>
        );
      }}
    </Route>
  );
}
