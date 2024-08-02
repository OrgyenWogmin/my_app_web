import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import allRoutes from "./routes";
import Home from "../pages/Home";
import Layout from "../layout";
const RoutesComp = () => {
  const ResolveRoutes = () => {
    return allRoutes.map((route) => {
      return (
        <Route
          path={route.path}
          key={`react-route-${route.path}`}
          exact={route.exact === true}
          element={<Layout>{route.component}</Layout>}
        />
      );
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout>{Home}</Layout>} />
        {ResolveRoutes()}
        <Route path="*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComp;
