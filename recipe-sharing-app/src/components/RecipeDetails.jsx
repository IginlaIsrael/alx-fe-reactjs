import { useRecipeStore } from '../stores/recipeStore';
import { useParams } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import useRecipeStore from '../stores/recipeStore'; // Default import


const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore(state => state.recipes.find(recipe => recipe.id === parseInt(id)));

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
