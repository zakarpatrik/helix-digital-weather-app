'use client';
import useWeather from '@/hooks/useWeather';
import React from 'react';

const WeatherComponent = () => {
  const weatherInfo = useWeather({latitude: 47.498, longitude: 19.0399});
  return (
    <>
      <div>{weatherInfo.data?.main}</div>
      <div>{weatherInfo.data?.description}</div>
    </>
  )
}

export default WeatherComponent;