import React from 'react';
import { Card, CardHeader, CardContent } from '../ui/card';
import { Skeleton } from "@/components/ui/skeleton"
import styles from './weather.module.scss';


const WeatherCardSkeleton = () => {
  return (
    <Card>
      <CardHeader className={`flex flex-row gap-8 items-center justify-between ${styles['weather-component-header']}`}>
        <div className='w-1/3 flex gap-2 flex-col'>
          <Skeleton className='h-6 w-full' />
          <Skeleton className='h-4 w-full' />
        </div>
        <div className='relative w-20 h-20'>
          <Skeleton className='w-full h-full rounded-full' />
        </div>
      </CardHeader>
      <CardContent>
        <div className='flex flex-wrap gap-8 w-full justify-between'>
          <div>
            <h4 className='text-sm'>Hőmérséklet</h4>
            <h2 className='text-2xl font-bold'>
              <Skeleton className='w-full h-5' />
            </h2>
          </div>
          <div>
            <h4 className='text-sm'>Páratartalom</h4>
            <h2 className='text-2xl font-bold'>
              <Skeleton className='w-full h-5' />
            </h2>
          </div>
          <div>
            <h4 className='text-sm'>Szélsebesség</h4>
            <h2 className='text-2xl font-bold'>
              <Skeleton className='w-full h-5' />
            </h2>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCardSkeleton;
