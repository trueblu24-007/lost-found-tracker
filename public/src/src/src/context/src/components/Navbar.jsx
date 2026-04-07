import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Menu, X, LogOut } from 'lucide-react';

export default function Navbar({ scrollTo }) {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    scrollTo(section);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-blue-900 text-white shadow-lg z-40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span className="text-blue-300">📍</span>
          Lost & Found
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => handleNavClick('home')} className="hover:text-blue-300 transition">
            Home
          </button>
          <button onClick={() => handleNavClick('tracker')} className="hover:text-blue-300 transition">
            Tracker
          </button>
          <button onClick={() => handleNavClick('contact')} className="hover:text-blue-300 transition">
            Contact
          </button>

          {user && (
            <div className="flex items-center gap-3 ml-6 pl-6 border-l border-blue-700">
              <div className="text-sm">
                <div className="font-bold">{user.name}</div>
                <div className="text-blue-300 text-xs">{user.email}</div>
              </div>
              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg flex items-center gap-2 transition"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-800 px-4 py-3 space-y-2">
          <button onClick={() => handleNavClick('home')} className="block w-full text-left hover:bg-blue-700 p-2 rounded">
            Home
          </button>
          <button onClick={() => handleNavClick('tracker')} className="block w-full text-left hover:bg-blue-700 p-2 rounded">
            Tracker
          </button>
          <button onClick={() => handleNavClick('contact')} className="block w-full text-left hover:bg-blue-700 p-2 rounded">
            Contact
          </button>
          {user && (
            <button
              onClick={() => {
                logout();
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left bg-red-600 hover:bg-red-700 p-2 rounded"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
