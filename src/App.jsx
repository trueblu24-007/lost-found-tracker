import React from 'react';
import Navbar from './Navbar';
import AuthModal from './AuthModal';
import Home from './Home';
import ItemForm from './ItemForm';
import ItemList from './ItemList';
import Stats from './Stats';
import ContactForm from './ContactForm';
import Footer from './Footer';
import { AuthProvider } from './AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <AuthModal />
      <Home />
      <ItemForm />
      <ItemList />
      <Stats />
      <ContactForm />
      <Footer />
    </AuthProvider>
  );
};

export default App;