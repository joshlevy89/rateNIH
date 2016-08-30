const initial_state = {
	results: [],
	request_status: 'QUIET'
}

export function search_info(state=initial_state,action) {
	switch (action.type) {
		case 'REQUEST_RESULTS':
			return Object.assign({},state,{
				request_status: 'REQUESTING_RESULTS'
			})
		case 'RECEIVE_RESULTS':
			return Object.assign({},state,{
				request_status: 'QUIET',
				results: action.results
		})
		case 'DID_NOT_RECEIVE_RESULTS':
			return Object.assign({},state,{
				request_status: 'QUIET'
			})
		default:
			return state
	}
}

export function getIdIndex(state,id) {
	var results = state.results
	var index = results.findIndex(result=>{
		if (result.id === id) {
			return true
		}
		else {
			return false
		}
	})
	return index
}
