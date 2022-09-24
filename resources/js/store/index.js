import axios from "axios"

export default {
    state:{
        categories: [],
        posts:[],
        tags:[],
        blogs:[],
        blogposts: [],
        singlepost:[],
    },
    getters:{
        getCategories(state)
        {
            return state.categories
        },
        getPosts(state)
        {
            return state.posts
        },
        getTags(state)
        {
            return state.tags
        },
        getBlogs(state)
        {
            return state.blogs
        },
        getBlogPosts(state)
        {
            return state.blogposts
        },
        singlepost(state){
            return state.singlepost
        },
    },
    mutations:{
        // category
        SET_CATEGORIES(state,data){          
            state.categories = data           
        },
        UPADATE_CATEGORY(state,data){
            state.categories = data
        },
        // post
        SET_POSTS(state,data){
            state.posts = data 
        },
        // tags
        SET_TAGS(state,data){
            state.tags = data
        },
        UPADATE_TAG(state,data){
            state.tags = data
        },
        SET_BlOGS(state,data){
            state.blogs = data
        },
        SET_BlOG_POSTS(state,data){
            state.blogposts = data
        },
        siglePost(state,data){
            return state.singlepost = data
        },
        SET_CATEGORY_BlOG(state,data){
            return state.blogposts = data
        },
        SET_SEARCH_BlOG(state,data) {
            return state.blogposts = data
        }

    },
    actions:{
        loadCategories({commit}){
            axios.get('/api/categories').then((response) => {
                commit('SET_CATEGORIES',response.data.data)
            })
        },
        loadPosts({commit}) {
            axios.get('/api/posts').then((response) => {
                commit('SET_POSTS',response.data)
            })
        },
        loadTags({commit}) {
            axios.get('/api/tags').then((response) => {
                commit('SET_TAGS',response.data.data)
            })
        },
        loadBlogs({commit}){
            axios.get('/api/blogs').then((response) => {
                commit('SET_BlOGS',response.data);
            })
        },
        loadBlogPosts({commit}){
            axios.get('/api/blog-posts').then((response) => {
                commit('SET_BlOG_POSTS',response.data);
            })
        },
        getPostById({commit},payload){
            axios.get('/api/single-post/'+payload)
                .then((response)=>{
                    commit('siglePost',response.data.post)
                })
        },
        loadBlogPostsById({commit},payload){
            axios.get('/api/categories-post/'+payload)
                .then((response)=>{
                    console.log(response.data.posts);
                    commit('SET_CATEGORY_BlOG',response.data.posts)
                })
        },
        loadSearchPost({commit},payload){
            axios.get('/api/search?s='+payload)
                .then((response)=>{
                    commit('SET_SEARCH_BlOG',response.data.posts) 
                })
        }
    },
}