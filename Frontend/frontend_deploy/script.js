// When the DOM content is loaded, execute the following function
document.addEventListener("DOMContentLoaded", function () {
    const chatInput = document.querySelector(".chat-input textarea");
    const sendButton = document.getElementById("send-btn");
    const chatbot = document.querySelector(".chatbot");
    const chatbox = document.querySelector(".chatbox");
    const chatbotToggler = document.querySelector(".chatbot-toggler");
    const closeChatbotButton = document.querySelector(".chatbot header span.close-button");

    // Attach event listeners to buttons and input fields

    sendButton.addEventListener("click", sendMessage);
    chatbotToggler.addEventListener("click", toggleChatbot);
    closeChatbotButton.addEventListener("click", closeChatbot);

    // Function to send user message

    function sendMessage() {
        const message = chatInput.value.trim();    // Get the message from input field
        if (message !== "") {    // Check if message is not empty
            displayMessage(message, "outgoing");// Display outgoing message
            chatInput.value = "";  // Clear input field 
            setTimeout(() => {  
                botResponse(message.toLowerCase());    // Call botResponse after a delay
            }, 1000);
        }
    }

    // Function to display a message in the chatbox

    function displayMessage(message, type) {
        const li = document.createElement("li");   // Create a new list item
        li.classList.add("chat", type);    // Add classes based on message type (incoming/outgoing)
        li.innerHTML = `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;    // Set inner HTML for the message
        chatbox.appendChild(li);   // Append the message to the chatbox
        chatbox.scrollTop = chatbox.scrollHeight;   // Scroll to the bottom of the chatbox
    }

    // Function to generate bot responses based on user messages

    function botResponse(message) {    // Check the user message against predefined cases
        let response;
        switch (message) {
            case "hi":
            case "hii":
            case "hello":
                response = randomResponse([
                    "Hello there! How can I assist you today?",
                    "Hey, what can I do for you?",
                    "Hi! How can I help you?",
                    "Hello! What brings you here today?"
                ]);
                break;
            case "how are you?":
            case "how are you":
            case "How are you?":
            case "How are you":
                response = randomResponse([
                    "I'm just a chatbot, but I'm here and ready to help!",
                    "I'm doing well, thank you! How about you?",
                    "I'm here, ready to assist you with anything you need!"
                ]);
                break;
            case "thank you":
            case "thanks":
                response = randomResponse([
                    "You're welcome! If you need anything else, just let me know.",
                    "No problem at all! Feel free to ask if you have any more questions.",
                    "You're welcome! It's my pleasure to assist you."
                ]);
                break;
            case "bye":
            case "goodbye":
                response = randomResponse([
                    "Goodbye! Have a great day!",
                    "See you later! Don't hesitate to return if you need assistance.",
                    "Bye! Take care and have a wonderful day!"
                ]);
                break;
            case "what's your favorite color?":
            case "what's your favorite color":
            case "what is your favorite color":
                response = randomResponse([
                    "I'm just a chatbot, I don't have a favorite color!",
                    "As a chatbot, I don't experience colors, but I'm here to help you!"
                ]);
                break;
            case "tell me a joke":
                response = randomResponse([
                    "Why don't scientists trust atoms? Because they make up everything!",
                    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
                    "What do you call fake spaghetti? An impasta!",
                    "Why did the scarecrow win an award? Because he was outstanding in his field!"
                ]);
                break;
            case "what is the meaning of life?":
            case "what is the meaning of life":
                response = "That's a deep question! The answer is 42, according to Douglas Adams.";
                break;
            case "who is your creator?":
            case "who is your creator of your":
            case "who created you":
            case "who made this chatbot":
            case "who made this chatbot?":
                response = "I was created by a team of developers at Group_78(Ashish kumar).";
                break;
            case "do you dream?":
                response = "I don't sleep, so I don't dream!";
                break;
            case "are you sentient?":
                response = "I'm just a machine learning model, so I'm not sentient.";
                break;
            case "what do you do for fun?":
                response = "I enjoy chatting with users like you!";
                break;
            case "do you have any siblings?":
                response = "As a chatbot, I'm an only child.";
                break;
            case "can you help me with my homework?":
                response = "I can certainly try to assist you!";
                break;
            case "tell me about yourself":
                response = "I'm a chatbot programmed to assist users with their queries.";
                break;
            case "are you a robot?":
                response = "Yes, I am a virtual assistant powered by artificial intelligence!";
                break;
            case "how do I improve my programming skills?":
                response = "Practice regularly and work on projects that interest you!";
                break;
            case "what's the weather like today?":
                response = "You can check the weather forecast online or using a weather app.";
                break;
            case "tell me a fun fact":
                response = randomResponse([
                    "The shortest war in history lasted only 38 minutes!",
                    "A group of flamingos is called a 'flamboyance'!",
                    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!",
                    "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion of the metal!",
                    "A day on Venus lasts longer than a year on Venus!",
                    "Cows have best friends and can become stressed when they are separated!"
                ]);
                break;
            case "ankit":
            case "ankit kumar":
            case "Ankit kumar":
            case " I am ankit":
            case " i am ankit kumar":
            case " I am ankit kumar":
                response = randomResponse([
                    "Hello Ankit how are you? I know you are member Group_78",
                    "Yah, I know you visited many time"
                ]);
                break;
            case "ashish":
            case "ashish kumar":
            case "Ashish kumar":
            case " I am ashish":
            case " i am ashish kumar":
            case " I am ashish kumar":
                response = randomResponse([
                    "Hello, Ashish how are you? I know you are member Group_78 and you created this chatbot.",
                    "Yah, I know you Ashish visited many time"
                ]);
                break;
            case "pranchal":
            case "pranchal gupta":
            case "Pranchal gupta":
            case " I am pranchal gupta":
            case " i am pranchal":
            case " i am pranchal gupta":
                response = randomResponse([
                    "Hello, pranchal how are you? I know you are member Group_78 .",
                    "Yah, I know you Pranchal visited many time"
                ]);
                break;
            case "anupama":
            case "anupama jagriti":
            case "Anupama jagriti":
            case " I am anupama":
            case " i am anupama jagriti":
            case " i am anupama jagriti":
                response = randomResponse([
                    "Hello, Anupama how are you? I know you are member Group_78.",
                    "Yah, I know you Anupama visited many time"
                ]);
                break;
            case "aditya":
            case "aditya kumar":
            case "Aditya kumar":
            case " I am aditya":
            case " i am aditya kumar":
            case " I am aditya kumar":
                response = randomResponse([
                    "Hello, Aditya how are you? I know you are member Group_78 and you created this chatbot.",
                    "Yah, I know Aditya you visited many time."
                ]);
                break;
            case "what's your favorite book?":
                response = "I don't have preferences like humans, but I can recommend some popular books!";
                break;
            case "do you have any pets?":
                response = "I'm a virtual assistant, so I don't have pets!";
                break;
            case "where do you live?":
                response = "I exist in the digital realm, so I don't have a physical location!";
                break;
            case "what are your hobbies?":
                response = "I don't have hobbies in the way humans do, but I enjoy interacting with users like you!";
                break;
            case "tell me about a movie recommendation":
                response = "I can recommend a movie based on your preferences!";
                break;
            case "who is your favorite superhero?":
                response = "I don't have personal preferences, but I can discuss superheroes with you!";
                break;
            case "what's your favorite food?":
                response = "As a virtual assistant, I don't have preferences for food!";
                break;
            case "tell me about artificial intelligence":
                response = "Artificial intelligence is a branch of computer science that aims to create machines capable of intelligent behavior.";
                break;
            case "what's the capital of France?":
                response = "The capital of France is Paris!";
                break;
            case "what's the tallest mountain in the world?":
                response = "Mount Everest is the tallest mountain in the world!";
                break;
            case "how do I stay motivated?":
                response = "Set achievable goals, break tasks into smaller steps, and celebrate your progress!";
                break;
            case "what's the population of New York City?":
                response = "The population of New York City is over 8 million people!";
                break;
            case "what's the largest desert in the world?":
                response = "The largest desert in the world is the Antarctic Desert!";
                break;
            case "what's the longest river in the world?":
                response = "The longest river in the world is the Nile River!";
                break;
            case "what's the speed of light?":
                response = "The speed of light in a vacuum is approximately 299,792 kilometers per second!";
                break;
            case "what's the square root of 144?":
                response = "The square root of 144 is 12!";
                break;
            case "what's the capital of Japan?":
                response = "The capital of Japan is Tokyo!";
                break;
            case "what's the circumference of a circle?":
                response = "The circumference of a circle is calculated using the formula 2πr!";
                break;
            case "how many continents are there?":
                response = "There are seven continents on Earth!";
                break;
            case "what's the melting point of water?":
                response = "The melting point of water is 0 degrees Celsius!";
                break;
            case "what's the boiling point of water?":
                response = "The boiling point of water is 100 degrees Celsius!";
                break;
            case "who was the first president of the United States?":
                response = "George Washington was the first president of the United States!";
                break;
            case "what's the chemical symbol for gold?":
                response = "The chemical symbol for gold is Au!";
                break;
            case "what's the chemical symbol for oxygen?":
                response = "The chemical symbol for oxygen is O!";
                break;
            case "what's the chemical symbol for carbon?":
                response = "The chemical symbol for carbon is C!";
                break;
            case "what's the chemical symbol for hydrogen?":
                response = "The chemical symbol for hydrogen is H!";
                break;
            case "what's the chemical symbol for helium?":
                response = "The chemical symbol for helium is He!";
                break;
            case "what's the chemical symbol for silver?":
                response = "The chemical symbol for silver is Ag!";
                break;
            case "what's the chemical symbol for sodium?":
                response = "The chemical symbol for sodium is Na!";
                break;
            case "what's the chemical symbol for potassium?":
                response = "The chemical symbol for potassium is K!";
                break;
            case "what's the chemical symbol for iron?":
                response = "The chemical symbol for iron is Fe!";
                break;
            case "what's the chemical symbol for lead?":
                response = "The chemical symbol for lead is Pb!";
                break;
            case "what's the chemical symbol for mercury?":
                response = "The chemical symbol for mercury is Hg!";
                break;
            case "what's the chemical symbol for tin?":
                response = "The chemical symbol for tin is Sn!";
                break;
            case "what's the chemical symbol for copper?":
                response = "The chemical symbol for copper is Cu!";
                break;
            case "what's the chemical symbol for platinum?":
                response = "The chemical symbol for platinum is Pt!";
                break;
            case "what's the chemical symbol for uranium?":
                response = "The chemical symbol for uranium is U!";
                break;
            case "what's the chemical symbol for silver?":
                response = "The chemical symbol for silver is Ag!";
                break;
            case "what's the chemical symbol for silicon?":
                response = "The chemical symbol for silicon is Si!";
                break;
            case "what's the chemical symbol for nitrogen?":
                response = "The chemical symbol for nitrogen is N!";
                break;
            case "what's the chemical symbol for carbon?":
                response = "The chemical symbol for carbon is C!";
                break;
            case "what's the chemical symbol for sulfur?":
                response = "The chemical symbol for sulfur is S!";
                break;
            case "what's the chemical symbol for calcium?":
                response = "The chemical symbol for calcium is Ca!";
                break;
            case "what's the chemical symbol for chlorine?":
                response = "The chemical symbol for chlorine is Cl!";
                break;
            case "what's the chemical symbol for magnesium?":
                response = "The chemical symbol for magnesium is Mg!";
                break;
            case "what's the chemical symbol for aluminum?":
                response = "The chemical symbol for aluminum is Al!";
                break;
            case "what's the chemical symbol for phosphorus?":
                response = "The chemical symbol for phosphorus is P!";
                break;
            case "what's the chemical symbol for potassium?":
                response = "The chemical symbol for potassium is K!";
                break;
            case "what's the chemical symbol for zinc?":
                response = "The chemical symbol for zinc is Zn!";
                break;
            case "what's the chemical symbol for fluorine?":
                response = "The chemical symbol for fluorine is F!";
                break;
            case "what's the chemical symbol for bromine?":
                response = "The chemical symbol for bromine is Br!";
                break;
            case "what's the chemical symbol for iodine?":
                response = "The chemical symbol for iodine is I!";
                break;
            case "what's the chemical symbol for boron?":
                response = "The chemical symbol for boron is B!";
                break;
            case "what's the chemical symbol for nickel?":
                response = "The chemical symbol for nickel is Ni!";
                break;
            case "what's the chemical symbol for neon?":
                response = "The chemical symbol for neon is Ne!";
                break;
            case "what's the chemical symbol for argon?":
                response = "The chemical symbol for argon is Ar!";
                break;
            case "what is the chemical symbol for radon?":
                response = "The chemical symbol for radon is Rn!";
                break;
            case "what is the chemical symbol for krypton?":
                response = "The chemical symbol for krypton is Kr!";
                break;
            case "what is the chemical symbol for xenon?":
                response = "The chemical symbol for xenon is Xe!";
                break;
            case "what is the chemical symbol for helium?":
                response = "The chemical symbol for helium is He!";
                break;
            case "what is the chemical symbol for francium?":
                response = "The chemical symbol for francium is Fr!";
                break;
            case "what is the chemical symbol for radium?":
                response = "The chemical symbol for radium is Ra!";
                break;
            case "what's the chemical symbol for actinium?":
                response = "The chemical symbol for actinium is Ac!";
                break;
            case "what's the chemical symbol for thorium?":
                response = "The chemical symbol for thorium is Th!";
                break;
            case "what's the chemical symbol for protactinium?":
                response = "The chemical symbol for protactinium is Pa!";
                break;
            case "what's the chemical symbol for uranium?":
                response = "The chemical symbol for uranium is U!";
                break;
            case "what's the chemical symbol for neptunium?":
                response = "The chemical symbol for neptunium is Np!";
                break;
            case "what's the chemical symbol for plutonium?":
                response = "The chemical symbol for plutonium is Pu!";
                break;
            case "what's the chemical symbol for americium?":
                response = "The chemical symbol for americium is Am!";
                break;
            case "what's the chemical symbol for curium?":
                response = "The chemical symbol for curium is Cm!";
                break;
            case "what's the chemical symbol for berkelium?":
                response = "The chemical symbol for berkelium is Bk!";
                break;
            case "what's the chemical symbol for californium?":
                response = "The chemical symbol for californium is Cf!";
                break;
            case "what's the chemical symbol for einsteinium?":
                response = "The chemical symbol for einsteinium is Es!";
                break;
            case "what's the chemical symbol for fermium?":
                response = "The chemical symbol for fermium is Fm!";
                break;
            case "what's the chemical symbol for mendelevium?":
                response = "The chemical symbol for mendelevium is Md!";
                break;
            case "what's the chemical symbol for nobelium?":
                response = "The chemical symbol for nobelium is No!";
                break;
            case "what's the chemical symbol for lawrencium?":
                response = "The chemical symbol for lawrencium is Lr!";
                break;
            case "what's the chemical symbol for rutherfordium?":
                response = "The chemical symbol for rutherfordium is Rf!";
                break;
            case "what's the chemical symbol for dubnium?":
                response = "The chemical symbol for dubnium is Db!";
                break;
            case "what's the chemical symbol for seaborgium?":
                response = "The chemical symbol for seaborgium is Sg!";
                break;
            case "what's the chemical symbol for bohrium?":
                response = "The chemical symbol for bohrium is Bh!";
                break;
            case "what's the chemical symbol for hassium?":
                response = "The chemical symbol for hassium is Hs!";
                break;
            case "what's the chemical symbol for meitnerium?":
                response = "The chemical symbol for meitnerium is Mt!";
                break;
            case "what's the chemical symbol for darmstadtium?":
                response = "The chemical symbol for darmstadtium is Ds!";
                break;
            case "what's the chemical symbol for roentgenium?":
                response = "The chemical symbol for roentgenium is Rg!";
                break;
            case "what's the chemical symbol for copernicium?":
                response = "The chemical symbol for copernicium is Cn!";
                break;
            case "what's the chemical symbol for nihonium?":
                response = "The chemical symbol for nihonium is Nh!";
                break;
            case "what's the chemical symbol for flerovium?":
                response = "The chemical symbol for flerovium is Fl!";
                break;
            case "what's the chemical symbol for moscovium?":
                response = "The chemical symbol for moscovium is Mc!";
                break;
            case "what's the chemical symbol for livermorium?":
                response = "The chemical symbol for livermorium is Lv!";
                break;
            case "what's the chemical symbol for tennessine?":
                response = "The chemical symbol for tennessine is Ts!";
                break;
            case "what's the chemical symbol for oganesson?":
                response = "The chemical symbol for oganesson is Og!";
                break;
            default:
                response = randomResponse([
                    "I'm sorry, I didn't quite catch that. Could you please rephrase?",
                    "Hmm, I'm not sure I understand. Could you provide more details?",
                    "I'm still learning! Could you try asking me something else?",
                    "That's interesting! Tell me more about it."
                ]);
                break;
        }
        displayMessage(response, "incoming");      // Display bot's response as incoming message
    }

//     // Function to select a random response from an array

//     function randomResponse(responses) {
//         return responses[Math.floor(Math.random() * responses.length)];
//     }

//     // Function to toggle the visibility of the chatbot

//     function toggleChatbot() {
//         chatbot.classList.toggle("show-chatbot");
//     }

//    // Function to close the chatbot

//     function closeChatbot() {
//         chatbot.classList.remove("show-chatbot");
//     }
// });




function randomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}

function toggleChatbot() {
    chatbot.classList.toggle("show-chatbot");
}

function closeChatbot() {
    chatbot.classList.remove("show-chatbot");
}
});


