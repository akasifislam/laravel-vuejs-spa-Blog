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
                <input type="text" v-model="form.title"  class="form-control" :class="{ 'is-invalid': form.errors.has('title') }" id="title" name="title" aria-describedby="emailHelp" placeholder="Enter Title">
            </div>
            <div class="form-group">
                <label for="description">Blog Description</label>
                <textarea class="form-control" :class="{ 'is-invalid': form.errors.has('description') }" v-model="form.description"  rows="8" id="description" name="description" aria-describedby="emailHelp" placeholder="Enter Description"></textarea>
            </div>
            <div class="form-group">
                <label for="cat_id">Select Category</label>
                <select class="form-control" name="cat_id" id="cat_id">
                  <option value="">najhj</option>
                  <option v-for="category in categories" :key="category.id" value=""> {{ category.cat_name }} </option>
                </select>
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
import Form from 'vform'
export default {
  data: () => ({
    form: new Form({
      title: '',
      description: '',
      cat_id: '',
      photo: '',
    })
  }),
  mounted() {
    this.$store.dispatch("loadCategories")
  },
  computed:{
    categories(){
        return this.$store.getters.getCategories
    }
  },
  created:{

  },
  methods:{
    // 
  }
}
</script>

<style>

</style>