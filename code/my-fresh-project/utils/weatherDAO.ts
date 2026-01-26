type CityInfoDao = {
  city: string;
  citykey: string;
  parent: string;
  updateTime: string;
};

type ForecastInfo = {
  date: string;
  high: string;
  low: string;
  ymd: string;
  week: string;
  sunrise: string;
  sunset: string;
  aqi: number;
  fx: string;
  fl: string;
  type: string;
  notice: string;
};
export type WeatherInfoRow = {
  message: string;
  status: number;
  date: string;
  time: string;
  cityInfo: CityInfoDao;
  data: {
    shidu: string;
    pm25: number;
    pm10: number;
    quality: string;
    wendu: string;
    gaomao: string;
    forecast: ForecastInfo[];
  };
};
