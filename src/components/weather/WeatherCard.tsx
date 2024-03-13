import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import Image from 'next/image';
import { Skeleton } from "@/components/ui/skeleton"
import { CityData, Payload, WeatherData } from '@/types/types';

const convertToKmH = (wind: number) => {
  const windKmH = wind * 3.6;
  return windKmH.toFixed(1);
};

type WeatherCardProps = {
  weatherInfo: Payload<WeatherData | null>;
  cityInfo: Payload<CityData | null>;
}

const WeatherCard = (props: WeatherCardProps) => {
  const { cityInfo, weatherInfo } = props;
  console.log(weatherInfo);
  const background = weatherInfo.data?.iconUrl.includes('n') ? '#1B9AAA' : '#FFC43D';
  console.log(background);

  return (
    <Card style={{ backgroundColor: background }}>
      <CardHeader className='flex flex-row gap-8 items-center justify-between'>
        <div>
          <CardTitle>{cityInfo.data?.city}</CardTitle>
          <CardDescription>{weatherInfo.data?.description}</CardDescription>
        </div>
        <div className='relative w-20 h-20'>
          {weatherInfo.data?.iconUrl && <Image
            src={`/icons/${weatherInfo.data?.iconUrl}.svg`}
            alt='weather icon'
            fill
            className='object-contain'
          />}
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
  );
};

export default WeatherCard;
