import { useState } from "react";
import useFectch from "../useFetch";
import WeatherDetails from "./WeatherDetails";

const Header = () => {
  const [input, setInput] = useState("");
  const [city, setCity] = useState("Patna");

  const { data, isLoading } = useFectch(
    `https://api.weatherapi.com/v1/current.json?key=5aeb33e759a140ada81140327232001&q=${city}&aqi=no`
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(input);
    setInput("");
  };

  return (
    <>
      <div className="header">
        <h1 className="left">The Weather</h1>
        <form className="right">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search city..."
            required
          />
          <button type="submit" onClick={handleSubmit}>
            Search
          </button>
        </form>
      </div>
      {isLoading && <h1>Loading...</h1>}
      {data && <WeatherDetails data={data} />}
    </>
  );
};

export default Header;
