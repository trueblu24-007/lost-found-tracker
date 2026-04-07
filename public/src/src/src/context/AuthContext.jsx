import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

const ALLOWED_DOMAINS = ['vit.ac.in', 'vitstudent.ac.in'];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Error loading user:', e);
      }
    }
    setLoading(false);
  }, []);

  const isValidVitEmail = (email) => {
    return ALLOWED_DOMAINS.some(domain => 
      email.toLowerCase().endsWith('@' + domain)
    );
  };

  const register = (name, email, password, confirmPassword) => {
    if (!name || !email || !password || !confirmPassword) {
      return { success: false, message: 'Please fill in all fields!' };
    }

    if (!isValidVitEmail(email)) {
      return { success: false, message: 'Only VIT emails allowed (vit.ac.in or vitstudent.ac.in)!' };
    }

    if (password.length < 6) {
      return { success: false, message: 'Password must be at least 6 characters!' };
    }

    if (password !== confirmPassword) {
      return { success: false, message: 'Passwords do not match!' };
    }

    const users = JSON.parse(localStorage.getItem('vitUsers')) || [];
    
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, message: 'Email already registered!' };
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password: btoa(password)
    };

    users.push(newUser);
    localStorage.setItem('vitUsers', JSON.stringify(users));
    
    return { success: true, message: 'Registration successful!' };
  };

  const login = (email, password) => {
    if (!email || !password) {
      return { success: false, message: 'Please fill in all fields!' };
    }

    if (!isValidVitEmail(email)) {
      return { success: false, message: 'Only VIT emails allowed!' };
    }

    const users = JSON.parse(localStorage.getItem('vitUsers')) || [];
    const user = users.find(u => 
      u.email.toLowerCase() === email.toLowerCase() && 
      btoa(password) === u.password
    );

    if (!user) {
      return { success: false, message: 'Invalid email or password!' };
    }

    const userData = {
      id: user.id,
      name: user.name,
      email: user.email
    };

    setUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData));
    
    return { success: true, message: 'Login successful!' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout, isValidVitEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
