import ACTIONS_TYPES from './../actions/actionTypes';

const initialState = { count: 0, step: 1 };

function counterReducer (state = initialState, action) {
  const { COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_SET_STEP } =
    ACTIONS_TYPES;

  const { type } = action;

  switch (type) {
    case COUNTER_INCREMENT: {
      const { count, step } = state;
      return { ...state, count: count + step };
    }

    case COUNTER_DECREMENT: {
      const { count, step } = state;
      return { ...state, count: count - step };
    }
    case COUNTER_SET_STEP: {
      const { value } = action;
      return { ...state, step: value };
    }

    default:
      return state;
  }
}

export default counterReducer;
