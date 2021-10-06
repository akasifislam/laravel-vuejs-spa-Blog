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
            <form @submit.prevent="addPost()" @keydown="form.onKeydown($event)">
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
                <select class="form-control" name="cat_id" id="cat_id" v-model="form.cat_id">
                  <option  disabled> ---select category--- </option>
                  <option  v-for="category in categories" :key="category.id" :value="category.id"> {{ category.cat_name }} </option>
                </select>
            </div>
            <div class="form-group">
                  <img :src="form.photo" alt="dzfgsresgh" width="120px" height="80px">
                  <input type="file" @change="changePhoto($event)" class="form-control" name="photo" id="photo" :class="{ 'is-invalid': form.errors.has('title') }">
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
    async addPost() {
      // console.log('dsfsdfdsdfs');
      const response = await this.form.post('/api/blogs')
      .then((response) => {
        this.$router.push('/blog-list')
        Toast.fire({
          icon: 'success',
          title: 'Post Created'
        })
      }).catch((e) => {
        console.log(e);
      })
    },
    changePhoto(event){
      // console.log(1);
      let file = event.target.files[0];
     if (file.size>10000000000000) {
       console.log("image small");
     } else {
        let reader = new FileReader();

      reader.onload = event => {
        this.form.photo = event.target.result
        console.log(event.target.result);
      };
      reader.readAsDataURL(file);
     }

    }
  }
}
</script>

<style>

</style>