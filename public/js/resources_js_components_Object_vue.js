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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['current_flow', 'resource', 'update_chart', 'statuses', 'user', 'loading'],
  data: function data() {
    return {
      show_graph: false,
      show_status: false,
      first_load: true
    };
  },
  components: {
    chart: _TargetChart__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    toggleStatuses: function toggleStatuses() {
      this.show_status = !this.show_status;
    }
  },
  computed: {
    isComunication: function isComunication() {
      return this.statuses.reduce(function (a, b) {
        return a || b;
      }, false);
    }
  },
  watch: {
    loading: function loading() {
      this.first_load = false;
    }
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
  props: ['update_chart', 'resource_id'],
  watch: {
    'update_chart.data.graphData': {
      handler: function handler(newVal) {
        var _this = this;

        this.$nextTick(function () {
          _this.$refs.chart.updateOptions({
            series: [{
              name: "Iskopano",
              data: _this.getSeries(newVal[_this.resource_id])
            }]
          });
        });
      },
      immediate: true,
      deep: true
    },
    'update_chart.data.panelFlows': {
      handler: function handler(newVal) {
        var _this2 = this;

        var total = 0;

        if (newVal && newVal[this.resource_id]) {
          console.log(newVal[this.resource_id]);
          newVal[this.resource_id].map(function (flow) {
            console.log(flow);
            total += flow.total_flow;
          });
        }

        this.$nextTick(function () {
          _this2.$refs.chart.updateOptions({
            title: {
              text: "Iskopano od 07:00 : ".concat(total.toFixed(1), " m3"),
              style: {
                color: 'rgba(255, 255, 255, 0.7)'
              }
            }
          });
        });
      },
      immediate: true,
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
        colors: ['#00a651'],
        chart: {
          type: 'bar'
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
        }
      }
    };
  },
  computed: {
    series: function series() {
      return [{
        name: "Iskopano",
        data: this.getSeries()
      }];
    },
    barHeight: function barHeight() {
      if (screen.height < 864) {
        return 'auto';
      }

      var i = 20;

      if (screen.height >= 1050) {
        i = 30;
      }

      return "".concat(screen.height / 5 - i, "px");
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
        class: _vm.isComunication ? "bg-success" : "bg-danger",
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "pt-2" },
        [
          _c("div", { staticClass: "d-flex px-3" }, [
            _c(
              "span",
              {
                staticClass: "status-indicator",
                class: _vm.isComunication
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
              staticClass: "ms-2 mt-2 text-nowrap",
              domProps: { textContent: _vm._s(_vm.resource.name) },
            }),
            _vm._v(" "),
            _c("div", { staticClass: "ms-2 mt-1" }, [
              _c(
                "a",
                {
                  staticClass: "text-info bg-green-lt",
                  attrs: { href: "#", "aria-label": "Prikaži Detalje" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.$emit("show_details", {
                        station: _vm.resource.id,
                      })
                    },
                  },
                },
                [
                  _c(
                    "svg",
                    {
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
                      _c("line", {
                        attrs: { x1: "12", y1: "8", x2: "12.01", y2: "8" },
                      }),
                      _vm._v(" "),
                      _c("rect", {
                        attrs: {
                          x: "4",
                          y: "4",
                          width: "16",
                          height: "16",
                          rx: "2",
                        },
                      }),
                      _vm._v(" "),
                      _c("polyline", {
                        attrs: { points: "11 12 12 12 12 16 13 16" },
                      }),
                    ]
                  ),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ms-auto mt-2" }, [
              _c(
                "a",
                {
                  staticClass: "btn w-100",
                  attrs: { href: "#" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
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
                    "\n                        Detaljnije\n                    "
                  ),
                ]
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("chart", {
            attrs: {
              update_chart: _vm.update_chart,
              resource_id: _vm.resource.id,
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "card-footer pt-1 pb-1",
          class: { "bg-red-lt": !_vm.isComunication },
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "d-flex align-items-center" }, [
            _c(
              "div",
              {
                staticClass: "col-auto",
                class: {
                  "spinner-border text-success":
                    _vm.isComunication && _vm.statuses[7],
                  "text-success": _vm.isComunication && !_vm.statuses[7],
                  "text-danger": !_vm.isComunication,
                },
              },
              [
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
                      attrs: {
                        stroke: "none",
                        d: "M0 0h24v24H0z",
                        fill: "none",
                      },
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
              ]
            ),
            _vm._v(" "),
            _c("div", {
              staticClass: "h1 mb-0 ms-3 col",
              domProps: { textContent: _vm._s(_vm.current_flow + " m3") },
            }),
            _vm._v(" "),
            _vm.loading
              ? _c("div", { staticClass: "me-auto text-green spinner-border" })
              : _vm._e(),
            _vm._v(" "),
            !_vm.loading && _vm.isComunication
              ? _c("div", { staticClass: "me-auto" }, [
                  _c(
                    "a",
                    {
                      staticClass: "d-inline-flex align-items-center lh-1",
                      class: _vm.isComunication
                        ? "text-success"
                        : "text-danger",
                      attrs: { href: "#" },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.toggleStatuses.apply(null, arguments)
                        },
                      },
                    },
                    [
                      _vm.user && _vm.user.is_admin
                        ? _c(
                            "svg",
                            {
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
                                attrs: { points: "7 7 12 12 17 7" },
                              }),
                              _vm._v(" "),
                              _c("polyline", {
                                attrs: { points: "7 13 12 18 17 13" },
                              }),
                            ]
                          )
                        : _vm._e(),
                    ]
                  ),
                ])
              : _vm._e(),
            _vm._v(" "),
            !_vm.loading && !_vm.first_load && !_vm.isComunication
              ? _c("div", { staticClass: "me-auto" }, [
                  _c(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-hidden": "true",
                        role: "img",
                        width: "24",
                        height: "24",
                        preserveAspectRatio: "xMidYMid meet",
                        viewBox: "0 0 36 36",
                      },
                    },
                    [
                      _c("circle", {
                        staticClass: "clr-i-solid clr-i-solid-path-1",
                        attrs: {
                          cx: "18",
                          cy: "29.54",
                          r: "3",
                          fill: "currentColor",
                        },
                      }),
                      _vm._v(" "),
                      _c("path", {
                        staticClass: "clr-i-solid clr-i-solid-path-2",
                        attrs: {
                          fill: "currentColor",
                          d: "m29.18 17.71l.11-.17a1.51 1.51 0 0 0-.47-2.1A20.57 20.57 0 0 0 18 12.37c-.56 0-1.11 0-1.65.07l3.21 3.21a17.41 17.41 0 0 1 7.6 2.52a1.49 1.49 0 0 0 2.02-.46Z",
                        },
                      }),
                      _vm._v(" "),
                      _c("path", {
                        staticClass: "clr-i-solid clr-i-solid-path-3",
                        attrs: {
                          fill: "currentColor",
                          d: "M32.76 9.38a27.9 27.9 0 0 0-22.58-3.11l2.63 2.63a24.68 24.68 0 0 1 18.29 3.22a1.49 1.49 0 0 0 2-.46l.11-.17a1.51 1.51 0 0 0-.45-2.11Z",
                        },
                      }),
                      _vm._v(" "),
                      _c("path", {
                        staticClass: "clr-i-solid clr-i-solid-path-4",
                        attrs: {
                          fill: "currentColor",
                          d: "m3 4.75l3.1 3.1a27.28 27.28 0 0 0-2.92 1.57a1.51 1.51 0 0 0-.48 2.11l.11.17a1.49 1.49 0 0 0 2 .46a24.69 24.69 0 0 1 3.67-1.9l3.14 3.14a20.63 20.63 0 0 0-4.53 2.09a1.51 1.51 0 0 0-.46 2.1l.11.17a1.49 1.49 0 0 0 2 .46A17.46 17.46 0 0 1 14.25 16l3.6 3.6a13.39 13.39 0 0 0-6.79 1.93a1.5 1.5 0 0 0-.46 2.09l.1.16a1.52 1.52 0 0 0 2.06.44a10.2 10.2 0 0 1 9-.7L29 30.75l1.41-1.41l-26-26Z",
                        },
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: { fill: "none", d: "M0 0h36v36H0z" },
                      }),
                    ]
                  ),
                ])
              : _vm._e(),
          ]),
        ]
      ),
      _vm._v(" "),
      _vm.show_status
        ? _c("div", { staticClass: "row m-0" }, [
            _c("div", {
              staticClass: "col text-center border",
              class: { "bg-success-lt border-success": _vm.statuses[6] },
              domProps: {
                textContent: _vm._s(_vm.statuses[6] ? "24VDC OK" : "24VDC"),
              },
            }),
            _vm._v(" "),
            _c("div", {
              staticClass: "col text-center border",
              class: { "bg-success-lt border-success": _vm.statuses[7] },
              domProps: {
                textContent: _vm._s(_vm.statuses[7] ? "Radi" : "Ne radi"),
              },
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col text-center border",
                class: { "bg-success-lt border-success": _vm.statuses[5] },
              },
              [_vm._v("Kalibracija")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "w-100" }),
            _vm._v(" "),
            _c("div", {
              staticClass: "col text-center border",
              class: { "bg-success-lt border-success": _vm.statuses[4] },
              domProps: {
                textContent: _vm._s(_vm.statuses[4] ? "UPS 24V OK" : "UPS 24V"),
              },
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col text-center border",
                class: { "bg-danger-lt border-danger": _vm.statuses[3] },
              },
              [_vm._v("Ups Alarm")]
            ),
            _vm._v(" "),
            _c("div", {
              staticClass: "col text-center border",
              class: { "bg-success-lt border-success": _vm.statuses[2] },
              domProps: {
                textContent: _vm._s(_vm.statuses[2] ? "UPS Bat OK" : "UPS Bat"),
              },
            }),
          ])
        : _vm._e(),
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
    { staticClass: "bar-container" },
    [
      _c("apexchart", {
        ref: "chart",
        attrs: {
          options: _vm.chartOptions,
          series: _vm.series,
          height: _vm.barHeight,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);