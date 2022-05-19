import React, { Component } from 'react'
import Navbar from './Component/Navbar'
import './App.css';
import Banner from './Component/Banner'
import Movielist from './Component/Movielist'
import Fav from './Component/Fav';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      
        <BrowserRouter>
          <Navbar/>

          <Routes>
            <Route  path='/' element={<><Banner/><Movielist/></>}/>
            <Route path='/favourites' element={ <Fav/>}/>
          </Routes>
        
       
        </BrowserRouter>
    
    )
  }
}

export default App
