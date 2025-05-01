import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-gradient-to-r from-[#D5E5D5] via-[#C7D9DD] to-[#ADB2D4] rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 duration-300">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">{recipe.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{recipe.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xs bg-white text-[#5D6E8C] px-3 py-1 rounded-full shadow-sm font-medium">
            {recipe.category}
          </span>
          <Link
            to={`/edit/${recipe.id}`}
            className="text-sm text-white bg-[#5D6E8C] hover:bg-[#4B5B77] px-3 py-1 rounded-md transition"
          >
            Modifier
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
