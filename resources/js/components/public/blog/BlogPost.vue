<template>
<div class="">
    <!--breadcrumbs area start-->
        <div class="breadcrumbs_area">
            <div class="container">   
                <div class="row">
                    <div class="col-12">
                        <div class="breadcrumb_content">
                            <h3>Blog {{ this.$route.params.id }} </h3>
                            <ul>
                                <li><router-link :to="{ name:'public-home' }">home</router-link></li>
                                <li>blog</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>         
        </div>
        <!--breadcrumbs area end-->
                <!--blog area start-->
        <div class="blog_page_section mt-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-md-12">
                        <div class="blog_wrapper">
                            <div class="row">
                                <div v-for="(post,idx) in blogposts" :key="idx" class="col-lg-4 col-md-4 col-sm-6">
                                    <article class="single_blog">
                                        <figure>
                                            <div class="blog_thumb" v-if="post.photo">
                                                <router-link :to="`single-post/${post.id}`" class="">
                                                    <img :src="post.photo" alt="">
                                                </router-link>
                                                <!-- <a href="blog-details.html"></a> -->
                                            </div>
                                            <div class="blog_thumb" v-else>


                                                <router-link :to="`single-post/${post.id}`" class="">
                                                    <img src="https://cpworldgroup.com/wp-content/uploads/2021/01/placeholder.png" alt="asif">
                                                </router-link>
                                            </div>

                                            <figcaption class="blog_content">
                                                <h4 class="post_title"><a href="blog-details.html"> {{ post.title | sortlength(30,'...') }} </a></h4>
                                                <p> {{ post.description | sortlength(80,'...') }} </p>
                                                <div class="articles_date">
                                                    <p> <span v-if="post.user">{{ post.user.name }}</span> | {{ post.created_at | timeformat }} | <a href="#">  <span v-if="post.category">{{  post.category.cat_name }}</span>  </a> </p>
                                                </div>
                                                <div class="">
                                                    <router-link :to="`single-post/${post.id}`" class="">Read more</router-link>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                    <!-- sidebar  -->
                    <div class="col-lg-3 col-md-12">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>
        <!--blog area end-->
                <!--blog pagination area start-->
        <div class="blog_pagination">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="pagination">
                            <ul>
                                <li class="current">1</li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li class="next"><a href="#">next</a></li>
                                <li><a href="#">>></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <!--blog pagination area end-->

        
</div>
</template>

<script>
import BlogSidebar from './BlogSidebar.vue'
export default {
    name: 'BlogPage',
    components:{
        BlogSidebar
    },
    computed:{
        blogposts(){
        return this.$store.getters.getBlogPosts
        }
    },
    created(){
        this.$Progress.start();
        this.$store.dispatch("loadBlogPosts")
        this.$Progress.finish();
    },
    methods:{
        getAllCategoryPost() {
            this.$store.dispatch("loadBlogPostsById",this.$route.params.id)
        }
    },
    watch:{
        $route(to,from) {
            this.getAllCategoryPost();
        }
    }
    
}
</script>

<style>

</style>