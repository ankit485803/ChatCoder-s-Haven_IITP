// js/api.js
document.addEventListener('DOMContentLoaded', (event) => {
    const socket = io();

    socket.on('connect', () => {
        console.log('Connected to server');
    });

    socket.on('disconnect', () => {
        console.log('Disconnected from server');
    });

    socket.on('message', (data) => {
        console.log('Message from server:', data);
    });

    // Add any additional API-related code here
});
