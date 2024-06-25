// js/chatbot.js
document.addEventListener("DOMContentLoaded", function () {
    const chatInput = document.querySelector(".chat-input textarea");
    const sendButton = document.getElementById("send-btn");
    const chatbot = document.querySelector(".chatbot");
    const chatbox = document.querySelector(".chatbox");
    const chatbotToggler = document.querySelector(".chatbot-toggler");
    const closeChatbotButton = document.querySelector(".chatbot header .close-button");
    const refreshChatbotButton = document.querySelector(".chatbot header .refresh-button");
    const imageUploadInput = document.getElementById("imageUpload");
    const imageUploadBtn = document.getElementById("imageUploadBtn");

    let userMessage;
    const API_KEY = "sk-proj-6Y8hgaAK0lVD9PCM7yOZT3BlbkFJ7JKM1v5mHhsnqnO5ddgh";  // Make sure to use your valid API key

    sendButton.addEventListener("click", handleChat);
    chatbotToggler.addEventListener("click", toggleChatbot);
    closeChatbotButton.addEventListener("click", closeChatbot);
    refreshChatbotButton.addEventListener("click", refreshChatbot);
    imageUploadBtn.addEventListener("click", () => imageUploadInput.click());
    imageUploadInput.addEventListener("change", handleImageUpload);

    function handleChat() {
        userMessage = chatInput.value.trim();
        if (!userMessage && !imageUploadInput.files.length) return;

        if (imageUploadInput.files.length) {
            const file = imageUploadInput.files[0];
            const reader = new FileReader();
            reader.onload = function (e) {
                const base64Image = e.target.result;
                displayMessage(base64Image, "outgoing", true);
                chatInput.value = "";
                imageUploadInput.value = "";
                imageUploadBtn.style.display = "block"; // Show the image upload button again
                generateResponse(base64Image, null, true);
            };
            reader.readAsDataURL(file);
        } else {
            displayMessage(userMessage, "outgoing");
            chatInput.value = "";
            setTimeout(() => {
                const generatingLi = createChatLi("Generating...", "incoming");
                chatbox.appendChild(generatingLi);
                generateResponse(userMessage.toLowerCase(), generatingLi);
            }, 600);
        }
    }

    function handleImageUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (e) {
            const existingPreview = document.querySelector(".chat-input img.preview");
            if (existingPreview) existingPreview.remove();

            const existingRemoveBtn = document.querySelector(".chat-input .remove");
            if (existingRemoveBtn) existingRemoveBtn.remove();

            const previewImage = document.createElement("img");
            previewImage.src = e.target.result;
            previewImage.classList.add("preview");

            const removeBtn = document.createElement("span");
            removeBtn.classList.add("remove");
            removeBtn.innerHTML = "&times;";
            removeBtn.addEventListener("click", () => {
                imageUploadInput.value = "";
                previewImage.remove();
                removeBtn.remove();
                imageUploadBtn.style.display = "block"; // Show the image upload button again
            });

            document.querySelector(".chat-input").insertBefore(previewImage, chatInput);
            document.querySelector(".chat-input").insertBefore(removeBtn, chatInput);
            imageUploadBtn.style.display = "none"; // Hide the image upload button
        };
        reader.readAsDataURL(file);
    }

    function displayMessage(message, type, isImage = false) {
        const li = createChatLi(message, type, isImage);
        chatbox.appendChild(li);
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    function generateResponse(message, generatingLi, isImage = false) {
        if (isImage) {
            setTimeout(() => {
                if (generatingLi) generatingLi.textContent = "";
                const response = "Image received! How can I assist you with it?";
                displayMessage(response, "incoming");
            }, 1200);
        } else if (message === "hi" || message === "hii" || message === "hello") {
            const response = randomResponse([
                "Hello there! How can I assist you today?",
                "Hey, what can I do for you?",
                "Hi! How can I help you?",
                "Hello! What brings you here today?"
            ]);
            setTimeout(() => {
                if (generatingLi) generatingLi.textContent = "";
                displayMessage(response, "incoming");
            }, 1200);
        } else {
            fetch(`https://api.openai.com/v1/engines/davinci-codex/completions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`
                },
                body: JSON.stringify({
                    prompt: message,
                    max_tokens: 150
                })
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Network response was not ok: ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(data => {
                    if (generatingLi) generatingLi.textContent = "";
                    const botMessage = data.choices[0].text.trim();
                    displayMessage(botMessage, "incoming");
                })
                .catch(error => {
                    console.error("Error:", error);
                    if (generatingLi) generatingLi.textContent = "An error occurred. Please try again.";
                });
        }
    }

    function createChatLi(message, className, isImage = false) {
        const li = document.createElement("li");
        li.classList.add("chat", className);
        const span = document.createElement("span");
        span.classList.add("material-symbols-outlined");
        span.textContent = className === "incoming" ? "robot_2" : "person";
        li.appendChild(span);

        if (isImage) {
            const img = document.createElement("img");
            img.src = message;
            img.classList.add("sent-image");
            li.appendChild(img);
        } else {
            const p = document.createElement("p");
            p.textContent = message;
            li.appendChild(p);
        }

        return li;
    }

    function toggleChatbot() {
        chatbot.classList.toggle("show-chatbot");
    }

    function closeChatbot() {
        chatbot.classList.remove("show-chatbot");
    }

    function refreshChatbot() {
        chatbox.innerHTML = '<li class="chat incoming"><span class="material-symbols-outlined">robot_2</span><p>Hi there 👋 <br> How can I help you today?</p></li>';
    }

    function randomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }
});
