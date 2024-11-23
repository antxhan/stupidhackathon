import "./unsubscribe.css";

export default function Unsubscribe() {
  const main = document.querySelector("main");
  const unsubscribe = document.createElement("div");
  const buttonContainer = document.createElement("div");

  unsubscribe.classList.add("unsubscribe");

  unsubscribe.innerHTML = `
    <h1>Unsubscribe</h1>
    <p id="match">AbC123</p>
    <form onSubmit="return false;">
      <input type="text" id="unsubscribeInput" readonly>
      <p id="errorMessage" style="color: red;"></p>
    </form>
    <div id="confetti"></div>
    `;

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
    // Reset if the input doesn't match the start of the matchValue
    inputField.value = "";
    errorMessage.textContent = "Wrong character! The input has been reset.";
  } else {
    // Clear the error message if the input is correct
    errorMessage.textContent = "";
    if (inputField.value === matchValue) {
      // Show celebration if the input matches the matchValue
      launchConfetti();
    }
  }
}

function deleteCharacter() {
  const inputField = document.getElementById("unsubscribeInput");
  inputField.value = inputField.value.slice(0, -1);
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = ""; // Clear the error message when a character is deleted
}

function launchConfetti() {
  const confettiContainer = document.getElementById("confetti");
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
}

function startButtonDropping() {
  const buttonContainer = document.createElement("div");
  document.body.appendChild(buttonContainer);
  function createButton() {
    const characters = ["a", "b", "c", "A", "B", "C", "1", "2", "3"];
    const character = characters[Math.floor(Math.random() * characters.length)];
    const button = document.createElement("button");
    button.textContent = character;
    button.onclick = () => {
      typeCharacter(character);
      button.remove();
      createButton();
    };
    button.style.left = `${Math.random() * 100}%`;
    button.style.fontSize = `${Math.random() * 1.5 + 0.5}rem`;
    button.style.animationDuration = `${Math.random() * 4 + 10}s`;
    button.onanimationend = () => {
      button.remove();
      createButton();
    };
    buttonContainer.appendChild(button);
  }
  for (let i = 0; i < 10; i++) {
    createButton();
  }
}
