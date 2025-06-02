import { useState, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import MenuCard from '../cards/MenuCard';
import { restaurants } from '../../data/restaurants';
import { Restaurant } from '../../types';

const MainPage = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(restaurants);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let results = restaurants;

    // Apply category filter
    if (selectedCategory !== 'all') {
      results = results.filter(restaurant => restaurant.category === selectedCategory);
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(restaurant => 
        restaurant.name.toLowerCase().includes(query)
      );
    }

    setFilteredRestaurants(results);
  }, [selectedCategory, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar 
        onSearch={handleSearch} 
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Cardápios Digitais</h1>
        
        {filteredRestaurants.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-600">Nenhum restaurante encontrado com esses filtros.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRestaurants.map((restaurant) => (
              <MenuCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default MainPage;