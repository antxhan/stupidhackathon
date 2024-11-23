import "./global.css";
import Terms from "./terms/terms";
import Unsubscribe from "./unsubscribe/unsubscribe";

const MAIN = document.querySelector("main");

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
    }
  });
});

// MAIN.innerHTML = Projects();
