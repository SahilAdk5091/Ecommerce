import './App.css';
import Header from './containers/Header';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';


function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<ProductListing/>}/>
      <Route path='/product/:productId' element={<ProductDetail/>}/>
      <Route path='*'>404</Route> 
    </Routes>

    </Router>
    
      
    </div>
  );
}

export default App;
