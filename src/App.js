import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NotFound from './components/NotFound';
import ProductsProvider from './context/ProductsContext';
import CartProvider from './context/CartContext';
import store from './store';
import CartPage from './components/CartPage';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <ProductsProvider>
            <CartProvider>
              <Navbar />
              <Switch>
                <div className='content'>
                  <Route exact path='/'>
                    <Home />
                  </Route >
                  <Route path='/products/:categoryName' >
                    <ProductList />
                  </Route>
                  <Route path='/cart'>
                    <CartPage />
                  </Route>
                  <Route path='/not-found'>
                    <NotFound />
                  </Route>
                </div>
              </Switch>
            </CartProvider>
          </ProductsProvider>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
