const vibrate = (pattern = 30) => navigator.vibrate(pattern);

const getLocation = () => new Promise((resolve, reject) => {
  return navigator.geolocation.getCurrentPosition(
    ({ coords: { longitude, latitude }}) => resolve({ lon: longitude, lat: latitude }),
    () => reject(),
    { timeout: 1000 * 60 }
  )
});

export { vibrate, getLocation };
