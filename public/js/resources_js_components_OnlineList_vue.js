"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_OnlineList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OnlineList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OnlineList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'OnlineList',
  props: ['me'],
  data: function data() {
    return {
      users: [],
      activities: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    Date.prototype.toBackendFormat = function () {
      var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var day = this.getDate();
      var monthIndex = this.getMonth();
      var monthName = monthNames[monthIndex];
      return "".concat(day, " ").concat(monthName, ", ").concat(this.getHours(), ":").concat(this.getMinutes());
    };

    Echo.join('online').here(function (users) {
      _this.users = users;
    }).joining(function (user) {
      _this.users.push(user);

      user.activity = 'Dolazak';

      _this.activities.push(user);
    }).leaving(function (user) {
      _this.users.splice(_this.users.indexOf(user), 1);

      user.activity = 'Odlazak';

      _this.activities.push(user);
    });
  }
});

/***/ }),

/***/ "./resources/js/components/OnlineList.vue":
/*!************************************************!*\
  !*** ./resources/js/components/OnlineList.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OnlineList_vue_vue_type_template_id_1275f5bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OnlineList.vue?vue&type=template&id=1275f5bc& */ "./resources/js/components/OnlineList.vue?vue&type=template&id=1275f5bc&");
/* harmony import */ var _OnlineList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OnlineList.vue?vue&type=script&lang=js& */ "./resources/js/components/OnlineList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OnlineList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OnlineList_vue_vue_type_template_id_1275f5bc___WEBPACK_IMPORTED_MODULE_0__.render,
  _OnlineList_vue_vue_type_template_id_1275f5bc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/OnlineList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/OnlineList.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/OnlineList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OnlineList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OnlineList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OnlineList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OnlineList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/OnlineList.vue?vue&type=template&id=1275f5bc&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/OnlineList.vue?vue&type=template&id=1275f5bc& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OnlineList_vue_vue_type_template_id_1275f5bc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OnlineList_vue_vue_type_template_id_1275f5bc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OnlineList_vue_vue_type_template_id_1275f5bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OnlineList.vue?vue&type=template&id=1275f5bc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OnlineList.vue?vue&type=template&id=1275f5bc&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OnlineList.vue?vue&type=template&id=1275f5bc&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OnlineList.vue?vue&type=template&id=1275f5bc& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container-xl" }, [
    _c("div", { staticClass: "row row-cards justify-content-center" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "row row-cards" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "card" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "list-group list-group-flush list-group-hoverable",
                },
                _vm._l(_vm.users, function (user) {
                  return _c("div", { staticClass: "list-group-item" }, [
                    _c("div", { staticClass: "row align-items-center" }, [
                      _vm._m(1, true),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-auto" }, [
                        _c("a", { attrs: { href: "#" } }, [
                          _c("span", { staticClass: "avatar" }, [
                            _vm._v(
                              "\n                                                " +
                                _vm._s(
                                  user.name
                                    .split(" ")
                                    .map(function (value) {
                                      return value.charAt(0).toUpperCase()
                                    })
                                    .join("")
                                ) +
                                "\n                                            "
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col text-truncate" }, [
                        _c("a", {
                          staticClass: "text-reset d-block",
                          attrs: { href: "#" },
                          domProps: { textContent: _vm._s(user.name) },
                        }),
                        _vm._v(" "),
                        _c("div", {
                          staticClass: "d-block text-muted text-truncate mt-n1",
                          domProps: { textContent: _vm._s(user.agent) },
                        }),
                        _vm._v(" "),
                        _c("div", {
                          staticClass: "d-block text-muted text-truncate mt-n1",
                          domProps: {
                            textContent: _vm._s(
                              user.email + " | Od: " + user.since
                            ),
                          },
                        }),
                      ]),
                    ]),
                  ])
                }),
                0
              ),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "row row-cards" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "card" }, [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "list-group list-group-flush list-group-hoverable",
                },
                _vm._l(_vm.activities, function (user) {
                  return _c("div", { staticClass: "list-group-item" }, [
                    _c("div", { staticClass: "row align-items-center" }, [
                      _vm._m(3, true),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-auto" }, [
                        _c("a", { attrs: { href: "#" } }, [
                          _c("span", { staticClass: "avatar" }, [
                            _vm._v(
                              "\n                                                " +
                                _vm._s(
                                  user.name
                                    .split(" ")
                                    .map(function (value) {
                                      return value.charAt(0).toUpperCase()
                                    })
                                    .join("")
                                ) +
                                "\n                                            "
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col text-truncate" }, [
                        _c("a", {
                          staticClass: "text-reset d-block",
                          attrs: { href: "#" },
                          domProps: { textContent: _vm._s(user.name) },
                        }),
                        _vm._v(" "),
                        _c("div", {
                          staticClass: "d-block text-muted text-truncate mt-n1",
                          domProps: { textContent: _vm._s(user.agent) },
                        }),
                        _vm._v(" "),
                        _c("div", {
                          staticClass: "d-block text-muted text-truncate mt-n1",
                          domProps: {
                            textContent: _vm._s(
                              user.email +
                                " | Od: " +
                                user.since +
                                " | " +
                                user.activity +
                                ": " +
                                new Date().toBackendFormat()
                            ),
                          },
                        }),
                      ]),
                    ]),
                  ])
                }),
                0
              ),
            ]),
          ]),
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
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Trenutno na sajtu")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-auto" }, [
      _c("span", { staticClass: "badge" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Aktivnost")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-auto" }, [
      _c("span", { staticClass: "badge" }),
    ])
  },
]
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