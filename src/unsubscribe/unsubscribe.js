export default function Unsubscribe() {
  const main = document.querySelector("main");
  const unsubscribe = document.createElement("div");
  const buttonContainer = document.createElement("div");
  const deleteButton = document.createElement("button");

  const characters = ["a", "b", "c", "A", "B", "C", "1", "2", "3"];

  unsubscribe.classList.add("unsubscribe");

  unsubscribe.innerHTML = `
    <h1>Unsubscribe</h1>
    <p id="match">AbC123</p>
    <form onSubmit="return false;">
      <input type="text" id="unsubscribeInput" readonly>
      <p id="errorMessage" style="color: red;"></p>
    </form>
    `;
  deleteButton.textContent = "Delete";

  characters.forEach((character) => {
    const button = document.createElement("button");
    button.textContent = character;
    button.onclick = () => typeCharacter(character);
    buttonContainer.appendChild(button);
  });

  deleteButton.onclick = deleteCharacter;

  main.appendChild(unsubscribe);
  main.appendChild(buttonContainer);
  buttonContainer.appendChild(deleteButton);
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
  }
}

function deleteCharacter() {
  const inputField = document.getElementById("unsubscribeInput");
  inputField.value = inputField.value.slice(0, -1);
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = ""; // Clear the error message when a character is deleted
}
