import { Link } from 'react-router-dom';
import { Clock, MapPin, Tag } from 'lucide-react';
import Rating from '../common/Rating';
import { Restaurant } from '../../types';

interface MenuCardProps {
  restaurant: Restaurant;
}

const MenuCard = ({ restaurant }: MenuCardProps) => {
  return (
    <Link to={`/store/${restaurant.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
        <div className="relative">
          <img 
            src={restaurant.imageUrl} 
            alt={restaurant.name} 
            className="w-full h-48 object-cover"
          />
          {restaurant.hasCoupon && (
            <div className="absolute top-3 right-3 bg-[#84D904] text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
              <Tag className="w-3 h-3 mr-1" />
              Cupom
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-16"></div>
          <div className="absolute bottom-2 left-3 text-white font-semibold text-lg">{restaurant.name}</div>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">{restaurant.category}</span>
            <Rating value={restaurant.rating} reviewCount={restaurant.reviewCount} />
          </div>
          
          <div className="space-y-1 mt-3">
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-1 text-[#048ABF]" />
              <span>{restaurant.distance}</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="w-4 h-4 mr-1 text-[#048ABF]" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm font-medium">Taxa de entrega: {restaurant.deliveryFee}</span>
              {restaurant.hasCoupon && (
                <span className="text-xs text-white bg-[#84D904] px-2 py-1 rounded-lg">Descontos Disponíveis</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MenuCard;