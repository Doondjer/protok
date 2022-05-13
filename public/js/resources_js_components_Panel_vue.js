(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Panel_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Panel.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Panel.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_fullscreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-fullscreen */ "./node_modules/vue-fullscreen/dist/vue-fullscreen.min.js");
/* harmony import */ var vue_fullscreen__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_fullscreen__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var ObjectResource = function ObjectResource() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Object_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./Object */ "./resources/js/components/Object.vue"));
};

var largeChart = function largeChart() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_ExtendedChart_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./ExtendedChart */ "./resources/js/components/ExtendedChart.vue"));
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['rodent_list', 'panel_flows', 'graph_data', 'current_flows'],
  data: function data() {
    return {
      section: 'polje_b',
      filterType: 'all',
      filterString: '',
      show_graph: null,
      updateChart: [],
      fullscreen: false,
      teleport: true
    };
  },
  components: {
    ObjectResource: ObjectResource,
    largeChart: largeChart
  },
  methods: {
    showExtendedGraph: function showExtendedGraph(_ref) {
      var station = _ref.station;
      this.show_graph = station;
    },
    closeGraph: function closeGraph() {
      this.show_graph = null;
    },
    toggle: function toggle() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return vue_fullscreen__WEBPACK_IMPORTED_MODULE_1__.api.toggle(_this.$el.querySelector('.fullscreen-wrapper'), {
                  teleport: _this.teleport,
                  callback: function callback(isFullscreen) {//this.fullscreen = isFullscreen
                  }
                });

              case 2:
                _this.fullscreen = vue_fullscreen__WEBPACK_IMPORTED_MODULE_1__.api.isFullscreen;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  computed: {
    rodents: function rodents() {
      return this.rodent_list.data;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    //  this.loadAllResources();
    Echo.channel('flow').listen('NewFlow', function (data) {
      console.log(data);
      _this2.updateChart = data;
    });
  }
});

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/vue-fullscreen/dist/vue-fullscreen.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-fullscreen/dist/vue-fullscreen.min.js ***!
  \****************************************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t,n){"use strict";function i(){var e={},t=!1,n=0,r=arguments.length;for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);n<r;n++){var l=arguments[n];!function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=i(!0,e[r],n[r]):e[r]=n[r])}(l)}return e}t.a=i},function(e,t){!function(){"use strict";var t="undefined"!=typeof window&&void 0!==window.document?window.document:{},n=void 0!==e&&e.exports,i=function(){for(var e,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],i=0,r=n.length,l={};i<r;i++)if((e=n[i])&&e[1]in t){for(i=0;i<e.length;i++)l[n[0][i]]=e[i];return l}return!1}(),r={change:i.fullscreenchange,error:i.fullscreenerror},l={request:function(e,n){return new Promise(function(r,l){var s=function(){this.off("change",s),r()}.bind(this);this.on("change",s),e=e||t.documentElement;var o=e[i.requestFullscreen](n);o instanceof Promise&&o.then(s).catch(l)}.bind(this))},exit:function(){return new Promise(function(e,n){if(!this.isFullscreen)return void e();var r=function(){this.off("change",r),e()}.bind(this);this.on("change",r);var l=t[i.exitFullscreen]();l instanceof Promise&&l.then(r).catch(n)}.bind(this))},toggle:function(e,t){return this.isFullscreen?this.exit():this.request(e,t)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,n){var i=r[e];i&&t.addEventListener(i,n,!1)},off:function(e,n){var i=r[e];i&&t.removeEventListener(i,n,!1)},raw:i};if(!i)return void(n?e.exports={isEnabled:!1}:window.screenfull={isEnabled:!1});Object.defineProperties(l,{isFullscreen:{get:function(){return Boolean(t[i.fullscreenElement])}},element:{enumerable:!0,get:function(){return t[i.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(t[i.fullscreenEnabled])}}}),n?e.exports=l:window.screenfull=l}()},function(e,t,n){"use strict";function i(e,t){e.style.position=t.position,e.style.left=t.left,e.style.top=t.top,e.style.width=t.width,e.style.height=t.height}function r(e){var t=e.element;t&&(t.classList.remove(e.options.fullscreenClass),(e.options.teleport||e.options.pageOnly)&&(e.options.teleport&&a&&(a.insertBefore(t,u),a.removeChild(u)),t.__styleCache&&i(t,t.__styleCache)))}var l=n(1),s=n.n(l),o=n(0),c={callback:function(){},fullscreenClass:"fullscreen",pageOnly:!1,teleport:!1},u=void 0,a=void 0,f={options:null,element:null,isFullscreen:!1,isEnabled:s.a.isEnabled,toggle:function(e,t,n){return void 0===n?this.isFullscreen?this.exit():this.request(e,t):n?this.request(e,t):this.exit()},request:function(e,t){var l=this;if(this.isFullscreen)return Promise.resolve();if(e||(e=document.body),this.options=n.i(o.a)({},c,t),e===document.body&&(this.options.teleport=!1),s.a.isEnabled||(this.options.pageOnly=!0),e.classList.add(this.options.fullscreenClass),this.options.teleport||this.options.pageOnly){var f=e.style,h=f.position,p=f.left,d=f.top,m=f.width,v=f.height;e.__styleCache={position:h,left:p,top:d,width:m,height:v},i(e,{position:"fixed",left:"0",top:"0",width:"100%",height:"100%"})}if(this.options.teleport&&(a=e.parentNode)&&(u=document.createComment("fullscreen-token"),a.insertBefore(u,e),document.body.appendChild(e)),this.options.pageOnly){var b=function e(t){"Escape"===t.key&&(document.removeEventListener("keyup",e),l.exit())};return this.isFullscreen=!0,this.element=e,document.removeEventListener("keyup",b),document.addEventListener("keyup",b),this.options.callback&&this.options.callback(this.isFullscreen),Promise.resolve()}var y=function t(){s.a.isFullscreen||(s.a.off("change",t),r(l)),l.isFullscreen=s.a.isFullscreen,l.options.teleport?l.element=e||null:l.element=s.a.element,l.options.callback&&l.options.callback(s.a.isFullscreen)};return s.a.on("change",y),s.a.request(this.options.teleport?document.body:e)},exit:function(){return this.isFullscreen?this.options.pageOnly?(r(this),this.isFullscreen=!1,this.element=null,this.options.callback&&this.options.callback(this.isFullscreen),Promise.resolve()):s.a.exit():Promise.resolve()}};f.support=f.isEnabled,f.getState=function(){return f.isFullscreen},f.enter=f.request,t.a=f},function(e,t,n){"use strict";function i(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}var r=n(2),l=n(0),s=function(e,t){var s=function(){var e=void 0,s={teleport:t.modifiers.teleport,pageOnly:t.modifiers.pageOnly};if(t.value)if("string"==typeof t.value)e=t.value;else{var o=t.value,c=o.target,u=i(o,["target"]);e=c,s=n.i(l.a)(s,u)}"string"==typeof e&&(e=document.querySelector(e)),r.a.toggle(e,s)};e._onClickFullScreen&&e.removeEventListener("click",e._onClickFullScreen),e.addEventListener("click",s),e._onClickFullScreen=s};t.a=s},function(e,t,n){var i=n(7)(n(6),n(8),null,null);e.exports=i.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),r=n.n(i),l=n(2),s=n(3),o=n(1),c=n.n(o),u=n(0);n.d(t,"screenfull",function(){return c.a}),n.d(t,"api",function(){return l.a}),n.d(t,"directive",function(){return s.a}),n.d(t,"component",function(){return r.a}),t.default={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.name||"fullscreen";e.component(i,n.i(u.a)(r.a,{name:i})),e.prototype["$"+i]=l.a,e.directive(i,s.a)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=n.n(i);t.default={props:{value:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},exitOnClickWrapper:{type:Boolean,default:!0},fullscreenClass:{type:String,default:"fullscreen"},pageOnly:{type:Boolean,default:!1},teleport:{type:Boolean,default:!1}},data:function(){return{isFullscreen:!1,isEnabled:!1}},computed:{support:function(){return this.isEnabled},isPageOnly:function(){return this.pageOnly||!r.a.isEnabled},wrapperStyle:function(){return(this.isPageOnly||this.teleport)&&this.isFullscreen?{position:"fixed",left:"0",top:"0",width:"100%",height:"100%"}:void 0}},methods:{toggle:function(e){void 0===e?this.isFullscreen?this.exit():this.request():e?this.request():this.exit()},request:function(){if(this.isPageOnly?(this.isFullscreen=!0,this.onChangeFullScreen(),document.removeEventListener("keyup",this.keypressCallback),document.addEventListener("keyup",this.keypressCallback)):(r.a.off("change",this.fullScreenCallback),r.a.on("change",this.fullScreenCallback),r.a.request(this.teleport?document.body:this.$el)),this.teleport){if(this.$el.parentNode===document.body)return;this.__parentNode=this.$el.parentNode,this.__token=document.createComment("fullscreen-token"),this.__parentNode.insertBefore(this.__token,this.$el),document.body.appendChild(this.$el)}},exit:function(){this.isFullscreen&&(this.isPageOnly?(this.isFullscreen=!1,this.onChangeFullScreen(),document.removeEventListener("keyup",this.keypressCallback)):r.a.exit())},shadeClick:function(e){e.target===this.$el&&this.exitOnClickWrapper&&this.exit()},fullScreenCallback:function(){r.a.isFullscreen||r.a.off("change",this.fullScreenCallback),this.isFullscreen=r.a.isFullscreen,this.onChangeFullScreen()},keypressCallback:function(e){"Escape"===e.key&&this.exit()},onChangeFullScreen:function(){this.isFullscreen||this.teleport&&this.__parentNode&&(this.__parentNode.insertBefore(this.$el,this.__token),this.__parentNode.removeChild(this.__token)),this.$emit("change",this.isFullscreen),this.$emit("update:fullscreen",this.isFullscreen),this.$emit("input",this.isFullscreen)},enter:function(){this.request()},getState:function(){return this.isFullscreen}},watch:{value:function(e){e!==this.isFullscreen&&(e?this.request():this.exit())},fullscreen:function(e){e!==this.isFullscreen&&(e?this.request():this.exit())}},created:function(){this.isEnabled=r.a.isEnabled}}},function(e,t){e.exports=function(e,t,n,i){var r,l=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(r=e,l=e.default);var o="function"==typeof l?l.options:l;if(t&&(o.render=t.render,o.staticRenderFns=t.staticRenderFns),n&&(o._scopeId=n),i){var c=Object.create(o.computed||null);Object.keys(i).forEach(function(e){var t=i[e];c[e]=function(){return t}}),o.computed=c}return{esModule:r,exports:l,options:o}}},function(e,t){e.exports={render:function(){var e,t=this,n=t.$createElement;return(t._self._c||n)("div",t._b({ref:"wrapper",class:(e={},e[t.fullscreenClass]=t.isFullscreen,e),style:t.wrapperStyle,on:{click:function(e){return t.shadeClick(e)}}},"div",t.$attrs,!1),[t._t("default")],2)},staticRenderFns:[]}}])});

/***/ }),

/***/ "./resources/js/components/Panel.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Panel.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Panel_vue_vue_type_template_id_79f9e0a9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Panel.vue?vue&type=template&id=79f9e0a9& */ "./resources/js/components/Panel.vue?vue&type=template&id=79f9e0a9&");
/* harmony import */ var _Panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Panel.vue?vue&type=script&lang=js& */ "./resources/js/components/Panel.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Panel_vue_vue_type_template_id_79f9e0a9___WEBPACK_IMPORTED_MODULE_0__.render,
  _Panel_vue_vue_type_template_id_79f9e0a9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Panel.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Panel.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Panel.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Panel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Panel.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Panel.vue?vue&type=template&id=79f9e0a9&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Panel.vue?vue&type=template&id=79f9e0a9& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_template_id_79f9e0a9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_template_id_79f9e0a9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_template_id_79f9e0a9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Panel.vue?vue&type=template&id=79f9e0a9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Panel.vue?vue&type=template&id=79f9e0a9&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Panel.vue?vue&type=template&id=79f9e0a9&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Panel.vue?vue&type=template&id=79f9e0a9& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    { staticClass: "fullscreen-wrapper" },
    [
      _c("div", { staticClass: "container-xl" }, [
        _c("div", { staticClass: "page-header d-print-none" }, [
          _c("div", { staticClass: "row g-2 align-items-center" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 col-md-auto ms-auto d-print-none" },
              [
                _c("div", { staticClass: "btn-list" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn",
                      attrs: { type: "button" },
                      on: { click: _vm.toggle },
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass:
                            "icon icon-tabler icon-tabler-arrows-maximize",
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
                            attrs: { points: "16 4 20 4 20 8" },
                          }),
                          _vm._v(" "),
                          _c("line", {
                            attrs: { x1: "14", y1: "10", x2: "20", y2: "4" },
                          }),
                          _vm._v(" "),
                          _c("polyline", {
                            attrs: { points: "8 20 4 20 4 16" },
                          }),
                          _vm._v(" "),
                          _c("line", {
                            attrs: { x1: "4", y1: "20", x2: "10", y2: "14" },
                          }),
                          _vm._v(" "),
                          _c("polyline", {
                            attrs: { points: "16 20 20 20 20 16" },
                          }),
                          _vm._v(" "),
                          _c("line", {
                            attrs: { x1: "14", y1: "14", x2: "20", y2: "20" },
                          }),
                          _vm._v(" "),
                          _c("polyline", { attrs: { points: "8 4 4 4 4 8" } }),
                          _vm._v(" "),
                          _c("line", {
                            attrs: { x1: "4", y1: "4", x2: "10", y2: "10" },
                          }),
                        ]
                      ),
                      _vm._v(
                        "\n                               Proširi prikaz\n                           "
                      ),
                    ]
                  ),
                ]),
              ]
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "page-body" }, [
        _c("div", { staticClass: "container-xxl" }, [
          _c(
            "span",
            { staticClass: "row row-cards" },
            _vm._l(_vm.rodent_list.data, function (resource, id) {
              return _c("object-resource", {
                key: id,
                attrs: {
                  graph_data: _vm.graph_data[resource.id],
                  update_chart: _vm.updateChart,
                  resource: resource,
                  current_flow: _vm.current_flows[resource.id]
                    ? _vm.current_flows[resource.id]
                    : 0,
                  panel_flows: _vm.panel_flows,
                },
                on: { show_graph: _vm.showExtendedGraph },
              })
            }),
            1
          ),
        ]),
      ]),
      _vm._v(" "),
      _vm.show_graph
        ? _c("large-chart", {
            attrs: { rodent: _vm.rodents[_vm.show_graph] },
            on: { close_graph: _vm.closeGraph },
          })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h2", { staticClass: "page-title" }, [
        _vm._v("Kapaciteti Bagera - Panel"),
      ]),
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

"use strict";
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