import React from 'react';

export default function Stats({ items }) {
  const lostCount = items.filter(item => item.type === 'lost').length;
  const foundCount = items.filter(item => item.type === 'found').length;
  const totalCount = items.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-8 rounded-xl shadow-lg">
        <div className="text-4xl font-bold mb-2">{lostCount}</div>
        <div className="text-sm opacity-90">Lost Items</div>
      </div>
      <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-8 rounded-xl shadow-lg">
        <div className="text-4xl font-bold mb-2">{foundCount}</div>
        <div className="text-sm opacity-90">Found Items</div>
      </div>
      <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 rounded-xl shadow-lg">
        <div className="text-4xl font-bold mb-2">{totalCount}</div>
        <div className="text-sm opacity-90">Total Items</div>
      </div>
    </div>
  );
}
