import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, User as UserIcon, Mail, Phone, MapPin, Bell, CreditCard, Shield, Eye, EyeOff } from 'lucide-react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const UserPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  
  // Mock user data
  const user = {
    name: 'João Silva',
    email: 'joao.silva@email.com',
    phone: '(11) 98765-4321',
    address: 'Av. Paulista, 1000, São Paulo, SP',
    notificationsEnabled: true,
    marketingEnabled: false
  };

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
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-[#048ABF] text-white p-6">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                <UserIcon className="w-8 h-8 text-[#048ABF]" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-white text-opacity-80">{user.email}</p>
              </div>
            </div>
          </div>
          
          <div className="flex border-b">
            <button 
              className={`flex-1 py-3 px-4 text-center font-medium ${
                activeTab === 'personal' 
                  ? 'text-[#048ABF] border-b-2 border-[#048ABF]' 
                  : 'text-gray-600 hover:text-[#048ABF]'
              }`}
              onClick={() => setActiveTab('personal')}
            >
              Informações Pessoais
            </button>
            <button 
              className={`flex-1 py-3 px-4 text-center font-medium ${
                activeTab === 'contacts' 
                  ? 'text-[#048ABF] border-b-2 border-[#048ABF]' 
                  : 'text-gray-600 hover:text-[#048ABF]'
              }`}
              onClick={() => setActiveTab('contacts')}
            >
              Contatos
            </button>
            <button 
              className={`flex-1 py-3 px-4 text-center font-medium ${
                activeTab === 'credentials' 
                  ? 'text-[#048ABF] border-b-2 border-[#048ABF]' 
                  : 'text-gray-600 hover:text-[#048ABF]'
              }`}
              onClick={() => setActiveTab('credentials')}
            >
              Credenciais
            </button>
            <button 
              className={`flex-1 py-3 px-4 text-center font-medium ${
                activeTab === 'preferences' 
                  ? 'text-[#048ABF] border-b-2 border-[#048ABF]' 
                  : 'text-gray-600 hover:text-[#048ABF]'
              }`}
              onClick={() => setActiveTab('preferences')}
            >
              Preferências
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'personal' && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Informações Pessoais</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={user.name}
                      readOnly
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                    <input 
                      type="email" 
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={user.email}
                      readOnly
                    />
                  </div>
                </div>
                
                <div>
                  <button className="mt-4 bg-[#048ABF] hover:bg-[#036a92] text-white font-medium py-2 px-4 rounded-md transition-colors">
                    Editar Informações
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'contacts' && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Informações de Contato</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-[#048ABF] mt-0.5 mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-900">Telefone</h3>
                      <p className="text-gray-600">{user.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-[#048ABF] mt-0.5 mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-900">E-mail</h3>
                      <p className="text-gray-600">{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-[#048ABF] mt-0.5 mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-900">Endereço</h3>
                      <p className="text-gray-600">{user.address}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <button className="mt-4 bg-[#048ABF] hover:bg-[#036a92] text-white font-medium py-2 px-4 rounded-md transition-colors">
                    Atualizar Contatos
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'credentials' && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Credenciais de Acesso</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                    <input 
                      type="email" 
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={user.email}
                      readOnly
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Senha Atual</label>
                    <div className="relative">
                      <input 
                        type={showPassword ? "text" : "password"} 
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value="••••••••"
                        readOnly
                      />
                      <button 
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-500" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-500" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <button className="mt-4 bg-[#048ABF] hover:bg-[#036a92] text-white font-medium py-2 px-4 rounded-md transition-colors">
                    Alterar Senha
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'preferences' && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Preferências</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b">
                    <div className="flex items-center">
                      <Bell className="w-5 h-5 text-[#048ABF] mr-3" />
                      <div>
                        <h3 className="font-medium text-gray-900">Notificações</h3>
                        <p className="text-sm text-gray-600">Receber notificações sobre pedidos e promoções</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" checked={user.notificationsEnabled} readOnly />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#84D904]"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between py-2 border-b">
                    <div className="flex items-center">
                      <CreditCard className="w-5 h-5 text-[#048ABF] mr-3" />
                      <div>
                        <h3 className="font-medium text-gray-900">Salvar Método de Pagamento</h3>
                        <p className="text-sm text-gray-600">Salvar cartões para facilitar pagamentos futuros</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" checked={true} readOnly />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#84D904]"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between py-2 border-b">
                    <div className="flex items-center">
                      <Shield className="w-5 h-5 text-[#048ABF] mr-3" />
                      <div>
                        <h3 className="font-medium text-gray-900">Campanhas de Marketing</h3>
                        <p className="text-sm text-gray-600">Receber ofertas especiais e novidades por e-mail</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" checked={user.marketingEnabled} readOnly />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#84D904]"></div>
                    </label>
                  </div>
                </div>
                
                <div>
                  <button className="mt-4 bg-[#048ABF] hover:bg-[#036a92] text-white font-medium py-2 px-4 rounded-md transition-colors">
                    Salvar Preferências
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UserPage;