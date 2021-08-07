import axios from "axios"

export default {
    state:{
        categories: [],
        posts:[],
    },
    getters:{
        getCategories(state)
        {
            return state.categories
        },
        getPosts(state)
        {
            return state.posts
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
        }
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
        }
    },
}