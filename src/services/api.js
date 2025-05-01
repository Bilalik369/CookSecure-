import axios from 'axios';


const API_URL = 'http://localhost:3001/recipes';


export const getRecipes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des recettes:', error);
    throw error;
  }
};


export const getRecipeById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la récupération de la recette avec l'ID ${id}:`, error);
    throw error;
  }
};


export const addRecipe = async (newRecipe) => {
  try {
    const response = await axios.post(API_URL, newRecipe);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout de la recette:', error);
    throw error;
  }
};


export const updateRecipe = async (id, updatedRecipe) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedRecipe);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de la recette avec l'ID ${id}:`, error);
    throw error;
  }
};


export const deleteRecipe = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la suppression de la recette avec l'ID ${id}:`, error);
    throw error;
  }
};
