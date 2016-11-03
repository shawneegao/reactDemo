import React from "react"
import ReactDOM from "react-dom" //rendering engine

export default class Layout extends React.Component{
  constructor(){
    super();
     this.dog = "sobey"
  }
  render(){
    return(
      <div>
        Hi it works {this.dog}!!!
      </div>
    );
  }
}
const app = document.getElementById("app");
ReactDOM.render(<Layout/>, app);
