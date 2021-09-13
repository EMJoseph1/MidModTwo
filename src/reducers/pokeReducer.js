import { ifStart, ifSuccess, ifFail } from '../actions'

const initialState = {
    pokeURL: '',
  error: '',
  isFetching: false
};

function pokeReducer(state = initialState, action) {
	switch (action.type) {

    case ifStart:
      return { ...state, isFetching: true };

		case ifSuccess:
			return { ...state, pokeURL: action.payload, isFetching: false };

		case ifFail:
			return { ...state, error: action.payload, isFetching: false };

		default:
			return state;
	}
}

export default pokeReducer