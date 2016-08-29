const initial_state = {}

export function posts(state=initial_state,action) {
	switch (action.type) {
		case 'RECEIVE_POSTS_FOR_USER_ID':
			return Object.assign({},state,{
				[action.userId]: action.posts
			})
		case 'SAVE_POST':
			var userPostsCopy = state[action.userId].slice();
			userPostsCopy.push(action.imageUrl);
			return Object.assign({}, state, {
				[action.userId]: userPostsCopy
			})
		case 'DELETE_POST':
			var userPostsCopy = state[action.userId].slice();
			var index = userPostsCopy.indexOf(action.imageUrl);
			userPostsCopy.splice(index,1);
			return Object.assign({}, state, {
				[action.userId]: userPostsCopy
			})
		default:
			return state
	}
}



