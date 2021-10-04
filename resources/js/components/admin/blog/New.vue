<template>
   <div class="container">
     <div class="row">
         <div class="col-10 offset-1">
             <div class="card">
        <div class="card-header">
            <h3 class="card-title">Blog List Table</h3>
            <div class="card-tools">
                <router-link to="/category-list" class="btn btn-primary btn-sm">Blog List</router-link>
            </div>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
            <form>
            <div class="form-group">
                <label for="title">Blog Title</label>
                <input type="text" class="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder="Enter Title">
            </div>
            <div class="form-group">
                <label for="description">Blog Description</label>
                <textarea class="form-control" rows="8" id="description" name="description" aria-describedby="emailHelp" placeholder="Enter Description"></textarea>
            </div>
            <button type="submit" class="btn btn-success">submit</button>
            </form>
        </div>
        <!-- /.card-body -->
    </div>
         </div>
     </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      form: new Form({
        title: '',
        description: '',
        category_id: '',
        photo: ''
      })
    }
  },
  mounted() {

  },
  created:{

  },
  methods:{

  }
}
</script>

<style>

</style>