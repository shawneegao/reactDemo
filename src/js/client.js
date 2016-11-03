import React from "react"
import ReactDOM from "react-dom" //rendering engine
import {createStore, combineReducers} from "redux"
import {Provider} from "react-redux"
import { Router, Route, hashHistory, IndexRoute } from "react-router"
import Landing from "./pages/Landing"
import Layout from "./pages/Layout"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"

const userReducer = (state = {}, action )=> {
  switch (action.type) {
    case "CHANGE_NAME":{
      state.name = {...state, name:action.payload}
      break;
    }
    case "CHANGE_AGE":{
      state.age = {...state, age:action.payload}
      break;
    }
    default:

  }
  return state;
}
const tweetsReducer = (state =[], action) => {
  return state;
}

const reducer = combineReducers({
  user: userReducer,
  tweets:tweetsReducer
})

const store = createStore(reducer , {

});

store.subscribe(() => {
  console.log("Something changed!!!", store.getState());
})

store.dispatch({type:"CHANGE_NAME", payload: "Shawnee"});
store.dispatch({type:"CHANGE_AGE", payload: "23"});
store.dispatch({type:"CHANGE_NAME", payload: "Sobey"});



const app = document.getElementById('app');
ReactDOM.render(
  <Provider store = {store} >
    <Layout/>
  </Provider>, app);
/*
ReactDOM.render(
  <Router history = {hashHistory} >
    <Route path = "/" component = {Layout}>
      <IndexRoute component={Landing}></IndexRoute>
      <Route path = "about" component = {About}></Route>
      <Route path = "portfolio(/:image)" component = {Portfolio}></Route>
    </Route>
  </Router>, app);
*/
