import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { removeItem } from '../actions/action';


let Faves = (props) => (
    <div>
    <h1> Favorites </h1>
    <Link to="/"><i className="fa fa-home fa-3x"><small>Home</small></i></Link>
    <ul className="fave-list">
    {props.list.length > 0 &&
    props.list.map(res => 
        <li  key={res.id}>
        <h3 >{res.name}</h3>
        <img  src={res.image_url} alt={res.name}/>
        <p>{res.location.display_address[0]} {res.location.display_address[1]}</p>
        <h4> {res.price} </h4>
      <h5 className="btn" onClick={() => props.removeItem(res.id)}> unFave! </h5>      
</li>
    )}
    </ul>
    
    </div>
)

let mapStateToProps = state => ({
    list: state.list
})

export default connect(mapStateToProps,{removeItem})(Faves);