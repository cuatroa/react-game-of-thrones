import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { CharactersPage } from './Pages/CharactersPage/CharactersPage';
import { HousesPage } from './Pages/HousesPage/HousesPage';
import { HomePage } from './Pages/HomePage/HomePage';
import { Menu } from './Shared/components/Menu/Menu';
import { CharactersDetailPage } from './Pages/CharactersPage/Pages/CharactersDetailPage';
import { ChronologyPage } from './Pages/ChronologyPage/ChronologyPage';
import { Header } from './Shared/components/Header/Header';
import { HousesDetailPage } from './Pages/HousesPage/Pages/HousesDetailPage';

function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Switch>
          <Route path="/characters/:name">
            <CharactersDetailPage/>
          </Route>
          <Route path="/characters">
            <CharactersPage/>
          </Route>
          <Route path="/houses/:name">
            <HousesDetailPage/>
          </Route>
          <Route path="/houses">
            <HousesPage/>
          </Route>
          <Route path="/chronology">
            <ChronologyPage/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
        <Menu/>
      </Router>
    </div>
  );
}

export default App;
