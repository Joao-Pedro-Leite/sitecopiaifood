import { Search, User } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import { categories } from '../../data/categories';

interface NavbarProps {
  onSearch: (query: string) => void;
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
}

const Navbar = ({ onSearch, onCategoryChange, selectedCategory }: NavbarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className="bg-[#048ABF] text-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center py-3">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex-shrink-0">
              <Logo />
            </Link>
            <div className="flex items-center space-x-4 md:hidden">
              <Link to="/coupons" className="text-white hover:text-[#84D904] transition-colors">
                Cupons
              </Link>
              <Link to="/user">
                <User className="h-6 w-6" />
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center w-full mt-3 md:mt-0">
            <div className="flex items-center border rounded-full overflow-hidden bg-white px-4 py-1 md:ml-6 flex-grow md:flex-grow-0 md:w-60 lg:w-80">
              <Search className="h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Buscar restaurantes..."
                className="ml-2 outline-none text-gray-700 w-full"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            
            <div className="flex items-center space-x-4 mt-3 md:mt-0 md:ml-6 overflow-x-auto hide-scrollbar">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`whitespace-nowrap px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-[#84D904] text-white font-medium'
                      : 'text-white hover:bg-white hover:bg-opacity-20'
                  }`}
                  onClick={() => onCategoryChange(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="hidden md:flex items-center ml-auto space-x-4">
              <Link 
                to="/coupons" 
                className="text-white hover:text-[#84D904] transition-colors flex items-center"
              >
                Cupons
              </Link>
              <Link to="/user" className="flex items-center space-x-2 hover:bg-white hover:bg-opacity-20 px-3 py-1 rounded-lg">
                <User className="h-5 w-5" />
                <span>Perfil</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;