import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Home from './components/Home';
import Index from './components/places/Index';
import New from './components/places/New';
import Show from './components/places/Show';
import Edit from './components/places/EditForm';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import 'bulma';
import './scss/style.scss';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <section>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/places' component={Index} />
            <Route exact path='/places/new' component={New} />
            <Route path='/places/:id/edit' component={Edit} />
            <Route path='/places/:id' component={Show} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
          </Switch>
        </section>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
