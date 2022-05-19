import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <div className='navigation_bar'>
      <Link to={'/'} style={{textDecoration:'none'}}><h1 className='h1'>MoviesApp</h1></Link>
      <Link to ={'/favourites'}  style={{textDecoration:'none'}}><h1 className='h31'>Favourites</h1></Link>
       
      </div>
    )
  }
}

export default Navbar