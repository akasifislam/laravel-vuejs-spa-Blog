"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_public_blog_BlogSingle_vue"],{

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
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'BlogSidebar',
  computed: {
    categories: function categories() {
      return this.$store.getters.getCategories;
    }
  },
  created: function created() {
    // this.$Progress.start();
    this.$store.dispatch("loadCategories"); // this.$Progress.finish();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/public/blog/BlogSingle.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/public/blog/BlogSingle.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  name: "BlogSingle",
  components: {
    BlogSidebar: _BlogSidebar_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  computed: {
    singlepost: function singlepost() {
      return this.$store.getters.singlepost;
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('getPostById', this.$route.params.id);
  }
});

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

/***/ "./resources/js/components/public/blog/BlogSingle.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/public/blog/BlogSingle.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BlogSingle_vue_vue_type_template_id_a32509c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogSingle.vue?vue&type=template&id=a32509c8& */ "./resources/js/components/public/blog/BlogSingle.vue?vue&type=template&id=a32509c8&");
/* harmony import */ var _BlogSingle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogSingle.vue?vue&type=script&lang=js& */ "./resources/js/components/public/blog/BlogSingle.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _BlogSingle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _BlogSingle_vue_vue_type_template_id_a32509c8___WEBPACK_IMPORTED_MODULE_0__.render,
  _BlogSingle_vue_vue_type_template_id_a32509c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/blog/BlogSingle.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./resources/js/components/public/blog/BlogSingle.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/public/blog/BlogSingle.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogSingle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BlogSingle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/public/blog/BlogSingle.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogSingle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/components/public/blog/BlogSingle.vue?vue&type=template&id=a32509c8&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/public/blog/BlogSingle.vue?vue&type=template&id=a32509c8& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogSingle_vue_vue_type_template_id_a32509c8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogSingle_vue_vue_type_template_id_a32509c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogSingle_vue_vue_type_template_id_a32509c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BlogSingle.vue?vue&type=template&id=a32509c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/public/blog/BlogSingle.vue?vue&type=template&id=a32509c8&");


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
  return _c("span", { attrs: { id: "blogsidebar" } }, [
    _c("div", { staticClass: "blog_sidebar_widget" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "widget_list widget_categories" }, [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "ul",
          _vm._l(_vm.categories, function(category) {
            return _c("li", { key: category }, [
              _c("a", { attrs: { href: "#" } }, [
                _vm._v(" " + _vm._s(category.cat_name) + " ")
              ])
            ])
          }),
          0
        )
      ]),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _vm._m(4)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "widget_list widget_search" }, [
      _c("div", { staticClass: "widget_title" }, [
        _c("h3", [_vm._v("Search")])
      ]),
      _vm._v(" "),
      _c("form", { attrs: { action: "#" } }, [
        _c("input", { attrs: { placeholder: "Search...", type: "text" } }),
        _vm._v(" "),
        _c("button", { attrs: { type: "submit" } }, [_vm._v("search")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "widget_title" }, [
      _c("h3", [_vm._v("Categories")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "widget_list comments" }, [
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
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "widget_list widget_post" }, [
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
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "widget_list widget_tag" }, [
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/public/blog/BlogSingle.vue?vue&type=template&id=a32509c8&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/public/blog/BlogSingle.vue?vue&type=template&id=a32509c8& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("span", { attrs: { id: "blogsidebar" } }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "blog_details" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-9 col-md-12" }, [
            _c("div", { staticClass: "blog_wrapper blog_wrapper_details" }, [
              _c("article", { staticClass: "single_blog" }, [
                _c("figure", [
                  _c("div", { staticClass: "post_header" }, [
                    _c("h3", { staticClass: "post_title" }, [
                      _vm._v(
                        " " +
                          _vm._s(_vm.singlepost.title) +
                          " " +
                          _vm._s(this.$route.params.id) +
                          " "
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "blog_meta" }, [
                      _c("p", [
                        _vm._v("Posted by : "),
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v(_vm._s(_vm.singlepost.user.name))
                        ]),
                        _vm._v(" / On : "),
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v(
                            " A" +
                              _vm._s(
                                _vm._f("timeformat")(_vm.singlepost.created_at)
                              ) +
                              " "
                          )
                        ]),
                        _vm._v(" / In : "),
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v("Company, Image, Travel")
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.singlepost.photo
                    ? _c("div", { staticClass: "blog_thumb" }, [
                        _c("a", { attrs: { href: "#" } }, [
                          _c("img", {
                            attrs: { src: _vm.singlepost.photo, alt: "" }
                          })
                        ])
                      ])
                    : _c("div", { staticClass: "blog_thumb" }, [_vm._m(1)]),
                  _vm._v(" "),
                  _c("figcaption", { staticClass: "blog_content" }, [
                    _c("div", { staticClass: "post_content" }, [
                      _c("p", [
                        _vm._v("  " + _vm._s(_vm.singlepost.description) + " ")
                      ]),
                      _vm._v(" "),
                      _vm._m(2)
                    ]),
                    _vm._v(" "),
                    _vm._m(3)
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm._m(4),
              _vm._v(" "),
              _vm._m(5),
              _vm._v(" "),
              _vm._m(6)
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
    ])
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
                _c("li", [_vm._v("blog details")])
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
    return _c("a", { attrs: { href: "#" } }, [
      _c("img", {
        attrs: {
          src:
            "https://cpworldgroup.com/wp-content/uploads/2021/01/placeholder.png",
          alt: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("blockquote", [
      _c("p", [
        _vm._v(
          "Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur. In venenatis elit ac ultrices convallis. Duis est nisi, tincidunt ac urna sed, cursus blandit lectus. In ullamcorper sit amet ligula ut eleifend. Proin dictum tempor ligula, ac feugiat metus. Sed finibus tortor eu scelerisque scelerisque."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "entry_content" }, [
      _c("div", { staticClass: "post_meta" }, [
        _c("span", [_vm._v("Tags: ")]),
        _vm._v(" "),
        _c("span", [_c("a", { attrs: { href: "#" } }, [_vm._v(", fashion")])]),
        _vm._v(" "),
        _c("span", [_c("a", { attrs: { href: "#" } }, [_vm._v(", t-shirt")])]),
        _vm._v(" "),
        _c("span", [_c("a", { attrs: { href: "#" } }, [_vm._v(", white")])])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "social_sharing" }, [
        _c("p", [_vm._v("share this post:")]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _c("a", { attrs: { href: "#", title: "facebook" } }, [
              _c("i", { staticClass: "fa fa-facebook" })
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#", title: "twitter" } }, [
              _c("i", { staticClass: "fa fa-twitter" })
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#", title: "pinterest" } }, [
              _c("i", { staticClass: "fa fa-pinterest" })
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#", title: "google+" } }, [
              _c("i", { staticClass: "fa fa-google-plus" })
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#", title: "linkedin" } }, [
              _c("i", { staticClass: "fa fa-linkedin" })
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
    return _c("div", { staticClass: "related_posts" }, [
      _c("h3", [_vm._v("Related posts")]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-4 col-md-4 col-sm-6" }, [
          _c("article", { staticClass: "single_related" }, [
            _c("figure", [
              _c("div", { staticClass: "related_thumb" }, [
                _c("a", { attrs: { href: "blog-details.html" } }, [
                  _c("img", {
                    attrs: {
                      src:
                        "https://cpworldgroup.com/wp-content/uploads/2021/01/placeholder.png",
                      alt: ""
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("figcaption", { staticClass: "related_content" }, [
                _c("h4", [
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v("Post with Gallery")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "blog_meta" }, [
                  _c("span", { staticClass: "author" }, [
                    _vm._v("By : "),
                    _c("a", { attrs: { href: "#" } }, [_vm._v("admin")]),
                    _vm._v(" / ")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "meta_date" }, [
                    _vm._v(" April 11, 2019\t")
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-4 col-md-4 col-sm-6" }, [
          _c("article", { staticClass: "single_related" }, [
            _c("figure", [
              _c("div", { staticClass: "related_thumb" }, [
                _c("a", { attrs: { href: "blog-details.html" } }, [
                  _c("img", {
                    attrs: {
                      src:
                        "https://cpworldgroup.com/wp-content/uploads/2021/01/placeholder.png",
                      alt: ""
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("figcaption", { staticClass: "related_content" }, [
                _c("h4", [
                  _c("a", { attrs: { href: "#" } }, [_vm._v("Post with Audio")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "blog_meta" }, [
                  _c("span", { staticClass: "author" }, [
                    _vm._v("By : "),
                    _c("a", { attrs: { href: "#" } }, [_vm._v("admin")]),
                    _vm._v(" / ")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "meta_date" }, [
                    _vm._v(" April 11, 2019\t")
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-4 col-md-4 col-sm-6" }, [
          _c("article", { staticClass: "single_related" }, [
            _c("figure", [
              _c("div", { staticClass: "related_thumb" }, [
                _c("a", { attrs: { href: "blog-details.html" } }, [
                  _c("img", {
                    attrs: {
                      src:
                        "https://cpworldgroup.com/wp-content/uploads/2021/01/placeholder.png",
                      alt: ""
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("figcaption", { staticClass: "related_content" }, [
                _c("h4", [
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v("Maecenas ultricies")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "blog_meta" }, [
                  _c("span", { staticClass: "author" }, [
                    _vm._v("By : "),
                    _c("a", { attrs: { href: "#" } }, [_vm._v("admin")]),
                    _vm._v(" / ")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "meta_date" }, [
                    _vm._v(" April 11, 2019\t")
                  ])
                ])
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
    return _c("div", { staticClass: "comments_box" }, [
      _c("h3", [_vm._v("3 Comments\t")]),
      _vm._v(" "),
      _c("div", { staticClass: "comment_list" }, [
        _c("div", { staticClass: "comment_thumb" }, [
          _c("img", {
            attrs: {
              src:
                "https://cpworldgroup.com/wp-content/uploads/2021/01/placeholder.png",
              height: "50",
              width: "50",
              alt: ""
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "comment_content" }, [
          _c("div", { staticClass: "comment_meta" }, [
            _c("h5", [_c("a", { attrs: { href: "#" } }, [_vm._v("Admin")])]),
            _vm._v(" "),
            _c("span", [_vm._v("October 16, 2018 at 1:38 am")])
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "But I must explain to you how all this mistaken idea of denouncing pleasure"
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "comment_reply" }, [
            _c("a", { attrs: { href: "#" } }, [_vm._v("Reply")])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "comment_list list_two" }, [
        _c("div", { staticClass: "comment_thumb" }, [
          _c("img", {
            attrs: {
              src:
                "https://cpworldgroup.com/wp-content/uploads/2021/01/placeholder.png",
              height: "50",
              width: "50",
              alt: ""
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "comment_content" }, [
          _c("div", { staticClass: "comment_meta" }, [
            _c("h5", [_c("a", { attrs: { href: "#" } }, [_vm._v("Demo")])]),
            _vm._v(" "),
            _c("span", [_vm._v("October 16, 2018 at 1:38 am")])
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur"
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "comment_reply" }, [
            _c("a", { attrs: { href: "#" } }, [_vm._v("Reply")])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "comment_list" }, [
        _c("div", { staticClass: "comment_thumb" }, [
          _c("img", {
            attrs: {
              src:
                "https://cpworldgroup.com/wp-content/uploads/2021/01/placeholder.png",
              height: "50",
              width: "50",
              alt: ""
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "comment_content" }, [
          _c("div", { staticClass: "comment_meta" }, [
            _c("h5", [_c("a", { attrs: { href: "#" } }, [_vm._v("Admin")])]),
            _vm._v(" "),
            _c("span", [_vm._v("October 16, 2018 at 1:38 am")])
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Quisque orci nibh, porta vitae sagittis sit amet, vehicula vel mauris. Aenean at"
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "comment_reply" }, [
            _c("a", { attrs: { href: "#" } }, [_vm._v("Reply")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "comments_form" }, [
      _c("h3", [_vm._v("Leave a Reply ")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Your email address will not be published. Required fields are marked *"
        )
      ]),
      _vm._v(" "),
      _c("form", { attrs: { action: "#" } }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("label", { attrs: { for: "review_comment" } }, [
              _vm._v("Comment ")
            ]),
            _vm._v(" "),
            _c("textarea", { attrs: { name: "comment", id: "review_comment" } })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 col-md-4" }, [
            _c("label", { attrs: { for: "author" } }, [_vm._v("Name")]),
            _vm._v(" "),
            _c("input", { attrs: { id: "author", type: "text" } })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 col-md-4" }, [
            _c("label", { attrs: { for: "email" } }, [_vm._v("Email ")]),
            _vm._v(" "),
            _c("input", { attrs: { id: "email", type: "text" } })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 col-md-4" }, [
            _c("label", { attrs: { for: "website" } }, [_vm._v("Website ")]),
            _vm._v(" "),
            _c("input", { attrs: { id: "website", type: "text" } })
          ])
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "button", attrs: { type: "submit" } }, [
          _vm._v("Post Comment")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);