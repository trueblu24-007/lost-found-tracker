import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(email, password);
    
    if (!result.success) {
      setError(result.message);
    } else {
      setEmail('');
      setPassword('');
      setError('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-sm">
          {error}
        </div>
      )}

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">📧 Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@vit.ac.in"
          className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2">🔐 Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Login
      </button>
    </form>
  );
}
