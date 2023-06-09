import {
	PRESENT_LOADER,
	HIDE_LOADER,
	RESET_STORE,
} from '../actions/constant/ActionTypes';

const INITIAL_STATE = {
	presentLoader: false,
};

const LoaderReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case PRESENT_LOADER:
			return {
				...state,
				presentLoader: true,
			};

		case HIDE_LOADER:
			return {
				...state,
				presentLoader: false,
			};

		case RESET_STORE:
			return {
				...state,
				presentLoader: false,
			};

		default:
			return state;
	}
};

export default LoaderReducer;
