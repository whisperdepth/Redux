import { WEATHER_DATA_RECEIVED } from "./weather.actions";

export default (state = [], action) => {
  switch (action.type) {
    case WEATHER_DATA_RECEIVED:
      return action.payload.weatherData;
    default:
      return state;
  }
};
