const WeatherDetails = ({ data }) => {
  return (
    <div className="weather">
      <div className="weatherLeft">
        <h2>
          {data.current.temp_c}
          <sup>0</sup>C
        </h2>
        <div className="place">
          <h2>{data.location.name}</h2>
          <p>{data.location.localtime}</p>
        </div>
        <div className="icon">
          <img src={data.current.condition.icon} alt="icon" />
          <p>{data.current.condition.text}</p>
        </div>
      </div>
      <div className="weatherRight">
        <div className="weatherContent">
          <span>Humidity</span>
          <span>{data.current.humidity}</span>
        </div>
        <div className="weatherContent">
          <span>Wind</span>
          <span>{data.current.wind_kph}Kph</span>
        </div>
        <div className="weatherContent">
          <span>Pressure</span>
          <span>{data.current.pressure_in}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
