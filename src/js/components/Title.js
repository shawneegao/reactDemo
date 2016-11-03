import React from "react"
//a "dumb" component
export default class Title extends React.Component{
  render(){
    return(
      console.log(this.props),
      //<h1>Title component!</h1>
      <div>
      <h1>{this.props.title}</h1>
      </div>
    );
  }
}
