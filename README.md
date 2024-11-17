# Weather Forecast Application
## Overview
A modern and responsive weather forecast application that provides real-time weather information and 3-day forecasts for any city worldwide. Built with Node.js and styled with Tailwind CSS, this application offers a clean and intuitive interface for checking weather conditions.

[Live Demo](https://forecast-x.onrender.com)  
[GitHub Repository](https://github.com/kittys201/forecast_x)
[Video demo](https://youtu.be/BL9xWQ4KKM0)

The application provides essential weather metrics including:
- Current temperature
- Weather conditions
- Humidity levels
- Wind speed
- 3-day forecast with daily temperatures and conditions

## Features
- **City-based Weather Search**: Simple and intuitive search interface
- **Current Weather Display**: Real-time weather information
- **3-Day Forecast**: Extended weather predictions
- **Responsive Design**: Seamless experience across all devices
- **Error Handling**: Clear feedback for invalid searches or API issues
- **Modern UI**: Clean and intuitive interface using Tailwind CSS

## Development Environment
### Technologies Used
- **Backend**:
  - Node.js
  - Express.js
  - node-fetch for API requests
  - CORS for cross-origin resource sharing
  - dotenv for environment variable management
  
- **Frontend**:
  - HTML5
  - JavaScript (ES6+)
  - Tailwind CSS for styling
  - OpenWeatherMap API for weather data

### Version Information
```json
{
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "node-fetch": "^2.6.9"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.14",
    "concurrently": "^8.0.1",
    "postcss": "^8.4.23",
    "tailwindcss": "^3.3.2"
  }
}
```

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/kittys201/forecast_x.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your OpenWeatherMap API key:
   ```env
   API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Access the application at `http://localhost:3000`

## Usage
1. Visit the [weather forecast application](https://forecast-x.onrender.com)
2. Enter a city name in the search bar
3. View the current weather conditions and 3-day forecast
4. Use the responsive interface on any device

## Key Components
- `server.js`: Handles API requests and serves the application
- `app.js`: Manages frontend functionality and API interactions
- `index.html`: Provides the application structure
- `tailwind.config.js`: Configures custom styling

## Features in Detail
### Weather Data
- Real-time weather information from OpenWeatherMap API
- Temperature in Celsius
- Detailed weather descriptions
- Current humidity and wind speed
- 3-day forecast with daily conditions

### UI/UX
- Clean and modern interface
- Responsive design for all screen sizes
- Interactive weather cards
- Smooth transitions and animations
- Error handling with user feedback

## Useful Resources
- [OpenWeatherMap API Documentation](https://openweathermap.org/api)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Express.js Documentation](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/en/docs/)

## Contributing
Contributions are welcome! Feel free to fork this project and submit pull requests for any improvements you'd like to add.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
ISC License

---
Created with ❤️ using Node.js and Tailwind CSS
