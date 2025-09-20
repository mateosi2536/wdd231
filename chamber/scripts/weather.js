const API_KEY = "29ed933cba9aca67c6aad26170f56853";
const LAT = -0.1807;
const LON = -78.4678;

const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric&lang=en`;

const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric&lang=en`;

fetch(urlCurrent)
    .then(res => res.json())
    .then(data => {
        const temp = data.main.temp.toFixed(1);
        const desc = data.weather[0].description;
        const humidity = data.main.humidity;

        document.getElementById("temp").textContent = `Temperature: ${temp}°C`;
        document.getElementById("condition").textContent = `Description: ${desc.charAt(0).toUpperCase() + desc.slice(1)}`;
        document.getElementById("humidity").textContent = `Humidity: ${humidity}%`;
    })
    .catch(err => console.error("Error fetching current weather:", err));

fetch(urlForecast)
    .then(res => res.json())
    .then(data => {
        const forecastEl = document.getElementById("forecast");
        forecastEl.innerHTML = "";

        const daily = data.list.filter(item => item.dt_txt.includes("12:00:00"));

        for (let i = 0; i < 3; i++) {
            const day = new Date(daily[i].dt * 1000);
            const options = { weekday: "long", day: "2-digit", month: "2-digit" };
            const dateStr = day.toLocaleDateString("en-US", options);

            const tempDay = daily[i].main.temp.toFixed(1);

            const li = document.createElement("li");
            li.textContent = `${dateStr}: ${tempDay}°C`;
            forecastEl.appendChild(li);
        }
    })
    .catch(err => console.error("Error fetching forecast:", err));
