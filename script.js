document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = 'ec08ff0c2226811250bf3cd8e182b130';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherResult = document.getElementById('weather-result');
                weatherResult.innerHTML = `
                    <p><strong>${data.name}, ${data.sys.country}</strong></p>
                    <p>Clima: ${data.weather[0].description}</p>
                    <p>Temperatura: ${data.main.temp}°C</p>
                    <p>Humidade: ${data.main.humidity}%</p>
                    <p>Vento: ${data.wind.speed} m/s</p>
                `;
            } else {
                document.getElementById('weather-result').innerHTML = `<p>Cidade não encontrada.</p>`;
            }
        })
        .catch(() => {
            document.getElementById('weather-result').innerHTML = `<p>Erro ao buscar dados.</p>`;
        });
});
