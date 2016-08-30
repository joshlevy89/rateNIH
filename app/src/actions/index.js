// search actions
import { receive_results, search_friends } from './search_actions.js'
export { receive_results, search_friends }

// signin actions
export * from './signin_actions'

// wall actions
import { get_posts_by_user_id, receive_posts_for_user_id, save_post, delete_post } from './posts_actions';
export { get_posts_by_user_id, receive_posts_for_user_id, save_post, delete_post }
//export * from './posts_actions'

// triggered when socket io notices someone mark an event
export function update_places(updated_place) {
	return {
	type: 'UPDATE_PLACES',
	updated_place: updated_place
	}
}
