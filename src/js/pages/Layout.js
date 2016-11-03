import React from "react"
import {Link} from "react-router"
import {connect} from "react-redux"
import Header from "../components/Header"
import Footer from "../components/Footer"

//show how if the only thing a component has is a render method you can actually simplify it
@connect((store) => {
  return {
    user: store.user.name
  }
})
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
    console.log(this.props);
    return(
      <div>
      <Header title = {this.props.user.name} changeTitle = {this.changeTitle.bind(this)}/>
      <Link to = "about">Archives!!!!</Link>
      <Link to = "portfolio">Portfolio</Link>
      <Link to = "/">Home</Link>
      {this.props.children}
      <Footer/>
      </div>
    );
  }
}
