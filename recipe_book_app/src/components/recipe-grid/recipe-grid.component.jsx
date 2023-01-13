import RecipeItem from "../recipe-item/recipe-item.component";
import "./recipe-grid.styles.scss"

const RecipeGrid = ({recipes}) => {
    return (
        <div className='recipe-grid-container'>
          {recipes.map((recipe) => (
            <RecipeItem key={recipe.id} recipe={recipe} />
          ))}
        </div>
      );
};

export default RecipeGrid;