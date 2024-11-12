import React, { useState } from 'react';
import { SkiResort } from '../types';
import { Snowflake, Mountain, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { LiftStatus } from './LiftStatus';
import { PowderScore } from './PowderScore';

interface ResortCardProps {
  resort: SkiResort;
}

export const ResortCard: React.FC<ResortCardProps> = ({ resort }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={resort.image}
          alt={resort.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
          <Snowflake className="w-4 h-4 text-blue-500" />
          <span className="font-semibold dark:text-white">{resort.powderRating.toFixed(1)}/10</span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{resort.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 flex items-center gap-1">
              <Mountain className="w-4 h-4" />
              {resort.location}
            </p>
          </div>
          <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/50 rounded-lg p-3">
            <p className="text-sm text-gray-600 dark:text-gray-400">New Snow</p>
            <p className="text-lg font-bold text-blue-900 dark:text-blue-100">{resort.newSnow}"</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/50 rounded-lg p-3">
            <p className="text-sm text-gray-600 dark:text-gray-400">Newly Opened</p>
            <p className="text-lg font-bold text-green-900 dark:text-green-100">
              {resort.closedRunsYesterday} runs
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 w-full flex items-center justify-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 py-2"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Show Details
            </>
          )}
        </button>

        {isExpanded && (
          <div className="mt-4 space-y-4">
            <PowderScore
              score={resort.powderRating}
              newSnow={resort.newSnow}
              closedRunsYesterday={resort.closedRunsYesterday}
              weather={resort.weather}
            />
            <LiftStatus lifts={resort.lifts} />
          </div>
        )}

        <div className="mt-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>Elevation: {resort.elevation.toLocaleString()}ft</span>
          <span>{resort.openRunsToday} runs open</span>
        </div>
      </div>
    </div>
  );
};