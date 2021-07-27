import axios from "axios"

export function getWeather(input) {
    const apiKeyWeatherAPI = "04fd0ca58baa4f0b836181340212806";
    
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKeyWeatherAPI}&q=${input}&days=3&aqi=yes&alerts=yes`)
    .then(function (response) {
      // handle success
      console.log(response);
      return response
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
      console.log("getWeather done!")
    });
  
}
