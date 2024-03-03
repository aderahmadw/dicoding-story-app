// Import our custom CSS
import "../sass/main.scss";

// Import javascript file as needed
import Dashboard from "./pages/dashboard";
import * as bootstrap from "bootstrap";

// const routes = {
//   '/': Dashboard
// };

// const detectRoute = () => routes[window.location.pathname];

// Function to update the page title
const updatePageTitle = (title) => {
  document.title = title;
};

const initPages = () => {
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");

  if (header && main && footer) {
    main.style.minHeight = `calc(100vh - ${
      header.clientHeight + footer.clientHeight
    }px)`;
  }
};

window.addEventListener("DOMContentLoaded", async () => {
  initPages();

  // Update page title
  updatePageTitle("Welcome to Story App");

  //   const route = detectRoute();
  //   route.init();
});
