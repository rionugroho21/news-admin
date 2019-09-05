import * as types from './types';

const initialState = {
  photo: [],
  loading: false,
  loaded: true
}

const ACTION_HANDLERS = {
  [types.LOAD_PHOTO]: state => {
    return {
      ...state,
      loading: true,
      loaded: false
    }
  },
  [types.LOAD_PHOTO_SUCCESS]: (state, action) => {
    return {
      ...state,
      photo: action.payload,
      loading: false,
      loaded: true
    }
  },
  [types.LOAD_PHOTO_FAIL]: state => {
    return {
      ...state,
      loading: false,
      loaded: false
    }
  }
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
