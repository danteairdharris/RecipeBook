import AddIngredientsInfo from "../../components/add-ingredients-info/add-ingredients-info.component";
import AddRecipeInfo from "../../components/add-recipe-info/add-recipe-info.component";
import "./add-recipe.styles.scss";

const AddRecipe = () => {
  
  return (
    
    <div className="add-recipe-view">
      <div className="ingredients-container">
        <AddIngredientsInfo />
      </div>
      <div className="recipe-container">
        <AddRecipeInfo />
      </div>
    </div>
    
    
    
    
  );
};

export default AddRecipe;