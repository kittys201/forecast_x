// server.js
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Middleware para manejar errores
const errorHandler = (error, req, res, next) => {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
};

// Ruta para obtener el pronóstico del tiempo
app.get('/weather', async (req, res) => {
    try {
        const { city } = req.query;
        if (!city) {
            throw new Error('City parameter is required');
        }

        // Primero obtenemos las coordenadas de la ciudad
        const geocodeUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${process.env.API_KEY}`;
        const geocodeResponse = await fetch(geocodeUrl);
        const geocodeData = await geocodeResponse.json();

        if (!geocodeData.length) {
            throw new Error('City not found');
        }

        const { lat, lon } = geocodeData[0];

        // Obtenemos el pronóstico actual
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.API_KEY}`;
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.API_KEY}`;

        const [weatherResponse, forecastResponse] = await Promise.all([
            fetch(weatherUrl),
            fetch(forecastUrl)
        ]);

        const weatherData = await weatherResponse.json();
        const forecastData = await forecastResponse.json();

        res.json({
            current: weatherData,
            forecast: forecastData
        });
    } catch (error) {
        next(error);
    }
});

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running at https://forecast-x.onrender.com/t:${port}`);
});
