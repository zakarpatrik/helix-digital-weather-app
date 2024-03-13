export interface Coordinates {
  latitude: number | null;
  longitude: number | null;
}

export interface WeatherData {
  temp: number;
  humidity: number;
  wind: number;
  main: string;
  description: string;
  iconUrl: string;
}

export interface CityData {
  city: string;
}

export interface Payload<T> {
  data: T;
  error?: any;
  loading: boolean;
}
