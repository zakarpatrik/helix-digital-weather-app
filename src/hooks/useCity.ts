'use client';

import { useState, useEffect } from 'react';

interface CityData {
  city: string;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

const useCity = ({ latitude, longitude }: Coordinates) => {
  const [data, setData] = useState<CityData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;
        const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=${apiKey}`;

        const response = await fetch(url);
        const result = await response.json();

        if (response.ok) {
          setData({
            city: result[0].name,
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

export default useCity;
