import Welcome from "../pages/welcome";
import Dashboard from "../pages/dashboard";

const routes = {
  "/": Welcome,
  "/dashboard": Dashboard,
};

const detectRoute = () => routes[window.location.pathname];

export { routes, detectRoute };
