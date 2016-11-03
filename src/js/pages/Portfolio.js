import React from "react"
//import Picture from "../components/Picture"

export default class Portfolio extends React.Component{
  constructor(){
    super();
    this.state = {
      dog:"Dog"
    };
  }
  handleChange(e){
    this.setState({dog:e.target.value})
  }
  render(){
    return(<div>Hello</div>);
  /*  const pictureList = [
      "https://s-media-cache-ak0.pinimg.com/236x/2b/c2/60/2bc260c0961658efcd2769aab0e4e107.jpg",
      "https://36.media.tumblr.com/5c40dc822e4de23fbae241fa48cb71df/tumblr_nq93n0zMz11uvx3e5o3_1280.jpg",
      "https://s-media-cache-ak0.pinimg.com/236x/6b/de/b6/6bdeb69f1e9d18ee2a10d9c5f8e0029f.jpg",
    ].map((source, i) => <Picture key={i} source={source} /> )
    console.log(this.props);
    const {images} = this.props.params.image;
    const {dog, human} = this.props.location.query;
    return(
      <div>
        <h1>Portfolio{images}</h1>
        <input value = {this.state.dog} onChange = {this.handleChange.bind(this)}/>
        <h1>{this.state.dog}</h1>
        <h1></h1>
        {pictureList}
      </div>
    );*/
  }
}
