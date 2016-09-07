import * as types from '../actions/actionTypes';

const initialState = {
	headerState: false,
	selectFonts: []
};

export default function appreducer( state = initialState, action = {}) {
	switch(action.type) {
		case types.TOGGLEHEADER:

			console.log("THATS A TOGGLE");

			return {
				...state,
				headerState: state.headerState ? false : true 
			}
		case types.SELECTTHISFONT:

			return {
				...state,
				selectFonts: [
					...state.messages,
					{
						title: action.font
					}
				]
			}

		default:
			return state;

	}	
}