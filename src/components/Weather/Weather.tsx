import { useState, useEffect } from 'react';
import './Weather.css';
import { WeatherCurrent } from "../WeatherCurrent/WeatherCurrent";
import { Forecast } from '../Forecast/Forecast';

interface Weather {
  main: string;
  icon: string;
}

export interface WeatherDataStructure {
  weather: {
    main: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  name: string;
}

interface WeatherProps {
  city: string;
}

export const Weather: React.FC<WeatherProps> = ({ city }) => {
  const [weatherData, setWeatherData] = useState<WeatherDataStructure | null>(null);
  const apiId = import.meta.env.VITE_MY_API_ID;

  useEffect(() => {
    const fetchWeather = async (): Promise<void> => {
      try {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiId}`);
          if (!response.ok) {
              throw new Error('Failed to fetch weather data');
          }
          const data: WeatherDataStructure = await response.json();
          setWeatherData(data);
      } catch (error) {
          console.error('Error fetching weather data:', error);
      }
    };
    fetchWeather();
  }, [apiId, city]);

  return (
    <div className="weather">
      {
        weatherData
          ?
            <WeatherCurrent weatherData={weatherData} />
          : 
            <div className="weather__loading">Data loading...</div>
      }
      <div className="weather__forecast" id="predpoved">
        <Forecast city={city} />
      </div>
    </div>
  )
}