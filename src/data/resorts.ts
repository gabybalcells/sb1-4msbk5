import { SkiResort } from '../types';

export const resorts: SkiResort[] = [
  {
    id: '1',
    name: 'Powder Mountain',
    location: 'Utah',
    elevation: 8900,
    newSnow: 14,
    closedRunsYesterday: 8,
    openRunsToday: 142,
    powderRating: 9.5,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80',
    weather: {
      temperature: 28,
      windSpeed: 5,
      snowfall: 2,
      forecast: 'Light snow'
    },
    lifts: [
      {
        id: 'pm1',
        name: 'Hidden Lake Express',
        status: 'open',
        type: 'chairlift',
        servesTerrainPark: false,
        difficulty: 'advanced'
      },
      {
        id: 'pm2',
        name: 'Paradise Lift',
        status: 'closed',
        type: 'chairlift',
        servesTerrainPark: false,
        difficulty: 'expert'
      },
      {
        id: 'pm3',
        name: 'Sundown Lift',
        status: 'open',
        type: 'chairlift',
        servesTerrainPark: true,
        difficulty: 'intermediate'
      }
    ]
  },
  {
    id: '2',
    name: 'Jackson Hole',
    location: 'Wyoming',
    elevation: 10450,
    newSnow: 18,
    closedRunsYesterday: 12,
    openRunsToday: 116,
    powderRating: 9.8,
    image: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?auto=format&fit=crop&q=80',
    weather: {
      temperature: 25,
      windSpeed: 8,
      snowfall: 3,
      forecast: 'Heavy snow'
    },
    lifts: [
      {
        id: 'jh1',
        name: 'Teton Lift',
        status: 'open',
        type: 'chairlift',
        servesTerrainPark: false,
        difficulty: 'expert'
      },
      {
        id: 'jh2',
        name: 'Gondola',
        status: 'hold',
        type: 'gondola',
        servesTerrainPark: false,
        difficulty: 'intermediate'
      }
    ]
  },
  {
    id: '3',
    name: 'Whistler Blackcomb',
    location: 'British Columbia',
    elevation: 7494,
    newSnow: 8,
    closedRunsYesterday: 5,
    openRunsToday: 200,
    powderRating: 7.9,
    image: 'https://images.unsplash.com/photo-1520891422668-fe731254aff0?auto=format&fit=crop&q=80',
    weather: {
      temperature: 30,
      windSpeed: 12,
      snowfall: 1,
      forecast: 'Light snow'
    },
    lifts: [
      {
        id: 'wb1',
        name: 'Peak Express',
        status: 'open',
        type: 'chairlift',
        servesTerrainPark: false,
        difficulty: 'expert'
      },
      {
        id: 'wb2',
        name: 'Symphony Express',
        status: 'scheduled',
        type: 'chairlift',
        servesTerrainPark: false,
        difficulty: 'advanced'
      }
    ]
  }
];