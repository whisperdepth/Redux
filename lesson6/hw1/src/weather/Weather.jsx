import React from "react";
import { connect } from "react-redux";
import { getWeatherData } from "./weather.actions";

class Weather extends React.Component {
  componentDidMount() {
    this.props.getWeatherData();
  }

  render() {
    return (
      <main className="weather">
        <h1 className="weather__title">Weather</h1>
        <ul className="cities-list">
          {this.props.weatherData.weather.map((city) => (
            <li key={city.id} className="city">
              <span className="city__name">{city.name}</span>
              <span className="city__temperature">{city.temperature}</span>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

const mapState = (state) => {
  return {
    weatherData: state,
  };
};

const mapDispatch = {
  getWeatherData: getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
