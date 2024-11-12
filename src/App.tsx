import React, { useState } from 'react';
import { Header } from './components/Header';
import { ResortCard } from './components/ResortCard';
import { resorts } from './data/resorts';
import { Search, SlidersHorizontal } from 'lucide-react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredResorts = resorts.filter(resort => 
    resort.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resort.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Find Fresh Powder My Dude
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Discover the best skiing conditions based on new snow and recently opened runs.
            </p>
          </div>

          <div className="flex gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resorts or locations..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition dark:text-white">
              <SlidersHorizontal className="w-5 h-5" />
              Filters
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResorts.map(resort => (
              <ResortCard key={resort.id} resort={resort} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;