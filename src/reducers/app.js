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

			//console.log(state.selectFonts);

			return {
				...state,
				selectFonts: [
					...state.selectFonts,
					{
						title: action.font
					}
				]
			}
		case types.CLEARFONTS:

			return {
				...state,
				selectFonts: []
			}


		default:
			return state;

	}	
}

