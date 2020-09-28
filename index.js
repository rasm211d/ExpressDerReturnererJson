const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;


/*app.get('/json/', (req, res) => {
    res.json(bookings.json);
});*/

app.use(express.static('wwwroot'));
app.use('/api/bookings', require('./wwwroot/routes/api/bookings'));
app.use('/api/cars', require('./wwwroot/routes/api/cars'));
app.use('/api/users', require('./wwwroot/routes/api/users'));

app.listen(PORT, console.log("Connected"));
