import React, { Component } from 'react'
import Newsitem from './Newsitem'
export default class Newscomponent extends Component {
  render() {
    return (
      <div className="container my-3">
        This is Newscomponent
        <div className="row">
        <div className="col-md-4">
        <Newsitem title="Hello hii i am shivam" description="Blaha blaha blaha Blaha blaha blaha Blaha blaha blaha Blaha blaha blaha" imagelink="https://miro.medium.com/v2/resize:fit:490/1*33PkguILLO7GBsdbGlSx3w.gif"/>
        </div>
        <div className="col-md-4">
        <Newsitem title="Hello hii i am shivam" description="Blaha blaha blaha Blaha blaha blaha Blaha blaha blaha Blaha blaha blaha" imagelink="https://miro.medium.com/v2/resize:fit:490/1*33PkguILLO7GBsdbGlSx3w.gif"/>
        </div>
        <div className="col-md-4">
        <Newsitem title="Hello hii i am shivam" description="Blaha blaha blaha Blaha blaha blaha Blaha blaha blaha Blaha blaha blaha" imagelink="https://miro.medium.com/v2/resize:fit:490/1*33PkguILLO7GBsdbGlSx3w.gif"/>
        </div>
        <div className="col-md-4">
        <Newsitem title="Hello hii i am shivam" description="Blaha blaha blaha Blaha blaha blaha Blaha blaha blaha Blaha blaha blaha" imagelink="https://miro.medium.com/v2/resize:fit:490/1*33PkguILLO7GBsdbGlSx3w.gif"/>
        </div>
        </div>

      </div>
      
    )
  }
}
