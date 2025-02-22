const chatBox = document.getElementById("chat-box");
const input = document.getElementById("message-input");
const emergencyScreen = document.getElementById("emergency-screen");

// Function to send a message
function sendMessage() {
    const message = input.value.trim();
    if (message) {
        const msgElement = document.createElement("p");
        msgElement.textContent = message;
        chatBox.appendChild(msgElement);
        
        // Auto-delete after 5 minutes
        setTimeout(() => {
            msgElement.remove();
        }, 300000);

        input.value = "";
    }
}

// Emergency Mode (Fake School App Loading)
function emergencyMode() {
    emergencyScreen.classList.remove("hidden"); // Show emergency screen
    document.body.style.overflow = "hidden"; // Disable scrolling
}

// Exit Emergency Mode with "Q"
document.addEventListener("keydown", function(event) {
    if (event.key.toLowerCase() === "q") {
        emergencyScreen.classList.add("hidden"); // Hide emergency screen
        document.body.style.overflow = "auto"; // Re-enable scrolling
    }
});
