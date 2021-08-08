<template>
   <div class="container">
     <div class="row">
         <div class="col-10 offset-1">
             <div class="card">
        <div class="card-header">
            <h3 class="card-title">Tag List Table</h3>
            <div class="card-tools">
                <router-link to="/tag-list" class="btn btn-primary btn-sm">Tag List</router-link>
            </div>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
            <form @submit.prevent="addTag()" @keydown="form.onKeydown($event)">
            <div class="form-group">
                <label for="name">Category Name</label>
                <input type="text" v-model="form.name" class="form-control" :class="{ 'is-invalid': form.errors.has('name') }" id="name" name="name" aria-describedby="emailHelp" placeholder="Enter Category Name">

                <div v-if="form.errors.has('name')" class="text-danger" v-html="form.errors.get('name')" />
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
      name: ''
    })
  }),

  methods: {
    async addTag() {
      const response = await this.form.post('/api/tags')
      .then((response) => {
        this.$router.push('/tag-list')
        Toast.fire({
          icon: 'success',
          title: 'Tag Created'
        })
      }).catch((e) => {
        console.log(e);
      })
    }
  }
}
</script>