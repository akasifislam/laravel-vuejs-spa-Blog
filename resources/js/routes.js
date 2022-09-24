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
    {
        path: '/tag-edit/:id',
        name: 'tag-edit',
        component: ()=> import('./components/admin/tag/Edit.vue'),
    },

    // =============== Tag route ============ 
    {
        path: '/blog-list',
        name: 'blog-list',
        component: ()=> import('./components/admin/blog/List.vue'),
    },
    {
        path: '/blog-create',
        name: 'blog-create',
        component: ()=> import('./components/admin/blog/New.vue'),
    },
    {
        path: '/blog-edit/:id',
        name: 'blog-edit',
        component: ()=> import('./components/admin/blog/Edit.vue'),
    },





    // ================ Message ==============================  

    {
        path: '/message-list',
        name: 'message-list',
        component: ()=> import('./components/admin/message/List.vue'),
    },
    {
        path: '/message-create',
        name: 'message-create',
        component: ()=> import('./components/admin/message/New.vue'),
    },




    // =================== Frontend Routeing =====================

    {
        path:'/',
        name: 'public-home',
        component: ()=> import('./components/public/PublicHome.vue'),
    },
    {
        path:'/test-page',
        name: 'test-page',
        component: ()=> import('./components/public/blog/TestPost.vue'),
    },
    {
        path:'/blog-post',
        name: 'blog-post',
        component: ()=> import('./components/public/blog/BlogPost.vue'),
    },
    {
        path:'/single-post/:id',
        name: 'single-post',
        component: ()=> import('./components/public/blog/BlogSingle.vue'),
    },
    {
        path:'/categories-post/:id',
        name: 'categories-post',
        component: ()=> import('./components/public/blog/BlogPost.vue'),
    },
















  ]