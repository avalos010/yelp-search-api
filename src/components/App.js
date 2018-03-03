import React, { Component } from 'react';
import SearchForm from './form.js';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {addItem, setData} from '../actions/action.js';
import './App.css';


class App extends Component {
 
 componentWillMount = () => {
  //To Wake up server
    fetch('https://yelp-server-api.herokuapp.com', {
          method:'GET'
    })
    .then(res => res)
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
    .then(json => this.props.setData(json))
      }

      faveIt = (item) => {
        this.props.addItem(item);
      }

  render() {

    return (
     
      <div className="App">
       
      <h1> Yelp&#x2764;It </h1>
        <ul className="nav">
          <Link to="/faves"><li> <i className="fa fa-heart fa-3x"></i><small>Faves</small></li></Link>
          </ul>
         
        
        <SearchForm search={this.search} />
        <ul className="data-list">
        {this.props.data.length > 0  && this.props.data.map(res => 
              <li  key={res.id}>
                <h3 >{res.name}</h3>
                <img  src={res.image_url} alt={res.name}/>     
            <p>{res.location.display_address[0]} {res.location.display_address[1]}</p>
            <a href={"tel:"+res.phone}>{res.phone}</a>
            <h4> {res.price} </h4>
            <h5 className="btn" onClick={() => this.faveIt(res)}> Fave It! </h5> 
        </li>
                
        )}
       </ul>  
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  data: state.data,
  list: state.list
})

export default connect(mapStateToProps,{addItem,setData})(App);
