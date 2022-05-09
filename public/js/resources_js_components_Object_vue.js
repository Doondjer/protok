"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Object_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Object.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Object.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TargetChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TargetChart */ "./resources/js/components/TargetChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['total_flow', 'current_flow', 'resource', 'graph_data', 'update_chart'],
  data: function data() {
    return {
      show_graph: false
    };
  },
  components: {
    chart: _TargetChart__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TargetChart.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TargetChart.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['graph_data', 'graph_title', 'update_chart', 'resource_id'],
  watch: {
    'update_chart.data.graphData': {
      handler: function handler(newVal) {
        if (newVal && newVal[this.resource_id]) {
          this.$refs.chart.updateOptions({
            series: [{
              name: "Iskopano",
              data: this.getSeries(newVal[this.resource_id])
            }]
          });
        }
      },
      deep: true
    }
  },
  data: function data() {
    return {
      defaultShifts: [{
        x: 'I Smena',
        y: 0
      }, {
        x: 'II Smena',
        y: 0
      }, {
        x: 'III Smena',
        y: 0
      }],
      chartOptions: {
        chart: {
          type: 'bar' //   height: 100

        },
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10,
            columnWidth: '65%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function formatter(val) {
            return val + "m3";
          }
        },
        tooltip: {
          y: {
            formatter: function formatter(val) {
              return val + " m3";
            }
          }
        },
        title: {
          text: this.graph_title
        }
      }
    };
  },
  computed: {
    series: function series() {
      return [{
        name: "Iskopano",
        data: this.getSeries(this.graph_data)
      }];
    }
  },
  components: {
    apexchart: (vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default())
  },
  methods: {
    getSeries: function getSeries(graph_data) {
      var data = [];

      if (graph_data && graph_data !== 'undefined') {
        var that = this;
        console.log(graph_data);
        graph_data.map(function (value, key) {
          data.push({
            x: that.defaultShifts[value.shift - 1].x,
            y: value.shift_flow ? value.shift_flow : 0
          });
        });
      } else {
        data = this.defaultShifts;
      }

      return data;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Object.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Object.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Object_vue_vue_type_template_id_8bd2cc2c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Object.vue?vue&type=template&id=8bd2cc2c& */ "./resources/js/components/Object.vue?vue&type=template&id=8bd2cc2c&");
/* harmony import */ var _Object_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Object.vue?vue&type=script&lang=js& */ "./resources/js/components/Object.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Object_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Object_vue_vue_type_template_id_8bd2cc2c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Object_vue_vue_type_template_id_8bd2cc2c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Object.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/TargetChart.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/TargetChart.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TargetChart_vue_vue_type_template_id_69d0d59c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TargetChart.vue?vue&type=template&id=69d0d59c& */ "./resources/js/components/TargetChart.vue?vue&type=template&id=69d0d59c&");
/* harmony import */ var _TargetChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TargetChart.vue?vue&type=script&lang=js& */ "./resources/js/components/TargetChart.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TargetChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TargetChart_vue_vue_type_template_id_69d0d59c___WEBPACK_IMPORTED_MODULE_0__.render,
  _TargetChart_vue_vue_type_template_id_69d0d59c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TargetChart.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Object.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Object.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Object_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Object.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Object.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Object_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TargetChart.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/TargetChart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TargetChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TargetChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TargetChart.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TargetChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Object.vue?vue&type=template&id=8bd2cc2c&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Object.vue?vue&type=template&id=8bd2cc2c& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Object_vue_vue_type_template_id_8bd2cc2c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Object_vue_vue_type_template_id_8bd2cc2c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Object_vue_vue_type_template_id_8bd2cc2c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Object.vue?vue&type=template&id=8bd2cc2c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Object.vue?vue&type=template&id=8bd2cc2c&");


/***/ }),

/***/ "./resources/js/components/TargetChart.vue?vue&type=template&id=69d0d59c&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/TargetChart.vue?vue&type=template&id=69d0d59c& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TargetChart_vue_vue_type_template_id_69d0d59c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TargetChart_vue_vue_type_template_id_69d0d59c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TargetChart_vue_vue_type_template_id_69d0d59c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TargetChart.vue?vue&type=template&id=69d0d59c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TargetChart.vue?vue&type=template&id=69d0d59c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Object.vue?vue&type=template&id=8bd2cc2c&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Object.vue?vue&type=template&id=8bd2cc2c& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "col-sm-12 col-md-6 col-lg-4" }, [
    _c("div", { staticClass: "card", attrs: { title: _vm.resource.name } }, [
      _c("div", {
        staticClass: "card-status-top",
        class: _vm.current_flow ? "bg-success" : "bg-danger",
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body px-0 pb-0" },
        [
          _c("div", { staticClass: "d-flex px-3" }, [
            _c(
              "span",
              {
                staticClass: "status-indicator",
                class: _vm.current_flow
                  ? "status-green status-indicator-animated"
                  : "status-red",
              },
              [
                _c("span", { staticClass: "status-indicator-circle" }),
                _vm._v(" "),
                _c("span", { staticClass: "status-indicator-circle" }),
                _vm._v(" "),
                _c("span", { staticClass: "status-indicator-circle" }),
              ]
            ),
            _vm._v(" "),
            _c("h3", {
              staticClass: "card-title ms-2 mt-2",
              domProps: { textContent: _vm._s(_vm.resource.name) },
            }),
            _vm._v(" "),
            _c("div", { staticClass: "dropdown ms-2 mt-1" }, [
              _c(
                "span",
                {
                  staticClass: "text-info ",
                  attrs: {
                    "data-bs-toggle": "dropdown",
                    tabindex: "-1",
                    "aria-label": "Prikaži Detalje",
                    "aria-expanded": "false",
                  },
                },
                [
                  _c(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        "aria-hidden": "true",
                        role: "img",
                        width: "27",
                        height: "27",
                        preserveAspectRatio: "xMidYMid meet",
                        viewBox: "0 0 1024 1024",
                      },
                    },
                    [
                      _c("path", {
                        attrs: {
                          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 0 0-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9c12.9-18.6 30.9-32.8 52.1-40.9c34-13.1 56-41.6 56-72.7c0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z",
                          fill: "currentColor",
                        },
                      }),
                    ]
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card",
                },
                [
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "card-header" }, [
                      _c("div", {
                        staticClass: "card-title",
                        domProps: {
                          textContent: _vm._s(
                            "Detalji o Bageru " + _vm.resource.name
                          ),
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c(
                        "div",
                        {
                          staticClass: "mb-2",
                          staticStyle: { "white-space": "nowrap" },
                        },
                        [
                          _c(
                            "svg",
                            {
                              staticClass: "icon me-2 text-muted",
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
                              _c("circle", {
                                attrs: { cx: "12", cy: "11", r: "3" },
                              }),
                              _c("path", {
                                attrs: {
                                  d: "M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z",
                                },
                              }),
                            ]
                          ),
                          _vm._v(
                            "\n                                        Lokacija:\n                                        "
                          ),
                          _c("strong", [
                            _c("span", { staticClass: "flag flag-country-si" }),
                            _vm._v(
                              "\n                                            " +
                                _vm._s(_vm.resource.excavation_field) +
                                "\n                                        "
                            ),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "mb-2",
                          staticStyle: { "white-space": "nowrap" },
                        },
                        [
                          _c(
                            "svg",
                            {
                              staticClass:
                                "icon icon-tabler icon-tabler-currency-ripple",
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
                              _c("circle", {
                                attrs: { cx: "7", cy: "12", r: "3" },
                              }),
                              _vm._v(" "),
                              _c("circle", {
                                attrs: { cx: "17", cy: "7", r: "3" },
                              }),
                              _vm._v(" "),
                              _c("circle", {
                                attrs: { cx: "17", cy: "17", r: "3" },
                              }),
                              _vm._v(" "),
                              _c("path", { attrs: { d: "M10 12h3l2 -2.5" } }),
                              _vm._v(" "),
                              _c("path", { attrs: { d: "M15 14.5l-2 -2.5" } }),
                            ]
                          ),
                          _vm._v(
                            "\n                                        Teroijski Kapacitet: "
                          ),
                          _c("strong", {
                            domProps: {
                              textContent: _vm._s(
                                _vm.resource.max_capacity + " m3"
                              ),
                            },
                          }),
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "svg",
                          {
                            staticClass:
                              "icon icon-tabler icon-tabler-file-description",
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
                            _c("desc", [
                              _vm._v(
                                "Download more icon variants from https://tabler-icons.io/i/file-description"
                              ),
                            ]),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                stroke: "none",
                                d: "M0 0h24v24H0z",
                                fill: "none",
                              },
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: { d: "M14 3v4a1 1 0 0 0 1 1h4" },
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",
                              },
                            }),
                            _vm._v(" "),
                            _c("path", { attrs: { d: "M9 17h6" } }),
                            _vm._v(" "),
                            _c("path", { attrs: { d: "M9 13h6" } }),
                          ]
                        ),
                        _vm._v(
                          "\n                                        O Bageru: "
                        ),
                        _c("p", {
                          domProps: {
                            textContent: _vm._s(_vm.resource.in_short),
                          },
                        }),
                      ]),
                    ]),
                  ]),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ms-auto" }, [
              _c(
                "a",
                {
                  staticClass: "btn btn-outline-dark w-100",
                  attrs: {
                    href: "#",
                    download: "tabler-icon-device-analytics.svg",
                  },
                  on: {
                    click: function ($event) {
                      return _vm.$emit("show_graph", {
                        station: _vm.resource.id,
                      })
                    },
                  },
                },
                [
                  _c(
                    "svg",
                    {
                      staticClass:
                        "icon icon-tabler icon-tabler-device-analytics",
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
                      _c("desc", [
                        _vm._v(
                          "Download more icon variants from https://tabler-icons.io/i/device-analytics"
                        ),
                      ]),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          stroke: "none",
                          d: "M0 0h24v24H0z",
                          fill: "none",
                        },
                      }),
                      _vm._v(" "),
                      _c("rect", {
                        attrs: {
                          x: "3",
                          y: "4",
                          width: "18",
                          height: "12",
                          rx: "1",
                        },
                      }),
                      _vm._v(" "),
                      _c("line", {
                        attrs: { x1: "7", y1: "20", x2: "17", y2: "20" },
                      }),
                      _vm._v(" "),
                      _c("line", {
                        attrs: { x1: "9", y1: "16", x2: "9", y2: "20" },
                      }),
                      _vm._v(" "),
                      _c("line", {
                        attrs: { x1: "15", y1: "16", x2: "15", y2: "20" },
                      }),
                      _vm._v(" "),
                      _c("path", { attrs: { d: "M8 12l3 -3l2 2l3 -3" } }),
                    ]
                  ),
                  _vm._v(
                    "\n                            Detaljnije\n                        "
                  ),
                ]
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("chart", {
            attrs: {
              graph_data: _vm.graph_data,
              graph_title: "Iskopano od 07:00 : " + _vm.total_flow + " m3",
              update_chart: _vm.update_chart,
              resource_id: _vm.resource.id,
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex align-items-center" }, [
          _c("div", { staticClass: "col-auto" }, [
            _c(
              "svg",
              {
                staticClass: "icon icon-tabler icon-tabler-currency-ripple",
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
                  attrs: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
                }),
                _vm._v(" "),
                _c("circle", { attrs: { cx: "7", cy: "12", r: "3" } }),
                _vm._v(" "),
                _c("circle", { attrs: { cx: "17", cy: "7", r: "3" } }),
                _vm._v(" "),
                _c("circle", { attrs: { cx: "17", cy: "17", r: "3" } }),
                _vm._v(" "),
                _c("path", { attrs: { d: "M10 12h3l2 -2.5" } }),
                _vm._v(" "),
                _c("path", { attrs: { d: "M15 14.5l-2 -2.5" } }),
              ]
            ),
          ]),
          _vm._v(" "),
          _c("div", {
            staticClass: "h1 mb-0 ms-3 col",
            domProps: { textContent: _vm._s(_vm.current_flow + " m3") },
          }),
          _vm._v(" "),
          _c("div", { staticClass: "me-auto" }),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex align-items-center" }, [
      _c("div", { staticClass: "subheader" }, [_vm._v("Trenutni Protok")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TargetChart.vue?vue&type=template&id=69d0d59c&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TargetChart.vue?vue&type=template&id=69d0d59c& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("apexchart", {
        ref: "chart",
        attrs: { options: _vm.chartOptions, series: _vm.series },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);