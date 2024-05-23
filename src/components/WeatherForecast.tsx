import { FaLocationDot, FaTemperatureHalf } from "react-icons/fa6";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import IconBox from "../utils/IconBox";
import hail from "../assets/fill/all/hail.svg";
import WeatherForecastBadge from "./WeatherForecastBadge";
export default function WeatherForecast() {
  const svg_size = 100;
  return (
    <div className="bg-white bg-opacity-80 shadow-2xl rounded-xl flex lg:flex-row flex-col p-4">
      <div className="flex items-center grow rounded-xl justify-center p-4 gap-4 lg:gap-16">
        <div className="flex flex-col justify-start">
          <IconBox>
            <FaLocationDot size={16} /> Current location
          </IconBox>
          <IconBox>
            <FaTemperatureHalf size={16} /> _ °C
          </IconBox>
          <IconBox>
            <WiStrongWind size={16} /> _ m/s
          </IconBox>
          <IconBox>
            <WiHumidity size={16} /> _ %
          </IconBox>
        </div>
        <div className="flex items-center">
          <img src={hail} width={svg_size} height={svg_size} />
          <h1>Mưa nhiều</h1>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <WeatherForecastBadge />
        <WeatherForecastBadge />
        <WeatherForecastBadge />
        <WeatherForecastBadge />
      </div>
    </div>
  );
}
