import * as types from './types';

const initialState = {
  news: [],
  loading: false,
  loaded: true
}

const ACTION_HANDLERS = {
  [types.LOAD_NEWS]: state => {
    return {
      ...state,
      loading: true,
      loaded: false
    }
  },
  [types.LOAD_NEWS_SUCCESS]: (state, action) => {
    return {
      ...state,
      news: action.news,
      loading: false,
      loaded: true
    }
  },
  [types.LOAD_NEWS_FAIL]: state => {
    return {
      ...state,
      loading: false,
      loaded: false
    }
  },
  [types.REMOVE_NEWS]: (state, action) => {
    return {
      ...state,
      news: state.news.filter(news => news !== state.news[action.index])
    }
  },
  [types.ADD_NEWS]: (state, action) => {
    return [
      ...state,
      action.post
    ]
  },
  [types.EDIT_NEWS]: (state, action) => {
    return [
      ...state,
      action.post
    ]
  }
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
