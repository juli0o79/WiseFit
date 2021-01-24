import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PaymentPage from './page/payment';
import Home from './page/home';

function App() {
  return (
    <>
      <Router>
        <Switch>

          <Route exact path="/home">
           <Home />
            

          </Route>
          
        <Route exact path="/payment">
          <PaymentPage />
          </Route>
     </Switch>
      </Router>
    </>
  )
}

export default App;
