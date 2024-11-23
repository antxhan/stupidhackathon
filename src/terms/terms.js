import "./terms.css";

let charIndex = 0;
const message = "Hello";

function handleAccept() {}

function resetTextarea(e) {
  const acceptButton = document.querySelector(".terms-window button");
  acceptButton.disabled = true;
  charIndex = 0;
  e.target.value = "";
}

function handleInput(e) {
  const acceptButton = document.querySelector(".terms-window button");
  const inputChar = e.target.value.charAt(charIndex);
  const currentMessageChar = message.charAt(charIndex);
  if (e.target.value === "") {
    resetTextarea(e);
    return;
  }
  if (e.target.value.length - 1 < charIndex) {
    resetTextarea(e);
    return;
  }
  if (inputChar !== currentMessageChar) {
    resetTextarea(e);
    return;
  }
  charIndex++;
  if (charIndex === message.length) {
    acceptButton.disabled = false;
  }
}

export default function Terms() {
  const MAIN = document.querySelector("main");
  const TERMS = document.createElement("div");
  TERMS.classList.add("terms");

  const termsWindow = document.createElement("div");
  termsWindow.classList.add("terms-window");

  const title = document.createElement("h1");
  title.innerText = "Terms of Service";
  termsWindow.appendChild(title);

  const termsContent = document.createElement("div");
  termsContent.classList.add("terms-content");

  const typingTextarea = document.createElement("textarea");
  typingTextarea.classList.add("terms-content-typing");
  typingTextarea.addEventListener("input", handleInput);
  typingTextarea.autofocus = true;

  const messageTextarea = document.createElement("textarea");
  messageTextarea.classList.add("terms-content-message");
  messageTextarea.innerText = message;

  const termsButton = document.createElement("button");
  termsButton.innerText = "Agree";
  termsButton.disabled = true;
  termsButton.addEventListener("click", handleAccept);

  termsContent.appendChild(typingTextarea);
  termsContent.appendChild(messageTextarea);
  termsWindow.appendChild(termsContent);
  termsWindow.appendChild(termsButton);
  TERMS.appendChild(termsWindow);
  MAIN.appendChild(TERMS);
}
