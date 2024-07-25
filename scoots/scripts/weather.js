/*WEATHER BANNER*/
document.addEventListener('DOMContentLoaded', function () {
    const weatherBanner = document.getElementById('banner');
    const closeBtn = document.getElementById('closeBtn');
    weatherBanner.style.display = 'block';

    closeBtn.addEventListener('click', function () {
        weatherBanner.style.display = 'none';
    });

});

//Current temp-max

let temp = document.querySelector('#max-temp');
const maxTempUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=20.45&lon=-86.91&units=imperial&appid=ed0a9222e2c2ea5d4fdfefbe1e6305c0';
async function apiFetch() {
    try {
        const response = await fetch(maxTempUrl);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data);
            displayCurrentWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    temp.innerHTML = `Today's Max Temp is: ${data.main.temp_max}°F`;

}


/* Weather forecast for today and tomorrow*/
let weather = document.querySelector('#weather');
function displayCurrentWeather(data) {
    let figure = document.createElement('figure');
    let icon = document.createElement('img');
    let description = document.createElement('figcaption');
    let temp = document.createElement('p');
    //let feels = document.createElement('p');
    let humidity = document.createElement('p');

    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    icon.alt = `weather descriptive icon`;
    description.textContent = data.weather[0].description;
    temp.textContent = `Temp: ${(data.main.temp.toFixed(1))}°F`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    //feels.textContent = `Feels: ${data.main.feels_like}°F`;

    figure.appendChild(icon);
    figure.appendChild(description);
    weather.appendChild(figure);
    weather.appendChild(temp);
    //weather.appendChild(feels);
    weather.appendChild(humidity);
}

document.addEventListener('DOMContentLoaded', function () {
    let forecast = document.querySelector('#forecast');
    const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.44&lon=-86.91&units=imperial&appid=ed0a9222e2c2ea5d4fdfefbe1e6305c0';

    async function fetchForecast() {
        try {
            const response = await fetch(forecastUrl);
            if (response.ok) {
                const data = await response.json();
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                const tomorrowDate = tomorrow.toISOString().split('T')[0];
                const tomorrowForecast = data.list.filter(entry => entry.dt_txt.includes(tomorrowDate));
                const forecastAt15 = tomorrowForecast.find(entry => entry.dt_txt.includes('15:00'));
                //console.log(data);
                displayForecast(forecastAt15);
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.log(error);
        }
    }

    function displayForecast(forecastAt15) {

        let figure = document.createElement('figure');
        let icon = document.createElement('img');
        let description = document.createElement('figcaption');
        let temp = document.createElement('p');
        let humidity = document.createElement('p');

        icon.src = `https://openweathermap.org/img/wn/${forecastAt15.weather[0].icon}.png`;
        icon.alt = `weather descriptive icon`;
        description.textContent = forecastAt15.weather[0].description;
        temp.textContent = `Temp: ${(forecastAt15.main.temp.toFixed(1))}°F`;
        humidity.textContent = `Humidity: ${forecastAt15.main.humidity}%`;

        figure.appendChild(icon);
        figure.appendChild(description);
        forecast.appendChild(figure);
        forecast.appendChild(temp);
        forecast.appendChild(humidity);

    }

    apiFetch();
    fetchForecast();

});