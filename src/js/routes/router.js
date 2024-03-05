import Welcome from "../pages/welcome.js";
import Dashboard from "../pages/dashboard.js";

const routes = {
  "/": Welcome,
  "/dashboard": Dashboard,
};

const detectRoute = () => routes[window.location.pathname];

export { routes, detectRoute };
