import * as types from '../actions/actionTypes';

const initialState = {
	headerState: false
};

export default function appreducer( state = initialState, action = {}) {
	switch(action.type) {
		case types.TOGGLEHEADER:

			console.log("THATS A TOGGLE");

			return {
				...state,
				headerState: state.headerState ? false : true 
			}
		default:
			return state;

	}	
}