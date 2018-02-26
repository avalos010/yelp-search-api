import { v4 } from 'uuid'

export function  fetchCategoriesJson() {
	let url = "http://localhost:3001/categories";
	return fetch(url,{headers:{'Authorization': 'ak' }})
	.then(c=> c.json());

}

export function  fetchPostsJson() {
	let url = "http://localhost:3001/posts";
	return fetch(url,{headers:{'Authorization': 'a' }})
	.then(posts => posts.json())

}

export function  fetchPostsCategoryJson(category) {
	let url = `http://localhost:3001/${category}/posts`;
	return fetch(url,{headers:{'Authorization': 'a' }})
	.then(posts => posts.json())

}

export function addPostRequest(data) {
	let url = 'http://localhost:3001/posts';
	return fetch(url, {
		method: "POST",
		body:JSON.stringify({
			...data,
			id: v4(),
			timestamp: Date.now()
		}),
		headers: {
			"Content-Type": "application/json",
			'Accept': 'application/json',
			'Authorization': 'a'
        }}) .then(res => res.json())
        
}

export function fetchCommentsJson(pid) {
	let url = `http://localhost:3001/posts/${pid}/comments`;
	return fetch(url,{headers:{'Authorization': 'a' }})
	.then(comments => comments.json())

}


export function deletePostRequest(id) {
	let url = `http://localhost:3001/posts/${id}`;
	return  fetch(url,
		{method: 'DELETE'},
		{headers:{  
		'Authorization': 'a'
		}
	}).then(response => response.json())
	
}