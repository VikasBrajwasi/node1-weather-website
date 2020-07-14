const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5dfbf1439d221cab632b71d6b3b3fa9d&query=' + latitude + ',' + longitude + '&units=f';

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect weather services!!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + '. It is currently '+ body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degress out. In ' + body.location.name + ', ' + body.location.region + ', ' + body.location.country + '.');
        }
    })
}

module.exports = forecast;