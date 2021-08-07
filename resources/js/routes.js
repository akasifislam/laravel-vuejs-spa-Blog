import AdminHomeComponent from './components/admin/AdminHome.vue'
import CategoryList from './components/admin/category/List.vue'
import CategoryAdd from './components/admin/category/New.vue'
import PostList from './components/admin/post/List.vue'
import PostCreate from './components/admin/post/New.vue'


export const routes = [
    {
        path: '/home',
        component: AdminHomeComponent
    },
    {
        path: '/category-list',
        component: CategoryList,
    },
    {
        path: '/category-add',
        component: CategoryAdd,
    },
    // =============== post route ============     
    {
        path: '/post-list',
        name: 'post-list',
        component: PostList,
    },
    {
        path: '/post-create',
        name: 'post-create',
        component: PostCreate,
    },
  ]