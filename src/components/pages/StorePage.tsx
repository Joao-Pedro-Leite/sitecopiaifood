import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Clock, MapPin, DollarSign, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Rating from '../common/Rating';
import { restaurants } from '../../data/restaurants';

const StorePage = () => {
  const { id } = useParams<{ id: string }>();
  const [showDetails, setShowDetails] = useState(false);
  
  const restaurant = restaurants.find(r => r.id === id);
  
  if (!restaurant) {
    return <div className="p-8 text-center">Restaurante não encontrado</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar 
        onSearch={() => {}} 
        onCategoryChange={() => {}}
        selectedCategory="all"
      />
      
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center py-4 text-[#048ABF] hover:text-[#036a92] transition-colors">
            <ChevronLeft className="w-5 h-5" />
            <span>Voltar</span>
          </Link>
        </div>
      </div>
      
      <div className="relative">
        <div className="w-full h-64 bg-gray-300">
          <img 
            src={restaurant.imageUrl} 
            alt={restaurant.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative -mt-16">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{restaurant.name}</h1>
                <div className="mt-2 flex items-center">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full mr-2">
                    {restaurant.category}
                  </span>
                  <Rating value={restaurant.rating} reviewCount={restaurant.reviewCount} />
                </div>
              </div>
              
              <button 
                className="mt-4 md:mt-0 flex items-center text-[#048ABF] hover:text-[#036a92] transition-colors"
                onClick={() => setShowDetails(!showDetails)}
              >
                <span>Ver detalhes</span>
                {showDetails ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
              </button>
            </div>
            
            {showDetails && (
              <div className="mt-6 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#048ABF] mt-0.5 mr-2" />
                  <div>
                    <h3 className="font-medium text-gray-900">Distância</h3>
                    <p className="text-gray-600">{restaurant.distance}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-[#048ABF] mt-0.5 mr-2" />
                  <div>
                    <h3 className="font-medium text-gray-900">Tempo de Entrega</h3>
                    <p className="text-gray-600">{restaurant.deliveryTime}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <DollarSign className="w-5 h-5 text-[#048ABF] mt-0.5 mr-2" />
                  <div>
                    <h3 className="font-medium text-gray-900">Pedido Mínimo</h3>
                    <p className="text-gray-600">{restaurant.minimumOrder}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Cardápio Digital</h2>
            <a 
              href={restaurant.menuUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#048ABF] hover:text-[#036a92] transition-colors flex items-center text-sm"
            >
              <span>Abrir em nova janela</span>
              <ExternalLink className="ml-1 w-4 h-4" />
            </a>
          </div>
          
          <div className="border rounded-lg overflow-hidden h-[600px]">
            <iframe 
              src={"https://delivery.sistemapallas.com.br/b2btiteste"} 
              title={`${restaurant.name} Menu`}
              className="w-full h-full"
              sandbox="allow-same-origin allow-scripts"
            ></iframe>
          </div>
          
          <p className="text-sm text-gray-500 mt-2">
            Este cardápio digital é fornecido pelo restaurante e exibido através de um iframe seguro.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StorePage;