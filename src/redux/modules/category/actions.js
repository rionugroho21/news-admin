import { database } from '../../../models/config';
import * as types from './types';

export const startLoadingCat = () => dispatch => {
  dispatch({ type: types.LOAD_CATEGORY });
  database.ref('category').once('value').then((snapshot) => {
    let datas = [];
    snapshot.forEach((childSnapshot) => {
      datas.push(childSnapshot.val());
    });
    dispatch({ type: types.LOAD_CATEGORY_SUCCESS, datas })
  }).catch((error) => {
    dispatch({ type: types.LOAD_CATEGORY_FAIL })
    console.log(error);
  });
}
