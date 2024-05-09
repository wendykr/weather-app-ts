import { useState, useEffect} from 'react';
import './Forecast.css';
import { getDayfromUnix } from '../../helpers/helpers';

interface WeatherDataStructure {
  city: {
    name: string;
  };
  list: {
    dt: number;
    main: {
      temp: number;
    };
    weather: {
      icon: string;
    }[];
  }[];
}

interface ForecastProps {
  city: string;
}

export const Forecast:React.FC<ForecastProps> = ({ city }) => {
  const [forecast, setForecast] = useState<WeatherDataStructure['list'] | null>(null);
  const apiId = import.meta.env.VITE_MY_API_ID;

  useEffect(() => {
    const fetchWeather = async (): Promise<void> => {
      try {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&appid=${apiId}`);
          if (!response.ok) {
              throw new Error('Failed to fetch weather data');
          }
          const data: WeatherDataStructure = await response.json();

          const filteredForecast = data.list.filter((_, index: number) => index % 8 === 0);
          setForecast(filteredForecast);
      } catch (error) {
          console.error('Error fetching weather data:', error);
      }
    };
    fetchWeather();
  }, [city, apiId]);

  return (
    <>
      {
        forecast ? 
          forecast.map((item, index) => (
            <div className="forecast" key={index}>
              <div className="forecast__day">{getDayfromUnix(item.dt)}</div>
              <div className="forecast__icon">
                <img
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  style={{ height: "100%" }}
                  alt="current weather icon"
                />
              </div>
              <div className="forecast__temp">{Math.round(item.main.temp)} °C</div>
            </div>
          ))
          : <div className="forecast">Data loading...</div>
      }
    </>
  )
}