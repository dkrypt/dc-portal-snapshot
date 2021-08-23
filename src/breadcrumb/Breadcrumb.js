import React from "react";
import { Breadcrumb } from "react-bootstrap";
// import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";
import { Route } from "react-router-dom";
 
export default function SimpleBreadcrumbs() {
  return (
    <Route>
      {({ location }) => {
        const pathnames = location.pathname.split("/").filter((x) => x);
        return (
          <Breadcrumb aria-label="Breadcrumb" style={{ color: "grey" }}>
            {/* <RouterLink color="inherit" to="/">
              Home
            </RouterLink> */}
            {pathnames.map((value, index) => {
                console.log("pathnames.length: ",pathnames.length)
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                console.log("Last: ",last)
              return last ? (
                <span style={{textDecoration: "none" }}>
                    {value}
                  </span>                
              ) : (
                <RouterLink color="inherit" to={to} key={index}>
                  <span style={{ color: "grey", textDecoration: "none" }}>
                    {value}
                  </span>
                </RouterLink>
              );
            })}
          </Breadcrumb>
        );
      }}
    </Route>
  );
}