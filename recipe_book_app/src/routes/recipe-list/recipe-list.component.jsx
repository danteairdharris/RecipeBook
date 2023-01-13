import RecipeGrid from "../../components/recipe-grid/recipe-grid.component";
import "./recipe-list.styles.scss";

const RecipeList = () => {
  const recipes = [
    {
      id: 1, 
      title: 'roast chicken',
      imageUrl: 'https://i.imgur.com/xf13vvf.jpeg',
    },
    {
      id: 2, 
      title: 'roast chicken',
      imageUrl: 'https://i.imgur.com/xf13vvf.jpeg',
    },
    {
      id: 3, 
      title: 'roast chicken',
      imageUrl: 'https://i.imgur.com/xf13vvf.jpeg',
    },
    {
      id: 4, 
      title: 'roast chicken',
      imageUrl: 'https://i.imgur.com/xf13vvf.jpeg',
    },
    {
      id: 5, 
      title: 'roast chicken',
      imageUrl: 'https://i.imgur.com/xf13vvf.jpeg',
    },
    {
      id: 6, 
      title: 'roast chicken',
      imageUrl: 'https://i.imgur.com/xf13vvf.jpeg',
    },
  ]
  return (
    <div>
      <div>

      </div>
      <div className="recipe-view-container">
        <RecipeGrid recipes={recipes} />
      </div>
    </div>
    
    
  );
};

export default RecipeList;
