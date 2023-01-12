import RecipeItem from "./components/recipe-item/recipe-item.component";
import './recipes.styles.scss';

const App = () => {
  const recipes = [{id: 1, title: 'roast chicken', image_url: 'C:\\Users\\dairdharris3\\Desktop\\Dante\\RecipeBook\\recipe_book_app\\src\\a1RN3Gh.jpeg',},
                   {id: 2, title: 'steak w/ pomme puree', image_url: 'https://imgur.com/t/food/E4ygw5e',}, 
                   {id: 3, title: 'salmon w/ sweet potato and pea', image_url: 'https://imgur.com/t/food/E4ygw5e',}];
  return (
    <div classname='recipes-container'>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default App;
