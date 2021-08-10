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
                            <input type="file" id="file" name="file">
                        </div>
                        <div class="form-group text-center">
                            <button type="submit" class="btn btn-primary">submit</button>
                        </div>
                         </form>



                            <!-- <div class="form-group w-50">
                            <label for="usr">Name:</label>
                            <input type="text" class="form-control" id="usr">
                            </div>
                      
                      
                            <div class="form-group w-50">
                            <label for="pwd">Password:</label>
                            <input type="password" class="form-control" id="pwd">
                            </div> -->
                      
                    
                </div>
            </form>
    </div>	
</template>

<script>
export default {

}
</script>

<style>

</style>