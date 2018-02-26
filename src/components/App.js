import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
  fetchCategories,fetchPosts,addPost,fetchComments} from '../actions/action'
import '../index.css';

class App extends Component {
  componentDidMount = () =>  {
  this.props.fetchCategories();
  this.props.fetchPosts();
}
  
  render() {
    return (
      <div className="App text-center bg-primary text-white">
     <h1>Readable</h1>
     <h4> Please Choose A Category! </h4>
      <ul className="list-group">
        {
          this.props.categories.map(categorie =>
            <Link key={categorie.name} to={categorie.name}><li 
            className='text-capitalize text-primary list-group-item p2 display-4' 
            key={categorie.name}> 
            {categorie.name} 
            </li></Link>
          
    )
        }
      </ul>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({categories: state.categories});
export default connect(mapStateToProps,{fetchPosts,fetchComments,fetchPosts,fetchCategories ,addPost})(App);
