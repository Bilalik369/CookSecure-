import React from "react";
import {BrowserRouter as Router , Route , Routes } from "react-router-dom";
import {AuthContext } from "./context/AuthContext";
import Nabar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from './pages/Recipes';
import AddRecipe from './pages/AddRecipe';
import EditRecipe from './pages/EditRecipe';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';


const App =() =>{


  <Router>
    <div className="container">
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </div>


  </Router>




}

export default App;
