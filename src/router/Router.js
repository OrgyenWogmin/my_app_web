import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import allRoutes from "./routes";
import Home from "../pages/Home";

const RoutesComp = () => {
  const ResolveRoutes = () => {
    return allRoutes.map((route) => {
      return (
        <Route
          path={route.path}
          key={`react-route-${route.path}`}
          exact={route.exact === true}
          Component={route.component}
        />
      );
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        {ResolveRoutes()}
        <Route path="*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComp;
