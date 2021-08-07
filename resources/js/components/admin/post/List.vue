<template>
 <div class="container">
     <div class="row">
         <div class="col-10 offset-1">
             <div class="card">
        <div class="card-header">
            <h3 class="card-title">Post List Table</h3>
            <div class="card-tools">
                <router-link :to="{ name: 'post-create' }" class="btn btn-primary btn-sm">post create</router-link>
            </div>
        </div>
        <!-- /.card-header -->
        <div class="card-body table-responsive p-0">
        <table class="table table-bordered table-striped table-sm table-hover">
            <thead>
                <tr>
                <th scope="col">SL</th>
                <th scope="col">Title</th>  
                <th scope="col">Description</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>post title</td>
                <td>post description</td>
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

}
</script>

<style>

</style>