import {getWeather} from "./getWeather";

// Logic for getting weather for nearby location
let lat = "";
let long = "";

export function currentPositionWeatherService() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getGeoWeather, showError);
    } else {
        console.log("geolocation error")
    //   $("#error-display")
    //     .text("Geolocation is not supported by this browser.")
    //     .addClass("mt-5");
    }
  };
// window.onload = function () {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(getGeoWeather, showError);
//     } else {
//         console.log("geolocation error")
//     //   $("#error-display")
//     //     .text("Geolocation is not supported by this browser.")
//     //     .addClass("mt-5");
//     }
//   };

  function getGeoWeather(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    console.log(lat, long);
    getWeather(`${lat} ${long}`);
  }

  function showError(error) {
    // setLoading(false);
    switch (error.code) {
      case error.PERMISSION_DENIED:
        // $("#error-display")
        //   .text("Please verify 'Location Services' is on and try again.")
        //   .addClass("mt-5");
        console.log("PERMISSION_DENIED")
        break;
      case error.POSITION_UNAVAILABLE:
        // $("#error-display")
        //   .text("Location information is unavailable.")
        //   .addClass("mt-5");
        console.log("POSITION_UNAVAILABLE")
        break;
      case error.TIMEOUT:
        // $("#error-display")
        //   .text("The request to get user location timed out.")
        //   .addClass("mt-5");
        console.log("TIMEOUT")
        break;
      case error.UNKNOWN_ERROR:
        // $("#error-display").text("An unknown error occurred.").addClass("mt-5");
        console.log("UNKNOWN_ERROR")
        break;
        default:
        console.log("default show error")
    }
  }