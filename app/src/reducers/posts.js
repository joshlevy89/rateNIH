const initial_state = {}

export function posts(state=initial_state,action) {
	switch (action.type) {
		case 'RECEIVE_POSTS_FOR_USER_ID':
			return Object.assign({},state,{
				[action.userId]: action.posts
			})
		case 'SAVE_POST':
			console.log(state);
			console.log(state[0]);
			console.log(action.userId);
			var userPosts = state[action.userId];
			userPosts.push(action.imageUrl);
			return Object.assign({}, state, {
				[action.userId]: userPosts
			})
		default:
			return state
	}
}



