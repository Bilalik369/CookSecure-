import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { register } = useContext(AuthContext);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'user' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(formData);
    navigate('/');
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-[#CF7B7B] via-[#94daea] to-[#d3a1ec]">
      <div className="bg-gradient-to-br from-[#D5E5D5] via-[#C7D9DD] to-[#ADB2D4] shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Créer un compte</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nom"
            onChange={handleChange}
            value={formData.name}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            onChange={handleChange}
            value={formData.password}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          <select
            name="role"
            onChange={handleChange}
            value={formData.role}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="user">Utilisateur</option>
            <option value="admin">Admin</option>
          </select>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#D5E5D5] via-[#C7D9DD] to-[#ADB2D4] text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;