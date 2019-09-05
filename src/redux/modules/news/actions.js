import { database } from '../../../models/config';
import * as types from './types';

export const startLoadingNews = () => dispatch => {
  dispatch({ type: types.LOAD_NEWS });
  database.ref('datas').once('value').then((snapshot) => {
    const news = [];
    snapshot.forEach((childSnapshot) => {
      news.push(childSnapshot.val());
    });
    dispatch({ type: types.LOAD_NEWS_SUCCESS, news });
  }).catch((error) => {
    dispatch({ type: types.LOAD_NEWS_FAIL })
    console.log(error);
  });
};

export function startAddingNews(post) {
  return (dispatch) => {
    return database.ref('datas').update({ [post.id]: post }).then(() => {
      dispatch({ type: types.ADD_NEWS, post });
    }).catch((error) => {
      console.log(error);
    });
  };
};

export function startEditingNews(post) {
  return (dispatch) => {
    return database.ref('datas').update({ [post.id]: post }).then((snapshot) => {
      const postData = [];
      snapshot.forEach((childSnapshot) => {
        postData.push(childSnapshot.val());
      });
      dispatch({ type: types.EDIT_NEWS, post });
    }).catch((error) => {
      console.log(error);
    });
  };
};

export function startRemovingNews(index, id) {
  return (dispatch) => {
    return database.ref(`datas/${id}`).remove().then(() => {
      dispatch({ type: types.REMOVE_NEWS, index });
    }).catch((error) => {
      console.log(error);
    });
  };
};
