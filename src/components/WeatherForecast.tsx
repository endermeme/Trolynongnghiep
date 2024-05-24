import { FaLocationDot, FaTemperatureHalf } from "react-icons/fa6";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import IconBox from "../utils/IconBox";
import WeatherForecastBadge from "./WeatherForecastBadge";
import * as wt from "../weather_fetching"
import { weatherDescriptions } from "../utils/weatherDescriptions";

const getWeatherInfo = await wt.fetchWeather()

export default function WeatherForecast() {
  const svg_size = 100;
  
  return (
    <div className="flex lg:flex-row flex-col p-2">
      <div className="flex items-center rounded-xl justify-center px-12 gap-16 lg:gap-24 bg-white mr-4">
        <div className="flex flex-col justify-start">
          <IconBox>
            <FaLocationDot size={16} /> Thái Bình
          </IconBox>
          <IconBox>
            <FaTemperatureHalf size={16} /> {getWeatherInfo?.current.temperature && Math.floor(getWeatherInfo?.current.temperature)} °C
          </IconBox>
          <IconBox>
            <WiStrongWind size={16} /> {getWeatherInfo?.current.wind} m/s
          </IconBox>
          <IconBox>
            <WiHumidity size={16} /> {getWeatherInfo?.current.humidity} %
          </IconBox>
        </div>
        <div className="flex items-center">
          <img src={weatherDescriptions[getWeatherInfo?.current.weather].svg_src} width={svg_size} height={svg_size} />
          <h1>{weatherDescriptions[getWeatherInfo?.current.weather].name}</h1>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <WeatherForecastBadge temp={getWeatherInfo?.forecast[0].temperature} status={getWeatherInfo?.forecast[0].weather}/>
        <WeatherForecastBadge temp={getWeatherInfo?.forecast[1].temperature} status={getWeatherInfo?.forecast[1].weather}/>
        <WeatherForecastBadge temp={getWeatherInfo?.forecast[2].temperature} status={getWeatherInfo?.forecast[2].weather}/>
        <WeatherForecastBadge temp={getWeatherInfo?.forecast[3].temperature} status={getWeatherInfo?.forecast[3].weather}/>
      </div>
    </div>
  );
}
