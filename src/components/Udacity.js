import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchComments,addPost} from '../actions/action'

class Udacity extends Component {
	createPost = (e) => {
		e.preventDefault();
		let post = {
			title: e.target[0].value, 
			author: null, 
			body: e.target[1].value,
			category: 'udacity',
			commentCount: 0,
			deleted:false,
			voteScore:0
			};
		this.props.addPost(post);
		e.target[0].value = '';
		body: e.target[1].value = '';
	}

render() {
	return (
		<div className="text-center"> 
		<Link to="/"><i className="fa fa-home fa-3x text-left" aria-hidden="true"></i></Link>
			<h3> Udacity </h3>
			<form className="form-group" onSubmit={e => this.createPost(e)}>
			<input className="form-control w-75 p-3 text-center mx-auto" type="text" placeholder="Post Title"/>
			<textarea className="form-control w-75 p-3 text-center mx-auto" type="text" placeholder="Post Body" />				
			<input type="submit" value="Submit" className=" w-75 p-1 btn btn-primary"/>
			</form>
					<ul className="list-group">
			{this.props.post.map(p => {
				if(p.category === 'udacity' ) {
					return <li className="list-group-item" 
					key="p.id">
					<div>
					<h3>{p.title}</h3>
					<p> {p.body} </p>
					</div>
					<button className="btn btn-danger">Remove</button>
					</li>
				}

			})}
			</ul>
		</div>
		)
	}
}

let mapStateToProps = (state) => ({post: state.post});
export default connect(mapStateToProps,{addPost})(Udacity);