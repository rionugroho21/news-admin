import { combineReducers } from 'redux';
import newsReducers from './modules/news';
import photoReducers from './modules/photo';
import categoryReducers from './modules/category';

export default combineReducers({
    category: categoryReducers,
    news: newsReducers,
    photo: photoReducers
});