import { combineReducers } from 'redux'
import { search_info } from './search_info'
import { user_info } from './user_info'
import { posts } from './posts'

export default combineReducers({
	search_info,
	user_info,
	posts
})