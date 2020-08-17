import React from 'react';
import './layout.css';
import Homepage from '../pages/home';
import NotFound from '../pages/page-not-found';
import { Switch, Redirect, Route, BrowserRouter } from 'react-router-dom';
import Header from './header';
import GamesPage from '../pages/games';

class Layout extends React.Component {

    render() { 
        return (
            <BrowserRouter>
            <div className="container">
            <Header />
            <hr/>
            <Switch>
          <Redirect to="/home" path="/" exact />
          <Route path="/home" component={Homepage} exact />
          <Route path="/games" component={GamesPage} exact />
          {/* <Route path="/games/:cat" component={Category} /> */}
          <Route path="" component={NotFound} exact /> 
        </Switch>
            </div>
        </BrowserRouter>
          );
    }
}
 
export default Layout;