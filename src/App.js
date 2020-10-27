
import  React, { Component }from 'react';
import axios from "axios";

export default class App extends Component {

  componentDidMount(){
    axios.get('http://teleorgapi.azurewebsites.net/api/orgao')
  }
  render() {
    return (
      <h1>Teste teleorg</h1>
    )
  }
}