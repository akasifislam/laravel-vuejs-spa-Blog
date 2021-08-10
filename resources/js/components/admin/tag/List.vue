<template>
 <div class="container">
     <div class="row">
         <div class="col-10 offset-1">
             <div class="card">
                 <div class="card-header">
                     Search
                 </div>
                 <div class="card-body">
                     <form @click.prevent="searchTag">
                    <div class="form-group">
                        <input v-model="search" type="text" class="form-control" aria-describedby="emailHelp" placeholder="search">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                 </div>
             </div>
             <div class="card">
        <div class="card-header">
            <h3 class="card-title">
                <div class="card-tools">
                <router-link :to="{ name:'tag-create' }" class="btn btn-primary btn-sm">create

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00bfd8" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </router-link>
                <button @click.prevent="downloadPdf" class="btn btn-sm btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6f32be" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                    </svg>
                </button>
                <button @click.prevent="downloadExcel" class="btn btn-sm btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-invoice" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6f32be" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                    <line x1="9" y1="7" x2="10" y2="7" />
                    <line x1="9" y1="13" x2="15" y2="13" />
                    <line x1="13" y1="17" x2="15" y2="17" />
                    </svg>
                </button>
            </div>
            </h3>
            
        </div>
        <!-- /.card-header -->
        <div class="card-body table-responsive p-0">
        <table class="table table-bordered table-striped table-sm table-hover">
            <thead>
                <tr>
                <th scope="col">SL</th>
                <th scope="col">Name</th>  
                <th scope="col">Created Date</th>  
                <th scope="col">Last Update</th>  
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tag,index) in tags" :key="tag.id">
                    <td>  {{ index+1 }}  </td>
                    <td> {{ tag.name }} </td>
                    <td> {{ tag.created_at | timeformat }} </td>
                    <td> {{ tag.updated_at | timeformat }} </td>
                    <td>
                        <router-link :to="`/tag-edit/${tag.id}`" class="btn btn-sm btn-success">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                            <line x1="16" y1="5" x2="19" y2="8" />
                            </svg>
                        </router-link>
                        <button @click.prevent="deleteTag(tag.id)" class="btn btn-sm btn-danger">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="4" y1="7" x2="20" y2="7" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg>
                        </button>
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
import axios from 'axios';
export default {
    data() {
        return {
            search: '',
        }
    },
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
        },
        downloadPdf(){ 
            axios({
                url: '/api/tag-all',
                method: 'POST',
                responseType: 'blob',
            }).then((response) => {
                var fileURL = window.URL.createObjectURL(new Blob([response.data.data]));
                var fileLink = document.createElement('a');
                fileLink.href = fileURL;
                fileLink.setAttribute('download', `example.pdf`);
                document.body.appendChild(fileLink);
                fileLink.click();
                this.filedownloading = false
            }).catch((error)=>{
                console.log(error)
            });
      },
        downloadExcel(){ 
            axios({
                url: '/api/excel-all',
                method: 'POST',
                responseType: 'blob',
            }).then((response) => {
                var fileURL = window.URL.createObjectURL(new Blob([response.data.data]));
                var fileLink = document.createElement('a');
                fileLink.href = fileURL;
                fileLink.setAttribute('download', `example.excel`);
                document.body.appendChild(fileLink);
                fileLink.click();
                this.filedownloading = false
            }).catch((error)=>{
                console.log(error)
            });
      },
      searchTag() {
          axios.get('/api/tags?search='+ this.search)
            .then((response) => {
                this.$store.commit('UPADATE_TAG',response.data.data)
            })
      }
    }
}
</script>