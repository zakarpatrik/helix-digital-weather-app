import WeatherComponent from '@/components/weather/WeatherComponent';

export default function Home() {
  return (
    <main className='flex justify-center w-full h-screen items-center'>
      <div className='flex max-w-[1000px] w-full justify-stretch gap-8'>
        <WeatherComponent />
        <WeatherComponent />
      </div>
    </main>
  );
}
