<template>
 <div class="container">
    <div class="row">
        <div class="col-10 offset-1">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Category List Table</h3>
                    <div class="card-tools">
                        <router-link to="/category-add" class="btn btn-primary btn-sm">create category</router-link>
                    </div>
                </div>
                <!-- /.card-header -->
                <div class="card-body table-responsive p-0">
                <form class="m-2" @click.prevent="searchCategory">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-md-10">
                                <input type="text" v-model="search" class="form-control" name="search" id="search">
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-success ">Search</button>
                            </div>
                        </div>
                    </div>
                </form>
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
                        <tr v-for="(category,index) in categories.data" :key="index">
                            <td>{{ index+1 }}</td>
                            <td>{{ category.cat_name }}</td>
                            <td>{{ category.created_at | timeformat }}</td>
                            <td>
                                <router-link :to="`/category-edit/${category.id}`" class="btn btn-sm btn-success">Edit</router-link>
                                <button @click.prevent="deleteCategory(category.id)" class="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                    <br>
                    <div class="text-center ml-5">
                        <pagination :data="categories" @pagination-change-page="getResults">
                            <span slot="prev-nav">&#x2B05; Previous</span>
	                        <span slot="next-nav">Next &#x27A1;</span>
                        </pagination>
                    </div>
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
    data() {
        return {
            categories: {},
            search: '',
        }
    },
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
    mounted() {
		// Fetch initial results
		this.getResults();
	},
    methods:{
        deleteCategory(category) {
            Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.isConfirmed) {
                axios.delete('/api/categories/'+category).then((response) => {
                    Swal.fire(
                        'Deleted!',
                        'Category Deleted',
                        'success'
                    )
                    this.$store.dispatch("loadCategories")
                })
            }
            })
        },
        searchCategory() {
            axios.get('/api/categories?search='+ this.search)
            .then((response) => {
                this.$store.commit('UPADATE_CATEGORY',response.data.data)
            })
        },
        getResults(page = 1) {
			axios.get('/api/categories?page=' + page)
				.then(response => {
					this.categories = response.data;
				});
		}

    }
}
</script>