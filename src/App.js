import image from './shopping-list.webp';
import './App.css';
import imageTwo from './man-for-shopping.webp';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className="App" >
      <div className='container'>
      <img src={ image } alt="shopping" width="200px" />
      </div>
      <h1 className='container'>Grocery List</h1>
      <GroceryList />
      <div className='container'>
      <img src={ imageTwo } alt="man" width="200px" />
      </div>
    </div>
  );
}

export default App;
