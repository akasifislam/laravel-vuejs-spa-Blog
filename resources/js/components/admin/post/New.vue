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
            <form @submit.prevent="addPost()" @keydown="form.onKeydown($event)">
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" v-model="form.title" class="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder="Enter Title">

                <label for="description">Description</label>
                <textarea type="text" rows="6" v-model="form.description" class="form-control" id="description" name="description" aria-describedby="emailHelp" placeholder="Enter Description"></textarea>

                <div v-if="form.errors.has('description')" v-html="form.errors.get('description')" />
            </div>
            <button type="submit" class="btn btn-success">Save</button>
            </form>
        </div>
        <!-- /.card-body -->
    </div>
         </div>
     </div>
 </div>
</template>

// <script>
import Form from 'vform'

export default {
  data: () => ({
    form: new Form({
      title: '',
      description: '',
    })
  }),

  methods: {
    async addPost() {
      // console.log('dsfsdfdsdfs');
      const response = await this.form.post('/api/posts')
      console.log(response);
    }
  }
}
</script>