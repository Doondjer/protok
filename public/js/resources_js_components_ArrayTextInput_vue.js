"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_ArrayTextInput_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ArrayTextInput.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ArrayTextInput.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    old_values: {
      type: Array,
      required: false
    },
    values: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    errors: {
      type: Object,
      required: false
    }
  },
  data: function data() {
    return {
      input_values: this.values
    };
  },
  computed: {
    main_error: function main_error() {
      console.log(this.errors['array'].hasOwnProperty(name));
      console.log(this.errors);
      return this.errors;
    }
  },
  methods: {
    addInput: function addInput() {
      this.input_values.push('');
    },
    removeInput: function removeInput(i) {
      this.input_values.splice(i, 1);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/ArrayTextInput.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/ArrayTextInput.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ArrayTextInput_vue_vue_type_template_id_7438416f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrayTextInput.vue?vue&type=template&id=7438416f& */ "./resources/js/components/ArrayTextInput.vue?vue&type=template&id=7438416f&");
/* harmony import */ var _ArrayTextInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArrayTextInput.vue?vue&type=script&lang=js& */ "./resources/js/components/ArrayTextInput.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ArrayTextInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ArrayTextInput_vue_vue_type_template_id_7438416f___WEBPACK_IMPORTED_MODULE_0__.render,
  _ArrayTextInput_vue_vue_type_template_id_7438416f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ArrayTextInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/ArrayTextInput.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/ArrayTextInput.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArrayTextInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ArrayTextInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ArrayTextInput.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArrayTextInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ArrayTextInput.vue?vue&type=template&id=7438416f&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/ArrayTextInput.vue?vue&type=template&id=7438416f& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArrayTextInput_vue_vue_type_template_id_7438416f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArrayTextInput_vue_vue_type_template_id_7438416f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArrayTextInput_vue_vue_type_template_id_7438416f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ArrayTextInput.vue?vue&type=template&id=7438416f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ArrayTextInput.vue?vue&type=template&id=7438416f&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ArrayTextInput.vue?vue&type=template&id=7438416f&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ArrayTextInput.vue?vue&type=template&id=7438416f& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    { class: { "is-invalid": _vm.errors && _vm.errors.length } },
    [
      _vm._l(_vm.input_values, function (value, i) {
        return _c("div", { staticClass: "mb-3" }, [
          _c(
            "div",
            {
              staticClass: "input-group input-group-flat",
              class: {
                "is-invalid":
                  _vm.errors &&
                  _vm.errors["array"].hasOwnProperty(_vm.name + "." + i),
              },
            },
            [
              _c("input", {
                staticClass: "form-control",
                class: {
                  "is-invalid":
                    _vm.errors &&
                    _vm.errors["array"].hasOwnProperty(_vm.name + "." + i),
                },
                attrs: { type: "text", name: _vm.name + "[]" },
                domProps: {
                  value:
                    _vm.old_values && _vm.old_values[i]
                      ? _vm.old_values[i]
                      : value,
                },
              }),
              _vm._v(" "),
              _c("span", { staticClass: "input-group-text" }, [
                _c(
                  "a",
                  {
                    staticClass: "text-danger",
                    attrs: {
                      href: "#",
                      title: "Obriši Polje",
                      "data-bs-toggle": "tooltip",
                      "data-bs-original-title": "Obriši Polje",
                    },
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.removeInput(i)
                      },
                    },
                  },
                  [
                    _c(
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
                        _c("line", {
                          attrs: { x1: "18", y1: "6", x2: "6", y2: "18" },
                        }),
                        _c("line", {
                          attrs: { x1: "6", y1: "6", x2: "18", y2: "18" },
                        }),
                      ]
                    ),
                  ]
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _vm.errors && _vm.errors["array"].hasOwnProperty(_vm.name + "." + i)
            ? _c("div", {
                staticClass: "invalid-feedback",
                domProps: {
                  textContent: _vm._s(
                    _vm.errors["array"][_vm.name + "." + i][0]
                  ),
                },
              })
            : _vm._e(),
        ])
      }),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-icon",
          attrs: { href: "#", "aria-label": "Button" },
          on: {
            click: function ($event) {
              $event.preventDefault()
              return _vm.addInput.apply(null, arguments)
            },
          },
        },
        [
          _c(
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
                attrs: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
              }),
              _c("line", { attrs: { x1: "12", y1: "5", x2: "12", y2: "19" } }),
              _c("line", { attrs: { x1: "5", y1: "12", x2: "19", y2: "12" } }),
            ]
          ),
        ]
      ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);