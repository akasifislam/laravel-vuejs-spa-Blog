<template>
 <div class="container">
     <div class="row">
         <div class="col-10 offset-1">
             <div class="card">
        <div class="card-header">
            <h3 class="card-title">Category List Table</h3>
            <div class="card-tools">
                <router-link to="/category-add" class="btn btn-primary btn-sm">add</router-link>
            </div>
        </div>
        <!-- /.card-header -->
        <div class="card-body table-responsive p-0">
        <table class="table table-bordered table-striped table-sm table-hover">
            <thead>
                <tr>
                <th scope="col">SL</th>
                <th scope="col">Category Name</th>  
                <th scope="col">Created Date</th>  
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="category in categories" :key="category.id">
                    <td>{{ category.id }}</td>
                    <td>{{ category.cat_name }}</td>
                    <td>{{ category.created_at | timeformat }}</td>
                    <td>
                        <router-link :to="`/category-edit/${category.id}`" class="btn btn-sm btn-success">Edit</router-link>
                        <button @click.prevent="deleteCategory(category.id)" class="btn btn-sm btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
        <!-- /.card-body -->
    </div>
         </div>
     </div>
 </div>
</template>

<script>
import axios from 'axios';
export default {
    computed:{
       categories(){
           return this.$store.getters.getCategories
       }
    },
    created(){
        this.$Progress.start();
        this.$store.dispatch("loadCategories")
        this.$Progress.finish();
    },
    methods:{
        deleteCategory(id) {
            axios.get('/api/acategories/'+id).then((response) => {
                this.$store.dispatch("loadCategories")
                Toast.fire({
                icon: 'success',
                title: 'Category Deleted'
                })
            })
        }
    }
}
</script>