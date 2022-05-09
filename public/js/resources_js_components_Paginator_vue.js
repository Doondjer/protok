"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Paginator_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Paginator.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Paginator.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['dataSet', 'form', 'is_simple'],
  computed: {
    links: function links() {
      return this.dataSet.links;
    },
    isPagination: function isPagination() {
      return this.dataSet.per_page < this.dataSet.total;
    },
    isSimple: function isSimple() {
      return this.is_simple;
    }
  },
  methods: {
    changePage: function changePage(url) {
      url = new URL(url);
      this.form.page = new URLSearchParams(url.search).get('page');
      this.$emit('page_changed');
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Paginator.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Paginator.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Paginator_vue_vue_type_template_id_59656db6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Paginator.vue?vue&type=template&id=59656db6& */ "./resources/js/components/Paginator.vue?vue&type=template&id=59656db6&");
/* harmony import */ var _Paginator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paginator.vue?vue&type=script&lang=js& */ "./resources/js/components/Paginator.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Paginator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Paginator_vue_vue_type_template_id_59656db6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Paginator_vue_vue_type_template_id_59656db6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Paginator.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Paginator.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Paginator.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Paginator.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Paginator.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Paginator.vue?vue&type=template&id=59656db6&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Paginator.vue?vue&type=template&id=59656db6& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginator_vue_vue_type_template_id_59656db6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginator_vue_vue_type_template_id_59656db6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginator_vue_vue_type_template_id_59656db6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Paginator.vue?vue&type=template&id=59656db6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Paginator.vue?vue&type=template&id=59656db6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Paginator.vue?vue&type=template&id=59656db6&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Paginator.vue?vue&type=template&id=59656db6& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card-footer d-flex align-items-center" }, [
    _c("p", { staticClass: "m-0 text-muted" }, [
      _vm._v("Prikazano "),
      _c("span", { domProps: { textContent: _vm._s(_vm.dataSet.from) } }),
      _vm._v(" do "),
      _c("span", { domProps: { textContent: _vm._s(_vm.dataSet.to) } }),
      _vm._v(" od "),
      _c("span", { domProps: { textContent: _vm._s(_vm.dataSet.total) } }),
      _vm._v(" stavki"),
    ]),
    _vm._v(" "),
    _vm.isPagination
      ? _c(
          "ul",
          { staticClass: "pagination m-0 ms-auto" },
          _vm._l(_vm.links, function (link, index) {
            return index === _vm.links.length - 1 ||
              index === 0 ||
              !_vm.isSimple
              ? _c(
                  "li",
                  {
                    staticClass: "page-item",
                    class: { active: link.active, disabled: !link.url },
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "page-link",
                        attrs: {
                          href: "#",
                          tabindex: "-1",
                          "aria-disabled": link.url ? "false" : "true",
                        },
                        on: {
                          click: function ($event) {
                            $event.preventDefault()
                            return _vm.changePage(link.url)
                          },
                        },
                      },
                      [
                        index === 0
                          ? _c(
                              "svg",
                              {
                                staticClass: "icon",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  "stroke-width": "2",
                                  stroke: "currentColor",
                                  fill: "none",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                },
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    stroke: "none",
                                    d: "M0 0h24v24H0z",
                                    fill: "none",
                                  },
                                }),
                                _vm._v(" "),
                                _c("polyline", {
                                  attrs: { points: "15 6 9 12 15 18" },
                                }),
                              ]
                            )
                          : index === _vm.links.length - 1
                          ? _c(
                              "svg",
                              {
                                staticClass: "icon",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  "stroke-width": "2",
                                  stroke: "currentColor",
                                  fill: "none",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                },
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    stroke: "none",
                                    d: "M0 0h24v24H0z",
                                    fill: "none",
                                  },
                                }),
                                _vm._v(" "),
                                _c("polyline", {
                                  attrs: { points: "9 6 15 12 9 18" },
                                }),
                              ]
                            )
                          : _c("span", {
                              domProps: { textContent: _vm._s(link.label) },
                            }),
                      ]
                    ),
                  ]
                )
              : _vm._e()
          }),
          0
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);