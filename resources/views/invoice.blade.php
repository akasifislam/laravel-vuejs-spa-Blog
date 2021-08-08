<!DOCTYPE html>
<html>
<head>
	<title>Generate PDF</title>
     <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>
<body>


    <div class="container" id="app">
        <div class="row">
            <div class="col-12">

             <div class="table-responsive">
             <table class="table">
                  <tbody><tr>
                    <th style="width:50%">Subtotal:</th>
                    <td>$250.30</td>
                  </tr>
                  <tr>
                    <th>Tax (9.3%)</th>
                    <td>$10.34</td>
                  </tr>
                  <tr>
                    <th>Shipping:</th>
                    <td>$5.80</td>
                  </tr>
                  <tr>
                    <th>Total:</th>
                    <td>$265.24</td>
                  </tr>
                </tbody>
            </table>

              <a href="" @click.prevent="printme" target="_blank" class="btn btn-default"><i class="fa fa-print"></i> Print</a>
          </div>
        </div>
    </div>
</div>
   
 <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
