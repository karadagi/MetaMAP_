
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download, Book, Github, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Docs', path: '/docs', icon: Book },
    { name: 'GitHub', path: 'https://github.com/karadagi/MetaMAP', icon: Github, external: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <img src={import.meta.env.BASE_URL + "metamap.png"} alt="MetaMAP Logo" className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-bold tracking-tight text-neutral-900">MetaMAP</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.external ? (
                <a key={link.name} href={link.path} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-900 transition-colors flex items-center space-x-1 text-sm font-medium">
                  <link.icon size={16} />
                  <span>{link.name}</span>
                </a>
              ) : (
                <Link key={link.name} to={link.path} className={`${location.pathname === link.path ? 'text-emerald-600 font-semibold' : 'text-neutral-500 hover:text-neutral-900'} transition-colors flex items-center space-x-1 text-sm font-medium`}>
                  <link.icon size={16} />
                  <span>{link.name}</span>
                </Link>
              )
            ))}
            <a href="https://www.food4rhino.com/en/app/metamap" target="_blank" rel="noopener noreferrer" className="bg-neutral-900 hover:bg-neutral-800 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center space-x-2 shadow-sm">
              <Download size={16} />
              <span>Download</span>
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-neutral-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-neutral-100 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="block text-lg text-neutral-600 font-medium">
              {link.name}
            </Link>
          ))}
          <a href="https://www.food4rhino.com/en/app/metamap" className="block w-full bg-neutral-900 text-white text-center py-3 rounded-xl font-bold">
            Download Now
          </a>
        </div>
      )}
    </nav>
  );
};
