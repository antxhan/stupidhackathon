export default function Terms() {
  const MAIN = document.querySelector("main");
  const TERMS = document.createElement("div");
  TERMS.classList.add("terms");
  TERMS.innerHTML = `
    <h1>Terms of Service</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur rhoncus, sem nunc pretium eros, nec tristique augue purus vel magna. Sed euismod, nisl eget consectetur rhoncus, sem nunc pretium eros, nec tristique augue purus vel magna. Sed euismod, nisl eget consectetur rhoncus, sem nunc pretium eros, nec tristique augue purus vel magna. Sed euismod, nisl eget consectetur rhoncus, sem nunc pretium eros, nec tristique augue purus vel magna. Sed euismod, nisl eget consectetur rhoncus, sem nunc pretium eros, nec tristique augue purus vel magna. Sed euismod, nisl eget consectetur rhoncus, sem nunc pretium eros, nec tristique augue purus vel magna.</p>

    `;
  MAIN.appendChild(TERMS);
}
