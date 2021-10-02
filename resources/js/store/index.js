import axios from "axios"

export default {
    state:{
        categories: [],
        posts:[],
        tags:[],
        blogs:[],
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
        }
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
        }
    },
}