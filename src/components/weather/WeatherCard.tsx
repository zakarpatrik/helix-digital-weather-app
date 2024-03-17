import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import Image from 'next/image';
import { CityData, Payload, WeatherData } from '@/types/types';
import styles from './weather.module.scss';

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
  const background = weatherInfo.data?.iconUrl.includes('n') ? styles['nighttime-gradient'] : styles['daytime-gradient'];

  return (
    <Card className={`${background}`}>
      <CardHeader className={`flex flex-row gap-8 items-center justify-between ${styles['weather-component-header']}`}>
        <div>
          <CardTitle className='text-white'>{cityInfo.data?.city}</CardTitle>
          <CardDescription className='text-slate-200'>{weatherInfo.data?.description}</CardDescription>
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
        <div className={`flex flex-wrap gap-8 w-full justify-between ${styles['weather-component-card']}`}>
          <div>
            <h4 className='text-sm text-slate-200'>Hőmérséklet</h4>
            <h2 className='text-2xl font-bold text-white'>
              {weatherInfo.data?.temp} <sup>o</sup>C
            </h2>
          </div>
          <div>
            <h4 className='text-sm text-slate-200'>Páratartalom</h4>
            <h2 className='text-2xl font-bold text-white'>
              {weatherInfo.data?.humidity} %
            </h2>
          </div>
          <div>
            <h4 className='text-sm text-slate-200'>Szélsebesség</h4>
            <h2 className='text-2xl font-bold text-white  '>
              {convertToKmH(weatherInfo.data?.wind as number)} km/h
            </h2>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
