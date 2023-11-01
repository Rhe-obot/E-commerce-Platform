import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import Checkout from './Checkout';
import Account from './Account';
import OrderConfirmation from './OrderConfirmation';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/checkout">Checkout</Link></li>
              <li><Link to="/account">Account</Link></li>
              <li><Link to="/OrderConfirmation">OrderConfirmation</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/account" component={Account} />
          <Route path="/OrderConfirmation" component={OrderConfirmation} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
