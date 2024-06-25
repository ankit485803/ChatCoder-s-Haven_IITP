// js/typingIndicator.js
document.addEventListener('DOMContentLoaded', (event) => {
    const socket = io();

    const chatInput = document.querySelector(".chat-input textarea");

    // Notify the server that the client is typing
    chatInput.addEventListener('input', () => {
        socket.emit('typing');
    });

    // Handle typing indicator
    socket.on('typing', () => {
        console.log('Someone is typing...');
        // Add your typing indicator handling code here
    });
});
