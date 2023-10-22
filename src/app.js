function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = response.data.main.temp;
}

let apiKey = "586f0aaba2a6feae4ef462a0ca3dd41f";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=New York&APPID=586f0aaba2a6feae4ef462a0ca3dd41f&units=metric";

axios.get(apiUrl).then(displayTemperature);
