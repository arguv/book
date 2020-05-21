/*----------------------------------------------------
@Default Styles

Table of Content:
01/ Variables
02/ predefin
03/ header
04/ button
05/ banner
06/ breadcrumb
07/ about
08/ team
09/ project
10/ price
11/ team
12/ blog
13/ video
14/ features
15/ career
16/ contact
17/ footer
----------------------------------------------------*/
/*font Variables*/
/*Color Variables*/
/*=================== fonts ====================*/
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Roboto:300,400,500,700");
/*---------------------------------------------------- */
/*----------------------------------------------------*/
.list {
  list-style: none;
  margin: 0px;
  padding: 0px;
}

a {
  text-decoration: none;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

a:hover, a:focus {
  text-decoration: none;
  outline: none;
}

.row.m0 {
  margin: 0px;
}

body {
  line-height: 24px;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  font-weight: normal;
  color: #777777;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
}

button:focus {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.p_120 {
  padding-top: 120px;
  padding-bottom: 120px;
}

.p_100 {
  padding-top: 100px;
  padding-bottom: 100px;
}

.pad_top {
  padding-top: 120px;
}

.mt-25 {
  margin-top: 25px;
}

.mt-100 {
  margin-top: 100px;
}

@media (min-width: 1200px) {
  .container {
    max-width: 1170px;
  }
}

@media (min-width: 1620px) {
  .box_1620 {
    max-width: 1650px;
    margin: auto;
  }
}

/* Main Title Area css
============================================================================================ */
.main_title {
  text-align: center;
  max-width: 720px;
  margin: 0px auto 75px;
}

.main_title h2 {
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  font-size: 36px;
  color: #222222;
  margin-bottom: 12px;
}

.main_title p {
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  line-height: 24px;
  color: #777777;
  margin-bottom: 0px;
}

.main_title2 {
  background: #f9f9ff;
  border-left: 3px solid #ff1857;
  margin-bottom: 30px;
}

.main_title2 h2 {
  color: #222222;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  line-height: 40px;
  padding-left: 15px;
  margin-bottom: 0px;
}

/* End Main Title Area css
============================================================================================ */
/*---------------------------------------------------- */
/*----------------------------------------------------*/
/* Header Area css
============================================================================================ */
.header_area {
  position: absolute;
  width: 100%;
  left: 0px;
  top: 0px;
  z-index: 3;
}

.header_area + section, .header_area + div {
  margin-top: 175px;
}

.top_menu {
  overflow: hidden;
  background: #f9f9ff;
}

.top_menu .float-left a {
  font-size: 12px;
  color: #fff;
  background: #ff1857;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  text-transform: uppercase;
  padding: 0px 15px;
  line-height: 30px;
  display: inline-block;
  border: 1px solid #ff1857;
  margin-top: 6px;
}

.top_menu .float-left a:hover {
  background: transparent;
  color: #ff1857;
}

.logo_part {
  overflow: hidden;
  padding: 20px 0px;
}

.logo_part .float-left .logo {
  margin-top: 20px;
  display: inline-block;
}

.header_social li {
  display: inline-block;
  margin-right: 15px;
}

.header_social li a {
  font-size: 14px;
  color: #aaaaaa;
  display: inline-block;
  line-height: 45px;
  -webkit-transition: all 300ms linear 0s;
  -o-transition: all 300ms linear 0s;
  transition: all 300ms linear 0s;
}

.header_social li:last-child {
  margin-right: 0px;
}

.header_social li:hover a {
  color: #ff1857;
}

.main_menu .navbar {
  background: transparent;
  padding: 0px;
  border: 0px;
  border-radius: 0px;
  margin-bottom: 0px;
}

.main_menu .navbar .container_inner {
  background: #fff;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
}

.main_menu .navbar .navbar-brand {
  display: none;
}

.main_menu .navbar .nav {
  padding-left: 20px;
}

.main_menu .navbar .nav .nav-item {
  margin-right: 45px;
}

.main_menu .navbar .nav .nav-item .nav-link {
  font: 500 12px/60px "Roboto", sans-serif;
  text-transform: uppercase;
  color: #222222;
  padding: 0px;
  display: inline-block;
}

.main_menu .navbar .nav .nav-item .nav-link:after {
  display: none;
}

.main_menu .navbar .nav .nav-item:hover .nav-link, .main_menu .navbar .nav .nav-item.active .nav-link {
  color: #ff1857;
}

.main_menu .navbar .nav .nav-item.submenu {
  position: relative;
}

.main_menu .navbar .nav .nav-item.submenu ul {
  border: none;
  padding: 0px;
  border-radius: 0px;
  -webkit-box-shadow: none;
  box-shadow: none;
  margin: 0px;
  background: #fff;
}

@media (min-width: 992px) {
  .main_menu .navbar .nav .nav-item.submenu ul {
    position: absolute;
    top: 120%;
    left: 0px;
    min-width: 200px;
    text-align: left;
    opacity: 0;
    -webkit-transition: all 300ms ease-in;
    -o-transition: all 300ms ease-in;
    transition: all 300ms ease-in;
    visibility: hidden;
    display: block;
    border: none;
    padding: 0px;
    border-radius: 0px;
  }
}

.main_menu .navbar .nav .nav-item.submenu ul:before {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 0 10px;
  border-color: #eeeeee transparent transparent transparent;
  position: absolute;
  right: 24px;
  top: 45px;
  z-index: 3;
  opacity: 0;
  -webkit-transition: all 400ms linear;
  -o-transition: all 400ms linear;
  transition: all 400ms linear;
}

.main_menu .navbar .nav .nav-item.submenu ul .nav-item {
  display: block;
  float: none;
  margin-right: 0px;
  border-bottom: 1px solid #ededed;
  margin-left: 0px;
  -webkit-transition: all 0.4s linear;
  -o-transition: all 0.4s linear;
  transition: all 0.4s linear;
}

.main_menu .navbar .nav .nav-item.submenu ul .nav-item .nav-link {
  line-height: 45px;
  color: #222222;
  padding: 0px 30px;
  -webkit-transition: all 150ms linear;
  -o-transition: all 150ms linear;
  transition: all 150ms linear;
  display: block;
  margin-right: 0px;
}

.main_menu .navbar .nav .nav-item.submenu ul .nav-item:last-child {
  border-bottom: none;
}

.main_menu .navbar .nav .nav-item.submenu ul .nav-item:hover .nav-link {
  background: #ff1857;
  color: #fff;
}

@media (min-width: 992px) {
  .main_menu .navbar .nav .nav-item.submenu:hover ul {
    visibility: visible;
    opacity: 1;
    top: 100%;
  }
}

.main_menu .navbar .nav .nav-item.submenu:hover ul .nav-item {
  margin-top: 0px;
}

.main_menu .navbar .nav .nav-item:last-child {
  margin-right: 0px;
}

.main_menu .navbar .search {
  font-size: 12px;
  line-height: 60px;
  display: inline-block;
  color: #222222;
  padding-right: 20px;
}

.main_menu .navbar .search i {
  font-weight: 600;
}

/* End Header Area css
============================================================================================ */
/*---------------------------------------------------- */
/*----------------------------------------------------*/
/* Home Banner Area css
============================================================================================ */
.home_banner_area {
  position: relative;
  z-index: 1;
  min-height: 600px;
}

.home_banner_area .banner_inner {
  position: relative;
  background: url(../img/banner/home-banner.jpg) no-repeat scroll center center;
  min-height: 600px;
}

.home_banner_area .banner_inner .banner_content {
  color: #fff;
  max-width: 480px;
  margin: auto;
}

.home_banner_area .banner_inner .banner_content .date {
  margin-bottom: 25px;
}

.home_banner_area .banner_inner .banner_content .date a {
  margin-right: 25px;
  color: #fff;
}

.home_banner_area .banner_inner .banner_content .date a i {
  padding-right: 10px;
}

.home_banner_area .banner_inner .banner_content p {
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  margin-bottom: 0px;
}

.home_banner_area .banner_inner .banner_content h3 {
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  margin-bottom: 25px;
}

.home_banner_area .carousel .carousel-indicators {
  bottom: -140px;
  z-index: 20;
}

.home_banner_area .carousel .carousel-indicators li {
  height: 14px;
  width: 14px;
  background: rgba(249, 249, 255, 0.25);
  cursor: pointer;
}

.home_banner_area .carousel .carousel-indicators li.active {
  background: #ff1857;
}

.blog_banner {
  min-height: 780px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  margin-bottom: 0px;
}

.blog_banner .banner_inner {
  background: #04091e;
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 780px;
  z-index: 1;
}

.blog_banner .banner_inner .overlay {
  background: url(../img/banner/banner-2.jpg) no-repeat scroll center center;
  opacity: .5;
  height: 125%;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  z-index: -1;
}

.blog_banner .banner_inner .blog_b_text {
  max-width: 700px;
  margin: auto;
  color: #fff;
  margin-top: 80px;
}

.blog_banner .banner_inner .blog_b_text h2 {
  font-size: 60px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  line-height: 66px;
  margin-bottom: 15px;
}

.blog_banner .banner_inner .blog_b_text p {
  font-size: 16px;
  margin-bottom: 35px;
}

.blog_banner .banner_inner .blog_b_text .white_bg_btn {
  line-height: 42px;
  padding: 0px 45px;
}

.banner_box {
  max-width: 1620px;
  margin: auto;
}

.banner_area {
  position: relative;
  z-index: 1;
  min-height: 350px;
}

.banner_area .banner_inner {
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 350px;
  background: #000;
  z-index: 1;
}

.banner_area .banner_inner .overlay {
  background: url(../img/banner/banner.jpg) no-repeat scroll center center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 125%;
  bottom: 0;
  z-index: -1;
  opacity: 1;
}

.banner_area .banner_inner .banner_content {
  margin-top: 40px;
}

.banner_area .banner_inner .banner_content h2 {
  color: #fff;
  font-size: 48px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
}

.banner_area .banner_inner .banner_content .page_link a {
  font-size: 14px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  margin-right: 32px;
  position: relative;
}

.banner_area .banner_inner .banner_content .page_link a:before {
  content: "\f0da";
  font: normal normal normal 14px/1 FontAwesome;
  position: absolute;
  right: -25px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.banner_area .banner_inner .banner_content .page_link a:last-child {
  margin-right: 0px;
}

.banner_area .banner_inner .banner_content .page_link a:last-child:before {
  display: none;
}

.banner_area .banner_inner .banner_content .page_link a:hover {
  color: #ff1857;
}

/* End Home Banner Area css
============================================================================================ */
/*---------------------------------------------------- */
/*----------------------------------------------------*/
/* Causes Area css
============================================================================================ */
.causes_slider .owl-dots {
  text-align: center;
  margin-top: 80px;
}

.causes_slider .owl-dots .owl-dot {
  height: 14px;
  width: 14px;
  background: #eeeeee;
  display: inline-block;
  margin-right: 7px;
}

.causes_slider .owl-dots .owl-dot:last-child {
  margin-right: 0px;
}

.causes_slider .owl-dots .owl-dot.active {
  background: #ff1857;
}

.causes_item {
  background: #fff;
}

.causes_item .causes_img {
  position: relative;
}

.causes_item .causes_img .c_parcent {
  position: absolute;
  bottom: 0px;
  width: 100%;
  left: 0px;
  height: 3px;
  background: rgba(255, 255, 255, 0.5);
}

.causes_item .causes_img .c_parcent span {
  width: 70%;
  height: 3px;
  background: #ff1857;
  position: absolute;
  left: 0px;
  bottom: 0px;
}

.causes_item .causes_img .c_parcent span:before {
  content: "75%";
  position: absolute;
  right: -10px;
  bottom: 0px;
  background: #ff1857;
  color: #fff;
  padding: 0px 5px;
}

.causes_item .causes_text {
  padding: 30px 35px 40px 30px;
}

.causes_item .causes_text h4 {
  color: #222222;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
  cursor: pointer;
}

.causes_item .causes_text h4:hover {
  color: #ff1857;
}

.causes_item .causes_text p {
  font-size: 14px;
  line-height: 24px;
  color: #777777;
  font-weight: 300;
  margin-bottom: 0px;
}

.causes_item .causes_bottom a {
  width: 50%;
  border: 1px solid #ff1857;
  text-align: center;
  float: left;
  line-height: 50px;
  background: #ff1857;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 500;
}

.causes_item .causes_bottom a + a {
  border-color: #eeeeee;
  background: #fff;
  font-size: 14px;
  color: #222222;
}

/* End Causes Area css
============================================================================================ */
/*================= latest_blog_area css =============*/
.latest_blog_area {
  background: #f9f9ff;
}

.single-recent-blog-post {
  margin-bottom: 30px;
}

.single-recent-blog-post .thumb {
  overflow: hidden;
}

.single-recent-blog-post .thumb img {
  -webkit-transition: all 0.7s linear;
  -o-transition: all 0.7s linear;
  transition: all 0.7s linear;
}

.single-recent-blog-post .details {
  padding-top: 30px;
}

.single-recent-blog-post .details .sec_h4 {
  line-height: 24px;
  padding: 10px 0px 13px;
  -webkit-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

.single-recent-blog-post .details .sec_h4:hover {
  color: #777777;
}

.single-recent-blog-post .date {
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
}

.single-recent-blog-post:hover img {
  -webkit-transform: scale(1.23) rotate(10deg);
  -ms-transform: scale(1.23) rotate(10deg);
  transform: scale(1.23) rotate(10deg);
}

.tags .tag_btn {
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  border: 1px solid #eeeeee;
  display: inline-block;
  padding: 1px 18px;
  text-align: center;
  color: #222222;
}

.tags .tag_btn:before {
  background: #ff1857;
}

.tags .tag_btn + .tag_btn {
  margin-left: 2px;
}

/*========= blog_categorie_area css ===========*/
.blog_categorie_area {
  padding-top: 80px;
  padding-bottom: 80px;
}

.categories_post {
  position: relative;
  text-align: center;
  cursor: pointer;
}

.categories_post img {
  max-width: 100%;
}

.categories_post .categories_details {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: rgba(34, 34, 34, 0.8);
  color: #fff;
  -webkit-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.categories_post .categories_details h5 {
  margin-bottom: 0px;
  font-size: 18px;
  line-height: 26px;
  text-transform: uppercase;
  color: #fff;
  position: relative;
}

.categories_post .categories_details p {
  font-weight: 300;
  font-size: 14px;
  line-height: 26px;
  margin-bottom: 0px;
}

.categories_post .categories_details .border_line {
  margin: 10px 0px;
  background: #fff;
  width: 100%;
  height: 1px;
}

.categories_post:hover .categories_details {
  background: rgba(234, 44, 88, 0.85);
}

/*============ blog_left_sidebar css ==============*/
.blog_item {
  margin-bottom: 40px;
}

.blog_info {
  padding-top: 30px;
}

.blog_info .post_tag {
  padding-bottom: 20px;
}

.blog_info .post_tag a {
  font: 300 14px/21px "Roboto", sans-serif;
  color: #222222;
}

.blog_info .post_tag a:hover {
  color: #777777;
}

.blog_info .post_tag a.active {
  color: #ff1857;
}

.blog_info .blog_meta li a {
  font: 300 14px/20px "Roboto", sans-serif;
  color: #777777;
  vertical-align: middle;
  padding-bottom: 12px;
  display: inline-block;
}

.blog_info .blog_meta li a i {
  color: #222222;
  font-size: 16px;
  font-weight: 600;
  padding-left: 15px;
  line-height: 20px;
  vertical-align: middle;
}

.blog_info .blog_meta li a:hover {
  color: #ff1857;
}

.blog_post img {
  max-width: 100%;
}

.blog_details {
  padding-top: 20px;
}

.blog_details h2 {
  font-size: 24px;
  line-height: 36px;
  color: #222222;
  font-weight: 600;
  -webkit-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

.blog_details h2:hover {
  color: #ff1857;
}

.blog_details p {
  margin-bottom: 26px;
}

.view_btn {
  font-size: 14px;
  line-height: 36px;
  display: inline-block;
  color: #222222;
  font-weight: 500;
  padding: 0px 30px;
  background: #fff;
}

.blog_right_sidebar {
  border: 1px solid #eeeeee;
  background: #fafaff;
  padding: 30px;
}

.blog_right_sidebar .widget_title {
  font-size: 18px;
  line-height: 25px;
  background: #ff1857;
  text-align: center;
  color: #fff;
  padding: 8px 0px;
  margin-bottom: 30px;
}

.blog_right_sidebar .search_widget .input-group .form-control {
  font-size: 14px;
  line-height: 29px;
  border: 0px;
  width: 100%;
  font-weight: 300;
  color: #fff;
  padding-left: 20px;
  border-radius: 45px;
  z-index: 0;
  background: #ff1857;
}

.blog_right_sidebar .search_widget .input-group .form-control.placeholder {
  color: #fff;
}

.blog_right_sidebar .search_widget .input-group .form-control:-moz-placeholder {
  color: #fff;
}

.blog_right_sidebar .search_widget .input-group .form-control::-moz-placeholder {
  color: #fff;
}

.blog_right_sidebar .search_widget .input-group .form-control::-webkit-input-placeholder {
  color: #fff;
}

.blog_right_sidebar .search_widget .input-group .form-control:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
}

.blog_right_sidebar .search_widget .input-group .btn-default {
  position: absolute;
  right: 20px;
  background: transparent;
  border: 0px;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 14px;
  color: #fff;
  padding: 0px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 1;
}

.blog_right_sidebar .author_widget {
  text-align: center;
}

.blog_right_sidebar .author_widget h4 {
  font-size: 18px;
  line-height: 20px;
  color: #222222;
  margin-bottom: 5px;
  margin-top: 30px;
}

.blog_right_sidebar .author_widget p {
  margin-bottom: 0px;
}

.blog_right_sidebar .author_widget .social_icon {
  padding: 7px 0px 15px;
}

.blog_right_sidebar .author_widget .social_icon a {
  font-size: 14px;
  color: #222222;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

.blog_right_sidebar .author_widget .social_icon a + a {
  margin-left: 20px;
}

.blog_right_sidebar .author_widget .social_icon a:hover {
  color: #ff1857;
}

.blog_right_sidebar .popular_post_widget .post_item .media-body {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-item-align: center;
  align-self: center;
  padding-left: 20px;
}

.blog_right_sidebar .popular_post_widget .post_item .media-body h3 {
  font-size: 14px;
  line-height: 20px;
  color: #222222;
  margin-bottom: 4px;
  -webkit-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

.blog_right_sidebar .popular_post_widget .post_item .media-body h3:hover {
  color: #ff1857;
}

.blog_right_sidebar .popular_post_widget .post_item .media-body p {
  font-size: 12px;
  line-height: 21px;
  margin-bottom: 0px;
}

.blog_right_sidebar .popular_post_widget .post_item + .post_item {
  margin-top: 20px;
}

.blog_right_sidebar .post_category_widget .cat-list li {
  border-bottom: 2px dotted #eee;
  -webkit-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  padding-bottom: 12px;
}

.blog_right_sidebar .post_category_widget .cat-list li a {
  font-size: 14px;
  line-height: 20px;
  color: #777;
}

.blog_right_sidebar .post_category_widget .cat-list li a p {
  margin-bottom: 0px;
}

.blog_right_sidebar .post_category_widget .cat-list li + li {
  padding-top: 15px;
}

.blog_right_sidebar .post_category_widget .cat-list li:hover {
  border-color: #ff1857;
}

.blog_right_sidebar .post_category_widget .cat-list li:hover a {
  color: #ff1857;
}

.blog_right_sidebar .newsletter_widget {
  text-align: center;
}

.blog_right_sidebar .newsletter_widget .form-group {
  margin-bottom: 8px;
}

.blog_right_sidebar .newsletter_widget .input-group-prepend {
  margin-right: -1px;
}

.blog_right_sidebar .newsletter_widget .input-group-text {
  background: #fff;
  border-radius: 0px;
  vertical-align: top;
  font-size: 12px;
  line-height: 36px;
  padding: 0px 0px 0px 15px;
  border: 1px solid #eeeeee;
  border-right: 0px;
}

.blog_right_sidebar .newsletter_widget .form-control {
  font-size: 12px;
  line-height: 24px;
  color: #cccccc;
  border: 1px solid #eeeeee;
  border-left: 0px;
  border-radius: 0px;
}

.blog_right_sidebar .newsletter_widget .form-control.placeholder {
  color: #cccccc;
}

.blog_right_sidebar .newsletter_widget .form-control:-moz-placeholder {
  color: #cccccc;
}

.blog_right_sidebar .newsletter_widget .form-control::-moz-placeholder {
  color: #cccccc;
}

.blog_right_sidebar .newsletter_widget .form-control::-webkit-input-placeholder {
  color: #cccccc;
}

.blog_right_sidebar .newsletter_widget .form-control:focus {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.blog_right_sidebar .newsletter_widget .bbtns {
  background: #ff1857;
  color: #fff;
  font-size: 12px;
  line-height: 38px;
  display: inline-block;
  font-weight: 500;
  padding: 0px 24px 0px 24px;
  border-radius: 0;
}

.blog_right_sidebar .newsletter_widget .text-bottom {
  font-size: 12px;
}

.blog_right_sidebar .tag_cloud_widget ul li {
  display: inline-block;
}

.blog_right_sidebar .tag_cloud_widget ul li a {
  display: inline-block;
  border: 1px solid #eee;
  background: #fff;
  padding: 0px 13px;
  margin-bottom: 8px;
  -webkit-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  color: #222222;
  font-size: 12px;
}

.blog_right_sidebar .tag_cloud_widget ul li a:hover {
  background: #ff1857;
  color: #fff;
}

.blog_right_sidebar .br {
  width: 100%;
  height: 1px;
  background: #eeeeee;
  margin: 30px 0px;
}

.blog-pagination {
  padding-top: 25px;
  padding-bottom: 95px;
}

.blog-pagination .page-link {
  border-radius: 0;
}

.blog-pagination .page-item {
  border: none;
}

.page-link {
  background: transparent;
  font-weight: 400;
}

.blog-pagination .page-item.active .page-link {
  background-color: #ff1857;
  border-color: transparent;
  color: #fff;
}

.blog-pagination .page-link {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #8a8a8a;
  border: none;
}

.blog-pagination .page-link .lnr {
  font-weight: 600;
}

.blog-pagination .page-item:last-child .page-link,
.blog-pagination .page-item:first-child .page-link {
  border-radius: 0;
}

.blog-pagination .page-link:hover {
  color: #fff;
  text-decoration: none;
  background-color: #ff1857;
  border-color: #eee;
}

/*============ Start Blog Single Styles  =============*/
.single-post-area .social-links {
  padding-top: 10px;
}

.single-post-area .social-links li {
  display: inline-block;
  margin-bottom: 10px;
}

.single-post-area .social-links li a {
  color: #cccccc;
  padding: 7px;
  font-size: 14px;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

.single-post-area .social-links li a:hover {
  color: #222222;
}

.single-post-area .blog_details {
  padding-top: 26px;
}

.single-post-area .blog_details p {
  margin-bottom: 10px;
}

.single-post-area .quotes {
  margin-top: 20px;
  margin-bottom: 30px;
  padding: 24px 35px 24px 30px;
  background-color: white;
  -webkit-box-shadow: -20.84px 21.58px 30px 0px rgba(176, 176, 176, 0.1);
  box-shadow: -20.84px 21.58px 30px 0px rgba(176, 176, 176, 0.1);
  font-size: 14px;
  line-height: 24px;
  color: #777;
  font-style: italic;
}

.single-post-area .arrow {
  position: absolute;
}

.single-post-area .arrow .lnr {
  font-size: 20px;
  font-weight: 600;
}

.single-post-area .thumb .overlay-bg {
  background: rgba(0, 0, 0, 0.8);
}

.single-post-area .navigation-area {
  padding-top: 80px;
  padding-bottom: 80px;
}

.single-post-area .navigation-area p {
  margin-bottom: 0px;
}

.single-post-area .navigation-area h4 {
  font-size: 18px;
  line-height: 25px;
  color: #222222;
  font-weight: 600;
}

.single-post-area .navigation-area .nav-left {
  text-align: left;
}

.single-post-area .navigation-area .nav-left .thumb {
  margin-right: 20px;
  background: #000;
}

.single-post-area .navigation-area .nav-left .thumb img {
  -webkit-transition: all 300ms linear 0s;
  -o-transition: all 300ms linear 0s;
  transition: all 300ms linear 0s;
}

.single-post-area .navigation-area .nav-left .lnr {
  margin-left: 20px;
  opacity: 0;
  -webkit-transition: all 300ms linear 0s;
  -o-transition: all 300ms linear 0s;
  transition: all 300ms linear 0s;
}

.single-post-area .navigation-area .nav-left:hover .lnr {
  opacity: 1;
}

.single-post-area .navigation-area .nav-left:hover .thumb img {
  opacity: .5;
}

@media (max-width: 767px) {
  .single-post-area .navigation-area .nav-left {
    margin-bottom: 30px;
  }
}

.single-post-area .navigation-area .nav-right {
  text-align: right;
}

.single-post-area .navigation-area .nav-right .thumb {
  margin-left: 20px;
  background: #000;
}

.single-post-area .navigation-area .nav-right .thumb img {
  -webkit-transition: all 300ms linear 0s;
  -o-transition: all 300ms linear 0s;
  transition: all 300ms linear 0s;
}

.single-post-area .navigation-area .nav-right .lnr {
  margin-right: 20px;
  opacity: 0;
  -webkit-transition: all 300ms linear 0s;
  -o-transition: all 300ms linear 0s;
  transition: all 300ms linear 0s;
}

.single-post-area .navigation-area .nav-right:hover .lnr {
  opacity: 1;
}

.single-post-area .navigation-area .nav-right:hover .thumb img {
  opacity: .5;
}

@media (max-width: 991px) {
  .single-post-area .sidebar-widgets {
    padding-bottom: 0px;
  }
}

.comments-area {
  background: #fff;
  border-bottom: 1px solid #eee;
  padding: 50px 30px;
  margin-top: 50px;
}

@media (max-width: 414px) {
  .comments-area {
    padding: 50px 8px;
  }
}

.comments-area h4 {
  text-align: center;
  margin-bottom: 50px;
  color: #222222;
  font-size: 18px;
}

.comments-area h5 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 0px;
}

.comments-area a {
  color: #222222;
}

.comments-area .comment-list {
  padding-bottom: 48px;
}

.comments-area .comment-list:last-child {
  padding-bottom: 0px;
}

.comments-area .comment-list.left-padding {
  padding-left: 25px;
}

@media (max-width: 413px) {
  .comments-area .comment-list .single-comment h5 {
    font-size: 12px;
  }
  .comments-area .comment-list .single-comment .date {
    font-size: 11px;
  }
  .comments-area .comment-list .single-comment .comment {
    font-size: 10px;
  }
}

.comments-area .thumb {
  margin-right: 20px;
}

.comments-area .date {
  font-size: 13px;
  color: #cccccc;
  margin-bottom: 13px;
}

.comments-area .comment {
  color: #777777;
  margin-bottom: 0px;
}

.comments-area .btn-reply {
  background-color: #fff;
  color: #222222;
  border: 1px solid #eee;
  padding: 2px 18px;
  font-size: 12px;
  display: block;
  font-weight: 600;
  -webkit-transition: all 300ms linear 0s;
  -o-transition: all 300ms linear 0s;
  transition: all 300ms linear 0s;
}

.comments-area .btn-reply:hover {
  background-color: #ff1857;
  color: #fff;
}

.comment-form {
  background: #fff;
  text-align: left;
  padding: 47px 30px 43px;
  margin-top: 50px;
  margin-bottom: 40px;
}

.comment-form h4 {
  text-align: left;
  margin-bottom: 50px;
  font-size: 18px;
  line-height: 22px;
  color: #222222;
}

.comment-form .name {
  padding-left: 0px;
}

@media (max-width: 767px) {
  .comment-form .name {
    padding-right: 0px;
    margin-bottom: 1rem;
  }
}

.comment-form .email {
  padding-right: 0px;
}

@media (max-width: 991px) {
  .comment-form .email {
    padding-left: 0px;
  }
}

.comment-form .form-control {
  padding: 8px 20px;
  background: #f9f9ff;
  border: none;
  border-radius: 0px;
  width: 100%;
  font-size: 14px;
  color: #777777;
  font-family: "Open Sans", sans-serif;
  border: 1px solid transparent;
}

.comment-form .form-control:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 1px solid #eee;
}

.comment-form .form-control.placeholder {
  font-family: "Open Sans", sans-serif;
}

.comment-form .form-control:-moz-placeholder {
  font-family: "Open Sans", sans-serif;
}

.comment-form .form-control::-moz-placeholder {
  font-family: "Open Sans", sans-serif;
}

.comment-form .form-control::-webkit-input-placeholder {
  font-family: "Open Sans", sans-serif;
}

.comment-form textarea.form-control {
  height: 140px;
  resize: none;
}

.comment-form ::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  font-size: 13px;
  color: #777;
}

.comment-form ::-moz-placeholder {
  /* Firefox 19+ */
  font-size: 13px;
  color: #777;
}

.comment-form :-ms-input-placeholder {
  /* IE 10+ */
  font-size: 13px;
  color: #777;
}

.comment-form :-moz-placeholder {
  /* Firefox 18- */
  font-size: 13px;
  color: #777;
}

.comment-form .submit_btn {
  float: right;
}

/*============ End Blog Single Styles  =============*/
.main_blog_details h4 {
  font-size: 36px;
  font-weight: 500;
  color: #222222;
  margin-bottom: 20px;
  margin-top: 30px;
}

.main_blog_details .user_details {
  overflow: hidden;
  margin-bottom: 30px;
}

.main_blog_details .user_details .float-left a {
  display: inline-block;
  border: 1px solid #eeeeee;
  text-align: center;
  padding: 0px 20px;
  font-size: 12px;
  color: #222222;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  line-height: 28px;
  background: #f9f9ff;
  border-radius: 15px;
  -webkit-transition: all 300ms linear 0s;
  -o-transition: all 300ms linear 0s;
  transition: all 300ms linear 0s;
  margin-right: 10px;
  margin-top: 10px;
}

.main_blog_details .user_details .float-left a:hover {
  background: #ff1857;
  color: #fff;
}

.main_blog_details .user_details .float-right .media {
  text-align: right;
  vertical-align: middle;
}

.main_blog_details .user_details .float-right .media .media-body {
  text-align: right;
  vertical-align: middle;
  -ms-flex-item-align: center;
  align-self: center;
}

.main_blog_details .user_details .float-right .media .media-body h5 {
  margin-bottom: 0px;
  font-size: 14px;
  color: #222222;
  margin-bottom: 5px;
}

.main_blog_details .user_details .float-right .media .media-body p {
  font-size: 12px;
  color: #777777;
  margin-bottom: 0px;
}

.main_blog_details .user_details .float-right .media .d-flex {
  padding-left: 14px;
  vertical-align: middle;
  -ms-flex-item-align: center;
  align-self: center;
}

.main_blog_details p {
  font-size: 14px;
  color: #777777;
  margin-bottom: 15px;
}

.main_blog_details .blockquote {
  background: #fff;
  padding: 30px;
  -webkit-box-shadow: -20.84px 21.58px 30px 0px rgba(176, 176, 176, 0.1);
  box-shadow: -20.84px 21.58px 30px 0px rgba(176, 176, 176, 0.1);
  margin: 35px 0px;
}

.main_blog_details .blockquote p {
  background: #f9f9ff;
  margin-bottom: 0px;
  border-left: 2px solid #ff1857;
  padding: 30px;
}

.main_blog_details .news_d_footer {
  overflow: hidden;
  border-top: 1px solid #eeeeee;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding-top: 15px;
  margin-top: 40px;
}

.main_blog_details .news_d_footer a {
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  color: #777777;
}

.main_blog_details .news_d_footer a i {
  padding-right: 8px;
}

.main_blog_details .news_d_footer .news_socail a {
  margin-right: 10px;
  color: #cccccc;
  font-size: 14px;
}

.main_blog_details .news_d_footer .news_socail a:hover {
  color: #ff1857;
}

.main_blog_details .news_d_footer .news_socail a:last-child {
  margin-right: 0px;
}

/*---------------------------------------------------- */
/*----------------------------------------------------*/
/* Reservation Form Area css
============================================================================================ */
.reservation_form_area .res_form_inner {
  max-width: 555px;
  margin: auto;
  -webkit-box-shadow: 0px 10px 30px 0px rgba(153, 153, 153, 0.1);
  box-shadow: 0px 10px 30px 0px rgba(153, 153, 153, 0.1);
  padding: 75px 50px;
  position: relative;
}

.reservation_form_area .res_form_inner:before {
  content: "";
  background: url(../img/contact-shap-1.png);
  position: absolute;
  left: -125px;
  height: 421px;
  width: 98px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.reservation_form_area .res_form_inner:after {
  content: "";
  background: url(../img/contact-shap-2.png);
  position: absolute;
  right: -125px;
  height: 421px;
  width: 98px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.reservation_form .form-group input {
  height: 40px;
  border-radius: 0px;
  border: 1px solid #eeeeee;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  padding: 0px 15px;
  font-size: 13px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #999999;
}

.reservation_form .form-group input.placeholder {
  font-size: 13px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #999999;
}

.reservation_form .form-group input:-moz-placeholder {
  font-size: 13px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #999999;
}

.reservation_form .form-group input::-moz-placeholder {
  font-size: 13px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #999999;
}

.reservation_form .form-group input::-webkit-input-placeholder {
  font-size: 13px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #999999;
}

.reservation_form .form-group .res_select {
  height: 40px;
  border: 1px solid #eeeeee;
  border-radius: 0px;
  width: 100%;
  padding: 0px 15px;
  line-height: 36px;
}

.reservation_form .form-group .res_select .current {
  font-size: 13px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #999999;
}

.reservation_form .form-group .res_select:after {
  content: "\e874";
  font-family: 'Linearicons-Free';
  color: #cccccc;
  -webkit-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  transform: rotate(0deg);
  border: none;
  margin-top: -17px;
  font-size: 13px;
  right: 22px;
}

.reservation_form .form-group:last-child {
  text-align: center;
}

/* End Reservation Form Area css
============================================================================================ */
/*============== contact_area css ================*/
.mapBox {
  height: 420px;
  margin-bottom: 80px;
}

.contact_info .info_item {
  position: relative;
  padding-left: 45px;
}

.contact_info .info_item i {
  position: absolute;
  left: 0;
  top: 0;
  font-size: 20px;
  line-height: 24px;
  color: #ff1857;
  font-weight: 600;
}

.contact_info .info_item h6 {
  font-size: 16px;
  line-height: 24px;
  color: "Roboto", sans-serif;
  font-weight: bold;
  margin-bottom: 0px;
  color: #222222;
}

.contact_info .info_item h6 a {
  color: #222222;
}

.contact_info .info_item p {
  font-size: 14px;
  line-height: 24px;
  padding: 2px 0px;
}

.contact_form .form-group {
  margin-bottom: 10px;
}

.contact_form .form-group .form-control {
  font-size: 13px;
  line-height: 26px;
  color: #999;
  border: 1px solid #eeeeee;
  font-family: "Roboto", sans-serif;
  border-radius: 0px;
  padding-left: 20px;
}

.contact_form .form-group .form-control:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: none;
}

.contact_form .form-group .form-control.placeholder {
  color: #999;
}

.contact_form .form-group .form-control:-moz-placeholder {
  color: #999;
}

.contact_form .form-group .form-control::-moz-placeholder {
  color: #999;
}

.contact_form .form-group .form-control::-webkit-input-placeholder {
  color: #999;
}

.contact_form .form-group textarea {
  resize: none;
}

.contact_form .form-group textarea.form-control {
  height: 140px;
}

.contact_form .submit_btn {
  margin-top: 20px;
  cursor: pointer;
}

/* Contact Success and error Area css
============================================================================================ */
.modal-message .modal-dialog {
  position: absolute;
  top: 36%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%) !important;
  -ms-transform: translateX(-50%) translateY(-50%) !important;
  transform: translateX(-50%) translateY(-50%) !important;
  margin: 0px;
  max-width: 500px;
  width: 100%;
}

.modal-message .modal-dialog .modal-content .modal-header {
  text-align: center;
  display: block;
  border-bottom: none;
  padding-top: 50px;
  padding-bottom: 50px;
}

.modal-message .modal-dialog .modal-content .modal-header .close {
  position: absolute;
  right: -15px;
  top: -15px;
  padding: 0px;
  color: #fff;
  opacity: 1;
  cursor: pointer;
}

.modal-message .modal-dialog .modal-content .modal-header h2 {
  display: block;
  text-align: center;
  color: #ff1857;
  padding-bottom: 10px;
  font-family: "Roboto", sans-serif;
}

.modal-message .modal-dialog .modal-content .modal-header p {
  display: block;
}

/* End Contact Success and error Area css
============================================================================================ */
/*---------------------------------------------------- */
/*----------------------------------------------------*/
/*============== Elements Area css ================*/
.mb-20 {
  margin-bottom: 20px;
}

.mb-30 {
  margin-bottom: 30px;
}

.sample-text-area {
  padding: 100px 0px;
}

.sample-text-area .title_color {
  margin-bottom: 30px;
}

.sample-text-area p {
  line-height: 26px;
}

.sample-text-area p b {
  font-weight: bold;
  color: #ff1857;
}

.sample-text-area p i {
  color: #ff1857;
  font-style: italic;
}

.sample-text-area p sup {
  color: #ff1857;
  font-style: italic;
}

.sample-text-area p sub {
  color: #ff1857;
  font-style: italic;
}

.sample-text-area p del {
  color: #ff1857;
}

.sample-text-area p u {
  color: #ff1857;
}

/*============== End Elements Area css ================*/
/*==============Elements Button Area css ================*/
.elements_button .title_color {
  margin-bottom: 30px;
  color: #222222;
}

.title_color {
  color: #222222;
}

.button-group-area {
  margin-top: 15px;
}

.button-group-area:nth-child(odd) {
  margin-top: 40px;
}

.button-group-area:first-child {
  margin-top: 0px;
}

.button-group-area .theme_btn {
  margin-right: 10px;
}

.button-group-area .white_btn {
  margin-right: 10px;
}

.button-group-area .link {
  text-decoration: underline;
  color: #222222;
  background: transparent;
}

.button-group-area .link:hover {
  color: #fff;
}

.button-group-area .disable {
  background: transparent;
  color: #007bff;
  cursor: not-allowed;
}

.button-group-area .disable:before {
  display: none;
}

.primary {
  background: #52c5fd;
}

.primary:before {
  background: #2faae6;
}

.success {
  background: #4cd3e3;
}

.success:before {
  background: #2ebccd;
}

.info {
  background: #38a4ff;
}

.info:before {
  background: #298cdf;
}

.warning {
  background: #f4e700;
}

.warning:before {
  background: #e1d608;
}

.danger {
  background: #f54940;
}

.danger:before {
  background: #e13b33;
}

.primary-border {
  background: transparent;
  border: 1px solid #52c5fd;
  color: #52c5fd;
}

.primary-border:before {
  background: #52c5fd;
}

.success-border {
  background: transparent;
  border: 1px solid #4cd3e3;
  color: #4cd3e3;
}

.success-border:before {
  background: #4cd3e3;
}

.info-border {
  background: transparent;
  border: 1px solid #38a4ff;
  color: #38a4ff;
}

.info-border:before {
  background: #38a4ff;
}

.warning-border {
  background: #fff;
  border: 1px solid #f4e700;
  color: #f4e700;
}

.warning-border:before {
  background: #f4e700;
}

.danger-border {
  background: transparent;
  border: 1px solid #f54940;
  color: #f54940;
}

.danger-border:before {
  background: #f54940;
}

.link-border {
  background: transparent;
  border: 1px solid #ff1857;
  color: #ff1857;
}

.link-border:before {
  background: #ff1857;
}

.radius {
  border-radius: 3px;
}

.circle {
  border-radius: 20px;
}

.arrow span {
  padding-left: 5px;
}

.e-large {
  line-height: 50px;
  padding-top: 0px;
  padding-bottom: 0px;
}

.large {
  line-height: 45px;
  padding-top: 0px;
  padding-bottom: 0px;
}

.medium {
  line-height: 30px;
  padding-top: 0px;
  padding-bottom: 0px;
}

.small {
  line-height: 25px;
  padding-top: 0px;
  padding-bottom: 0px;
}

.general {
  line-height: 38px;
  padding-top: 0px;
  padding-bottom: 0px;
}

/*==============End Elements Button Area css ================*/
/* =================================== */
/*  Elements Page Styles
/* =================================== */
/*---------- Start Elements Page -------------*/
.generic-banner {
  margin-top: 60px;
  text-align: center;
}

.generic-banner .height {
  height: 600px;
}

@media (max-width: 767.98px) {
  .generic-banner .height {
    height: 400px;
  }
}

.generic-banner .generic-banner-content h2 {
  line-height: 1.2em;
  margin-bottom: 20px;
}

@media (max-width: 991.98px) {
  .generic-banner .generic-banner-content h2 br {
    display: none;
  }
}

.generic-banner .generic-banner-content p {
  text-align: center;
  font-size: 16px;
}

@media (max-width: 991.98px) {
  .generic-banner .generic-banner-content p br {
    display: none;
  }
}

.generic-content h1 {
  font-weight: 600;
}

.about-generic-area {
  background: #fff;
}

.about-generic-area p {
  margin-bottom: 20px;
}

.white-bg {
  background: #fff;
}

.section-top-border {
  padding: 50px 0;
  border-top: 1px dotted #eee;
}

.switch-wrap {
  margin-bottom: 10px;
}

.switch-wrap p {
  margin: 0;
}

/*---------- End Elements Page -------------*/
.sample-text-area {
  padding: 100px 0 70px 0;
}

.sample-text {
  margin-bottom: 0;
}

.text-heading {
  margin-bottom: 30px;
  font-size: 24px;
}

.typo-list {
  margin-bottom: 10px;
}

@media (max-width: 767px) {
  .typo-sec {
    margin-bottom: 30px;
  }
}

@media (max-width: 767px) {
  .element-wrap {
    margin-top: 30px;
  }
}

b, sup, sub, u, del {
  color: #f8b600;
}

h1 {
  font-size: 36px;
}

h2 {
  font-size: 30px;
}

h3 {
  font-size: 24px;
}

h4 {
  font-size: 18px;
}

h5 {
  font-size: 16px;
}

h6 {
  font-size: 14px;
}

.typography h1, .typography h2, .typography h3, .typography h4, .typography h5, .typography h6 {
  color: #777777;
}

.button-area .border-top-generic {
  padding: 70px 15px;
  border-top: 1px dotted #eee;
}

.button-group-area .genric-btn {
  margin-right: 10px;
  margin-top: 10px;
}

.button-group-area .genric-btn:last-child {
  margin-right: 0;
}

.circle {
  border-radius: 20px;
}

.genric-btn {
  display: inline-block;
  outline: none;
  line-height: 40px;
  padding: 0 30px;
  font-size: .8em;
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.genric-btn:focus {
  outline: none;
}

.genric-btn.e-large {
  padding: 0 40px;
  line-height: 50px;
}

.genric-btn.large {
  line-height: 45px;
}

.genric-btn.medium {
  line-height: 30px;
}

.genric-btn.small {
  line-height: 25px;
}

.genric-btn.radius {
  border-radius: 3px;
}

.genric-btn.circle {
  border-radius: 20px;
}

.genric-btn.arrow {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.genric-btn.arrow span {
  margin-left: 10px;
}

.genric-btn.default {
  color: #222222;
  background: #f9f9ff;
  border: 1px solid transparent;
}

.genric-btn.default:hover {
  border: 1px solid #f9f9ff;
  background: #fff;
}

.genric-btn.default-border {
  border: 1px solid #f9f9ff;
  background: #fff;
}

.genric-btn.default-border:hover {
  color: #222222;
  background: #f9f9ff;
  border: 1px solid transparent;
}

.genric-btn.primary {
  color: #fff;
  background: #f8b600;
  border: 1px solid transparent;
}

.genric-btn.primary:hover {
  color: #f8b600;
  border: 1px solid #f8b600;
  background: #fff;
}

.genric-btn.primary-border {
  color: #f8b600;
  border: 1px solid #f8b600;
  background: #fff;
}

.genric-btn.primary-border:hover {
  color: #fff;
  background: #f8b600;
  border: 1px solid transparent;
}

.genric-btn.success {
  color: #fff;
  background: #4cd3e3;
  border: 1px solid transparent;
}

.genric-btn.success:hover {
  color: #4cd3e3;
  border: 1px solid #4cd3e3;
  background: #fff;
}

.genric-btn.success-border {
  color: #4cd3e3;
  border: 1px solid #4cd3e3;
  background: #fff;
}

.genric-btn.success-border:hover {
  color: #fff;
  background: #4cd3e3;
  border: 1px solid transparent;
}

.genric-btn.info {
  color: #fff;
  background: #38a4ff;
  border: 1px solid transparent;
}

.genric-btn.info:hover {
  color: #38a4ff;
  border: 1px solid #38a4ff;
  background: #fff;
}

.genric-btn.info-border {
  color: #38a4ff;
  border: 1px solid #38a4ff;
  background: #fff;
}

.genric-btn.info-border:hover {
  color: #fff;
  background: #38a4ff;
  border: 1px solid transparent;
}

.genric-btn.warning {
  color: #fff;
  background: #f4e700;
  border: 1px solid transparent;
}

.genric-btn.warning:hover {
  color: #f4e700;
  border: 1px solid #f4e700;
  background: #fff;
}

.genric-btn.warning-border {
  color: #f4e700;
  border: 1px solid #f4e700;
  background: #fff;
}

.genric-btn.warning-border:hover {
  color: #fff;
  background: #f4e700;
  border: 1px solid transparent;
}

.genric-btn.danger {
  color: #fff;
  background: #f44a40;
  border: 1px solid transparent;
}

.genric-btn.danger:hover {
  color: #f44a40;
  border: 1px solid #f44a40;
  background: #fff;
}

.genric-btn.danger-border {
  color: #f44a40;
  border: 1px solid #f44a40;
  background: #fff;
}

.genric-btn.danger-border:hover {
  color: #fff;
  background: #f44a40;
  border: 1px solid transparent;
}

.genric-btn.link {
  color: #222222;
  background: #f9f9ff;
  text-decoration: underline;
  border: 1px solid transparent;
}

.genric-btn.link:hover {
  color: #222222;
  border: 1px solid #f9f9ff;
  background: #fff;
}

.genric-btn.link-border {
  color: #222222;
  border: 1px solid #f9f9ff;
  background: #fff;
  text-decoration: underline;
}

.genric-btn.link-border:hover {
  color: #222222;
  background: #f9f9ff;
  border: 1px solid transparent;
}

.genric-btn.disable {
  color: #222222, 0.3;
  background: #f9f9ff;
  border: 1px solid transparent;
  cursor: not-allowed;
}

.generic-blockquote {
  padding: 30px 50px 30px 30px;
  background: #fff;
  border-left: 2px solid #f8b600;
}

@media (max-width: 991px) {
  .progress-table-wrap {
    overflow-x: scroll;
  }
}

.progress-table {
  background: #fff;
  padding: 15px 0px 30px 0px;
  min-width: 800px;
}

.progress-table .serial {
  width: 11.83%;
  padding-left: 30px;
}

.progress-table .country {
  width: 28.07%;
}

.progress-table .visit {
  width: 19.74%;
}

.progress-table .percentage {
  width: 40.36%;
  padding-right: 50px;
}

.progress-table .table-head {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.progress-table .table-head .serial, .progress-table .table-head .country, .progress-table .table-head .visit, .progress-table .table-head .percentage {
  color: #222222;
  line-height: 40px;
  text-transform: uppercase;
  font-weight: 500;
}

.progress-table .table-row {
  padding: 15px 0;
  border-top: 1px solid #edf3fd;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.progress-table .table-row .serial, .progress-table .table-row .country, .progress-table .table-row .visit, .progress-table .table-row .percentage {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.progress-table .table-row .country img {
  margin-right: 15px;
}

.progress-table .table-row .percentage .progress {
  width: 80%;
  border-radius: 0px;
  background: transparent;
}

.progress-table .table-row .percentage .progress .progress-bar {
  height: 5px;
  line-height: 5px;
}

.progress-table .table-row .percentage .progress .progress-bar.color-1 {
  background-color: #6382e6;
}

.progress-table .table-row .percentage .progress .progress-bar.color-2 {
  background-color: #e66686;
}

.progress-table .table-row .percentage .progress .progress-bar.color-3 {
  background-color: #f09359;
}

.progress-table .table-row .percentage .progress .progress-bar.color-4 {
  background-color: #73fbaf;
}

.progress-table .table-row .percentage .progress .progress-bar.color-5 {
  background-color: #73fbaf;
}

.progress-table .table-row .percentage .progress .progress-bar.color-6 {
  background-color: #6382e6;
}

.progress-table .table-row .percentage .progress .progress-bar.color-7 {
  background-color: #a367e7;
}

.progress-table .table-row .percentage .progress .progress-bar.color-8 {
  background-color: #e66686;
}

.single-gallery-image {
  margin-top: 30px;
  background-repeat: no-repeat !important;
  background-position: center center !important;
  background-size: cover !important;
  height: 200px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.single-gallery-image:hover {
  opacity: .8;
}

.list-style {
  width: 14px;
  height: 14px;
}

.unordered-list li {
  position: relative;
  padding-left: 30px;
  line-height: 1.82em !important;
}

.unordered-list li:before {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  border: 3px solid #f8b600;
  background: #fff;
  top: 4px;
  left: 0;
  border-radius: 50%;
}

.ordered-list {
  margin-left: 30px;
}

.ordered-list li {
  list-style-type: decimal-leading-zero;
  color: #f8b600;
  font-weight: 500;
  line-height: 1.82em !important;
}

.ordered-list li span {
  font-weight: 300;
  color: #777777;
}

.ordered-list-alpha li {
  margin-left: 30px;
  list-style-type: lower-alpha;
  color: #f8b600;
  font-weight: 500;
  line-height: 1.82em !important;
}

.ordered-list-alpha li span {
  font-weight: 300;
  color: #777777;
}

.ordered-list-roman li {
  margin-left: 30px;
  list-style-type: lower-roman;
  color: #f8b600;
  font-weight: 500;
  line-height: 1.82em !important;
}

.ordered-list-roman li span {
  font-weight: 300;
  color: #777777;
}

.single-input {
  display: block;
  width: 100%;
  line-height: 40px;
  border: none;
  outline: none;
  background: #f9f9ff;
  padding: 0 20px;
}

.single-input:focus {
  outline: none;
}

.input-group-icon {
  position: relative;
}

.input-group-icon .icon {
  position: absolute;
  left: 20px;
  top: 0;
  line-height: 40px;
  z-index: 3;
}

.input-group-icon .icon i {
  color: #797979;
}

.input-group-icon .single-input {
  padding-left: 45px;
}

.single-textarea {
  display: block;
  width: 100%;
  line-height: 40px;
  border: none;
  outline: none;
  background: #f9f9ff;
  padding: 0 20px;
  height: 100px;
  resize: none;
}

.single-textarea:focus {
  outline: none;
}

.single-input-primary {
  display: block;
  width: 100%;
  line-height: 40px;
  border: 1px solid transparent;
  outline: none;
  background: #f9f9ff;
  padding: 0 20px;
}

.single-input-primary:focus {
  outline: none;
  border: 1px solid #f8b600;
}

.single-input-accent {
  display: block;
  width: 100%;
  line-height: 40px;
  border: 1px solid transparent;
  outline: none;
  background: #f9f9ff;
  padding: 0 20px;
}

.single-input-accent:focus {
  outline: none;
  border: 1px solid #eb6b55;
}

.single-input-secondary {
  display: block;
  width: 100%;
  line-height: 40px;
  border: 1px solid transparent;
  outline: none;
  background: #f9f9ff;
  padding: 0 20px;
}

.single-input-secondary:focus {
  outline: none;
  border: 1px solid #f09359;
}

.default-switch {
  width: 35px;
  height: 17px;
  border-radius: 8.5px;
  background: #fff;
  position: relative;
  cursor: pointer;
}

.default-switch input {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.default-switch input + label {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #f8b600;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
  -webkit-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.default-switch input:checked + label {
  left: 19px;
}

.single-element-widget {
  margin-bottom: 30px;
}

.primary-switch {
  width: 35px;
  height: 17px;
  border-radius: 8.5px;
  background: #fff;
  position: relative;
  cursor: pointer;
}

.primary-switch input {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.primary-switch input + label {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.primary-switch input + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  border-radius: 8.5px;
  cursor: pointer;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
}

.primary-switch input + label:after {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #fff;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
  -webkit-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.primary-switch input:checked + label:after {
  left: 19px;
}

.primary-switch input:checked + label:before {
  background: #f8b600;
}

.confirm-switch {
  width: 35px;
  height: 17px;
  border-radius: 8.5px;
  background: #fff;
  position: relative;
  cursor: pointer;
}

.confirm-switch input {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.confirm-switch input + label {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.confirm-switch input + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  border-radius: 8.5px;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
  cursor: pointer;
}

.confirm-switch input + label:after {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #fff;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
  -webkit-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.confirm-switch input:checked + label:after {
  left: 19px;
}

.confirm-switch input:checked + label:before {
  background: #4cd3e3;
}

.primary-checkbox {
  width: 16px;
  height: 16px;
  border-radius: 3px;
  background: #fff;
  position: relative;
  cursor: pointer;
}

.primary-checkbox input {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.primary-checkbox input + label {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid #f1f1f1;
}

.single-defination h4 {
  color: #222222;
}

.primary-checkbox input:checked + label {
  background: url(../img/elements/primary-check.png) no-repeat center center/cover;
  border: none;
}

.confirm-checkbox {
  width: 16px;
  height: 16px;
  border-radius: 3px;
  background: #fff;
  position: relative;
  cursor: pointer;
}

.confirm-checkbox input {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.confirm-checkbox input + label {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid #f1f1f1;
}

.confirm-checkbox input:checked + label {
  background: url(../img/elements/success-check.png) no-repeat center center/cover;
  border: none;
}

.disabled-checkbox {
  width: 16px;
  height: 16px;
  border-radius: 3px;
  background: #fff;
  position: relative;
  cursor: pointer;
}

.disabled-checkbox input {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.disabled-checkbox input + label {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid #f1f1f1;
}

.disabled-checkbox input:disabled {
  cursor: not-allowed;
  z-index: 3;
}

.disabled-checkbox input:checked + label {
  background: url(../img/elements/disabled-check.png) no-repeat center center/cover;
  border: none;
}

.primary-radio {
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background: #fff;
  position: relative;
  cursor: pointer;
}

.primary-radio input {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.primary-radio input + label {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #f1f1f1;
}

.primary-radio input:checked + label {
  background: url(../img/elements/primary-radio.png) no-repeat center center/cover;
  border: none;
}

.confirm-radio {
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background: #fff;
  position: relative;
  cursor: pointer;
}

.confirm-radio input {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.confirm-radio input + label {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #f1f1f1;
}

.confirm-radio input:checked + label {
  background: url(../img/elements/success-radio.png) no-repeat center center/cover;
  border: none;
}

.disabled-radio {
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background: #fff;
  position: relative;
  cursor: pointer;
}

.disabled-radio input {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.disabled-radio input + label {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #f1f1f1;
}

.disabled-radio input:disabled {
  cursor: not-allowed;
  z-index: 3;
}

.unordered-list {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

.ordered-list {
  list-style: none;
  padding: 0px;
}

.disabled-radio input:checked + label {
  background: url(../img/elements/disabled-radio.png) no-repeat center center/cover;
  border: none;
}

.default-select {
  height: 40px;
}

.default-select .nice-select {
  border: none;
  border-radius: 0px;
  height: 40px;
  background: #fff;
  padding-left: 20px;
  padding-right: 40px;
}

.default-select .nice-select .list {
  margin-top: 0;
  border: none;
  border-radius: 0px;
  -webkit-box-shadow: none;
  box-shadow: none;
  width: 100%;
  padding: 10px 0 10px 0px;
}

.default-select .nice-select .list .option {
  font-weight: 300;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  line-height: 28px;
  min-height: 28px;
  font-size: 12px;
  padding-left: 20px;
}

.default-select .nice-select .list .option.selected {
  color: #f8b600;
  background: transparent;
}

.default-select .nice-select .list .option:hover {
  color: #f8b600;
  background: transparent;
}

.default-select .current {
  margin-right: 50px;
  font-weight: 300;
}

.default-select .nice-select::after {
  right: 20px;
}

@media (max-width: 991px) {
  .left-align-p p {
    margin-top: 20px;
  }
}

.form-select {
  height: 40px;
  width: 100%;
}

.form-select .nice-select {
  border: none;
  border-radius: 0px;
  height: 40px;
  background: #f9f9ff !important;
  padding-left: 45px;
  padding-right: 40px;
  width: 100%;
}

.form-select .nice-select .list {
  margin-top: 0;
  border: none;
  border-radius: 0px;
  -webkit-box-shadow: none;
  box-shadow: none;
  width: 100%;
  padding: 10px 0 10px 0px;
}

.mt-10 {
  margin-top: 10px;
}

.form-select .nice-select .list .option {
  font-weight: 300;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  line-height: 28px;
  min-height: 28px;
  font-size: 12px;
  padding-left: 45px;
}

.form-select .nice-select .list .option.selected {
  color: #f8b600;
  background: transparent;
}

.form-select .nice-select .list .option:hover {
  color: #f8b600;
  background: transparent;
}

.form-select .current {
  margin-right: 50px;
  font-weight: 300;
}

.form-select .nice-select::after {
  right: 20px;
}

/*---------------------------------------------------- */
/*----------------------------------------------------*/
/* Main Button Area css
============================================================================================ */
.main_btn {
  display: inline-block;
  background: #ff1857;
  padding: 0px 50px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 48px;
  border-radius: 0px;
  outline: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  text-align: center;
  border: 1px solid #ff1857;
  cursor: pointer;
  -webkit-transition: all 300ms linear 0s;
  -o-transition: all 300ms linear 0s;
  transition: all 300ms linear 0s;
}

.main_btn:hover {
  background: transparent;
  color: #ff1857;
}

.main_btn2 {
  display: inline-block;
  background: #ff1857;
  padding: 0px 32px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 38px;
  border-radius: 0px;
  outline: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  text-align: center;
  border: 1px solid #ff1857;
  cursor: pointer;
  -webkit-transition: all 300ms linear 0s;
  -o-transition: all 300ms linear 0s;
  transition: all 300ms linear 0s;
}

.main_btn2:hover {
  background: transparent;
  color: #ff1857;
}

.submit_btn {
  width: auto;
  display: inline-block;
  background: #ff1857;
  padding: 0px 50px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 50px;
  border-radius: 0px;
  outline: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  text-align: center;
  border: 1px solid #ff1857;
  cursor: pointer;
  -webkit-transition: all 300ms linear 0s;
  -o-transition: all 300ms linear 0s;
  transition: all 300ms linear 0s;
}

.submit_btn:hover {
  background: transparent;
  color: #ff1857;
}

.white_bg_btn {
  display: inline-block;
  background: #f9f9ff;
  padding: 0px 35px;
  color: #222222;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 34px;
  border-radius: 0px;
  outline: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  text-align: center;
  border: 1px solid #eeeeee;
  cursor: pointer;
  -webkit-transition: all 300ms linear 0s;
  -o-transition: all 300ms linear 0s;
  transition: all 300ms linear 0s;
}

.white_bg_btn:hover {
  background: #ff1857;
  color: #fff;
  border-color: #ff1857;
}

.gad_btn {
  background: #ff1857;
  color: #fff;
  display: inline-block;
  padding: 0px 20px;
  line-height: 30px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
}

/* End Main Button Area css
============================================================================================ */
/*---------------------------------------------------- */
/*----------------------------------------------------*/
/* choice Area css
============================================================================================ */
.choice_inner {
  margin-bottom: -30px;
}

.choice_item {
  margin-bottom: 30px;
}

.choice_item .choice_text {
  margin-top: 20px;
}

.choice_item .choice_text h4 {
  font-size: 18px;
  line-height: 27px;
  color: #222222;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  margin-bottom: 15px;
  -webkit-transition: all 300ms linear 0s;
  -o-transition: all 300ms linear 0s;
  transition: all 300ms linear 0s;
}

.choice_item .choice_text h4:hover {
  color: #ff1857;
}

.choice_item .choice_text p {
  margin-bottom: 0px;
}

.choice_text {
  margin-top: 20px;
}

.choice_text h4 {
  font-size: 18px;
  line-height: 27px;
  color: #222222;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  margin-bottom: 15px;
  -webkit-transition: all 300ms linear 0s;
  -o-transition: all 300ms linear 0s;
  transition: all 300ms linear 0s;
}

.choice_text h4:hover {
  color: #ff1857;
}

.choice_text p {
  margin-bottom: 0px;
}

.small .choice_text h4 {
  font-size: 14px;
  line-height: 24px;
}

.date {
  margin-bottom: 15px;
}

.date .gad_btn {
  color: #fff;
}

.date a {
  color: #777777;
  font-size: 12px;
  font-family: "Open Sans", sans-serif;
  margin-right: 15px;
}

.date a i {
  padding-right: 8px;
}

.date a:last-child {
  margin-right: 0px;
}

/* End choice Area css
============================================================================================ */
/* Latest News Area css
============================================================================================ */
.latest_news .media {
  margin-bottom: 30px;
}

.latest_news .media .d-flex {
  padding-right: 30px;
}

.latest_news .media:last-child {
  margin-bottom: 0px;
}

.wedding_megazin {
  margin-bottom: -30px;
}

/* End Latest News Area css
============================================================================================ */
/* Megazin Sidebar Area css
============================================================================================ */
.r_widgets {
  margin-bottom: 40px;
}

.r_widgets:last-child {
  margin-bottom: 0px;
}

.news_widgets .news_slider .choice_item {
  margin-bottom: 0px;
}

.news_widgets .news_slider .choice_item .choice_text .date {
  margin-bottom: 0px;
}

.news_widgets .news_slider .choice_item .choice_text h4 {
  font-size: 14px;
  line-height: 24px;
}

.news_widgets .news_slider .owl-dots {
  text-align: center;
  margin-top: 35px;
}

.news_widgets .news_slider .owl-dots .owl-dot {
  height: 14px;
  width: 14px;
  background: #f9f9ff;
  display: inline-block;
  margin-right: 10px;
}

.news_widgets .news_slider .owl-dots .owl-dot:last-child {
  margin-right: 0px;
}

.news_widgets .news_slider .owl-dots .owl-dot.active {
  background: #ff1857;
}

.social_widgets .list li {
  margin-bottom: 10px;
}

.social_widgets .list li:last-child {
  margin-bottom: 0px;
}

.social_widgets .list li a {
  overflow: hidden;
  border: 1px solid #eeeeee;
  display: block;
  padding: 5px;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #222222;
}

.social_widgets .list li a i {
  height: 24px;
  width: 24px;
  background: #4f63a0;
  color: #fff;
  text-align: center;
  line-height: 24px;
  font-size: 12px;
  margin-right: 20px;
  position: relative;
}

.social_widgets .list li a i:after {
  content: "";
  height: 16px;
  width: 1px;
  background: #eeeeee;
  position: absolute;
  right: -12px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.social_widgets .list li a i.fa-twitter {
  background: #6fc9ff;
}

.social_widgets .list li a i.fa-youtube-play {
  background: #c30512;
}

.social_widgets .list li a i.fa-vimeo {
  background: #5aa4eb;
}

.social_widgets .list li a i.fa-pinterest {
  background: #c2141f;
}

.social_widgets .list li a i.fa-rss {
  background: #ef7100;
}

.social_widgets .list li a span {
  float: right;
  position: relative;
}

.social_widgets .list li a span:after {
  content: "";
  height: 16px;
  width: 1px;
  background: #eeeeee;
  position: absolute;
  left: -12px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.newsleter_widgets {
  text-align: center;
}

.newsleter_widgets .nsl_inner {
  border: 1px solid #eeeeee;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 30px;
  border-top: 3px solid #ff1857;
}

.newsleter_widgets .nsl_inner i {
  width: 60px;
  height: 60px;
  background: #ff1857;
  color: #fff;
  line-height: 60px;
  font-size: 24px;
  margin-bottom: 30px;
}

.newsleter_widgets .nsl_inner h4 {
  color: #222222;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 15px;
}

.newsleter_widgets .form-group {
  margin-bottom: 0px;
}

.newsleter_widgets .input-group-prepend {
  margin-right: -1px;
}

.newsleter_widgets .input-group-text {
  background: #fff;
  border-radius: 0px;
  vertical-align: top;
  font-size: 12px;
  line-height: 36px;
  padding: 0px 0px 0px 15px;
  border: 1px solid #eeeeee;
  border-right: 0px;
}

.newsleter_widgets .form-control {
  font-size: 12px;
  line-height: 24px;
  color: #000000;
  border: 1px solid #cccccc;
  border-radius: 0px;
}

.newsleter_widgets .form-control.placeholder {
  color: #000000;
}

.newsleter_widgets .form-control:-moz-placeholder {
  color: #000000;
}

.newsleter_widgets .form-control::-moz-placeholder {
  color: #000000;
}

.newsleter_widgets .form-control::-webkit-input-placeholder {
  color: #000000;
}

.newsleter_widgets .form-control:focus {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.newsleter_widgets .bbtns {
  background: #ff1857;
  color: #fff;
  font-size: 12px;
  line-height: 38px;
  display: inline-block;
  font-weight: 500;
  padding: 0px 24px 0px 24px;
  border-radius: 0;
}

.newsleter_widgets .text-bottom {
  font-size: 12px;
}

/* End Megazin Sidebar Area css
============================================================================================ */
/* Product List Area css
============================================================================================ */
.product_list .media {
  margin-bottom: 25px;
}

.product_list .media:last-child {
  margin-bottom: 0px;
}

.product_list .media .d-flex {
  padding-right: 20px;
}

.product_list .media .media-body .choice_text {
  margin-top: 0px;
}

.product_list .media .media-body .choice_text h4 {
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 10px;
}

.product_list .media .media-body .choice_text .date {
  margin-bottom: 0px;
}

.product_list .media .media-body .choice_text .date a {
  margin: 0px;
}

.product_list .media .media-body .choice_text .date a:last-child {
  float: right;
}

/* End Product List Area css
============================================================================================ */
/*---------------------------------------------------- */
/*----------------------------------------------------*/
/*============== footer-area css ===============*/
.footer-area {
  background: #04091e;
  padding-top: 100px;
}

.ab_widgets img {
  margin-bottom: 25px;
}

.f_title {
  background: #161a29;
  border-left: 3px solid #ff1857;
  margin-bottom: 30px;
}

.f_title h3 {
  padding-left: 15px;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #fff;
  line-height: 40px;
}

.f_widgets_inner {
  padding-bottom: 100px;
}

.m_news_widgets .m_news .media {
  margin-bottom: 25px;
}

.m_news_widgets .m_news .media .d-flex {
  padding-right: 20px;
}

.m_news_widgets .m_news .media .media-body h4 {
  color: #fff;
  font-size: 14px;
  line-height: 22px;
  -webkit-transition: all 300ms linear 0s;
  -o-transition: all 300ms linear 0s;
  transition: all 300ms linear 0s;
}

.m_news_widgets .m_news .media .media-body h4:hover {
  color: #ff1857;
}

.m_news_widgets .m_news .media .media-body .date {
  margin-bottom: 0px;
}

.m_news_widgets .m_news .media .media-body .date a {
  margin: 0px;
}

.m_news_widgets .m_news .media .media-body .date a:last-child {
  float: right;
}

.m_news_widgets .m_news .media:last-child {
  margin-bottom: 0px;
}

.single-footer-widget p {
  margin-bottom: 0px;
  color: #777777;
  max-width: 325px;
}

.single-footer-widget ul li {
  margin-bottom: 12px;
}

.single-footer-widget ul li a {
  line-height: 25px;
  display: inline-block;
  color: #777;
  -webkit-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

.single-footer-widget ul li a:hover {
  color: #ff1857;
}

.single-footer-widget ul li:last-child {
  margin-bottom: 0px;
}

.single-footer-widget .instafeed {
  margin-left: -5px;
  margin-right: -5px;
}

.single-footer-widget .instafeed li {
  margin: 5px;
}

.single-footer-widget .subscribe_form {
  padding-top: 25px;
}

.single-footer-widget .input-group {
  display: block !important;
}

.single-footer-widget input {
  width: 100%;
  border: 1px solid #333333;
  font-size: 13px;
  line-height: 30px;
  padding-right: 40px;
  height: 40px;
  color: #999999;
  background: transparent;
  padding-left: 20px;
}

.single-footer-widget input.placeholder {
  color: #999999;
}

.single-footer-widget input:-moz-placeholder {
  color: #999999;
}

.single-footer-widget input::-moz-placeholder {
  color: #999999;
}

.single-footer-widget input::-webkit-input-placeholder {
  color: #999999;
}

.single-footer-widget input:focus {
  outline: none;
}

.single-footer-widget .sub-btn {
  background: #ff1857;
  color: #fff;
  font-weight: 300;
  border-radius: 0;
  line-height: 34px;
  padding: 4px 11px 0px;
  cursor: pointer;
  position: absolute;
  right: 0px;
  top: 0px;
}

.single-footer-widget .sub-btn span {
  position: relative;
  top: -1px;
}

.footer_title {
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 28px;
}

.border_line {
  width: 100%;
  height: 1px;
  background: #333333;
  margin-top: 30px;
}

.f_boder {
  border-top: 1px solid #333333;
}

.footer-bottom .footer-text {
  margin-bottom: 0px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.footer-bottom .footer-text i {
  color: #ff1857;
}

.footer-bottom .footer-text a {
  color: #ff1857;
}

.footer-bottom .footer-social {
  text-align: right;
}

.footer-bottom .footer-social a {
  font-size: 12px;
  line-height: 30px;
  color: #82848f;
  margin-left: 7px;
  -webkit-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
  height: 30px;
  width: 30px;
  border: 1px solid #555555;
  display: inline-block;
  text-align: center;
}

.footer-bottom .footer-social a:hover {
  color: #fff;
  background: #4f63a0;
  border-color: #4f63a0;
}

.footer-bottom .footer-social a:nth-child(2):hover {
  background: #6fc9ff;
  border-color: #6fc9ff;
}

.footer-bottom .footer-social a:nth-child(3):hover {
  background: #ff1857;
  border-color: #ff1857;
}

.footer-bottom .footer-social a:nth-child(4):hover {
  background: #c2141f;
  border-color: #c2141f;
}

.footer-bottom .footer-social a:nth-child(5):hover {
  background: #ef7100;
  border-color: #ef7100;
}

.f_social_wd p {
  font-size: 14px;
  color: #777777;
  margin-bottom: 15px;
}

.f_social_wd .f_social a {
  font-size: 14px;
  color: #cccccc;
  -webkit-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
  margin-right: 20px;
}

.f_social_wd .f_social a:hover {
  color: #ff1857;
}

.f_social_wd .f_social a:last-child {
  margin-right: 0px;
}

/*---------------------------------------------------- */
