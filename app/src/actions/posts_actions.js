export function get_posts_by_user_id(userId) {

	// todo: replace mock api call with real
	var posts = ['a.png', 'b.png'];

	return {
		type: 'RECEIVE_POSTS_FOR_USER_ID',
		posts: posts,
		userId: userId
	}
}

export function save_post(userId, imageUrl) {
	return {
		type: 'SAVE_POST',
		imageUrl: imageUrl,
		userId: userId
	}
}