const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=d8270f657ef655709239a607a6ea86d0&query=${longitude},${latitude}&units=f`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const message = `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees but it feels like ${body.current.feelslike} degrees out there.`;
      callback(undefined, message);
    }
  });
};

module.exports = forecast;
