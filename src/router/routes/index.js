import {
  ABOUT_US_ROUTE,
  BENEFITS_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  NEWS_AND_EVENTS_ROUTE,
} from "./routeName";
import Home from "../../pages/Home";
import AboutUs from "../../pages/AboutUs";
import Contact from "../../pages/Contact";
import NewsAndEvents from "../../pages/News&Events/News&Events";
import Benefits from "../../pages/Benefits";
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
  {
    path: ABOUT_US_ROUTE,
    component: AboutUs,
    publicRoute: true,
  },
  {
    path: CONTACT_ROUTE,
    component: Contact,
    publicRoute: true,
  },
  {
    path: NEWS_AND_EVENTS_ROUTE,
    component: NewsAndEvents,
    publicRoute: true,
  },
  {
    path: BENEFITS_ROUTE,
    component: Benefits,
    publicRoute: true,
  },
];

export default routes;
