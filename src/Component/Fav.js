import React, { Component } from 'react'


export class Fav extends Component {
  constructor(){
    super()
    this.state={
      genres:[],
      movie:[],
      currgenre:'All Genres',
      currText:''
    }
  }
  componentDidMount(){
    let data=JSON.parse(localStorage.getItem('movieArr')||'[]')
    
    let tempArr=[];
  
    let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};
    data.map((moviele)=>{
      
      if(!tempArr.includes(genreids[moviele.genre_ids[0]])){
        tempArr.push(genreids[moviele.genre_ids[0]])
      }
    })
    tempArr.unshift('All Genres')
    this.setState({
      genres:[...tempArr],
      movie:[...data]
    })
  }
  handleGenreChange=(genre)=>{
     this.setState({
       currgenre:genre
     })
  }
  handleDecsr=()=>
  {
    let temp=this.state.movie
    temp.sort(function(objA,ObjB){
      return ObjB.popularity-objA.popularity
    })
    this.setState({
      movie:[...temp]
    })
  }

  handleAsync=()=>
  {
    let temp=this.state.movie
    temp.sort(function(objA,ObjB){
      return objA.popularity-ObjB.popularity
    })
    this.setState({
      movie:[...temp]
    })
  }
  handleRatingDecs=()=>
  {
    let temp=this.state.movie
    temp.sort(function(A,B){
      return B.vote_average-A.vote_average
    })
    this.setState({
      movie:[...temp]
    })
  }
  handleRatingAsync=()=>
  {
    let temp=this.state.movie
    temp.sort(function(A,B){
      return A.vote_average-B.vote_average
    })
    this.setState({
      movie:[...temp]
    })
  }
  handleDel=(moviele)=>{
    let temp=this.state.movie
    temp.map((tempVal)=>{
      return tempVal.id==moviele.id
    })
    this.setState({
      movie:[...temp]
    })
  }
  render() {
    let genreids={28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};
    let filterArr=[]
    if(this.state.currText=='')
    filterArr=this.state.movie
    else{
      filterArr=this.state.movie.filter((moviele)=>{
       let title=moviele.title.toLowerCase();
       return title.includes(this.state.currText.toLowerCase().trim(' '))
      })
    }
  
    if(this.state.currgenre!= 'All Genres'){
     
      filterArr=this.state.movie.filter((moviele)=>genreids[moviele.genre_ids[0]]==this.state.currgenre)
    }
    
   
      
    
   


    
    return (
      <div className='main-cont'>
      <div className='row'>
        <div class='col-3'>
        <ul class="list-group genre-selector">
        
  
   {  
     this.state.genres.map((genre)=>(
       
      this.state.currgenre==genre?(
        <li class="list-group-item" style={{'background':'#3f51b5', 'fontWeight':'bold','color':'white'}}>{genre}</li>
      ):
      (<li class="list-group-item" style={{'color':'#3f51b5'}} onClick={()=>this.handleGenreChange(genre)}>{genre}</li>)
     ))
   }
   
</ul>
        </div>
      </div>
      <div class='col-9'>
        <div className='row'>
          <input type='text' placeholder='Search' class="input-group-text col" value={this.state.currText} onChange={(e)=>this.setState({currText:e.target.value})}/>
          <input type='number' class="input-group-text col" />
        </div>
        <div className='row'>
        <table class="table">
  <thead>
    <tr>
      <th></th>
      <th scope="col">Title</th>
      <th scope="col">genre</th>
      <th scope="col"> <i class="fa-solid fa-sort-up" onClick={this.handleDecsr}></i>
  Popularity <i class="fa-solid fa-sort-down" onClick={ this.handleAsync}></i>
 </th>
    <th scope="col"> <i class="fa-solid fa-sort-up" onClick={this.handleRatingDecs}></i>Ratings <i class="fa-solid fa-sort-down
    " onClick={this.handleRatingAsync}></i></th>
      
  
    </tr>
  </thead>
  <tbody>
  {
    filterArr.map((ele)=>(
      <tr>
      <td><img style={{'width':'6rem'}} src={'https://image.tmdb.org/t/p/original'+ele.backdrop_path}
      /></td>
      <th scope="row">{ele.title}</th>
      <td>{genreids[ele.genre_ids[0]]}</td>
    
      <td>{ele.popularity}</td>
      <td>{ele.vote_average}</td>
      <td><button type="button" class="btn btn-danger" style={{'borderRadius':'10px'}} onClick={()=>this.handleDel(ele)}>Delete</button></td>
    </tr>
    ))
  }
  
    
  
  </tbody>
</table>
   <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
        </div>
        
      </div>
      
      </div>
    )
  }
}

export default Fav