import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title,description,imagelink,newsurl} = this.props
    return (
      <div>
            <div className="card my-2" style={{height:"25rem", width: "15rem"}}>
                <img className="card-img-top" style={{height:"10rem", width: "15rem"}} src={!imagelink?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlS2MyP82wFMKpr7e1CxfyAoqgDRx0Bg0seg&usqp=CAU":imagelink} alt={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlS2MyP82wFMKpr7e1CxfyAoqgDRx0Bg0seg&usqp=CAU"}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsurl} className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
      </div>
    )
  }
}
