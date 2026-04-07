import React, { useState } from 'react';
import { Mail, User, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('❌ Please fill in all fields!');
      return;
    }

    let contacts = JSON.parse(localStorage.getItem('contactMessages')) || [];
    contacts.push({
      ...formData,
      date: new Date().toLocaleString()
    });
    localStorage.setItem('contactMessages', JSON.stringify(contacts));

    alert('✅ Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-lg -z-10"
        style={{
          backgroundImage: 'url("https://images.shiksha.com/mediadata/images/articles/1607686353phpl4tNgM.jpeg")'
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 -z-10" />

      <div className="max-w-2xl w-full">
        <h2 className="text-5xl font-bold text-white text-center mb-4">
          📬 Contact Us
        </h2>
        <p className="text-xl text-gray-100 text-center mb-8">
          If you have any queries, please feel free to reach us out
        </p>

        <div className="bg-white bg-opacity-10 backdrop-blur-2xl rounded-2xl p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-bold mb-2 flex items-center gap-2">
                <User size={18} /> Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div>
              <label className="block text-white font-bold mb-2 flex items-center gap-2">
                <Mail size={18} /> Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div>
              <label className="block text-white font-bold mb-2 flex items-center gap-2">
                <MessageSquare size={18} /> Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message..."
                rows="5"
                className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
            >
              ✈️ Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
