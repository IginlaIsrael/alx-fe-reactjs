import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();  // Get the recipe ID from the URL parameters
  const [recipe, setRecipe] = useState(null);  // Initialize state to store the recipe details

  useEffect(() => {
    // Fetch recipe data from data.json
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(selectedRecipe);  // Set the selected recipe based on the ID
      })
      .catch((error) => console.error('Error fetching recipe data:', error));
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;  // Show a loading message if data is not loaded yet
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      {/* Apply shadow here */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
        {/* Apply shadow to the image */}
        <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded-lg mb-4 shadow-md" />
        <p className="text-lg mb-4">{recipe.summary}</p>
        
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-lg">{ingredient}</li>
          ))}
        </ul>
        
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="text-lg mb-2">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
