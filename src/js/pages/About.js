import React from "react"

export default class About extends React.Component{
  render(){
    console.log(this.props);
    const {query} = this.props.location;
    const {date} = query;
    return(
      <div>
      <h1>About subroute {this.props.params.item}</h1>
      <h1>{date}</h1>
      </div>

    );
  }
}
