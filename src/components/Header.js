import React from "react"
//import { Link } from "react-router"
import Title from "./Title"

export default class Header extends React.Component{
  handleChange(e){
    const text = e.target.value;
    this.props.changeTitle(text);
  }
  render(){
    //show how it changes the data- only change things that are visibly different
    //setTimeout(() =>{this.setState({title:"New rat page", sameTitle:"Same"})},5000);
    const headerStyle = {
      backgroundColor:"blue",
      color:"white"
    }
    return(
      <div class = "title" style = {headerStyle}>
        <Title title = {this.props.title}/>
        <input value = {this.props.title} onChange = {this.handleChange.bind(this)}/>
      </div>
    );
  }
}
