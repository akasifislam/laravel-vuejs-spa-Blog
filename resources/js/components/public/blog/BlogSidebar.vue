<template>
    <span id="blogsidebar">
      <div class="blog_sidebar_widget">
              <div class="widget_list widget_search">
                  <div class="widget_title">
                      <h3>Search</h3>
                  </div>
                  <form action="#">
                      <input placeholder="Search..." type="text">
                      <button type="submit">search</button>
                  </form>
              </div>
              
              <div class="widget_list widget_categories">
                  <div class="widget_title">
                      <h3>Categories</h3>
                  </div>
                  <ul>
                      <li v-for="category in categories" :key="category"><a href="#"> {{ category.cat_name }} </a></li>
                      <!-- <li><a href="#">Company</a></li>
                      <li><a href="#">Gallery</a></li>
                      <li><a href="#">Image</a></li>
                      <li><a href="#">Other</a></li>
                      <li><a href="#">Travel</a></li> -->
                  </ul>
              </div>
              <div class="widget_list comments">
              <div class="widget_title">
                      <h3>Recent Comments</h3>
                  </div>
                  <div class="post_wrapper">
                      <div class="post_thumb">
                          <a href="blog-details.html"><img src="https://cdn.pixabay.com/photo/2021/01/29/14/41/wardrobe-5961193__340.jpg" alt=""></a>
                      </div>
                      <div class="post_info">
                          <span> <a href="#">demo</a> says:</span>
                          <a href="blog-details.html">Quisque semper nunc</a>
                      </div>
                  </div>
                  <div class="post_wrapper">
                      <div class="post_thumb">
                          <a href="blog-details.html"><img src="https://cdn.pixabay.com/photo/2021/01/29/14/41/wardrobe-5961193__340.jpg" alt=""></a>
                      </div>
                      <div class="post_info">
                          <span><a href="#">admin</a> says:</span>
                          <a href="blog-details.html">Quisque orci porta...</a>
                      </div>
                  </div>
                  <div class="post_wrapper">
                      <div class="post_thumb">
                          <a href="blog-details.html"><img src="https://cdn.pixabay.com/photo/2021/01/29/14/41/wardrobe-5961193__340.jpg" alt=""></a>
                      </div>
                      <div class="post_info">
                          <span><a href="#">demo</a> says:</span>
                          <a href="blog-details.html">Quisque semper nunc</a>
                      </div>
                  </div>
              </div>
              <div class="widget_list widget_post">
                  <div class="widget_title">
                      <h3>Recent Posts</h3>
                  </div>
                  <div class="post_wrapper">
                      <div class="post_thumb">
                          <a href="blog-details.html"><img src="https://cdn.pixabay.com/photo/2021/01/29/14/41/wardrobe-5961193__340.jpg" alt=""></a>
                      </div>
                      <div class="post_info">
                          <h4><a href="blog-details.html">Blog image post</a></h4>
                          <span>March 16, 2018 </span>
                      </div>
                  </div>
                  <div class="post_wrapper">
                      <div class="post_thumb">
                          <a href="blog-details.html"><img src="https://cdn.pixabay.com/photo/2021/01/29/14/41/wardrobe-5961193__340.jpg" alt=""></a>
                      </div>
                      <div class="post_info">
                          <h4><a href="blog-details.html">Post with Gallery</a></h4>
                          <span>March 16, 2018 </span>
                      </div>
                  </div>
                  <div class="post_wrapper">
                      <div class="post_thumb">
                          <a href="blog-details.html"><img src="https://cdn.pixabay.com/photo/2021/01/29/14/41/wardrobe-5961193__340.jpg" alt=""></a>
                      </div>
                      <div class="post_info">
                          <h4><a href="blog-details.html">Post with Audio</a></h4>
                          <span>March 16, 2018 </span>
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
    name: 'BlogSidebar',
    computed:{
       categories(){
           return this.$store.getters.getCategories
       }
    },
    created(){
        // this.$Progress.start();
        this.$store.dispatch("loadCategories")
        // this.$Progress.finish();
    },
}
</script>

<style>

</style>