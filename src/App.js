import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Recipes from './pages/Recipes';
import AddRecipe from './pages/AddRecipe';
import EditRecipe from './pages/EditRecipe';

import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>

           
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

           
            <Route
              path="/recipes"
              element={
                <ProtectedRoute>
                  <Recipes />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AddRecipe />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit/:id"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <EditRecipe />
                </ProtectedRoute>
              }
            />

          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
