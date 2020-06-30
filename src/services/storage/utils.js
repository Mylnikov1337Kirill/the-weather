const kelvinToCelsius = (v) => v - 273.15;

const hPaToMillimetersOfMercury = (v) => v * 100 / 133.3223684;

const weatherDescriptionTranslations = (v) => {
  const translations = {
   'Clear': 'Ясно',
    'Clouds': 'Облачно',
    'Thunderstorm': 'Гроза',
    'Rain': 'Дождь'
  };

  return translations[v] || v;
};

const mapWeatherDescriptionToReadable = (list) => list.map(({ main }) => weatherDescriptionTranslations(main)).join(', ');

const mapWeatherResponse = ({ clouds, main: { temp, feels_like, pressure, humidity }, rain, weather, wind, name }) => ({
  measures: {
    temp: kelvinToCelsius(temp).toFixed(0),
    feels_like: kelvinToCelsius(feels_like).toFixed(0),
    pressure: hPaToMillimetersOfMercury(pressure).toFixed(0),
    humidity
  },
  rain,
  clouds,
  weather_description: mapWeatherDescriptionToReadable(weather),
  name,
  wind
});

export { mapWeatherResponse };
