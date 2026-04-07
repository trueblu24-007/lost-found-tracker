import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Login from './Login';
import Register from './Register';

export default function AuthModal() {
  const [tab, setTab] = useState('login');
  const { user } = useAuth();

  if (user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-90 p-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          🔐 VIT Login
        </h2>
        <p className="text-center text-gray-600 text-sm mb-6">
          Access Lost & Found Tracker
        </p>

        <div className="flex gap-3 mb-6 border-b-2 border-gray-200">
          <button
            onClick={() => setTab('login')}
            className={`px-5 py-3 font-bold transition-all ${
              tab === 'login'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setTab('register')}
            className={`px-5 py-3 font-bold transition-all ${
              tab === 'register'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600'
            }`}
          >
            Register
          </button>
        </div>

        {tab === 'login' ? <Login /> : <Register setTab={setTab} />}
      </div>
    </div>
  );
}
