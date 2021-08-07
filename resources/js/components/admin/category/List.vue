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
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="category in categories" :key="category.id">
                    <td>{{ category.id }}</td>
                    <td>{{ category.cat_name }}</td>
                    <td>
                        <a href="" class="btn btn-sm btn-success">edit</a>
                        <a href="" class="btn btn-sm btn-danger">delete</a>
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
    }
}
</script>