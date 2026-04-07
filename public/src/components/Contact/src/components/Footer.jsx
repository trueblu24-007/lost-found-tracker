import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h5 className="font-bold text-lg mb-4">🔗 Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">🏠 Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">📋 View Items</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">📧 Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-4">📞 Contact Info</h5>
            <p className="text-gray-300 mb-2">📞 +91 7207931144</p>
            <p className="text-gray-300 mb-2">📧 rohit2024@vitstudent.ac.in</p>
            <p className="text-gray-300">📧 parth.batra2024@vitstudent.ac.in</p>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-4">📬 Newsletter</h5>
            <form onSubmit={(e) => { e.preventDefault(); alert('✅ Subscribed!'); }} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 px-3 py-2 rounded-lg text-black"
                required
              />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-blue-800 py-6">
          <p className="text-center text-gray-300 mb-4">
            © 2026 VIT Lost & Found System | All Rights Reserved
          </p>
          <p className="text-center text-gray-300 mb-6">
            Designed by <strong>Rohit & Parth</strong>
          </p>

          <div className="flex gap-6 justify-center">
            <a href="#" className="hover:text-blue-300 transition hover:scale-125">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-blue-300 transition hover:scale-125">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-blue-300 transition hover:scale-125">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-blue-300 transition hover:scale-125">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
