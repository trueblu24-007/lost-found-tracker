import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import AuthModal from './components/Auth/AuthModal';
import Home from './components/Home';
import ItemForm from './components/Tracker/ItemForm';
import ItemList from './components/Tracker/ItemList';
import Stats from './components/Tracker/Stats';
import ContactForm from './components/Contact/ContactForm';
import Footer from './components/Footer';
import { AuthProvider, useAuth } from './context/AuthContext';
import './styles/App.css';

function AppContent() {
  const { user, loading } = useAuth();
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem('lostAndFoundItems')) || [];
  });

  const homeRef = useRef(null);
  const trackerRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (section) => {
    if (section === 'home') homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'tracker') trackerRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'contact') contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addItem = (newItem) => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem('lostAndFoundItems', JSON.stringify(updatedItems));
    alert('✅ Item added successfully!');
  };

  const deleteItem = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      const updatedItems = items.filter(item => item.id !== id);
      setItems(updatedItems);
      localStorage.setItem('lostAndFoundItems', JSON.stringify(updatedItems));
    }
  };

  const resolveItem = (id) => {
    if (window.confirm('Mark this item as resolved?')) {
      const updatedItems = items.filter(item => item.id !== id);
      setItems(updatedItems);
      localStorage.setItem('lostAndFoundItems', JSON.stringify(updatedItems));
      alert('✅ Item marked as resolved!');
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen text-2xl">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar scrollTo={scrollTo} />
      <AuthModal />

      <div ref={homeRef}>
        <Home scrollTo={scrollTo} />
      </div>

      <div ref={trackerRef} className="relative min-h-screen bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-16">
            📍 Lost & Found Items
          </h2>

          <Stats items={items} />

          {user && <ItemForm onSubmit={addItem} />}

          <ItemList items={items} onDelete={deleteItem} onResolve={resolveItem} />
        </div>
      </div>

      <div ref={contactRef}>
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
