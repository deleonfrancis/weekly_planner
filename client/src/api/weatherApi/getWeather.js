import axios from "axios";

export let weatherResponse;
// console.log(`weatherResponse: ${weatherResponse}`);

export function getWeather(input) {
  const apiKeyWeatherAPI = "04fd0ca58baa4f0b836181340212806";

  return axios
    .get(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKeyWeatherAPI}&q=${input}&days=3&aqi=yes&alerts=yes`
    )
    .then(function (response) {
      // handle success
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}
