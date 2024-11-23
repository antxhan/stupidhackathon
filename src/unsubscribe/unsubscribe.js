import "./unsubscribe.css";

export default function Unsubscribe() {
  const main = document.querySelector("main");
  const unsubscribe = document.createElement("div");
  const buttonContainer = document.createElement("div");

  unsubscribe.id = "unsubscribe";
  buttonContainer.id = "button-container";

  unsubscribe.innerHTML = `
    <h1>Unsubscribe</h1>
    <p id="match">AbC123</p>
    <form onSubmit="return false;">
      <input type="text" id="unsubscribeInput" readonly>
      <p id="errorMessage" style="color: red;"></p>
    </form>
    <div id="confetti"></div>
  `;

  main.appendChild(testButton);
  main.appendChild(unsubscribe);
  main.appendChild(buttonContainer);

  startButtonDropping();
}

function typeCharacter(character) {
  const inputField = document.getElementById("unsubscribeInput");
  const matchValue = document.getElementById("match").textContent;
  const errorMessage = document.getElementById("errorMessage");

  inputField.value += character;

  if (matchValue.indexOf(inputField.value) !== 0) {
    inputField.value = "";
    inputField.classList.add("input-error");
    setTimeout(() => {
      inputField.classList.remove("input-error");
    }, 1000);
  } else {
    if (inputField.value === matchValue) {
      removeAllButtons();
      launchConfetti();
    }
  }
}

function removeAllButtons() {
  const buttonContainer = document.querySelector("#button-container");
  buttonContainer.innerHTML = "";
}

function launchConfetti() {
  const confettiContainer = document.getElementById("confetti");
  const inputField = document.getElementById("unsubscribeInput");
  if (!confettiContainer) {
    console.error("Confetti container not found!");
    return;
  }
  confettiContainer.innerHTML = "";
  for (let i = 0; i < 100; i++) {
    const confettiPiece = document.createElement("div");
    confettiPiece.classList.add("confetti-piece");
    confettiPiece.style.left = `${Math.random() * 100}%`;
    confettiPiece.style.transform = `rotateY(${Math.random() * 360 * 100}deg)`;
    confettiPiece.style.animationDuration = `${Math.random() * 3 + 2}s`;
    confettiPiece.style.backgroundColor = `hsl(${
      Math.random() * 360
    }, 100%, 50%)`;
    confettiContainer.appendChild(confettiPiece);
  }
  inputField.style.backgroundColor = "green";
}

function startButtonDropping() {
  const buttonContainer = document.querySelector("#button-container");
  console.log(buttonContainer);
  function createButton() {
    const characters = ["a", "b", "c", "A", "B", "C", "1", "2", "3"];
    const character = characters[Math.floor(Math.random() * characters.length)];
    const button = document.createElement("button");
    button.classList.add("character-btn");
    button.textContent = character;
    button.onclick = () => {
      typeCharacter(character);
      button.remove();
      createButton();
    };
    button.style.left = `${Math.random() * 100}%`;
    button.style.fontSize = `${Math.random() * 1.5 + 0.5}rem`;
    button.style.animationDuration = `${Math.random() * 4 + 10}s`;
    button.tabIndex = -1;
    button.onanimationend = () => {
      button.remove();
      createButton();
    };
    buttonContainer.appendChild(button);
  }
  for (let i = 0; i < 20; i++) {
    createButton();
  }
}
