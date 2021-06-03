import React from 'react'
import { Switch, Route } from 'react-router-dom';

import './App.css';

import SignIn from './components/pages/SignIn';
import Search from './components/pages/Search';
import Detail from './components/pages/Detail';

function App() {

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <SignIn/>
        </Route>

        <Route path="/search" exact>
          <Search/>
        </Route>
        <Route path="/detail/:id"  component={Detail}/>
      </Switch>
    </>
  );
}

export default App;
