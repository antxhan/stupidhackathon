// Create and export the page elements dynamically
export function createPageElements() {
  // Create and append the button to start taking photos (though it's no longer needed)
  const startButton = document.createElement("button");
  startButton.id = "start-button";
  startButton.textContent = "Start Taking Photos";
  startButton.style.display = "none"; // Hide button as we no longer need it
  document.body.appendChild(startButton);

  // Create the container for the video and photo elements
  const container = document.createElement("div");

  // Create video element
  const video = document.createElement("video");
  video.id = "video";
  video.autoplay = true;
  container.appendChild(video);

  // Create canvas element
  const canvas = document.createElement("canvas");
  canvas.id = "canvas";
  container.appendChild(canvas);

  // Create img element for the captured photo
  const photo = document.createElement("img");
  photo.id = "photo";
  photo.alt = "The screen capture will appear in this box.";
  container.appendChild(photo);

  document.querySelector("main").appendChild(container);
}

// Initialize the webcam feed and setup the random photo capture mechanism
export async function initializeWebcamAndRandomCapture() {
  const video = document.getElementById("video"); // Video element
  const canvas = document.getElementById("canvas"); // Canvas element
  const photo = document.getElementById("photo"); // Photo image element

  // Access the webcam
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream; // Set the video source to webcam stream
    video.play(); // Start the video
  } catch (err) {
    console.error(`An error occurred: ${err}`); // Log any errors
  }

  // Start taking photos at random intervals
  startRandomPhotoCapture(canvas, video, photo);
}

// Function to capture a photo from the video feed
export function takePicture(canvas, video, photo) {
  const context = canvas.getContext("2d"); // Get the 2D rendering context for the canvas
  context.drawImage(video, 0, 0, canvas.width, canvas.height); // Draw the current video frame to the canvas

  const data = canvas.toDataURL("image/png"); // Convert the canvas content to a PNG image
  photo.setAttribute("src", data); // Set the photo element's source to the captured image
  console.log("Photo taken"); // Log that a photo was taken

  // Flash the page white (as if a camera flash occurred)
  flashWhite();
}

// Function to flash the page white
function flashWhite() {
  const flashOverlay = document.createElement("div");
  flashOverlay.style.position = "absolute";
  flashOverlay.style.top = "0";
  flashOverlay.style.left = "0";
  flashOverlay.style.width = "100vw";
  flashOverlay.style.height = "100vh";
  flashOverlay.style.backgroundColor = "white";
  flashOverlay.style.zIndex = "1000"; // Ensure it's on top of all content
  flashOverlay.style.opacity = "0";
  flashOverlay.style.transition = "opacity 0.3s ease-in-out";

  document.body.appendChild(flashOverlay);

  // Trigger the flash by fading in and out
  setTimeout(() => {
    flashOverlay.style.opacity = "1";
  }, 10);

  // Fade out the flash effect after 300ms
  setTimeout(() => {
    flashOverlay.style.opacity = "0";
    setTimeout(() => {
      flashOverlay.remove(); // Remove the flash overlay from the DOM
    }, 300);
  }, 300);
}

// Function to start taking photos at random intervals
export function startRandomPhotoCapture(canvas, video, photo) {
  // Function to capture photo at random intervals
  function captureAtRandomIntervals() {
    // Generate a random interval between 3 and 10 seconds (3000ms - 10000ms)
    const randomInterval =
      Math.floor(Math.random() * (10000 - 3000 + 1)) + 3000;

    // Call the takePicture function after the random interval
    setTimeout(() => {
      takePicture(canvas, video, photo); // Take a photo
      captureAtRandomIntervals(); // Recursively call to take the next photo
    }, randomInterval);
  }

  captureAtRandomIntervals(); // Start capturing photos at random intervals
}

// Run the page setup
export default function Flash() {
  // Create the dynamic page elements
  createPageElements();

  // Initialize webcam and random photo capture
  initializeWebcamAndRandomCapture();
}
