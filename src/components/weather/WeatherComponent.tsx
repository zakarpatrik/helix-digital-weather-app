'use client';
import useCity from '@/hooks/useCity';
import useWeather from '@/hooks/useWeather';
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import WeatherCard from './WeatherCard';
import WeatherCardSkeleton from './WeatherCardSkeleton';
import { Label } from "@/components/ui/label"
import CoordinateInput from './CoordinateInput';

const WeatherComponent = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  const weatherInfo = useWeather({ latitude, longitude });
  const cityInfo = useCity({ latitude, longitude });

  
  const handleLatitudeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLatitude(parseFloat(e.target.value));
  };
  
  const handleLongitudeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLongitude(parseFloat(e.target.value));
  };

  return (
      <div className='flex flex-col gap-4 w-full'>
        <CoordinateInput handleLatitudeChange={handleLatitudeChange} handleLongitudeChange={handleLongitudeChange} />
        {latitude && longitude
            ? <WeatherCard cityInfo={cityInfo} weatherInfo={weatherInfo} /> 
            : <WeatherCardSkeleton />}
      </div>
    )
};

export default WeatherComponent;
