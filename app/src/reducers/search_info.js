const initial_state = {
	results: null,
	request_status: 'QUIET'
}

export function search_info(state=initial_state,action) {
	switch (action.type) {
		case 'REQUEST_RESULTS':
			return Object.assign({},state,{
				request_status: 'REQUESTING_RESULTS'
			})
		case 'RECEIVE_RESULTS':
			var results = action.results.results
			var count1 = results[0].count
			var gender1 = results[0].term
			var count2 = results[1].count
			var gender2 = results[1].term
			if (gender1 === 1) {
				var maleNum = count1
				var femaleNum = count2
			}
			else {
				var maleNum = count2
				var femaleNum = count1
			}
			return Object.assign({},state,{
				request_status: 'QUIET',
				results: {'male':maleNum,'female':femaleNum}
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
