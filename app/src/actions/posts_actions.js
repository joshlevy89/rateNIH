import { postApi, getApi } from '../api-methods'


export function get_posts_by_user_id(userId) {

	// todo: replace mock api call with real
	//var posts = ['a.png', 'b.png'];
	var posts = [];

	return {
		type: 'RECEIVE_POSTS_FOR_USER_ID',
		posts: posts,
		userId: userId
	}
}

export function save_post(userId, imageUrl) {

	// async save to db
	const body = {
		imageUrl: imageUrl,
		userId: userId
	}
	postApi('api/postsController',body)

	// modify local state
	return {
		type: 'SAVE_POST',
		imageUrl: imageUrl,
		userId: userId
	}
}

export function delete_post(userId, imageUrl) {
	return {
		type: 'DELETE_POST',
		imageUrl: imageUrl,
		userId: userId
	}
}