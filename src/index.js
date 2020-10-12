import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'bootswatch/dist/slate/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Movie from './components/Movie';
import PageNotFound from './includes/PageNotFound';

const App = () => {

    return (
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/movie/:id' component={Movie}/>
          <Route component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
        

    )
}


ReactDOM.render(<App />, document.getElementById('root'))
