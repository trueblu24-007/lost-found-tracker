import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Trash2, CheckCircle } from 'lucide-react';

export default function ItemCard({ item, onDelete, onResolve }) {
  const { user } = useAuth();
  const isOwner = user && user.id === item.userId;

  return (
    <div className={`bg-white border-l-4 rounded-lg shadow-md hover:shadow-lg transition-all p-6 flex gap-4 ${
      item.type === 'lost' ? 'border-red-500' : 'border-green-500'
    }`}>
      {item.images && item.images.length > 0 && (
        <img
          src={item.images[0]}
          alt={item.name}
          className="w-24 h-24 object-cover rounded-lg shadow"
        />
      )}

      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className={`px-3 py-1 rounded-full text-sm font-bold ${
            item.type === 'lost'
              ? 'bg-red-100 text-red-700'
              : 'bg-green-100 text-green-700'
          }`}>
            {item.type === 'lost' ? '🔴 LOST' : '🟢 FOUND'}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{item.description}</p>

        <div className="text-xs text-gray-500 space-y-1">
          <p>📍 <strong>Location:</strong> {item.location}</p>
          <p>📞 <strong>Phone:</strong> {item.phone}</p>
          <p>👤 <strong>Posted by:</strong> {item.userName} | 📅 {item.date}</p>
          {item.images && item.images.length > 0 && (
            <p>📸 {item.images.length} image(s)</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 justify-center">
        {isOwner ? (
          <button
            onClick={() => onDelete(item.id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
          >
            <Trash2 size={16} />
            Delete
          </button>
        ) : (
          <button
            onClick={() => onResolve(item.id)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
          >
            <CheckCircle size={16} />
            Match
          </button>
        )}
      </div>
    </div>
  );
}
