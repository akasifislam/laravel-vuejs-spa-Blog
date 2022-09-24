<template>
    <span id="blogsidebar">
      <div class="blog_sidebar_widget">
              <div class="widget_list widget_search">
                  <div class="widget_title">
                      <h3>Search</h3>
                  </div>
                  <form action="#">
                      <input @keyup="realSearch" placeholder="Search..." v-model="keyword" type="text">
                      <!-- <button type="submit" @click.prevent="realSearch">search</button> -->
                  </form>
              </div>
              
              <div class="widget_list widget_categories">
                  <div class="widget_title">
                      <h3>Categories</h3>
                  </div>
                  <ul>
                      <li v-for="(category,idx) in categories" :key="idx"><router-link :to="`/categories-post/${category.id}`"> {{ category.cat_name }} </router-link></li>
                  </ul>
              </div>
              <div class="widget_list widget_post">
                  <div class="widget_title">
                      <h3>Recent Posts</h3>
                  </div>
                  <div v-for="(post,idx) in blogposts.slice(0, 5)" :key="idx" class="post_wrapper">
                      <div v-if="post.photo" class="post_thumb">
                          <router-link :to="`single-post/${post.id}`">
                            <img :src="post.photo" alt="">
                          </router-link>
                      </div>
                      <div v-else class="post_thumb">
                          <router-link :to="`single-post/${post.id}`">
                            <img src="https://cdn.pixabay.com/photo/2021/01/29/14/41/wardrobe-5961193__340.jpg" alt="">
                          </router-link>
                      </div>
                      <div class="post_info">
                          <h4><router-link :to="`single-post/${post.id}`">{{ post.title }}</router-link></h4>
                          <span>{{ post.created_at | timeformat }} </span>
                      </div>
                  </div>
              </div>
              <div class="widget_list widget_tag">
                  <div class="widget_title">
                      <h3>Tag products</h3>
                  </div>
                  <div class="tag_widget">
                      <ul>
                          <li><a href="#">asian</a></li>
                          <li><a href="#">brown</a></li>
                          <li><a href="#">euro</a></li>
                      </ul>
                  </div>
              </div>
      </div>
  </span>
</template>

<script>
export default {
    data() {
        return {
            keyword:''
        }
    },
    name: 'BlogSidebar',
    computed:{
       categories(){
           return this.$store.getters.getCategories
       },
       blogposts(){
        return this.$store.getters.getBlogPosts
        }
    },
    created(){
        this.$store.dispatch("loadCategories")
        this.$store.dispatch("loadBlogPosts")
    },
    methods:{
        realSearch() {
            this.$store.dispatch("loadSearchPost",this.keyword)
        }
    }
}
</script>

<style>

</style>