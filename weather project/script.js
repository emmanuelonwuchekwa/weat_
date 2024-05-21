document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_OPENWEATHER_API_KEY'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weather = data.weather[0].main.toLowerCase();
                const weatherIcons = {
                    clear: 'fas fa-sun',
                    clouds: 'fas fa-cloud',
                    rain: 'fas fa-cloud-showers-heavy',
                    drizzle: 'fas fa-cloud-rain',
                    thunderstorm: 'fas fa-bolt',
                    snow: 'fas fa-snowflake',
                    mist: 'fas fa-smog',
                };
                document.getElementById('weatherIcon').innerHTML = `<i class="${weatherIcons[weather] || 'fas fa-smog'}"></i>`;
                document.getElementById('cityName').textContent = data.name;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById('conditions').textContent = `Conditions: ${data.weather[0].description}`;
            } else {
                document.getElementById('cityName').textContent = 'City not found';
                document.getElementById('temperature').textContent = '';
                document.getElementById('conditions').textContent = '';
                document.getElementById('weatherIcon').innerHTML = '';
            }
        })
        .catch(error => {
            alert('Error fetching weather data: ' + error.message);
        });
});
