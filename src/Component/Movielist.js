import React, { Component } from 'react'

import axios from 'axios'

export class Movielist extends Component {
  constructor() {
    super();
    this.state = {
      hover: '',
      parr:[1],
      currPage:1,
      movies:[],
      favourites:[]
    }
  }
  async componentDidMount(){
    const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5ec1586d922dde898f975b9df880891f&language=en-US&page=${this.state.currPage}`)
    let movieD=res.data
    this.setState({
      movies:[...movieD.results]
    })
  }
  handleMovieChange=async()=>
  {
    const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5ec1586d922dde898f975b9df880891f&language=en-US&page=${this.state.currPage}`)
    let movieD=res.data
    this.setState({
      movies:[...movieD.results]
    })
  }
  handleNext=()=>{
    let tempArr=[]
    for(let i=1;i<=this.state.parr.length+1;i++)
    {
      tempArr.push(i);
    }
    this.setState({
      parr:[...tempArr],
      currPage:this.state.currPage+1
    },this.handleMovieChange)
  }
  handlePrevious=()=>{
    if(this.state.currPage!=1)
    { 
      
     
      this.setState({
       
        currPage:this.state.currPage-1
      },this.handleMovieChange)
    }
  }
  handlePage=(val)=>{
    if(this.state.currPage!=val)
    {
      this.setState({
        currPage:val
      },this.handleMovieChange)
    }
  }
  handleFavourites=(movieEle)=>{
    let oldData=JSON.parse(localStorage.getItem('movieArr')||'[]')
    if(this.state.favourites.includes(movieEle.id)){
        oldData=oldData.filter((movie)=>movie.id!=movieEle.id)
    }
    else{
     oldData.push(movieEle);
    }
    localStorage.setItem('movieArr',JSON.stringify(oldData))
    console.log(oldData)
    this.handleFavouritesStates();
  }
  handleFavouritesStates=()=>{
    let oldData=JSON.parse(localStorage.getItem('movieArr')|| '[]')
    let tempArr=oldData.map((movie)=>movie.id)
    this.setState({
      favourites:[...tempArr]
    })
  }
  render() {
    return (
      <>

        <h3 style={{ 'marginTop': '2rem', 'textAlign': 'center' }} ><strong>Trending</strong></h3>
        <div className='movieList'>

          {


            this.state.movies.map((ele) => (
            

              <div class="card movie_card" onMouseEnter={()=>this.setState({hover:ele.id})} onMouseLeave={()=> this.setState({hover:''})}>
                <img src={'https://image.tmdb.org/t/p/original' + ele.backdrop_path} class="card-img-top  movie_img" alt="..." />

                <div class="card-body movie_card_body">
                  <h5 class="card-title movie_title">{ele.title}</h5>
       

                </div>
                
                
                 {
                   this.state.hover==ele.id && <a class="btn btn-primary movie_btn" onClick={()=>this.handleFavourites(ele)}>
                    {
                       this.state.favourites.includes(ele.id)?"Remove from  Faviourates":"Add TO Faviourates"
                     }
                    
                   </a>
                 }
               
   

          
              </div>


            ))


          }

        </div>
     
        <nav aria-label="Page navigation example">
     <ul class="pagination">
    <li class="page-item"><a class="page-link" onClick={()=>this.handlePrevious()}>Previous</a></li>
     {
       this.state.parr.map((val)=>(
        <li class="page-item"><a class="page-link" onClick={()=>this.handlePage(val)}>{val}</a></li>
       ))
     }
    
    <li class="page-item"><a class="page-link" onClick={()=>this.handleNext()}>Next</a></li>
  </ul>
</nav>

      </>
    )
  }
}

export default Movielist