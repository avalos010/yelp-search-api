import React, { Component } from 'react';
import SearchForm from './form.js'
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  state = {
    data: {}
  }


  search = (e) => {
    e.preventDefault();
    fetch('https://yelp-server-api.herokuapp.com/query',{
    method:'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({term:e.target[0].value, 
    location:e.target[1].value
  })
    }).then(res => res)
    .then(res => res.json())
    .then(json => this.setState({data: json}))
      }

  render() {
    return (
      <div className="App">
      <h1> Yelp Search </h1>
        <SearchForm search={this.search} />
        <ul className="list-group mt-5">
        {this.state.data.length > 0  && this.state.data.map(res => 
              <li className="p-2 list-group-item" key={res.id}>
                <h4 >{res.name}</h4>
                <img className="img-fluid w-25" src={res.image_url} alt={res.name}/>
                <p>{res.location.display_address[0]} {res.location.display_address[1]}</p>
                <button className="btn btn-secondary"><a className="text-white" href={res.url} target="_blank"> More Info</a> </button>
                </li>
        )}
       </ul>  
      </div>
    );
  }
}

export default App;
