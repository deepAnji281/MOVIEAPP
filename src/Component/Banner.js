import React, { Component } from 'react'

export class Banner extends Component {
  
  
  render() {
      let imgSrc='/6EdKBYkB1ssgGjc249ud1L55o8d.jpg'
    return (
      <div className='banner'>
      <div class="card banner_card" >
  <img src={`https://image.tmdb.org/t/p/original`+imgSrc}class="card-img-top banner_img" alt="..."/>
  <div class="card-body banner_body">
    <h5 class="card-title banner_title">Jurassic Hunt</h5>
    <p class="card-text banner_text">Female adventurer Parker joins a crew of male trophy hunters in a remote wilderness park. Their goal: slaughter genetically recreated dinosaurs for sport using rifles, arrows, and grenades. After their guide is killed by raptors, the team tries to escape the park – but the hunters quickly become the hunted. Even worse, the park’s manager suspects Parker of being a spy and sends a hit squad after her. This battle,s about to become primitive!</p>
    
  </div>
</div>
          
      </div>
    )
  }
}

export default Banner