import WeatherComponent from '@/components/weather/WeatherComponent';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={`flex flex-col justify-center gap-12 w-full min-h-screen items-center p-4 pb-40 ${styles.main}`}>
      <h1 className='text-2xl font-semibold'>Időjárások összehasonlítása</h1>
      <div className={`flex max-w-[1000px] w-full justify-stretch gap-8 ${styles['components-container']}`}>
        <WeatherComponent />
        <WeatherComponent />
      </div>
    </main>
  );
}
