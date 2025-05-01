import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { getRecipes } from "../services/api";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRecipes();
      setRecipes(data);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#D5E5D5] via-[#C7D9DD] to-[#ADB2D4] py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-[#2D3748] mb-10">
        Liste des Recettes
      </h1>

      {recipes.length === 0 ? (
        <p className="text-center text-gray-700">Aucune recette trouvée.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
