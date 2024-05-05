// script.js

// Get the theme toggle button and body element
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Add event listener to the theme toggle button
themeToggle.addEventListener('click', () => {
    // Toggle the 'dark-theme' class on the body element
    body.classList.toggle('dark-theme');

    // Check if dark theme is enabled
    const isDarkTheme = body.classList.contains('dark-theme');

    // Save the user's theme preference to local storage
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
});

// Check if the user has a theme preference stored in local storage
const userTheme = localStorage.getItem('theme');

// If the user has a theme preference, apply it
if (userTheme === 'dark') {
    body.classList.add('dark-theme');
}


const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const captureButton = document.getElementById('captureButton');

// Get access to the camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(error => {
        console.error('Error accessing the camera:', error);
    });

// Function to capture a photo from the video stream
function capturePhoto() {
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
}

// Event listener for the capture button
captureButton.addEventListener('click', () => {
    capturePhoto();
});

// Function to download the captured photo
function downloadPhoto() {
    const link = document.createElement('a');
    link.download = 'photo.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}
