import Scene1 from "./components/Scene1.js";
import Scene2 from "./components/Scene2.js";
import Scene3 from "./components/Scene3.js";
import Home from "./components/Home.js";

const $app = document.querySelector("#App");

const routes = {
  "/": Home,
  "/Scene1": Scene1,
  "/Scene2": Scene2,
  "/Scene3": Scene3
};

$app.innerHTML = routes["/"].template();
Home.typing()

export const changeUrl = (requestedUrl) => {
  history.pushState(null, null, requestedUrl);
  $app.innerHTML = routes[requestedUrl].template();
};

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("home")) {
    changeUrl("/");
    Home.typing()
  } 
  if (e.target.classList.contains("scene1")) {
    changeUrl("/Scene1");
  } 
  if (e.target.classList.contains("scene2")) {
    changeUrl("/Scene2")
  }
  if (e.target.classList.contains("scene3")) {
    changeUrl("/Scene3")
  }
});

window.addEventListener("popstate", () => {
  changeUrl(window.location.pathname);
});