import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Statistics from './components/Pages/Statistic';
import Symptoms from './components/Pages/Symptoms';
import Prevention from './components/Pages/Prevention';


const Routes = () => {
  return (

    <BrowserRouter>

      <Switch>
        <Route path="/" exact component={Statistics} />
        <Route path="/symptoms" exact component={Symptoms} />
        <Route path="/prevention" exact component={Prevention} />
       
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;


