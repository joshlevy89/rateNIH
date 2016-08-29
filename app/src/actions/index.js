// search actions
import { receive_results, search_yelp } from './search_actions.js'
export { receive_results, search_yelp }

// attendee actions
import { mark_attending, try_remove_attendee, mark_remove } from './attendee_actions.js'
export { mark_attending, try_remove_attendee, mark_remove}

// signin actions
export * from './signin_actions'

// wall actions
import { get_posts_by_user_id, save_post, delete_post } from './posts_actions';
export { get_posts_by_user_id, save_post, delete_post }

// triggered when socket io notices someone mark an event
export function update_places(updated_place) {
	return {
	type: 'UPDATE_PLACES',
	updated_place: updated_place
	}
}
