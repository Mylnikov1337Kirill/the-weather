const kelvinToCelsius = (v) => v - 273.15;

const mapWeatherResponse = ({ clouds, main: { temp, feels_like, pressure, humidity }, rain, coord, weather, wind }) => ({
  clouds,
  measures: {
    temp: kelvinToCelsius(temp).toFixed(0),
    feels_like: kelvinToCelsius(feels_like).toFixed(0),
    pressure,
    humidity
  },
  rain,
  coord,
  weather,
  wind
});

export { mapWeatherResponse };
