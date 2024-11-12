import React from 'react';
import { Lift } from '../types';
import { ArrowUp, AlertCircle, Clock, CheckCircle2 } from 'lucide-react';

interface LiftStatusProps {
  lifts: Lift[];
}

const statusIcons = {
  open: <CheckCircle2 className="w-4 h-4 text-green-500" />,
  closed: <AlertCircle className="w-4 h-4 text-red-500" />,
  hold: <Clock className="w-4 h-4 text-yellow-500" />,
  scheduled: <Clock className="w-4 h-4 text-blue-500" />
};

const difficultyColors = {
  beginner: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-100',
  intermediate: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-100',
  advanced: 'bg-black text-white dark:bg-gray-700',
  expert: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-100'
};

export const LiftStatus: React.FC<LiftStatusProps> = ({ lifts }) => {
  const openLifts = lifts.filter(lift => lift.status === 'open').length;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold dark:text-white">Lift Status</h3>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {openLifts}/{lifts.length} Open
        </span>
      </div>
      
      <div className="space-y-2">
        {lifts.map(lift => (
          <div
            key={lift.id}
            className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition"
          >
            <div className="flex items-center gap-2">
              {statusIcons[lift.status]}
              <span className="text-sm font-medium dark:text-white">{lift.name}</span>
            </div>
            
            <div className="flex items-center gap-2">
              {lift.servesTerrainPark && (
                <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-100 rounded">
                  Park
                </span>
              )}
              <span className={`px-2 py-1 text-xs rounded ${difficultyColors[lift.difficulty]}`}>
                {lift.difficulty}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};