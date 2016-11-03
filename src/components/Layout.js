import React from "react"
import Header from "./Header"
import Footer from "./Footer"

//show how if the only thing a component has is a render method you can actually simplify it

export default class Layout extends React.Component{
  constructor(){
    super();
    this.state= {
      title:"The rat page",
    }
  }
  changeTitle(title){
    this.setState({title});
  }
  render(){
    return(
      <div>
      <Header title = {this.state.title} changeTitle = {this.changeTitle.bind(this)}/>
      <Footer/>
      </div>
    );
  }
}
