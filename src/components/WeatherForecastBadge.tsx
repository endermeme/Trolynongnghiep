import { FaTemperatureHalf } from "react-icons/fa6";
import IconBox from "../utils/IconBox";
import hail from "../assets/fill/all/cloudy.svg"

export default function WeatherForecastBadge() {
    return (
        <div className="weather-forecast-badge">
            <img src={hail} width={32} height={32}/>
            <h1>_____ ______</h1>
            <IconBox>
              <FaTemperatureHalf size={16} /> _ °C
            </IconBox>
            <h3></h3>
          </div>
    )
}