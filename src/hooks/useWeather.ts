'use client';

import { useState, useEffect } from 'react';

interface WeatherData {
  temp: number;
  humidity: number;
  wind: number;
  main: string;
  description: string;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

const useWeather = ({ latitude, longitude }: Coordinates) => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);
        const result = await response.json();

        if (response.ok) {
          setData({
            temp: result.main.temp,
            humidity: result.main.humidity,
            wind: result.wind.speed,
            main: result.weather[0].main,
            description: result.weather[0].description,
          });
        } else {
          throw new Error(result.message);
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [latitude, longitude]);

  return { data, loading, error };
};

export default useWeather;
