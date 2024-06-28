const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=40.31&lon=-112.00&units=imperial&appid=ed0a9222e2c2ea5d4fdfefbe1e6305c0";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)} &deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description.toLowerCase();
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}