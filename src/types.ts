export interface SkiResort {
  id: string;
  name: string;
  location: string;
  elevation: number;
  newSnow: number;
  closedRunsYesterday: number;
  openRunsToday: number;
  powderRating: number;
  image: string;
  lifts: Lift[];
  weather: WeatherCondition;
}

export interface Lift {
  id: string;
  name: string;
  status: 'open' | 'closed' | 'hold' | 'scheduled';
  type: 'gondola' | 'chairlift' | 'surface';
  servesTerrainPark: boolean;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface WeatherCondition {
  temperature: number;
  windSpeed: number;
  snowfall: number;
  forecast: string;
}

export const calculatePowderRating = (
  newSnow: number,
  closedRunsYesterday: number,
  weather: WeatherCondition
): number => {
  // Base score from new snow (up to 5 points)
  const snowScore = Math.min(newSnow / 12 * 5, 5);
  
  // Previously closed runs bonus (up to 2 points)
  // More closed runs yesterday means higher chance of untouched powder
  const closedRunsBonus = Math.min(closedRunsYesterday / 10 * 2, 2);
  
  // Weather conditions impact (up to 3 points)
  const temperatureScore = weather.temperature < 28 ? 1 : 
                          weather.temperature < 32 ? 0.8 : 0.5;
  
  // Wind can affect snow quality
  const windPenalty = Math.max(0, 1 - (weather.windSpeed / 30));
  
  // Ongoing snowfall bonus
  const ongoingSnowBonus = weather.snowfall > 0 ? 1 : 0;
  
  const weatherScore = (temperatureScore + windPenalty + ongoingSnowBonus);
  
  // Calculate final score (0-10 scale)
  return Math.min(Math.round((snowScore + closedRunsBonus + weatherScore) * 10) / 10, 10);
};