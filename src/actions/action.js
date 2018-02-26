import {fetchCategoriesJson,
	fetchPostsCategoryJson,fetchPostsJson,addPostRequest,fetchCommentsJson,
	deletePostRequest
} from '../utils/api';

export const CATEGORIES = 'CATEGORIES';

export function loadCategories(categories) {
	return {
		type: CATEGORIES,
		categories
	}
}


export function fetchCategories() {
	return function(dispatch) {
		return fetchCategoriesJson().then(c => dispatch(loadCategories(c)));
	}
}
//=====================================================
//-------------------POSTS----------------------
//====================================================
export const ADD_POST = 'ADD_POST';
export const LOAD_POST = 'LOAD_POST';
export const REMOVE_POST = 'REMOVE_POST';

export function loadPost(post) {
    return {	
    	type: LOAD_POST,
    	post
    }
}
export function newPost(post) {
	return {
	type: ADD_POST,
	post
	}
}
export function removePost(post) {
	return {
	type:REMOVE_POST,
	post
	}
}

export function addPost(post) {
	return function(dispatch) {
	return  addPostRequest(post).then(post => dispatch(newPost(post)));

	}	
}


export function fetchPosts() {
	return function(dispatch) {
		return fetchPostsJson().then(posts => dispatch(loadPost(posts)));
	}
}

export function fetchCategoryPosts(category) {
	return function(dispatch) {
		return fetchPostsCategoryJson(category).then(posts => dispatch(loadPost(posts)));
	}
}

export function deletePost(post) {
	return function(dispatch) {
		return deletePostRequest(post.id).then(id => dispatch(removePost(post.id)));
	}
}

//=====================================================
//------------COMMENTS-------------------------
//====================================================
export const LOAD_COMMENT = 'LOAD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

function loadComment(comments) {
	return {
		type: LOAD_COMMENT,
		comments
	}
}

export function fetchComments(pid) {
	return function(dispatch) {
		return fetchCommentsJson(pid).then(comments => dispatch(loadComment(comments)));
}
}