import React from "react"
import {Link} from "react-router"
import Header from "../components/Header"
import Footer from "../components/Footer"

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
      <Link to = "about">Archives!!!!</Link>
      <Link to = "portfolio">Portfolio</Link>
      <Link to = "/">Home</Link>
      {this.props.children}
      <Footer/>
      </div>
    );
  }
}
