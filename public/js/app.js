// public/app.js
async function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const city = cityInput.value.trim();
    
    if (!city) {
        showError('Please enter a city name');
        return;
    }

    try {
        const response = await fetch(`https://forecast-x.onrender.com/weather?city=${encodeURIComponent(city)}`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Failed to fetch weather data');
        }

        displayWeather(data);
    } catch (error) {
        showError(error.message);
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    const error = document.getElementById('error');
    
    weatherInfo.classList.remove('hidden');
    error.classList.add('hidden');

    // Display current weather
    document.getElementById('cityName').textContent = data.current.name;
    document.getElementById('temperature').textContent = `${Math.round(data.current.main.temp)}°C`;
    document.getElementById('description').textContent = data.current.weather[0].description;
    document.getElementById('humidity').textContent = `${data.current.main.humidity}%`;
    document.getElementById('wind').textContent = `${data.current.wind.speed} m/s`;
    document.getElementById('weatherIcon').src = `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;

    // Display forecast
    const forecastContainer = document.getElementById('forecastContainer');
    forecastContainer.innerHTML = '';

    // Get one forecast per day
    const threeDayForecast = data.forecast.list.filter((item, index) => index % 8 === 0).slice(0, 3);

    threeDayForecast.forEach(day => {
        const date = new Date(day.dt * 1000);
        const forecastItem = document.createElement('div');
        forecastItem.className = 'bg-white rounded-lg p-4 shadow-md text-center';
        
        forecastItem.innerHTML = `
            <h4 class="font-semibold text-gray-800 mb-2">
                ${date.toLocaleDateString('en-US', { weekday: 'long' })}
            </h4>
            <img 
                src="http://openweathermap.org/img/wn/${day.weather[0].icon}.png" 
                alt="weather icon"
                class="mx-auto w-16 h-16"
            >
            <p class="text-2xl font-bold text-gray-800 mb-1">
                ${Math.round(day.main.temp)}°C
            </p>
            <p class="text-gray-600 capitalize">
                ${day.weather[0].description}
            </p>
        `;
        
        forecastContainer.appendChild(forecastItem);
    });
}

function showError(message) {
    const weatherInfo = document.getElementById('weatherInfo');
    const error = document.getElementById('error');
    
    weatherInfo.classList.add('hidden');
    error.classList.remove('hidden');
    error.textContent = message;
}

// Event listener for Enter key
document.getElementById('cityInput').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        getWeather();
    }
});
