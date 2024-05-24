import { FaTemperatureHalf } from "react-icons/fa6";
import IconBox from "../utils/IconBox";
import { weatherDescriptions } from "../utils/weatherDescriptions";


interface WeatherInfo {
  status: string;
  temp?: number;
  date?: string
}


export default function WeatherForecastBadge(props: WeatherInfo) {
  return (
    <div className="bg-sky-300 py-2 rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all flex flex-col justify-center items-center w-32 lg:w-36">
      <h3>{props.date}</h3>
      <img src={weatherDescriptions[props.status].svg_src} width={64} height={64}/>
      <h1 className="text-nowrap overflow-hidden">{weatherDescriptions[props.status].name}</h1>
      <IconBox>
        <FaTemperatureHalf size={16} /> {props.temp && Math.floor(props.temp)} °C
      </IconBox>
    </div>
  );
}
