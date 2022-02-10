import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Products from './component/Products';
import Contact from './component/Contact';
import Login from './component/Login';
import Register from './component/Register';
import Cart from './component/Cart';
import Product from './component/Product';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const App = () => {
  return (

    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/product' component={Products}></Route>
        <Route exact path='/products/:id' component={Product}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/cart' component={Cart}></Route>
      </Switch>
    </BrowserRouter>

  );
}
export default App;
