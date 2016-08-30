import { postApi, getApi } from '../api-methods'


export function get_posts_by_user_id(user) {

	// todo: replace mock api call with real
	//var posts = ['a.png', 'b.png'];
	// var posts = [];

	// return {
	// 	type: 'RECEIVE_POSTS_FOR_USER_ID',
	// 	posts: posts,
	// 	user: user
	// }

	const body = {
		user: user
	}

	postApi('api/postsController/getPostsByUserId',body)

	return {
		type: 'GET_POSTS_FOR_USER_ID'
	}
}

export function receive_posts_for_user_id(user, posts){
	return {
		type: 'RECEIVE_POSTS_FOR_USER_ID',
		posts: posts,
		user: user
	}
}

export function save_post(user, imageUrl) {

	// async save to db
	const body = {
		imageUrl: imageUrl,
		user: user
	}
	postApi('api/postsController/savePost',body)

	// modify local state
	return {
		type: 'SAVE_POST',
		imageUrl: imageUrl,
		user: user
	}
}

export function delete_post(user, imageUrl) {
	// async save to db
	const body = {
		imageUrl: imageUrl,
		user: user
	}
	postApi('api/postsController/removePost',body)

	//modify local state
	return {
		type: 'DELETE_POST',
		imageUrl: imageUrl,
		user: user
	}
}