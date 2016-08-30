const initial_state = {}

export function posts(state=initial_state,action) {
	switch (action.type) {
		case 'RECEIVE_POSTS_FOR_USER_ID':
			return Object.assign({},state,{
				[action.user]: action.posts
			})
		case 'SAVE_POST':
			var userPostsCopy = state[action.user].slice();
			userPostsCopy.push(action.imageUrl);
			return Object.assign({}, state, {
				[action.user]: userPostsCopy
			})
		case 'DELETE_POST':
			var userPostsCopy = state[action.user].slice();
			var index = userPostsCopy.indexOf(action.imageUrl);
			userPostsCopy.splice(index,1);
			return Object.assign({}, state, {
				[action.user]: userPostsCopy
			})
		default:
			return state
	}
}



