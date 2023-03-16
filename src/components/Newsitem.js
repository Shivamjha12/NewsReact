import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title,description,imagelink} = this.props
    return (
      <div>
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={imagelink} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="/something" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
      </div>
    )
  }
}
