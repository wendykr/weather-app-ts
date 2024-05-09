import './WeatherCurrent.css';
import { WeatherDataStructure } from '../Weather/Weather';
import { getTimefromUnix } from '../../helpers/helpers';

interface WeatherCurrentProps {
  weatherData: WeatherDataStructure;
}

export const WeatherCurrent: React.FC<WeatherCurrentProps> = ({ weatherData }) => {

  return (
    <div className={`weather__current ${Math.round(weatherData.main.temp) < 10 ? 'weather__current--cold' : ''}`}>
      <h2 className="weather__city" id="mesto">
        {weatherData.name}, {weatherData.sys.country}
      </h2>
      <div className="weather__inner weather__inner--center">
        <div className="weather__section weather__section--temp">
          <span className="weather__temp-value" id="teplota">
            {Math.round(weatherData.main.temp)}
          </span>
          <span className="weather__temp-unit">°C</span>
          <div className="weather__description" id="popis">
            {weatherData?.weather[0].main}
          </div>
        </div>
        <div
          className="weather__section weather__section--icon"
          id="ikona"
        >
          <img
            src={`http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
            alt="current weather icon"
          />
        </div>
      </div>
      <div className="weather__inner">
        <div className="weather__section">
          <h3 className="weather__title">Wind</h3>
          <div className="weather__value">
            <span id="wind">{weatherData.wind.speed}</span> km/h
          </div>
        </div>
        <div className="weather__section">
          <h3 className="weather__title">Humidity</h3>
          <div className="weather__value">
            <span id="humidity">{weatherData.main.humidity}</span> %
          </div>
        </div>
      </div>
      <div className="weather__inner">
        <div className="weather__section">
          <h3 className="weather__title">Sunrise</h3>
          <div className="weather__value">
            <span id="sunrise">{getTimefromUnix(weatherData.sys.sunrise)}</span>
          </div>
        </div>
        <div className="weather__section">
          <h3 className="weather__title">Sunset</h3>
          <div className="weather__value">
            <span id="sunset">{getTimefromUnix(weatherData.sys.sunset)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}