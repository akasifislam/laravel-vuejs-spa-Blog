<template>
    <div class="container">
            <h2 class="text-center">Send Message</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero rem voluptates autem non dicta, ad placeat corrupti aliquid. Est corrupti iusto expedita nemo id ipsum accusantium totam exercitationem sapiente dolorum?</p>
            <form>
                <div class="input-content">
                    <form>
                        <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                            <label for="recipent">Recipent:</label>
                            <input type="text" class="form-control" id="recipent" v-model="recipent" name="recipent">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="text" class="form-control" id="email" v-model="email" name="email">
                            </div>
                        </div>
                        </div>
                        <div class="form-group">
                            <label for="message">Message:</label>
                            <textarea class="form-control" rows="5" id="message" name="message" v-model="message"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="file">Attachment</label>
                            <br>
                            <!-- <input type="file" id="file" name="file"> -->
                            <!-- @vdropzone-sending-multiple="sendMessage" -->
                            <vue-dropzone
                            @vdropzone-complete="afterUploadComplete"
                            @vdropzone-sending-multiple="sendMessage"
                            ref="myVueDropzone" 
                            id="dropzone" 
                            :options="dropzoneOptions
                            ">
                            </vue-dropzone>
                        </div>
                        <div class="form-group text-center">
                            <button @click.prevent="shootMessage" type="submit" class="btn btn-primary">submit</button>
                        </div>
                    </form>
                </div>
            </form>
    </div>	
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {  
  data: function () {
        return {
            recipent: '',
            email: '',
            message: '',
        dropzoneOptions: {
            url: 'http://127.0.0.1:8000/api/sendmessage',
            thumbnailWidth: 150,
            maxFilesize: 4,
            parallelUploads: 3,
            maxFiles: 3,
            uploadMultiple: true,
            autoProcessQueue: false
        }
        }
    },
    components: {
    vueDropzone: vue2Dropzone
    },

    methods:{   
        async afterUploadComplete(response) {
            if (response.status === "success") {
                console.log("image upload successfull");
            }else{
                console.log("image upload failed");
            }
        },
        async sendMessage(files, xhr, formData) {
            formData.append("email",this.email);
            formData.append("recipent",this.recipent);
            formData.append("message",this.message);
        },
        async shootMessage() {
            this.$refs.myVueDropzone.processQueue();
        },
    },
    
    
}
</script>

<style>

</style>