import React from 'react';
import { WeatherCondition } from '../types';
import { Snowflake, Wind, Thermometer } from 'lucide-react';

interface PowderScoreProps {
  score: number;
  newSnow: number;
  closedRunsYesterday: number;
  weather: WeatherCondition;
}

export const PowderScore: React.FC<PowderScoreProps> = ({
  score,
  newSnow,
  closedRunsYesterday,
  weather
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold dark:text-white">Powder Rating</h3>
        <div className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded-full">
          <Snowflake className="w-4 h-4" />
          <span className="font-bold">{score.toFixed(1)}/10</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <Snowflake className="w-4 h-4 text-blue-500" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">New Snow</p>
              <p className="font-semibold dark:text-white">{newSnow}"</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Wind className="w-4 h-4 text-blue-500" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Wind Speed</p>
              <p className="font-semibold dark:text-white">{weather.windSpeed} mph</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Thermometer className="w-4 h-4 text-blue-500" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Temperature</p>
            <p className="font-semibold dark:text-white">{weather.temperature}°F</p>
          </div>
        </div>

        <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {closedRunsYesterday} runs that were closed yesterday are now open, 
            increasing chances of fresh powder!
          </p>
        </div>
      </div>
    </div>
  );
};