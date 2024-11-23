import "./global.css";
import Terms from "./terms/terms";
import Unsubscribe from "./unsubscribe/unsubscribe";
import Flash from "./flashbang/flash";

const landingMessage = `
  <p>
    Stupid Components is a collection of stupid components that you can use
    to build your own stupid websites.
  </p>`;
const MAIN = document.querySelector("main");
const LOGO = document.querySelector("header .logo");
LOGO.addEventListener("click", () => {
  MAIN.innerHTML = landingMessage;
});

const image = document.createElement("image");

document.body.appendChild(image);

document.querySelectorAll("nav ul li button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".navlink").forEach((link) => {
      link.classList.remove("active");
    });
    if (!button.classList.contains("active")) {
      button.parentNode.classList.add("active");
      if (button.value === "terms") {
        MAIN.innerHTML = "";
        Terms();
      }
      if (button.value === "unsubscribe") {
        MAIN.innerHTML = "";
        Unsubscribe();
      }
      if (button.value === "flash") {
        MAIN.innerHTML = "";
        Flash();
      }
    }
  });
});

MAIN.innerHTML = landingMessage;
