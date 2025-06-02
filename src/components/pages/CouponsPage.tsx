import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tag, ChevronRight, Percent, DollarSign } from 'lucide-react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { restaurants } from '../../data/restaurants';
import type { Restaurant } from '../../types';

const CouponsPage = () => {
  const [selectedDiscount, setSelectedDiscount] = useState<string>('all');
  
  const restaurantsWithCoupons = restaurants.filter(restaurant => restaurant.hasCoupon);
  
  const filteredRestaurants = selectedDiscount === 'all' 
    ? restaurantsWithCoupons
    : restaurantsWithCoupons.filter(restaurant => {
        if (selectedDiscount === 'fixed20') {
          return restaurant.discountType === 'fixed' && restaurant.discountAmount === 20;
        }
        if (selectedDiscount === 'percentage20') {
          return restaurant.discountType === 'percentage' && restaurant.discountAmount === 20;
        }
        return false;
      });

  const discountTypes = [
    { id: 'all', name: 'Todos os Cupons', icon: Tag },
    { id: 'fixed20', name: 'R$ 20 OFF', icon: DollarSign },
    { id: 'percentage20', name: '20% OFF', icon: Percent },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar 
        onSearch={() => {}} 
        onCategoryChange={() => {}}
        selectedCategory="all"
      />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Cupons Disponíveis</h1>
        
        <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
          {discountTypes.map(type => (
            <button
              key={type.id}
              onClick={() => setSelectedDiscount(type.id)}
              className={`flex items-center px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                selectedDiscount === type.id
                  ? 'bg-[#84D904] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <type.icon className="w-4 h-4 mr-2" />
              {type.name}
            </button>
          ))}
        </div>
        
        <div className="grid gap-4">
          {filteredRestaurants.length === 0 ? (
            <div className="text-center py-8 bg-white rounded-lg shadow">
              <Tag className="w-12 h-12 mx-auto text-gray-400 mb-3" />
              <p className="text-gray-600">Nenhum cupom encontrado com este filtro.</p>
            </div>
          ) : (
            filteredRestaurants.map((restaurant) => (
              <Link 
                key={restaurant.id} 
                to={`/store/${restaurant.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center p-4">
                  <div className="w-20 h-20 flex-shrink-0">
                    <img 
                      src={restaurant.imageUrl} 
                      alt={restaurant.name} 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="ml-4 flex-grow">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-semibold text-gray-800">{restaurant.name}</h2>
                      {restaurant.discountType === 'percentage' ? (
                        <Percent className="w-5 h-5 text-[#84D904]" />
                      ) : (
                        <DollarSign className="w-5 h-5 text-[#84D904]" />
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-600 mt-1">{restaurant.category}</p>
                    
                    <div className="mt-2 flex items-center justify-between">
                      <div className="bg-[#84D904] text-white text-sm px-3 py-1 rounded-full">
                        {restaurant.discountValue}
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CouponsPage;