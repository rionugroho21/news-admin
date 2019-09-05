import Layout from '../component/Layout';
import News from './News';
import NewsEdit from './News/NewsEdit';
import NewsAdd from'./News/NewsAdd';
import Photo from './Photo';

export default [{
  component: Layout,
  routes: [
    {
      path: "/",
      exact: true,
      component: News
    },{
      path: "/addNews",
      exact: true,
      component: NewsAdd
    },{
      path: "/editNews/:id",
      exact: true,
      component: NewsEdit
    },{
      path: "/photo",
      exact: true,
      component: Photo
    }
  ]
}]
