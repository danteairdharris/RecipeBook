import { Routes, Route } from 'react-router-dom';
import RecipeList from "./routes/recipe-list/recipe-list.component";
import AddRecipe from "./routes/add-recipe/add-recipe.component";


const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={<RecipeList/>} />
      <Route path='/add' element={<AddRecipe/>} />
    </Routes>
  );
};

export default App;
