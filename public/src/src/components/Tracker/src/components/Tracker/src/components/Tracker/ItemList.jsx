import React, { useState } from 'react';
import ItemCard from './ItemCard';

export default function ItemList({ items, onDelete, onResolve }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems = items.filter(item => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = !filterType || item.type === filterType;
    const matchesTab = activeTab === 'all' || item.type === activeTab;

    return matchesSearch && matchesType && matchesTab;
  });

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          placeholder="🔍 Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
        />

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
        >
          <option value="">All Items</option>
          <option value="lost">Lost Only</option>
          <option value="found">Found Only</option>
        </select>
      </div>

      <div className="flex gap-3 mb-6 border-b-2 border-gray-200">
        {['all', 'lost', 'found'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-bold transition-all capitalize ${
              activeTab === tab
                ? 'text-blue-600 border-b-2 border-blue-600 -mb-2'
                : 'text-gray-600'
            }`}
          >
            {tab === 'all' ? 'All Items' : tab}
          </button>
        ))}
      </div>

      {filteredItems.length === 0 ? (
        <div className="text-center text-gray-500 py-12">
          📭 No items found. Start by reporting a lost or found item!
        </div>
      ) : (
        <div className="space-y-4">
          {filteredItems.map(item => (
            <ItemCard
              key={item.id}
              item={item}
              onDelete={onDelete}
              onResolve={onResolve}
            />
          ))}
        </div>
      )}
    </div>
  );
}
