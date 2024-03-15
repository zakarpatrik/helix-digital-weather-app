import WeatherComponent from '@/components/weather/WeatherComponent';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={`flex justify-center w-full h-screen items-center p-4 ${styles.main}`}>
      <div className={`flex max-w-[1000px] w-full justify-stretch gap-8 ${styles['components-container']}`}>
        <WeatherComponent />
        <WeatherComponent />
      </div>
    </main>
  );
}
