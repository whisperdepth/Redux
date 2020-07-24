export const WEATHER_DATA_RECEIVED = "WEATHER/WEATHER_DATA_RECEIVED";
import fetchWeatherData from "./weather.gateway";

export const weatherDataReceived = (weatherData) => {
  return {
    type: WEATHER_DATA_RECEIVED,
    payload: {
      weatherData,
    },
  };
};

export const getWeatherData = () => {
  return (dispatch) => {
    fetchWeatherData().then((weatherData) =>
      dispatch(weatherDataReceived(weatherData))
    );
  };
};
