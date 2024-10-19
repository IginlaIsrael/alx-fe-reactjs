import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({}); // For tracking form errors

  // Validate function to ensure all fields are filled out
  const validate = () => {
    let formErrors = {};
    
    // Basic validation: Check if fields are empty
    if (!title) formErrors.title = 'Title is required';
    if (!ingredients) formErrors.ingredients = 'Ingredients are required';
    if (!steps) formErrors.steps = 'Preparation steps are required';

    setErrors(formErrors);

    // Return true if no errors, else return false
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if form is valid before proceeding
    if (validate()) {
      // Form submission logic
      const newRecipe = {
        title,
        ingredients: ingredients.split('\n'), // Split by new lines for multiple ingredients
        steps: steps.split('\n'), // Split by new lines for multiple steps
      };

      // Here you could send the newRecipe to your server or add to state
      console.log('Recipe submitted:', newRecipe);

      // Clear the form
      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors({});
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter the recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>
        
        <div>
          <label className="block font-medium">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter ingredients, each on a new line"
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>
        
        <div>
          <label className="block font-medium">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter preparation steps, each on a new line"
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>
        
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
