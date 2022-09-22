"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_public_blog_BlogPost_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/public/blog/BlogPost.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/public/blog/BlogPost.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BlogSidebar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogSidebar.vue */ "./resources/js/components/public/blog/BlogSidebar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'BlogPage',
  components: {
    BlogSidebar: _BlogSidebar_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  computed: {
    blogposts: function blogposts() {
      return this.$store.getters.getBlogPosts;
    }
  },
  created: function created() {
    // this.$Progress.start();
    this.$store.dispatch("loadBlogPosts"); // this.$Progress.finish();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/public/blog/BlogSidebar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/public/blog/BlogSidebar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./resources/js/components/public/blog/BlogPost.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/public/blog/BlogPost.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BlogPost_vue_vue_type_template_id_62c6fb18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogPost.vue?vue&type=template&id=62c6fb18& */ "./resources/js/components/public/blog/BlogPost.vue?vue&type=template&id=62c6fb18&");
/* harmony import */ var _BlogPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogPost.vue?vue&type=script&lang=js& */ "./resources/js/components/public/blog/BlogPost.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _BlogPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _BlogPost_vue_vue_type_template_id_62c6fb18___WEBPACK_IMPORTED_MODULE_0__.render,
  _BlogPost_vue_vue_type_template_id_62c6fb18___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/blog/BlogPost.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/blog/BlogSidebar.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/public/blog/BlogSidebar.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BlogSidebar_vue_vue_type_template_id_709f0f38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogSidebar.vue?vue&type=template&id=709f0f38& */ "./resources/js/components/public/blog/BlogSidebar.vue?vue&type=template&id=709f0f38&");
/* harmony import */ var _BlogSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogSidebar.vue?vue&type=script&lang=js& */ "./resources/js/components/public/blog/BlogSidebar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _BlogSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _BlogSidebar_vue_vue_type_template_id_709f0f38___WEBPACK_IMPORTED_MODULE_0__.render,
  _BlogSidebar_vue_vue_type_template_id_709f0f38___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/blog/BlogSidebar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/blog/BlogPost.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/public/blog/BlogPost.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BlogPost.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/public/blog/BlogPost.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/public/blog/BlogSidebar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/public/blog/BlogSidebar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BlogSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/public/blog/BlogSidebar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/public/blog/BlogPost.vue?vue&type=template&id=62c6fb18&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/public/blog/BlogPost.vue?vue&type=template&id=62c6fb18& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPost_vue_vue_type_template_id_62c6fb18___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPost_vue_vue_type_template_id_62c6fb18___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPost_vue_vue_type_template_id_62c6fb18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BlogPost.vue?vue&type=template&id=62c6fb18& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/public/blog/BlogPost.vue?vue&type=template&id=62c6fb18&");


/***/ }),

/***/ "./resources/js/components/public/blog/BlogSidebar.vue?vue&type=template&id=709f0f38&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/public/blog/BlogSidebar.vue?vue&type=template&id=709f0f38& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogSidebar_vue_vue_type_template_id_709f0f38___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogSidebar_vue_vue_type_template_id_709f0f38___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogSidebar_vue_vue_type_template_id_709f0f38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BlogSidebar.vue?vue&type=template&id=709f0f38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/public/blog/BlogSidebar.vue?vue&type=template&id=709f0f38&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/public/blog/BlogPost.vue?vue&type=template&id=62c6fb18&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/public/blog/BlogPost.vue?vue&type=template&id=62c6fb18& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {}, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "blog_page_section mt-70" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-9 col-md-12" }, [
            _c("div", { staticClass: "blog_wrapper" }, [
              _c(
                "div",
                { staticClass: "row" },
                _vm._l(_vm.blogposts, function(post) {
                  return _c(
                    "div",
                    { key: post, staticClass: "col-lg-4 col-md-4 col-sm-6" },
                    [_vm._m(1, true)]
                  )
                }),
                0
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-lg-3 col-md-12" },
            [_c("BlogSidebar")],
            1
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(2)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "breadcrumbs_area" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "breadcrumb_content" }, [
              _c("h3", [_vm._v("Blog")]),
              _vm._v(" "),
              _c("ul", [
                _c("li", [
                  _c("a", { attrs: { href: "index.html" } }, [_vm._v("home")])
                ]),
                _vm._v(" "),
                _c("li", [_vm._v("blog")])
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("article", { staticClass: "single_blog" }, [
      _c("figure", [
        _c("div", { staticClass: "blog_thumb" }, [
          _c("a", { attrs: { href: "blog-details.html" } }, [
            _c("img", {
              attrs: {
                src:
                  "https://media.istockphoto.com/photos/creativity-checked-picture-id855341578?k=20&m=855341578&s=612x612&w=0&h=M6NSGhMlT-q5agtumeFpMUyFRdTMpnXHYFrIFQ-uK94=",
                alt: ""
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("figcaption", { staticClass: "blog_content" }, [
          _c("h4", { staticClass: "post_title" }, [
            _c("a", { attrs: { href: "blog-details.html" } }, [
              _vm._v(
                "Lorem ipsum dolor sit amet,  elit. Impedit, aliquam animi, saepe ex."
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "articles_date" }, [
            _c("p", [
              _vm._v("23/06/2021 | "),
              _c("a", { attrs: { href: "#" } }, [_vm._v("eCommerce")])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "blog_pagination" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "pagination" }, [
              _c("ul", [
                _c("li", { staticClass: "current" }, [_vm._v("1")]),
                _vm._v(" "),
                _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("2")])]),
                _vm._v(" "),
                _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("3")])]),
                _vm._v(" "),
                _c("li", { staticClass: "next" }, [
                  _c("a", { attrs: { href: "#" } }, [_vm._v("next")])
                ]),
                _vm._v(" "),
                _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v(">>")])])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/public/blog/BlogSidebar.vue?vue&type=template&id=709f0f38&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/public/blog/BlogSidebar.vue?vue&type=template&id=709f0f38& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { attrs: { id: "blogsidebar" } }, [
      _c("div", { staticClass: "blog_sidebar_widget" }, [
        _c("div", { staticClass: "widget_list widget_search" }, [
          _c("div", { staticClass: "widget_title" }, [
            _c("h3", [_vm._v("Search")])
          ]),
          _vm._v(" "),
          _c("form", { attrs: { action: "#" } }, [
            _c("input", { attrs: { placeholder: "Search...", type: "text" } }),
            _vm._v(" "),
            _c("button", { attrs: { type: "submit" } }, [_vm._v("search")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "widget_list comments" }, [
          _c("div", { staticClass: "widget_title" }, [
            _c("h3", [_vm._v("Recent Comments")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "post_wrapper" }, [
            _c("div", { staticClass: "post_thumb" }, [
              _c("a", { attrs: { href: "blog-details.html" } }, [
                _c("img", {
                  attrs: {
                    src:
                      "https://cdn.pixabay.com/photo/2021/01/29/14/41/wardrobe-5961193__340.jpg",
                    alt: ""
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "post_info" }, [
              _c("span", [
                _c("a", { attrs: { href: "#" } }, [_vm._v("demo")]),
                _vm._v(" says:")
              ]),
              _vm._v(" "),
              _c("a", { attrs: { href: "blog-details.html" } }, [
                _vm._v("Quisque semper nunc")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "post_wrapper" }, [
            _c("div", { staticClass: "post_thumb" }, [
              _c("a", { attrs: { href: "blog-details.html" } }, [
                _c("img", {
                  attrs: {
                    src:
                      "https://cdn.pixabay.com/photo/2021/01/29/14/41/wardrobe-5961193__340.jpg",
                    alt: ""
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "post_info" }, [
              _c("span", [
                _c("a", { attrs: { href: "#" } }, [_vm._v("admin")]),
                _vm._v(" says:")
              ]),
              _vm._v(" "),
              _c("a", { attrs: { href: "blog-details.html" } }, [
                _vm._v("Quisque orci porta...")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "post_wrapper" }, [
            _c("div", { staticClass: "post_thumb" }, [
              _c("a", { attrs: { href: "blog-details.html" } }, [
                _c("img", {
                  attrs: {
                    src:
                      "https://cdn.pixabay.com/photo/2021/01/29/14/41/wardrobe-5961193__340.jpg",
                    alt: ""
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "post_info" }, [
              _c("span", [
                _c("a", { attrs: { href: "#" } }, [_vm._v("demo")]),
                _vm._v(" says:")
              ]),
              _vm._v(" "),
              _c("a", { attrs: { href: "blog-details.html" } }, [
                _vm._v("Quisque semper nunc")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "widget_list widget_post" }, [
          _c("div", { staticClass: "widget_title" }, [
            _c("h3", [_vm._v("Recent Posts")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "post_wrapper" }, [
            _c("div", { staticClass: "post_thumb" }, [
              _c("a", { attrs: { href: "blog-details.html" } }, [
                _c("img", {
                  attrs: {
                    src:
                      "https://cdn.pixabay.com/photo/2021/01/29/14/41/wardrobe-5961193__340.jpg",
                    alt: ""
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "post_info" }, [
              _c("h4", [
                _c("a", { attrs: { href: "blog-details.html" } }, [
                  _vm._v("Blog image post")
                ])
              ]),
              _vm._v(" "),
              _c("span", [_vm._v("March 16, 2018 ")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "post_wrapper" }, [
            _c("div", { staticClass: "post_thumb" }, [
              _c("a", { attrs: { href: "blog-details.html" } }, [
                _c("img", {
                  attrs: {
                    src:
                      "https://cdn.pixabay.com/photo/2021/01/29/14/41/wardrobe-5961193__340.jpg",
                    alt: ""
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "post_info" }, [
              _c("h4", [
                _c("a", { attrs: { href: "blog-details.html" } }, [
                  _vm._v("Post with Gallery")
                ])
              ]),
              _vm._v(" "),
              _c("span", [_vm._v("March 16, 2018 ")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "post_wrapper" }, [
            _c("div", { staticClass: "post_thumb" }, [
              _c("a", { attrs: { href: "blog-details.html" } }, [
                _c("img", {
                  attrs: {
                    src:
                      "https://cdn.pixabay.com/photo/2021/01/29/14/41/wardrobe-5961193__340.jpg",
                    alt: ""
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "post_info" }, [
              _c("h4", [
                _c("a", { attrs: { href: "blog-details.html" } }, [
                  _vm._v("Post with Audio")
                ])
              ]),
              _vm._v(" "),
              _c("span", [_vm._v("March 16, 2018 ")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "widget_list widget_categories" }, [
          _c("div", { staticClass: "widget_title" }, [
            _c("h3", [_vm._v("Categories")])
          ]),
          _vm._v(" "),
          _c("ul", [
            _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Audio")])]),
            _vm._v(" "),
            _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Company")])]),
            _vm._v(" "),
            _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Gallery")])]),
            _vm._v(" "),
            _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Image")])]),
            _vm._v(" "),
            _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Other")])]),
            _vm._v(" "),
            _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Travel")])])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "widget_list widget_tag" }, [
          _c("div", { staticClass: "widget_title" }, [
            _c("h3", [_vm._v("Tag products")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tag_widget" }, [
            _c("ul", [
              _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("asian")])]),
              _vm._v(" "),
              _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("brown")])]),
              _vm._v(" "),
              _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("euro")])])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);