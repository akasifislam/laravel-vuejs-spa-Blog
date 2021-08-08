import axios from "axios"

export default {
    state:{
        categories: [],
        posts:[],
        tags:[],
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
        }
    },
    mutations:{
        SET_CATEGORIES(state,data){
            // console.log(state.categories)           
            state.categories = data
            // console.log(state.categories)           
        },
        SET_POSTS(state,data){
            state.posts = data 
        },
        SET_TAGS(state,data){
            state.tags = data
        },
    },
    actions:{
        loadCategories({commit}){
            axios.get('/api/categories').then((response) => {
                commit('SET_CATEGORIES',response.data)
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
        }
    },
}