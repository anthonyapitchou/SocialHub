import routes from "./routes.js";

export function initRouter() {
  function handleRoute() {
    const hash = window.location.hash.slice(1) || "/register";
    const path = hash.split("?")[0]; // ← ignore les paramètres

    const page = routes[path];

    if (page) {
      page();
    } else {
      document.getElementById("app").innerHTML = `
        <h1>404 - Page not found</h1>
      `;
    }
  }

  window.addEventListener("hashchange", handleRoute);
  handleRoute();
}
