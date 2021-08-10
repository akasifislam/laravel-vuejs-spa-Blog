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
                            <input type="text" class="form-control" id="recipent" name="recipent">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="text" class="form-control" id="email" name="email">
                            </div>
                        </div>
                        </div>
                        <div class="form-group">
                            <label for="message">Message:</label>
                            <textarea class="form-control" rows="5" id="message" name="message"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="file">Attachment</label>
                            <br>
                            <!-- <input type="file" id="file" name="file"> -->
                            <vue-dropzone
                            @vdropzone-complete="afterUploadComplete"
                            ref="myVueDropzone" 
                            id="dropzone" 
                            :options="dropzoneOptions
                            ">
                            </vue-dropzone>
                        </div>
                        <div class="form-group text-center">
                            <button type="submit" class="btn btn-primary">submit</button>
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
        dropzoneOptions: {
            url: 'http://127.0.0.1:8000/api/sendmessage',
            thumbnailWidth: 150,
            maxFilesize: 4,
            parallelUploads: 3,
            maxFiles: 3,
            uploadMultiple: true
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
        }
    }
}
</script>

<style>

</style>