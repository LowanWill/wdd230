const temperature = parseFloat(document.getElementById('temperature').value);
const windSpeed = parseFloat(document.getElementById('windSpeed').value);

if (temperature <= 50 && windSpeed > 3.0) {
    const windChillFactor = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
    document.getElementById('windChill').textContent = windChillFactor.toFixed(2);
} else {
    document.getElementById('windChill').textContent = 'N/A';
}