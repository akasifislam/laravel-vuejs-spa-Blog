
<!doctype html>
<html class="no-js" lang="en">


<!-- Mirrored from htmldemo.net/safira/safira/blog.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 21 Sep 2022 15:15:23 GMT -->
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Safira - blog</title>
    <meta name="description" content="">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('assets/public') }}/assets/img/favicon.ico">
    
    <!-- CSS 
    ========================= -->
    <!--bootstrap min css-->
    <link rel="stylesheet" href="{{ asset('assets/public') }}/assets/css/bootstrap.min.css">
    <!--owl carousel min css-->
    <link rel="stylesheet" href="{{ asset('assets/public') }}/assets/css/owl.carousel.min.css">
    <!--slick min css-->
    <link rel="stylesheet" href="{{ asset('assets/public') }}/assets/css/slick.css">
    <!--magnific popup min css-->
    <link rel="stylesheet" href="{{ asset('assets/public') }}/assets/css/magnific-popup.css">
    <!--font awesome css-->
    <link rel="stylesheet" href="{{ asset('assets/public') }}/assets/css/font.awesome.css">
    <!--ionicons css-->
    <link rel="stylesheet" href="{{ asset('assets/public') }}/assets/css/ionicons.min.css">
    <!--linearicons css-->
    <link rel="stylesheet" href="{{ asset('assets/public') }}/assets/css/linearicons.css">
    <!--animate css-->
    <link rel="stylesheet" href="{{ asset('assets/public') }}/assets/css/animate.css">
    <!--jquery ui min css-->
    <link rel="stylesheet" href="{{ asset('assets/public') }}/assets/css/jquery-ui.min.css">
    <!--slinky menu css-->
    <link rel="stylesheet" href="{{ asset('assets/public') }}/assets/css/slinky.menu.css">
    <!--plugins css-->
    <link rel="stylesheet" href="{{ asset('assets/public') }}/assets/css/plugins.css">

    <!-- Main Style CSS -->
    <link rel="stylesheet" href="{{ asset('assets/public') }}/assets/css/style.css">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    
    <!--modernizr min js here-->
    <script src="{{ asset('assets/public') }}/assets/js/vendor/modernizr-3.7.1.min.js"></script>

</head>

<body>
   
   <div id="app">
      <!--header area start-->
    
    <!--offcanvas menu area start-->
    <div class="off_canvars_overlay">
                
    </div>
    <div class="offcanvas_menu">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="canvas_open">
                        <a href="javascript:void(0)"><i class="icon-menu"></i></a>
                    </div>
                    <div class="offcanvas_menu_wrapper">
                        <div class="canvas_close">
                            <a href="javascript:void(0)"><i class="icon-x"></i></a>  
                        </div>
                        <div class="language_currency">
                            <ul>
                                <li class="language"><a href="#"> Language <i class="icon-right ion-ios-arrow-down"></i></a>
                                    <ul class="dropdown_language">
                                        <li><a href="#">French</a></li>
                                        <li><a href="#">Spanish</a></li>
                                        <li><a href="#">Russian</a></li>
                                    </ul>
                                </li>
                                <li class="currency"><a href="#"> Currency <i class="icon-right ion-ios-arrow-down"></i></a>
                                    <ul class="dropdown_currency">
                                        <li><a href="#">€ Euro</a></li>
                                        <li><a href="#">£ Pound Sterling</a></li>
                                        <li><a href="#">$ US Dollar</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="header_social text-right">
                            <ul>
                                <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                                <li><a href="#"><i class="ion-social-googleplus-outline"></i></a></li>
                                <li><a href="#"><i class="ion-social-youtube-outline"></i></a></li>
                                <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                                <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                            </ul>
                        </div>
                        
                        <div class="call-support">
                            <p><a href="tel:(08)23456789">(08) 23 456 789</a> Customer Support</p>
                        </div>
                        <div id="menu" class="text-left ">
                            <ul class="offcanvas_main_menu">

                                <li class="menu-item-has-children">
                                    <a href="about.html">Home</a>
                                </li>
                                <li class="menu-item-has-children">
                                    <router-link to="/"> Blog</router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="offcanvas_footer">
                            <span><a href="#"><i class="fa fa-envelope-o"></i> info@yourdomain.com</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--offcanvas menu area end-->
    
    <header>
        <div class="main_header">
            <div class="header_top">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6">
                            <div class="language_currency">
                                <ul>
                                    <li class="language"><a href="#"> Language <i class="icon-right ion-ios-arrow-down"></i></a>
                                        <ul class="dropdown_language">
                                            <li><a href="#">French</a></li>
                                            <li><a href="#">Spanish</a></li>
                                            <li><a href="#">Russian</a></li>
                                        </ul>
                                    </li>
                                    <li class="currency"><a href="#"> Currency <i class="icon-right ion-ios-arrow-down"></i></a>
                                        <ul class="dropdown_currency">
                                            <li><a href="#">€ Euro</a></li>
                                            <li><a href="#">£ Pound Sterling</a></li>
                                            <li><a href="#">$ US Dollar</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="header_social text-right">
                                <ul>
                                    <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                                    <li><a href="#"><i class="ion-social-googleplus-outline"></i></a></li>
                                    <li><a href="#"><i class="ion-social-youtube-outline"></i></a></li>
                                    <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                                    <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header_middle">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-2 col-md-3 col-sm-3 col-3">
                            <div class="logo">
                                <a href="index.html"><img src="{{ asset('assets/public') }}/assets/img/logo/logo.png" alt=""></a>
                            </div>
                        </div>
                        <div class="col-lg-10 col-md-6 col-sm-7 col-8">
                            <div class="header_right_info">
                                <div class="search_container mobail_s_none">
                                   <form action="#">
                                       <div class="hover_category">
                                            <select class="select_option" name="select" id="categori2">
                                                <option selected value="1">Select a categories</option>
                                                <option value="2">Accessories</option>
                                                <option value="3">Accessories & More</option>
                                                <option value="4">Butters & Eggs</option>
                                                <option value="5">Camera & Video </option>
                                                <option value="6">Mornitors</option>
                                                <option value="7">Tablets</option>
                                                <option value="8">Laptops</option>
                                                <option value="9">Handbags</option>
                                                <option value="10">Headphone & Speaker</option>
                                                <option value="11">Herbs & botanicals</option>
                                                <option value="12">Vegetables</option>
                                                <option value="13">Shop</option>
                                                <option value="14">Laptops & Desktops</option>
                                                <option value="15">Watchs</option>
                                                <option value="16">Electronic</option>
                                            </select>                        
                                       </div>
                                        <div class="search_box">
                                            <input placeholder="Search product..." type="text">
                                             <button type="submit"><span class="lnr lnr-magnifier"></span></button>
                                        </div>
                                    </form>
                                </div>
                                <div class="header_account_area">
                                    <div class="header_account_list register">
                                        <ul>
                                            <li><a href="login.html">Register</a></li>
                                            <li><span>/</span></li>
                                            <li><a href="login.html">Login</a></li>
                                        </ul>
                                    </div>
                                    <div class="header_account_list header_wishlist">
                                        <a href="wishlist.html"><span class="lnr lnr-heart"></span> <span class="item_count">3</span> </a>
                                    </div>
                                    <div class="header_account_list  mini_cart_wrapper">
                                       <a href="javascript:void(0)"><span class="lnr lnr-cart"></span><span class="item_count">2</span></a>
                                        <!--mini cart-->
                                        <div class="mini_cart">
                                            <div class="cart_gallery">
                                                <div class="cart_close">
                                                	<div class="cart_text">
                                                		<h3>cart</h3>
                                                	</div>
                                                	<div class="mini_cart_close">
                                                		<a href="javascript:void(0)"><i class="icon-x"></i></a>
                                                	</div>
                                                </div>
                                                <div class="cart_item">
                                                   <div class="cart_img">
                                                       <a href="#"><img src="{{ asset('assets/public') }}/assets/img/s-product/product.jpg" alt=""></a>
                                                   </div>
                                                    <div class="cart_info">
                                                        <a href="#">Primis In Faucibus</a>
                                                        <p>1 x <span> $65.00 </span></p>    
                                                    </div>
                                                    <div class="cart_remove">
                                                        <a href="#"><i class="icon-x"></i></a>
                                                    </div>
                                                </div>
                                                <div class="cart_item">
                                                   <div class="cart_img">
                                                       <a href="#"><img src="{{ asset('assets/public') }}/assets/img/s-product/product2.jpg" alt=""></a>
                                                   </div>
                                                    <div class="cart_info">
                                                        <a href="#">Letraset Sheets</a>
                                                        <p>1 x <span> $60.00 </span></p>    
                                                    </div>
                                                    <div class="cart_remove">
                                                        <a href="#"><i class="icon-x"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mini_cart_table">
                                                <div class="cart_table_border">
                                                    <div class="cart_total">
                                                        <span>Sub total:</span>
                                                        <span class="price">$125.00</span>
                                                    </div>
                                                    <div class="cart_total mt-10">
                                                        <span>total:</span>
                                                        <span class="price">$125.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mini_cart_footer">
                                               <div class="cart_button">
                                                    <a href="cart.html"><i class="fa fa-shopping-cart"></i> View cart</a>
                                                </div>
                                                <div class="cart_button">
                                                    <a href="checkout.html"><i class="fa fa-sign-in"></i> Checkout</a>
                                                </div>

                                            </div>
                                        </div>
                                        <!--mini cart end-->
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header_bottom sticky-header">
                <div class="container">  
                    <div class="row align-items-center">
                       <div class="col-12 col-md-6 mobail_s_block">
                            <div class="search_container">
                               <form action="#">
                                   <div class="hover_category">
                                        <select class="select_option" name="select" id="categori2">
                                            <option selected value="1">Select a categories</option>
                                            <option value="2">Accessories</option>
                                            <option value="3">Accessories & More</option>
                                            <option value="4">Butters & Eggs</option>
                                            <option value="5">Camera & Video </option>
                                            <option value="6">Mornitors</option>
                                            <option value="7">Tablets</option>
                                            <option value="8">Laptops</option>
                                            <option value="9">Handbags</option>
                                            <option value="10">Headphone & Speaker</option>
                                            <option value="11">Herbs & botanicals</option>
                                            <option value="12">Vegetables</option>
                                            <option value="13">Shop</option>
                                            <option value="14">Laptops & Desktops</option>
                                            <option value="15">Watchs</option>
                                            <option value="16">Electronic</option>
                                        </select>                        
                                   </div>
                                    <div class="search_box">
                                        <input placeholder="Search product..." type="text">
                                         <button type="submit"><span class="lnr lnr-magnifier"></span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="categories_menu">
                                <div class="categories_title">
                                    <h2 class="categori_toggle">All Cattegories</h2>
                                </div>
                                <div class="categories_menu_toggle">
                                    <ul>
                                        <li class="menu_item_children"><a href="#">Vegetables<i class="fa fa-angle-right"></i></a>
                                            <ul class="categories_mega_menu">
                                                <li class="menu_item_children"><a href="#">Dresses</a>
                                                    <ul class="categorie_sub_menu">
                                                        <li><a href="#">Sweater</a></li>
                                                        <li><a href="#">Evening</a></li>
                                                        <li><a href="#">Day</a></li>
                                                        <li><a href="#">Sports</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu_item_children"><a href="#">Handbags</a>
                                                    <ul class="categorie_sub_menu">
                                                        <li><a href="#">Shoulder</a></li>
                                                        <li><a href="#">Satchels</a></li>
                                                        <li><a href="#">kids</a></li>
                                                        <li><a href="#">coats</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu_item_children"><a href="#">shoes</a>
                                                    <ul class="categorie_sub_menu">
                                                        <li><a href="#">Ankle Boots</a></li>
                                                        <li><a href="#">Clog sandals </a></li>
                                                        <li><a href="#">run</a></li>
                                                        <li><a href="#">Books</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu_item_children"><a href="#">Clothing</a>
                                                    <ul class="categorie_sub_menu">
                                                        <li><a href="#">Coats  Jackets </a></li>
                                                        <li><a href="#">Raincoats</a></li>
                                                        <li><a href="#">Jackets</a></li>
                                                        <li><a href="#">T-shirts</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="menu_item_children"><a href="#">Fruits  <i class="fa fa-angle-right"></i></a>
                                            <ul class="categories_mega_menu column_3">
                                                <li class="menu_item_children"><a href="#">Chair</a>
                                                    <ul class="categorie_sub_menu">
                                                        <li><a href="#">Dining room</a></li>
                                                        <li><a href="#">bedroom</a></li>
                                                        <li><a href="#"> Home & Office</a></li>
                                                        <li><a href="#">living room</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu_item_children"><a href="#">Lighting</a>
                                                    <ul class="categorie_sub_menu">
                                                        <li><a href="#">Ceiling Lighting</a></li>
                                                        <li><a href="#">Wall Lighting</a></li>
                                                        <li><a href="#">Outdoor Lighting</a></li>
                                                        <li><a href="#">Smart Lighting</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu_item_children"><a href="#">Sofa</a>
                                                    <ul class="categorie_sub_menu">
                                                        <li><a href="#">Fabric Sofas</a></li>
                                                        <li><a href="#">Leather Sofas</a></li>
                                                        <li><a href="#">Corner Sofas</a></li>
                                                        <li><a href="#">Sofa Beds</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="menu_item_children"><a href="#"> Salads<i class="fa fa-angle-right"></i></a>
                                            <ul class="categories_mega_menu column_2">
                                                <li class="menu_item_children"><a href="#">Brake Tools</a>
                                                    <ul class="categorie_sub_menu">
                                                        <li><a href="#">Driveshafts</a></li>
                                                        <li><a href="#">Spools</a></li>
                                                        <li><a href="#">Diesel </a></li>
                                                        <li><a href="#">Gasoline</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu_item_children"><a href="#">Emergency Brake</a>
                                                    <ul class="categorie_sub_menu">
                                                        <li><a href="#">Dolls for Girls</a></li>
                                                        <li><a href="#">Girls' Learning Toys</a></li>
                                                        <li><a href="#">Arts and Crafts for Girls</a></li>
                                                        <li><a href="#">Video Games for Girls</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="menu_item_children"><a href="#"> Fish & Seafood <i class="fa fa-angle-right"></i></a>
                                            <ul class="categories_mega_menu column_2">
                                                <li class="menu_item_children"><a href="#">Check Trousers</a>
                                                    <ul class="categorie_sub_menu">
                                                        <li><a href="#">Building</a></li>
                                                        <li><a href="#">Electronics</a></li>
                                                        <li><a href="#">action figures </a></li>
                                                        <li><a href="#">specialty & boutique toy</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu_item_children"><a href="#">Calculators</a>
                                                    <ul class="categorie_sub_menu">
                                                        <li><a href="#">Dolls for Girls</a></li>
                                                        <li><a href="#">Girls' Learning Toys</a></li>
                                                        <li><a href="#">Arts and Crafts for Girls</a></li>
                                                        <li><a href="#">Video Games for Girls</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#"> Fresh Meat</a></li>
                                        <li><a href="#"> Butter & Eggs</a></li>
                                        <li><a href="#">Milk</a></li>
                                        <li><a href="#">Oil & Vinegars</a></li>
                                        <li><a href="#"> Bread</a></li>
                                        <li><a href="#"> Jam & Honey</a></li>
                                        <li><a href="#"> Frozen Food</a></li>
                                        <li class="hidden"><a href="shop.html">New Sofas</a></li>
                                        <li class="hidden"><a href="shop.html">Sleight Sofas</a></li>
                                        <li><a href="#" id="more-btn"><i class="fa fa-plus" aria-hidden="true"></i> More Categories</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <!--main menu start-->
                            <div class="main_menu menu_position"> 
                                <nav>  
                                    <ul>
                                        <li class="menu-item-has-children">
                                            <router-link to="/">Home</router-link>
                                        </li>
                                        <li class="menu-item-has-children">
                                            <router-link to="/blog-post"> Blog</router-link>
                                        </li>
                                        <li><router-link to="/test-page"> Contact Us</র></li>
                                    </ul>  
                                </nav> 
                            </div>
                            <!--main menu end-->
                        </div>
                        <div class="col-lg-3">
                            <div class="call-support">
                                <p><a href="tel:(08)23456789">(08) 23 456 789</a> Customer Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </header>
    <!--header area end-->
    
    {{-- <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, deserunt impedit in excepturi sed non, nihil a corrupti laudantium doloremque quasi amet mollitia possimus officiis illum eligendi ipsam quae animi.
    </h1> --}}
    <home-main></home-main>
   
    <!--footer area start-->
    <footer class="footer_widgets footer_border">
        <div class="container">
            <div class="footer_top">
                <div class="row">
                        <div class="col-lg-4 col-md-12 col-sm-7">
                            <div class="widgets_container contact_us">
                               <div class="footer_logo">
                                   <a href="index.html"><img src="{{ asset('assets/public') }}/assets/img/logo/logo.png" alt=""></a>
                               </div>
                               <p class="footer_desc">We are a team of designers and developers that create high quality eCommerce, WordPress, Shopify .</p>
                                <p><span>Address:</span> 4710-4890 Breckinridge USA</p>
                                <p><span>Email:</span> <a href="#">demo@hasthemes.com</a></p>
                                <p><span>Call us:</span> <a href="tel:(08)23456789">(08) 23 456 789</a> </p>
                            </div>          
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-5">
                            <div class="widgets_container widget_menu">
                                <h3>Information</h3>
                                <div class="footer_menu">

                                    <ul>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="#">Delivery Information</a></li>
                                        <li><a href="#"> Privacy Policy</a></li>
                                        <li><a href="#"> Terms & Conditions</a></li>
                                        <li><a href="contact.html"> Contact Us</a></li>
                                        <li><a href="#"> Site Map</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4">
                            <div class="widgets_container widget_menu">
                                <h3>Extras</h3>
                                <div class="footer_menu">
                                    <ul>
                                        <li><a href="#">Brands</a></li>
                                        <li><a href="#">  Gift Certificates</a></li>
                                        <li><a href="#">Affiliate</a></li>
                                        <li><a href="#">Specials</a></li>
                                        <li><a href="#">Returns</a></li>
                                        <li><a href="#"> Order History</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-8">
                            <div class="widgets_container widget_newsletter">
                                <h3>Sign up newsletter</h3>
                                <p class="footer_desc">Get updates by subscribe our weekly newsletter</p>
                                <div class="subscribe_form">
                                    <form id="mc-form" class="mc-form footer-newsletter" >
                                        <input id="mc-email" type="email" autocomplete="off" placeholder="Enter you email" />
                                        <button id="mc-submit">Subscribe</button>
                                    </form>
                                    <!-- mailchimp-alerts Start -->
                                    <div class="mailchimp-alerts text-centre">
                                        <div class="mailchimp-submitting"></div><!-- mailchimp-submitting end -->
                                        <div class="mailchimp-success"></div><!-- mailchimp-success end -->
                                        <div class="mailchimp-error"></div><!-- mailchimp-error end -->
                                    </div><!-- mailchimp-alerts end -->
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>     
        <div class="footer_bottom">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-7">
                        <div class="copyright_area">
                            <p>Copyright  © 2021  <a href="#">Safira</a>  . All Rights Reserved.Design by  <a href="#">Safira</a></p>
                        </div>
                    </div>    
                    <div class="col-lg-6 col-md-5">    
                        <div class="footer_payment">
                            <ul>
                                <li><a href="#"><img src="{{ asset('assets/public') }}/assets/img/icon/paypal1.jpg" alt=""></a></li>
                                <li><a href="#"><img src="{{ asset('assets/public') }}/assets/img/icon/paypal2.jpg" alt=""></a></li>
                                <li><a href="#"><img src="{{ asset('assets/public') }}/assets/img/icon/paypal3.jpg" alt=""></a></li>
                                <li><a href="#"><img src="{{ asset('assets/public') }}/assets/img/icon/paypal4.jpg" alt=""></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
             </div>   
        </div>  
    </footer>
    <!--footer area end-->
   </div>
    
<!-- JS========== -->
<script src="{{ asset('js/app.js') }}"></script>
<!--jquery min js-->
<script src="{{ asset('assets/public') }}/assets/js/vendor/jquery-3.4.1.min.js"></script>
<!--popper min js-->
<script src="{{ asset('assets/public') }}/assets/js/popper.js"></script>
<!--bootstrap min js-->
<script src="{{ asset('assets/public') }}/assets/js/bootstrap.min.js"></script>
<!--owl carousel min js-->
<script src="{{ asset('assets/public') }}/assets/js/owl.carousel.min.js"></script>
<!--slick min js-->
<script src="{{ asset('assets/public') }}/assets/js/slick.min.js"></script>
<!--magnific popup min js-->
<script src="{{ asset('assets/public') }}/assets/js/jquery.magnific-popup.min.js"></script>
<!--counterup min js-->
<script src="{{ asset('assets/public') }}/assets/js/jquery.counterup.min.js"></script>
<!--jquery countdown min js-->
<script src="{{ asset('assets/public') }}/assets/js/jquery.countdown.js"></script>
<!--jquery ui min js-->
<script src="{{ asset('assets/public') }}/assets/js/jquery.ui.js"></script>
<!--jquery elevatezoom min js-->
<script src="{{ asset('assets/public') }}/assets/js/jquery.elevatezoom.js"></script>
<!--isotope packaged min js-->
<script src="{{ asset('assets/public') }}/assets/js/isotope.pkgd.min.js"></script>
<!--slinky menu js-->
<script src="{{ asset('assets/public') }}/assets/js/slinky.menu.js"></script>
<!--instagramfeed menu js-->
<script src="{{ asset('assets/public') }}/assets/js/jquery.instagramFeed.min.js"></script>
<!-- tippy bundle umd js -->
<script src="{{ asset('assets/public') }}/assets/js/tippy-bundle.umd.js"></script>
<!-- Plugins JS -->
<script src="{{ asset('assets/public') }}/assets/js/plugins.js"></script>

<!-- Main JS -->
<script src="{{ asset('assets/public') }}/assets/js/main.js"></script>


</body>


<!-- Mirrored from htmldemo.net/safira/safira/blog.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 21 Sep 2022 15:15:23 GMT -->
</html>