const kelvinToCelsius = (v) => v - 273.15;

const unixToTimestamp = (v) => v * 1000;

const hPaToMillimetersOfMercury = (v) => v * 100 / 133.3223684;

const weatherDescriptionTranslations = (v) => {
  const translations = {
    'Clear': 'Ясно',
    'Clouds': 'Облачно',
    'Thunderstorm': 'Гроза',
    'Rain': 'Дождь',
    'Snow': 'Снег',
  };

  return translations[v] || v;
};

const mapWeatherDescriptionToReadable = (list) => list.map(({ main }) => weatherDescriptionTranslations(main)).join(', ');

const mapWeatherResponse = ({ clouds, main: { temp, feels_like, pressure, humidity }, rain, snow, weather, wind, name, dt}) => ({
  measures: {
    temp: kelvinToCelsius(temp).toFixed(0),
    feels_like: kelvinToCelsius(feels_like).toFixed(0),
    pressure: hPaToMillimetersOfMercury(pressure).toFixed(0),
    humidity
  },
  updatedAt: unixToTimestamp(dt),
  rain,
  snow,
  clouds,
  weather_description: mapWeatherDescriptionToReadable(weather),
  name,
  wind
});

export { mapWeatherResponse };
