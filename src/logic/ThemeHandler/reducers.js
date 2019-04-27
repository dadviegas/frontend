import { constants } from './actions';

const initialState = {
  name: 'Indigo',
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case constants.SET_THEME: {
      return {
        ...state,
        ...payload,
      };
    }
    default:
      return state;
  }
}
