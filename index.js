const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;


/*app.get('/json/', (req, res) => {
    res.json(bookings.json);
});*/

app.use(express.static('wwwroot'))

app.listen(PORT, console.log("Connected"));
