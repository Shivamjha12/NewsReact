import React, { Component } from 'react'
import Newsitem from './Newsitem'
export default class Newscomponent extends Component {

  constructor(){
    super();
    console.log("Shivam Jha");
    this.state = {
      articles: [],
      loaded:false,
      page:1
    }
   }
    async componentDidMount(){
      let url = "https://newsapi.org/v2/everything?q=travel&from=2023-03-15&to=2023-03-15&sortBy=popularity&apiKey=44cbf34cc91942cb9ddd9c45ff723a75&page=1&pagesize=12";
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})

   }

   handlePreviousClick = async ()=>{
    console.log("Previous");
    let url = `https://newsapi.org/v2/everything?q=travel&from=2023-03-15&to=2023-03-15&sortBy=popularity&apiKey=44cbf34cc91942cb9ddd9c45ff723a75&pagesize=12&page=${this.state.page -1}`;
    console.log(url);
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
        page:this.state.page-1,
        articles: parsedData.articles
        
      })
   }

   handleNextClick = async ()=>{
    if(this.state.page>Math.ceil(this.state.totalResults/20)){
      console.log("There is no more data to see");
    }
    else{
      let url = `https://newsapi.org/v2/everything?q=travel&from=2023-03-15&to=2023-03-15&sortBy=popularity&apiKey=44cbf34cc91942cb9ddd9c45ff723a75&pagesize=12&page=${this.state.page+1}`;
      console.log(url);
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
          page:this.state.page+1,
          articles: parsedData.articles
          
        })
     }
   }

  render() {
    return (
      <div className="container my-3">
        <h1>Lates News</h1>
        <div className="row">
        {this.state.articles.map((newsElements)=>{
          return <div className="col-md-4" key={newsElements.url}>
          <Newsitem title={newsElements.title?newsElements.title.slice(0,35):""} description={newsElements.description.slice(0,80)} imagelink={newsElements.urlToImage} newsurl={newsElements.url}/>
          </div>
          
        })}
      </div>
      <div className="d-flex justify-content-between">
        <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePreviousClick} > &#8592; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &#8594; </button>
      </div>
      
      </div>
      
    )
  }
}
