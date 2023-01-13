import { Routes, Route } from 'react-router-dom';
import RecipeList from "./routes/recipe-list/recipe-list.component";


const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={<RecipeList/>} />
    </Routes>
  );
};

export default App;
