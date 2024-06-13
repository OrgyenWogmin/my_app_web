import { HOME_ROUTE } from "./routeName";
import Home from "../../pages/Home";
/**
 * Route config options
 * @typedef {Object} RouteConfig
 * @property {string} path
 * @property {lazy} component
 * @property {boolean} exact
 * @property {boolean} authRoute
 * @property {boolean} publicRoute
 * @property {string} layout
 *
 */

/**
 * @type {RouteConfig[]}
 */
const routes = [
  {
    path: HOME_ROUTE,
    component: Home,
    publicRoute: true,
  },
];

export default routes;
