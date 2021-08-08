<template>
   <div class="container">
     <div class="row">
         <div class="col-10 offset-1">
             <div class="card">
        <div class="card-header">
            <h3 class="card-title">Category List Table</h3>
            <div class="card-tools">
                <router-link to="/category-list" class="btn btn-primary btn-sm">Category Lista</router-link>
            </div>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
            <form @submit.prevent="addCategory()" @keydown="form.onKeydown($event)">
            <div class="form-group">
                <label for="cat_name">Category Name</label>
                <input type="text" v-model="form.cat_name" class="form-control" :class="{ 'is-invalid': form.errors.has('cat_name') }" id="cat_name" name="cat_name" aria-describedby="emailHelp" placeholder="Enter Category Name">

                <div v-if="form.errors.has('cat_name')" class="text-danger" v-html="form.errors.get('cat_name')" />
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
import axios from 'axios'

export default {
  mounted() {
    axios.get(`/api/acategory/${this.$route.params.id }`)
    .then((response) => {
      this.form.fill(response.data)
    })
  },
  data: () => ({
    form: new Form({
      cat_name: ''
    })
  }),

  methods: {
    async addCategory() {
      const response = await this.form.post('/api/categories')
      .then((response) => {
        this.$router.push('/category-list')
        Toast.fire({
          icon: 'success',
          title: 'Category Created'
        })
      }).catch((e) => {
        console.log(e);
      })
    }
  }
}
</script>