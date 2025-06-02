import { Star } from 'lucide-react';

interface RatingProps {
  value: number;
  reviewCount?: number;
}

const Rating = ({ value, reviewCount }: RatingProps) => {
  const fullStars = Math.floor(value);
  const hasHalfStar = value - fullStars >= 0.5;
  
  return (
    <div className="flex items-center">
      <div className="flex">
        {[...Array(5)].map((_, index) => {
          if (index < fullStars) {
            return (
              <Star 
                key={index} 
                className="w-4 h-4 text-yellow-400 fill-yellow-400" 
              />
            );
          } else if (index === fullStars && hasHalfStar) {
            return (
              <div key={index} className="relative">
                <Star className="w-4 h-4 text-gray-300 fill-gray-300" />
                <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                </div>
              </div>
            );
          } else {
            return (
              <Star 
                key={index} 
                className="w-4 h-4 text-gray-300 fill-gray-300" 
              />
            );
          }
        })}
      </div>
      <span className="ml-1 text-sm font-medium text-gray-700">{value.toFixed(1)}</span>
      {reviewCount !== undefined && (
        <span className="ml-1 text-xs text-gray-500">({reviewCount})</span>
      )}
    </div>
  );
};

export default Rating;