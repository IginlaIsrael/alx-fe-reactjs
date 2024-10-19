import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    
    if (!title) newErrors.title = 'Title is required';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required';
    if (!steps) newErrors.steps = 'Preparation steps are required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Add logic to handle form submission (e.g., API call)
      console.log('Form submitted', { title, ingredients, steps });
      // Reset form
      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors({});
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 ${errors.title ? 'border-red-500' : ''}`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the recipe title"
          />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Ingredients
          </label>
          <textarea
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 ${errors.ingredients ? 'border-red-500' : ''}`}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="List the ingredients"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-xs mt-1">{errors.ingredients}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Preparation Steps
          </label>
          <textarea
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 ${errors.steps ? 'border-red-500' : ''}`}
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="List the preparation steps"
          ></textarea>
          {errors.steps && <p className="text-red-500 text-xs mt-1">{errors.steps}</p>}
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
