// js/suggestions.js
document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.querySelector(".chatbox");
    const imageUpload = document.getElementById("imageUpload");
    const chatInput = document.querySelector(".chat-input textarea");
    const imageUploadBtn = document.getElementById("imageUploadBtn");

    // Predefined suggestions
    const suggestions = {
        python: {
            links: [
                { url: "https://docs.python.org/3/", image: "imagepython.png" },
                { url: "https://realpython.com/", image: "imagepython.png" },
                { url: "https://www.learnpython.org/", image: "imagepython.png" }
            ],
            videos: [
                { url: "https://www.youtube.com/watch?v=rfscVS0vtbw", image: "imagepython.png" },
                { url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc", image: "imagepython.png" },
                { url: "https://www.youtube.com/watch?v=8DvywoWv6fI", image: "imagepython.png" }
            ],
            images: [
                "imagepython.png",
                "imagepython.png",
                "imagepython.png"
            ]
        },
        html: {
            links: [
                { url: "https://developer.mozilla.org/en-US/docs/Web/HTML", image: "imagehtml.png" },
                { url: "https://www.w3schools.com/html/", image: "imagehtml.png" },
                { url: "https://html.com/", image: "imagehtml.png" }
            ],
            videos: [
                { url: "https://www.youtube.com/watch?v=pQN-pnXPaVg", image: "imagehtml.png" },
                { url: "https://www.youtube.com/watch?v=UB1O30fR-EE", image: "imagehtml.png" },
                { url: "https://www.youtube.com/watch?v=bWPMSSsVdPk", image: "imagehtml.png" }
            ],
            images: [
                "imagehtml.png",
                "imagehtml.png",
                "imagehtml.png"
            ]
        },
        css: {
            links: [
                { url: "https://developer.mozilla.org/en-US/docs/Web/CSS", image: "imagecss.png" },
                { url: "https://www.w3schools.com/css/", image: "imagecss.png" },
                { url: "https://css-tricks.com/", image: "imagecss.png" }
            ],
            videos: [
                { url: "https://www.youtube.com/watch?v=1Rs2ND1ryYc", image: "imagecss.png" },
                { url: "https://www.youtube.com/watch?v=yfoY53QXEnI", image: "imagecss.png" },
                { url: "https://www.youtube.com/watch?v=ieTHC78giGQ", image: "imagecss.png" }
            ],
            images: [
                "imagecss.png",
                "imagecss.png",
                "imagecss.png"
            ]
        },
        javascript: {
            links: [
                { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", image: "imagejs.png" },
                { url: "https://www.w3schools.com/js/", image: "imagejs.png" },
                { url: "https://javascript.info/", image: "imagejs.png" }
            ],
            videos: [
                { url: "https://www.youtube.com/watch?v=PkZNo7MFNFg", image: "imagejs.png" },
                { url: "https://www.youtube.com/watch?v=W6NZfCO5SIk", image: "imagejs.png" },
                { url: "https://www.youtube.com/watch?v=upDLs1sn7g4", image: "imagejs.png" }
            ],
            images: [
                "imagejs.png",
                "imagejs.png",
                "imagejs.png"
            ]
        }
    };

    // Helper function to get random item from array
    function getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    imageUpload.addEventListener("change", function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const preview = document.createElement("div");
                preview.classList.add("image-preview");
                preview.innerHTML = `<img src="${e.target.result}" alt="Preview">
                                     <span class="remove-image">&times;</span>`;
                chatInput.insertBefore(preview, chatInput.firstChild);

                document.querySelector(".remove-image").addEventListener("click", function() {
                    preview.remove();
                    imageUpload.value = "";
                    imageUploadBtn.style.display = "block";
                });

                imageUploadBtn.style.display = "none";
            };
            reader.readAsDataURL(file);
        }
    });

    document.getElementById("link-suggestion-btn").addEventListener("click", () => {
        const topics = ["python", "html", "css", "javascript"];
        const randomTopic = getRandomItem(topics);
        const randomLink = getRandomItem(suggestions[randomTopic].links);
        const messageElement = document.createElement("div");
        messageElement.classList.add("chat-message", "suggestion-item");
        messageElement.innerHTML = `<img src="${randomLink.image}" alt="Link Image">
                                    <a href="${randomLink.url}" target="_blank">${randomLink.url}</a>`;
        chatBox.appendChild(messageElement);
    });

    document.getElementById("video-suggestion-btn").addEventListener("click", () => {
        const topics = ["python", "html", "css", "javascript"];
        const randomTopic = getRandomItem(topics);
        const randomVideo = getRandomItem(suggestions[randomTopic].videos);
        const messageElement = document.createElement("div");
        messageElement.classList.add("chat-message", "suggestion-item");
        messageElement.innerHTML = `<img src="${randomVideo.image}" alt="Video Image">
                                    <a href="${randomVideo.url}" target="_blank">${randomVideo.url}</a>`;
        chatBox.appendChild(messageElement);
    });

    document.getElementById("image-generation-btn").addEventListener("click", () => {
        const topics = ["python", "html", "css", "javascript"];
        const randomTopic = getRandomItem(topics);
        const randomImage = getRandomItem(suggestions[randomTopic].images);
        const imgElement = document.createElement("img");
        imgElement.src = randomImage;
        imgElement.classList.add("chat-image");
        chatBox.appendChild(imgElement);
    });
});
