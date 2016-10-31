function request_results() {
	return {
		type: 'REQUEST_RESULTS'
	}
}

function did_not_receive_results() {
	return {
		type: 'DID_NOT_RECEIVE_RESULTS'
	}
}

export function search_drug(searchStr) {
	return (dispatch) => {
        var url = "https://api.fda.gov/drug/event.json?"+
        			"count=patient.patientsex&"+
        			"search=patient.drug.openfda.brand_name.exact:"
        dispatch(request_results())
		fetch(url+searchStr)
		.then(response => response.json())
      	.then(json => { 
	      	if (json) { dispatch(receive_results(json)) }
	    	else {
	    		alert('No results were received. Check your spelling.')
	    		dispatch(did_not_receive_results())
	    	}
    	}
      )
	}
}

export function receive_results(results) {
	return {
		type: 'RECEIVE_RESULTS',
		results: results
	}
}
