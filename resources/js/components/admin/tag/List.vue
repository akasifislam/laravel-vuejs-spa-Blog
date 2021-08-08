<template>
 <div class="container">
     <div class="row">
         <div class="col-10 offset-1">
             <div class="card">
        <div class="card-header">
            <h3 class="card-title">Tag List Table</h3>
            <div class="card-tools">
                <router-link :to="{ name:'tag-create' }" class="btn btn-primary btn-sm">create tag</router-link>
            </div>
        </div>
        <!-- /.card-header -->
        <div class="card-body table-responsive p-0">
        <table class="table table-bordered table-striped table-sm table-hover">
            <thead>
                <tr>
                <th scope="col">SL</th>
                <th scope="col">Name</th>  
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tag,index) in tags" :key="tag.id">
                    <td>  {{ index+1 }}  </td>
                    <td> {{ tag.name }} </td>
                    <td>
                        <router-link :to="`/tag-edit/${tag.id}`" class="btn btn-sm btn-success">Edit</router-link>
                        <button @click.prevent="deleteTag(tag.id)" class="btn btn-sm btn-danger">Delete</button>
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
       tags(){
           return this.$store.getters.getTags
       }
    },
    created(){
        this.$Progress.start();
        this.$store.dispatch("loadTags")
        this.$Progress.finish();
    },
    methods:{
        deleteTag(tag) {
            Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete('/api/tags/'+tag).then((response) => {
                        Swal.fire(
                            'Deleted!',
                            'Tag Deleted',
                            'success'
                        )
                        this.$store.dispatch("loadTags")
                    })
                }
            })
        }
    }
}
</script>