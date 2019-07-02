import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import About from './components/About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from './components/main/Main';
import NameSection from './components/nameSection/NameSection'
import Favorites from './components/favorites/Favorites'
import SearchDocument from './components/searchDocument/SearchDocument'
import SearchPerson from './components/searchPerson/SearchPerson'
import AddDrug from './components/add-drug/AddDrug'
import Check from './components/check/Check'
ReactDOM.render(
<Router>
  <Switch>
      <Route path='/choose-document' exact render={()=><Main 
      num="2" 
      comp={{NameSection, textSection:"Выбор формы"}} 
      comp2={About} 
      comp3={SearchDocument}/>}/>
      <Route path='/' exact render={()=><Main 
      num="2" 
      comp={{NameSection, textSection:"Выбор пациента"}}  
      comp2={SearchPerson} 
      comp3={About}/>}/>
      <Route path='/add-drug' exact render={()=><Main 
      num="2" 
      comp={{NameSection, textSection:"Выписка рецепта"}}  
      comp2={AddDrug} 
      comp3={About}/>}/>
      <Route path='/check' exact render={()=><Main 
      num="2" 
      comp={{NameSection, textSection:"Проверьте введенные данные"}} 
      comp2={Check} 
      comp3={About}/>} 
      />
  </Switch>
</Router>
  
, document.getElementById('root'));