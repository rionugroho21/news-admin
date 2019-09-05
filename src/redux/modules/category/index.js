import * as types from './types';

const _datas = [];

const initialState = {
  category: [],
  loading: false,
  loaded: true
}

const ACTION_HANDLERS = {
  [types.LOAD_CATEGORY]: state => {
    return {
      ...state,
      loading: true,
      loaded: false
    }
  },
  [types.LOAD_CATEGORY_SUCCESS]: (state, action) => {
    return {
      ...state,
      category: action.datas,
      loading: false,
      loaded: true
    }
  },
  [types.LOAD_CATEGORY_FAIL]: state => {
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
