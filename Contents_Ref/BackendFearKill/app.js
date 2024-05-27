
// for vodeo help=      https://www.youtube.com/@ankit_iitp127
// URL  https://youtu.be/lz-BHSSpNHk?si=YsUhEX10o9o7h0ln

// representation: req = request, res = respond

// Backend mai hmesa 2 kam hote h: req ko lo and res ko print kro
// hm log EXPREESS ko use karke app banaye, express only work ki wah req ko user se leta h, and res ko send karta h
// https://www.npmjs.com/package/express


// command used for Apps (Web) making
// 1. npm init
// 2. npm install express

const express = require('express');
const app = express();
const port = 3030;

// jab hmara yah app variable ban gya express ko require karke ho, This is very powerful variable you can do anything from this
// aab hm req mai get, karke res ko print karte h

app.get('/Home', (req, res) => {                // ARROW funct () => {}
    res.send("Welcome to our homepage of my greeting to this platform !!! ")
});


//app.listen(port);
// yah hm ye bhi kar sakte h
app.listen(port, () => {
    console.log(`our apps is listening on the port ${port}`)
});





//  app ko run karne ke liye node app.js 
// app ko stop karne ke liye ctrl + c in the terminal