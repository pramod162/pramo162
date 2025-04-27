const subtitles = [
    "Data Science & Analytics Student",
    "DevOps Enthusiast",
    "Full Stack Developer", // Added based on your experience
    "Problem Solver" // Added based on LeetCode achievements
];
let currentSubtitleIndex = 0;
let currentCharacterIndex = 0;
let isDeleting = false;
const dynamicSubtitleElement = document.getElementById('dynamic-subtitle');
const typingSpeed = 100; // Milliseconds per character
const deletingSpeed = 50;
const delayBetweenSubtitles = 1500; // Milliseconds pause

function type() {
    const currentSubtitle = subtitles[currentSubtitleIndex];

    // Ensure element exists before trying to modify it
    if (!dynamicSubtitleElement) return;

    if (isDeleting) {
        // Remove character
        dynamicSubtitleElement.textContent = currentSubtitle.substring(0, currentCharacterIndex - 1);
        currentCharacterIndex--;
    } else {
        // Add character
        dynamicSubtitleElement.textContent = currentSubtitle.substring(0, currentCharacterIndex + 1);
        currentCharacterIndex++;
    }

    // Determine next action
    if (!isDeleting && currentCharacterIndex === currentSubtitle.length) {
        // Pause at end of subtitle
        setTimeout(() => { isDeleting = true; }, delayBetweenSubtitles);
    } else if (isDeleting && currentCharacterIndex === 0) {
        // Move to next subtitle
        isDeleting = false;
        currentSubtitleIndex = (currentSubtitleIndex + 1) % subtitles.length; // Loop back to start
    }

    // Set timeout for next character type/delete
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(type, speed);
}

// Start the typing effect when the page loads
document.addEventListener('DOMContentLoaded', () => {
    if (dynamicSubtitleElement) {
        // Check if element exists before starting timeout
        setTimeout(type, typingSpeed); // Initial delay before starting
    }
});