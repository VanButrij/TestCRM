import React from 'react';
import './App.css';
import {BrowserRouter, Route } from "react-router-dom"
import ModulePageContainer from './Components/ModulePage/ModulePageContainer';
import DeletePageContainer from './Components/DeletePage/DeletePageContainer';
import EditModulePageContainer from './Components/ModulePage/EditModulePageContainer';
import MainPageContainer from './Components/MainPage/MainPageContainer';

function App() {
  return (
    <BrowserRouter>
        <Route exact path='/'render={ () => 
              <MainPageContainer />}/>
        <Route path='/MainPage'render={ () => 
              <MainPageContainer />}/>
        <Route path='/ModulePage'render={ () => 
              <ModulePageContainer />}/>
        <Route path='/EditModulePage' render={() =>
              <EditModulePageContainer />} />
        <Route path='/DeletePage' render={() =>
              <DeletePageContainer />} />

    </BrowserRouter>
  );
}

export default App;
