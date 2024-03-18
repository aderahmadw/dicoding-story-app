import Welcome from "../pages/welcome.js";
import Dashboard from "../pages/dashboard.js";
import Explore from "../pages/explore.js";
import About from "../pages/about.js";

const routes = {
  "/": Welcome,
  "/dashboard": Dashboard,
  "/about": About,
  "/explore": Explore,
};

const detectRoute = () => routes[window.location.pathname];

export { routes, detectRoute };
