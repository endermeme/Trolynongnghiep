import Menu from "./components/Menu";
import WeatherForecast from "./components/WeatherForecast";

function App() {
  return (
    <>
    <div className="flex flex-col gap-4">
      <WeatherForecast />
      <Menu />
    </div>
    </>
  );
}

export default App;
