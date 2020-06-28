import config from '../../config/config';
const { api_key, default_coords } = config;

class ApiService {
  get weather() {
    return {
      load: ({ lat, lon } = default_coords) => {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
          .then((response) => {
            try {
              return Promise.resolve(response.json());
            } catch (e) {
              return Promise.reject();
            }
          }).then((d) => d);
      }
    }
  }

  get geolocation() {
    return {
      getPosition: async () => {
        if (navigator.geolocation) {
          return new Promise((resolve, reject) => {
            return navigator.geolocation.getCurrentPosition(
              ({ coords: { longitude, latitude }}) => resolve({ lon: longitude, lat: latitude }),
              () => reject(),
              { timeout: 1000 * 60 }
            )
          })
        }

        return Promise.reject();
      }
    }

  }
}

const Api = new ApiService();

export { Api };
