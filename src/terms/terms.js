import "./terms.css";

let charIndex = 0;
const message = "Hello World";

function handleAccept() {}

function handleInput(e) {
  if (e.target.value === "") {
    charIndex = 0;
    e.target.value = "";
    return;
  }
  if (e.target.value.length - 1 < charIndex) {
    charIndex = 0;
    e.target.value = "";
    return;
  }
  const inputChar = e.target.value.charAt(charIndex);
  const currentMessageChar = message.charAt(charIndex);
  console.log(inputChar, currentMessageChar);
  if (inputChar === currentMessageChar) {
    console.log("match");
  } else {
    console.log("no match");
    charIndex = 0;
    e.target.value = "";
    return;
  }
  charIndex++;
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
  TERMS.appendChild(termsWindow);
  MAIN.appendChild(TERMS);
}
