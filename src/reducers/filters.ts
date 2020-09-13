import { CHANGE_FILTER } from '../constants'
import { Filter, FilterActionType } from '../types'

const BASE_FILTER: Filter = 'all'

const filter = (state = BASE_FILTER, action: FilterActionType): Filter => {
	let { type, payload } = action

	switch (type) {
		case CHANGE_FILTER:
			return payload.activeFilter
		default:
			return state
	}
}

export default filter
