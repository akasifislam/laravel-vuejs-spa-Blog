<template>
 <div class="container">
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Category List Table</h3>
                    <div class="card-tools">
                        <router-link to="/category-add" class="btn btn-primary btn-sm">create category</router-link>
                    </div>
                </div>
                <!-- /.card-header -->
                <div class="card-body table-responsive p-0">
                <table class="table table-bordered table-striped table-sm table-hover">
                    <thead>
                        <tr>
                          <th scope="col">SL</th>
                          <th scope="col">User</th>  
                          <th scope="col">Category</th>  
                          <th scope="col">Title</th>
                          <th scope="col">Description</th>
                          <th scope="col">Photo</th>
                          <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(blog,index) in blogs" :key="index">
                            <td> {{ index+1 }} </td>
                            <td> kgdfjg </td>
                            <td> aaaa </td>
                            <td> {{  blog.title  }} </td>
                            <td>{{  blog.description  }}</td>
                            <td>sdfsdf</td>
                            <td>
                              <a href="" class="">edit</a>
                              <a href="" class="">delete</a>
                            </td>
                            <!-- <td>
                                <router-link :to="`/category-edit/${category.id}`" class="btn btn-sm btn-success">Edit</router-link>
                                <button @click.prevent="deleteCategory(category.id)" class="btn btn-sm btn-danger">Delete</button>
                            </td> -->
                        </tr>
                    </tbody>
                    </table>
                    <br>
                    <div class="text-center ml-5">
                        <pagination :data="categories" @pagination-change-page="getResults">
                            <span slot="prev-nav">&#x2B05; Previous</span>
	                        <span slot="next-nav">Next &#x27A1;</span>
                        </pagination>
                    </div>
                </div>
                <!-- /.card-body -->
            </div>
        </div>
    </div>
 </div>
</template>

<script>
export default {
    computed:{
       blogs(){
           return this.$store.getters.getBlogs
       }
    },
    created(){
        // this.$Progress.start();
        this.$store.dispatch("loadBlogs")
        // this.$Progress.finish();
    }
}
</script>

<style>

</style>