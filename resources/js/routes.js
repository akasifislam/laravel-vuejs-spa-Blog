import AdminHomeComponent from './components/admin/AdminHome.vue'


export const routes = [
    {
        path: '/home',
        component: AdminHomeComponent
    },
    {
        path: '/category-list',
        component: ()=> import('./components/admin/category/List.vue'),
    },
    {
        path: '/category-add',
        component: ()=> import('./components/admin/category/New.vue'),
    },
    {
        path: '/category-edit/:id',
        name: 'category-edit',
        component: ()=> import('./components/admin/category/Edit.vue'),
    },
    // =============== post route ============     
    {
        path: '/post-list',
        name: 'post-list',
        component: ()=> import('./components/admin/post/List.vue'),
    },
    {
        path: '/post-create',
        name: 'post-create',
        component: ()=> import('./components/admin/post/New.vue'),
    },
    // =============== Tag route ============     
    {
        path: '/tag-list',
        name: 'tag-list',
        component: ()=> import('./components/admin/tag/List.vue'),
    },
    {
        path: '/tag-create',
        name: 'tag-create',
        component: ()=> import('./components/admin/tag/New.vue'),
    },
  ]