import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import NotFound from "../pages/NotFound";
import allRoutes from "./routes";
import Home from "../pages/Home";
import Layout from "../layout";
import { HOME_ROUTE } from "./routes/routeName";
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
        {/* <Route exact path="/" element={<Layout>{Home}</Layout>} /> */}
        <Route
          exact
          path="/"
          Component={() => {
            return <Navigate to={HOME_ROUTE} replace={true} />;
          }}
        />

        {ResolveRoutes()}
        <Route path="*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComp;
