import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#CF7B7B] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        <Link to="/" className="text-xl font-bold bg-gradient-to-r from-[#D5E5D5] via-[#C7D9DD] to-[#ADB2D4] text-transparent bg-clip-text">
          CuisineJS
        </Link>

       
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        
        <div className="hidden lg:flex space-x-6 items-center">
          <Link to="/" className="hover:text-[#ADB2D4]">Accueil</Link>
          <Link to="/recipes" className="hover:text-[#ADB2D4]">Recettes</Link>

          {user && (
            <>
              <Link to="/add-recipe" className="hover:text-[#ADB2D4]">Ajouter</Link>
              <button onClick={logout} className="btn-gradient px-4 py-2 rounded-full text-white font-semibold">Déconnexion</button>
            </>
          )}

          {!user && (
            <>
              <Link to="/login" className="btn-gradient px-4 py-2 rounded-full text-white font-semibold">Connexion</Link>
              <Link to="/register" className="btn-gradient px-4 py-2 rounded-full text-white font-semibold">Inscription</Link>
            </>
          )}
        </div>
      </div>

     
      {isOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block hover:text-[#ADB2D4]" onClick={() => setIsOpen(false)}>Accueil</Link>
          <Link to="/recipes" className="block hover:text-[#ADB2D4]" onClick={() => setIsOpen(false)}>Recettes</Link>

          {user && (
            <>
              <Link to="/add-recipe" className="block hover:text-[#ADB2D4]" onClick={() => setIsOpen(false)}>Ajouter</Link>
              <button onClick={() => { logout(); setIsOpen(false); }} className="btn-gradient block w-full text-left px-4 py-2 rounded-full text-white font-semibold">Déconnexion</button>
            </>
          )}

          {!user && (
            <>
              <Link to="/login" className="btn-gradient block w-full text-left px-4 py-2 rounded-full text-white font-semibold" onClick={() => setIsOpen(false)}>Connexion</Link>
              <Link to="/register" className="btn-gradient block w-full text-left px-4 py-2 rounded-full text-white font-semibold" onClick={() => setIsOpen(false)}>Inscription</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
