import "./global.css";
import Terms from "./terms/terms";

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
      if (button.value === "") {
        MAIN.innerHTML = "";
        // MAIN.innerHTML = Kevin();
      }
    }
  });
});

Terms();
