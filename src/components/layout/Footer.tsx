import Logo from '../common/Logo';
import { Facebook, Instagram, Twitter, Smartphone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#048ABF] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4">
              Especialistas em automação comercial. Fornecemos soluções digitais para melhorar o seu negócio.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="hover:text-[#84D904] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#84D904] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-[#84D904] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#84D904] transition-colors">Início</a></li>
              <li><a href="#" className="hover:text-[#84D904] transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-[#84D904] transition-colors">Serviços</a></li>
              <li><a href="#" className="hover:text-[#84D904] transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#84D904] transition-colors">Restaurantes</a></li>
              <li><a href="#" className="hover:text-[#84D904] transition-colors">Lanchonetes</a></li>
              <li><a href="#" className="hover:text-[#84D904] transition-colors">Pizzarias</a></li>
              <li><a href="#" className="hover:text-[#84D904] transition-colors">Ver Todos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>Av. Paulista, 1000, São Paulo, SP</span>
              </li>
              <li className="flex items-center">
                <Smartphone size={18} className="mr-2" />
                <span>(11) 9999-8888</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>contato@b2bti.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} B2BTI Automação Comercial. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;