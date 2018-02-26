import {idCheck} from './helper'
import {combineReducers} from 'redux'
import {
    ADD_POST,
    REMOVE_POST,
    LOAD_COMMENT,
    LOAD_POST,
    REMOVE_COMMENT,
    CATEGORIES
} from '../actions/action.js'


function post(state =[], action) {
    switch (action.type) {
     case LOAD_POST:
     return action.post;
     case ADD_POST: 
     return [...state, action.post];
    
     case REMOVE_POST: 
     let id = action.post;
     return state.map(post => {
         if(post.id === id) {
            post.deleted = true;
         }
     })
     default:
     return state;
 }
};

function comments(state=[],action) {
    switch(action.type) {
        case LOAD_COMMENT:
        return action.comments;

        default:
        return state;
    }
}
function categories(state=[], action) {
	switch(action.type) {
		case CATEGORIES:
		return action.categories.categories

		default:
		return state;
	}
}

let rootReducer = combineReducers({
post, categories, comments
});

export default rootReducer;