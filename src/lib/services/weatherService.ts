const endpoint = 'https://api.open-meteo.com/v1/forecast'

export async function getWeather(options) {
    const query = makeNewWeatherQuery(options);
    const res = await fetch(`${endpoint}?${query}`);
     if (res.ok) {
         const data = await res.json()
         console.log(data)
     }
}

export default {
    async getCurrentWeather(options) {
        const query = makeNewWeatherQuery(options);
        const res = await fetch(`${endpoint}?${query}`);
        if (res.ok) {
            const weatherData = await res.json()
            return parseWeatherData(weatherData);
        }
    }
}

function parseWeatherData(weatherData) {
    const weather = {currentTemperature: null};
    if (!weatherData) return;
    if (weatherData.current_weather) {
        if (weatherData.current_weather.temperature) {
            weather.currentTemperature = weatherData.current_weather.temperature;
        }
    }
    return weather;
    // {"latitude":39.02,"longitude":-8.98,"generationtime_ms":0.3440380096435547,"utc_offset_seconds":0,"timezone":"GMT","timezone_abbreviation":"GMT","elevation":20.0,"current_weather":{"temperature":18.0,"windspeed":14.2,"winddirection":324.0,"weathercode":3,"is_day":0,"time":"2023-05-27T22:00"}}
}

export function makeNewWeatherQuery(options) {
    const query = new URLSearchParams();
    query.set('latitude', options.latitude);
    query.set('longitude', options.longitude);
    query.set('current_weather', 'true');
    // query.set('hourly', 'temperature_2m,relativehumidity_2m');
    // '?latitude=39.0232352&longitude=-8.9799447&hourly=temperature_2m,relativehumidity_2m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset'
    return query.toString();
}