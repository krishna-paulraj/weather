document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "d3ecd3478d7acb73f92f4daaf07857da"; // Replace with your OpenWeatherMap API key
  const weatherInfo = document.getElementById("weather-info");
  const getWeatherButton = document.getElementById("get-weather");

  getWeatherButton.addEventListener("click", function () {
    const cityInput = document.getElementById("city-input").value;

    // Check if the city input is not empty
    if (cityInput.trim() === "") {
      alert("Please enter a city name.");
      return;
    }

    // Fetch weather data from OpenWeatherMap API
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        // Display weather information
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const cityName = data.name;

        const weatherHtml = `
                  <p>Temperature in ${cityName}: ${temperature} &#8451;</p>
                  <p>Weather Description: ${description}</p>
              `;

        weatherInfo.innerHTML = weatherHtml;
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        alert("Error fetching weather data. Please try again.");
      });
  });
});
