<template>
  <span id="blogsidebar">
    <!--breadcrumbs area start-->
    <div class="breadcrumbs_area">
        <div class="container">   
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb_content">
                        <h3>Blog</h3>
                        <ul>
                            <li><a href="index.html">home</a></li>
                            <li>blog details</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>         
    </div>
    <!--breadcrumbs area end-->
        
    <!--blog body area start-->
    <div class="blog_details">
        <div class="container">
            <!-- <span> {{ singlepost  }}</span>     -->
            <div class="row">
                <div class="col-lg-9 col-md-12">
                    <!--blog grid area start-->
                    <div class="blog_wrapper blog_wrapper_details">
                        <article class="single_blog">
                            <figure>
                               <div class="post_header">
                                   <h3 class="post_title"> {{ singlepost.title }} {{ this.$route.params.id }} </h3>
                                    <div class="blog_meta">   
                                       <p>Posted by : <a href="#">{{ singlepost.user.name }}</a> / On : <a href="#"> A{{ singlepost.created_at | timeformat }} </a> / In : <a href="#">Company, Image, Travel</a></p>                                     
                                    </div>
                                </div>
                                <div class="blog_thumb" v-if="singlepost.photo">
                                   <a href="#"><img :src="singlepost.photo" alt=""></a>
                               </div>
                                <div class="blog_thumb" v-else>
                                   <a href="#"><img src="https://cpworldgroup.com/wp-content/uploads/2021/01/placeholder.png" alt=""></a>
                               </div>
                               <figcaption class="blog_content">
                                    <div class="post_content">
                                        <p>  {{ singlepost.description }} </p>
                                        <blockquote>
                                            <p>Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur. In venenatis elit ac ultrices convallis. Duis est nisi, tincidunt ac urna sed, cursus blandit lectus. In ullamcorper sit amet ligula ut eleifend. Proin dictum tempor ligula, ac feugiat metus. Sed finibus tortor eu scelerisque scelerisque.</p>
                                        </blockquote>
                                    
                                    </div>
                                    <div class="entry_content">
                                        <div class="post_meta">
                                            <span>Tags: </span>
                                            <span><a href="#">, fashion</a></span>
                                            <span><a href="#">, t-shirt</a></span>
                                            <span><a href="#">, white</a></span>
                                        </div>

                                        <div class="social_sharing">
                                            <p>share this post:</p>
                                            <ul>
                                                <li><a href="#" title="facebook"><i class="fa fa-facebook"></i></a></li>
                                                <li><a href="#" title="twitter"><i class="fa fa-twitter"></i></a></li>
                                                <li><a href="#" title="pinterest"><i class="fa fa-pinterest"></i></a></li>
                                                <li><a href="#" title="google+"><i class="fa fa-google-plus"></i></a></li>
                                                <li><a href="#" title="linkedin"><i class="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                               </figcaption>
                            </figure>
                        </article>
                        <div class="related_posts">
                           <h3>Related posts</h3>
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-sm-6">
                                    <article class="single_related">
                                        <figure>
                                            <div class="related_thumb">
                                                <a href="blog-details.html"><img src="https://cpworldgroup.com/wp-content/uploads/2021/01/placeholder.png" alt=""></a>
                                            </div>
                                            <figcaption class="related_content">
                                               <h4><a href="#">Post with Gallery</a></h4>
                                               <div class="blog_meta">                                        
                                                    <span class="author">By : <a href="#">admin</a> / </span>
                                                    <span class="meta_date"> April 11, 2019	</span>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6">
                                    <article class="single_related">
                                        <figure>
                                            <div class="related_thumb">
                                                <a href="blog-details.html"><img src="https://cpworldgroup.com/wp-content/uploads/2021/01/placeholder.png" alt=""></a>
                                            </div>
                                            <figcaption class="related_content">
                                               <h4><a href="#">Post with Audio</a></h4>
                                               <div class="blog_meta">                                        
                                                    <span class="author">By : <a href="#">admin</a> / </span>
                                                    <span class="meta_date"> April 11, 2019	</span>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6">
                                    <article class="single_related">
                                        <figure>
                                            <div class="related_thumb">
                                                <a href="blog-details.html"><img src="https://cpworldgroup.com/wp-content/uploads/2021/01/placeholder.png" alt=""></a>
                                            </div>
                                            <figcaption class="related_content">
                                               <h4><a href="#">Maecenas ultricies</a></h4>
                                               <div class="blog_meta">                                        
                                                    <span class="author">By : <a href="#">admin</a> / </span>
                                                    <span class="meta_date"> April 11, 2019	</span>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </div>
                            </div>
                       </div> 
                        <div class="comments_box">
                            <h3>3 Comments	</h3>
                            <div class="comment_list">
                                <div class="comment_thumb">
                                    <img src="https://cpworldgroup.com/wp-content/uploads/2021/01/placeholder.png" height="50" width="50" alt="">
                                </div>
                                <div class="comment_content">
                                    <div class="comment_meta">
                                        <h5><a href="#">Admin</a></h5>
                                        <span>October 16, 2018 at 1:38 am</span> 
                                    </div>
                                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure</p>
                                    <div class="comment_reply">
                                        <a href="#">Reply</a>
                                    </div>
                                </div>

                            </div>
                            <div class="comment_list list_two">
                                <div class="comment_thumb">
                                    <img src="https://cpworldgroup.com/wp-content/uploads/2021/01/placeholder.png" height="50" width="50" alt="">
                                </div>
                                <div class="comment_content">
                                    <div class="comment_meta">
                                        <h5><a href="#">Demo</a></h5>
                                        <span>October 16, 2018 at 1:38 am</span> 
                                    </div>
                                    <p>Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur</p>
                                    <div class="comment_reply">
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                            </div>
                            <div class="comment_list">
                                <div class="comment_thumb">
                                    <img src="https://cpworldgroup.com/wp-content/uploads/2021/01/placeholder.png" height="50" width="50" alt="">
                                </div>
                                <div class="comment_content">
                                    <div class="comment_meta">
                                        <h5><a href="#">Admin</a></h5>
                                        <span>October 16, 2018 at 1:38 am</span> 
                                    </div>
                                    <p>Quisque orci nibh, porta vitae sagittis sit amet, vehicula vel mauris. Aenean at</p>
                                    <div class="comment_reply">
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="comments_form">
                            <h3>Leave a Reply </h3>
                            <p>Your email address will not be published. Required fields are marked *</p>
                            <form action="#">
                                <div class="row">
                                    <div class="col-12">
                                        <label for="review_comment">Comment </label>
                                        <textarea name="comment" id="review_comment" ></textarea>
                                    </div> 
                                    <div class="col-lg-4 col-md-4">
                                        <label for="author">Name</label>
                                        <input id="author"  type="text">

                                    </div> 
                                    <div class="col-lg-4 col-md-4">
                                        <label for="email">Email </label>
                                        <input id="email"  type="text">
                                    </div>
                                    <div class="col-lg-4 col-md-4">
                                        <label for="website">Website </label>
                                        <input id="website"  type="text">
                                    </div>   
                                </div>
                                <button class="button" type="submit">Post Comment</button>
                             </form>    
                        </div>
                    </div>
                    <!--blog grid area start-->
                </div>
                <div class="col-lg-3 col-md-12">
                    <BlogSidebar />
                </div>
            </div>
        </div>
        
    </div>
    <!--blog section area end-->
  </span>
</template>

<script>
import BlogSidebar from './BlogSidebar.vue'
export default {
    name: "BlogSingle",
    components:{
        BlogSidebar
    },
    computed:{
        singlepost(){
            return this.$store.getters.singlepost
        }
    },
    mounted(){
        this.$store.dispatch('getPostById',this.$route.params.id);
    }
}
</script>

<style>

</style>