import { FaTemperatureHalf } from "react-icons/fa6";
import IconBox from "../utils/IconBox";
import { weatherDescriptions } from "../utils/weatherDescriptions";


interface WeatherInfo {
  status: string;
  temp?: number;
}


export default function WeatherForecastBadge(props: WeatherInfo) {
  return (
    <div className="weather-forecast-badge">
      <img src={weatherDescriptions[props.status].svg_src} width={64} height={64}/>
      <h1>{weatherDescriptions[props.status].name}</h1>
      <IconBox>
        <FaTemperatureHalf size={16} /> {props.temp && Math.floor(props.temp)} °C
      </IconBox>
      <h3></h3>
    </div>
  );
}
