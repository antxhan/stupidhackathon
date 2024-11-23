import "./unsubscribe.css";

export default function Unsubscribe() {
  const main = document.querySelector("main");
  const unsubscribe = document.createElement("div");
  const buttonContainer = document.createElement("div");

  unsubscribe.id = "unsubscribe";
  buttonContainer.id = "button-container";

  const randomUsername = generateRandomUsername();
  unsubscribe.innerHTML = `
    <h2>Unsubscription form</h2>
    <p>Unsubscribing might feel tedious, but it offers a rare moment to pause and reflect on your choices. This slow, deliberate process allows you to reconsider your subscriptions, reaffirm your priorities, and take control of your digital space. As you input each character, think of it as a step towards a more intentional life. Embrace this mindful moment, and enjoy the small celebration of confetti with each correct entry. Sometimes, a little slowness is just what we need to find balance.</p>
    <form id="unsubscribe-form" onSubmit="return false;">
      <p id="match">Enter: ${randomUsername}</p>
      <input type="text" id="unsubscribeInput" readonly>
    </form>
    <div id="confetti"></div>
  `;

  main.appendChild(unsubscribe);
  main.appendChild(buttonContainer);

  startButtonDropping();
}

function generateRandomUsername() {
  const adjectives = ["Cool", "Fast", "Smart", "Strong", "Funny", "Brave"];
  const nouns = ["Lion", "Tiger", "Bear", "Eagle", "Shark", "Wolf"];
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomNumber = Math.floor(Math.random() * 1000);
  return `${randomAdjective}${randomNoun}${randomNumber}`;
}

function typeCharacter(character) {
  const inputField = document.getElementById("unsubscribeInput");
  const matchValue = document.getElementById("match").textContent;

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
    const characters = [
      ..."abcdefghijklmnopqrstuvwxyz",
      ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      ..."0123456789",
    ];
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
  for (let i = 0; i < 50; i++) {
    createButton();
  }
}
