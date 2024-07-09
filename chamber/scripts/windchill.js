const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const wSpeed = document.querySelector('#speed');

const currentUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=40.31&lon=-112.00&units=imperial&appid=ed0a9222e2c2ea5d4fdfefbe1e6305c0';

async function fetchCurrentWeather() {
    try {
        const response = await fetch(currentUrl);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); // Log the data to inspect its structure
            displayCurrentWeather(data);

        } else {
            throw new Error('Failed to fetch weather data');
        }
    } catch (error) {
        console.log('Error fetching weather data:', error);
    }
}

function displayCurrentWeather(data) {
    currentTemp.innerHTML = `${(data.main.temp.toFixed(1))}&degF`;
    wSpeed.innerHTML = `${data.wind.speed} mph`;
    let figure = document.createElement('figure');
    let icon = document.createElement('img');
    let description = document.createElement('figcaption');

    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    icon.alt = `weather descriptive icon`;
    description.textContent = data.weather[0].description;

    figure.appendChild(icon);
    figure.appendChild(description);
    document.getElementById('fig-container').appendChild(figure);

}

const forecastUrl = 'https://api.openweathermap.org/data/2.5/forcast?lat=40.31&lon=-112.00&units=imperial&appid=ed0a9222e2c2ea5d4fdfefbe1e6305c0';

async function fetchForecastWeather() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); // Log the data to inspect its structure
            displayForecastWeather(data);
        } else {
            throw new Error('Failed to fetch weather data');
        }
    } catch (error) {
        console.log('Error fetching weather data:', error);
    }
}

// Function to format date to display only the day of the week
const formatDayOfWeek = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long' });
};



function displayForecastWeather(data) {
    try {
        // Extract forecast data from the response
        const forecastData = data.list; // Assuming the forecast data is in the 'list' property

        // Create an object to store forecast data grouped by date
        const forecastByDate = {};

        // Get tomorrow's date
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowDateString = tomorrow.toISOString().split('T')[0]; // Format as YYYY-MM-DD

        // Iterate over forecast data entries
        forecastData.forEach(entry => {
            // Extract date from the entry
            const date = entry.dt_txt.split(' ')[0]; // Extracting date from dt_txt (YYYY-MM-DD format)

            // Check if the date is tomorrow or later
            if (date >= tomorrowDateString) {
                // Check if forecastByDate already has an entry for this date
                if (!forecastByDate[date]) {
                    // If not, create a new entry
                    forecastByDate[date] = {
                        icon: entry.weather[0].icon, // Forecast weather icon code
                        description: entry.weather[0].description, // Forecast weather description
                        temp: entry.main.temp, // Forecast temperature
                        humidity: entry.main.humidity // Forecast humidity
                    };
                } else {
                    // If an entry for this date already exists, update the temperature and humidity
                    forecastByDate[date].temp = entry.main.temp;
                    forecastByDate[date].humidity = entry.main.humidity;
                }
            }
        });

        // Display forecast data on your website
        for (const date in forecastByDate) {
            // Create HTML elements dynamically to display forecast data
            const forecastElement = document.createElement('div');
            forecastElement.classList.add('forecast-day');
            const dayElement = document.createElement('h3');
            const iconElement = document.createElement('img');
            const descriptionElement = document.createElement('p');
            const tempElement = document.createElement('p');

            dayElement.textContent = `${formatDayOfWeek(new Date(date))}`; // Format day of the week         
            iconElement.src = `https://openweathermap.org/img/wn/${forecastByDate[date].icon}.png`; // Weather icon URL
            iconElement.alt = forecastByDate[date].description;
            descriptionElement.textContent = forecastByDate[date].description;
            tempElement.textContent = `Temperature ${forecastByDate[date].temp}°F`;


            forecastElement.appendChild(dayElement);
            forecastElement.appendChild(iconElement);
            forecastElement.appendChild(descriptionElement);
            forecastElement.appendChild(tempElement);


            // Append the forecast element to a forecast section in your HTML document
            document.getElementById('forecast-section').appendChild(forecastElement);
        }
    } catch (error) {
        console.error('Error displaying forecast weather:', error);
    }
}

fetchForecastWeather();
fetchCurrentWeather();

function showWindChill() {
    let temperature = parseFloat(document.getElementById("temp").textContent);
    let windspeed = parseFloat(document.getElementById("speed").textContent);
    let windChillValue = "N/A";

    if (temperature <= 50 && windspeed > 3.0) {
        windChillValue = calculateWindChill(temperature, windspeed);
    }

    document.getElementById("chill").textContent = windChillValue;

}

window.addEventListener("load", showWindChill);




function calculateWindChill(temperature, windSpeed) {
    return (
        35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2));


}


