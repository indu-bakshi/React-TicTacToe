import React from 'react';
// import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import BoardBox from './componentsGame/BoardBox'
import ScoreBoard from './componentsGame/ScoreBoard'

import './App.css';
import './style/board.css'
import './style/box.css'
import './style/buttons.css'

function App() {
  return (
    <div className="App" >
     <BrowserRouter>
     <Route exact path='/' component={ScoreBoard}/>
     <Route path='/BoardBox' component={BoardBox}/>
     
     </BrowserRouter>
   
    </div>
  )
}

export default App;
