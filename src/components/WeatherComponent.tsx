'use client';
import useCity from '@/hooks/useCity';
import useWeather from '@/hooks/useWeather';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

const convertToKmH = (wind: number) => {
  const windKmH = wind * 3.6;
  return windKmH.toFixed(1);
};

const WeatherComponent = () => {
  const weatherInfo = useWeather({ latitude: 47.498, longitude: 19.0399 });
  const cityInfo = useCity({ latitude: 47.498, longitude: 19.0399 });
  console.log(weatherInfo);
  return (
    !weatherInfo.loading &&
    !cityInfo.loading && (
      <Card>
        <CardHeader className='flex flex-row gap-8 items-center justify-between'>
          <div>
            <CardTitle>{cityInfo.data?.city}</CardTitle>
            <CardDescription>{weatherInfo.data?.description}</CardDescription>
          </div>
          <div className='relative w-8 h-8'>
            <Image
              src={weatherInfo.data?.iconUrl as string}
              alt='weather icon'
              fill
              className='object-contain'
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className='flex gap-8 w-full justify-between'>
            <div>
              <h4 className='text-sm'>Hőmérséklet</h4>
              <h2 className='text-2xl font-bold'>
                {weatherInfo.data?.temp} <sup>o</sup>C
              </h2>
            </div>
            <div>
              <h4 className='text-sm'>Páratartalom</h4>
              <h2 className='text-2xl font-bold'>
                {weatherInfo.data?.humidity} %
              </h2>
            </div>
            <div>
              <h4 className='text-sm'>Szélsebesség</h4>
              <h2 className='text-2xl font-bold'>
                {convertToKmH(weatherInfo.data?.wind as number)} km/h
              </h2>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  );
};

export default WeatherComponent;
