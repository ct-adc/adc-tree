(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ct-utility"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["ct-utility", "vue"], factory);
	else if(typeof exports === 'object')
		exports["ct-adc-tree"] = factory(require("ct-utility"), require("vue"));
	else
		root["ct-adc-tree"] = factory(root["ct-utility"], root["vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_47__, __WEBPACK_EXTERNAL_MODULE_97__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(14);
var IE8_DOM_DEFINE = __webpack_require__(37);
var toPrimitive = __webpack_require__(23);
var dP = Object.defineProperty;

exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(9)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(57);
var defined = __webpack_require__(18);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(2);
var createDesc = __webpack_require__(15);
module.exports = __webpack_require__(3) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(21)('wks');
var uid = __webpack_require__(12);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(35);
var enumBugKeys = __webpack_require__(22);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(5);
var ctx = __webpack_require__(62);
var hide = __webpack_require__(6);
var has = __webpack_require__(1);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(51)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(21)('keys');
var uid = __webpack_require__(12);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(2).f;
var has = __webpack_require__(1);
var TAG = __webpack_require__(7)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(7);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(5);
var LIBRARY = __webpack_require__(24);
var wksExt = __webpack_require__(27);
var defineProperty = __webpack_require__(2).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(45);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function _broadcast(componentName, eventName, params) {
    this.$children.forEach(function (child) {
        var name = child.$options.componentName;

        if (name === componentName) {
            child.$emit.apply(child, [eventName].concat(params));
        } else {
            _broadcast.apply(child, [componentName, eventName].concat([params]));
        }
    });
}

exports.default = {
    methods: {
        dispatch: function dispatch(componentName, eventName, params) {
            var parent = this.$parent || this.$root;
            var name = parent.$options.componentName;

            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;

                if (parent) {
                    name = parent.$options.componentName;
                }
            }
            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        },
        broadcast: function broadcast(componentName, eventName, params) {
            _broadcast.call(this, componentName, eventName, params);
        }
    }
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(49)

var Component = __webpack_require__(10)(
  /* script */
  __webpack_require__(52),
  /* template */
  __webpack_require__(105),
  /* scopeId */
  "data-v-27ef0262",
  /* cssModules */
  null
)
Component.options.__file = "/Users/rubyisapm/teamshare/adc-packages/tree/src/component/tree/tree.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tree.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27ef0262", Component.options)
  } else {
    hotAPI.reload("data-v-27ef0262", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(18);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(1);
var toIObject = __webpack_require__(4);
var arrayIndexOf = __webpack_require__(58)(false);
var IE_PROTO = __webpack_require__(20)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(9)(function () {
  return Object.defineProperty(__webpack_require__(38)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(64);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(76);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(24);
var $export = __webpack_require__(13);
var redefine = __webpack_require__(41);
var hide = __webpack_require__(6);
var Iterators = __webpack_require__(25);
var $iterCreate = __webpack_require__(68);
var setToStringTag = __webpack_require__(26);
var getPrototypeOf = __webpack_require__(71);
var ITERATOR = __webpack_require__(7)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(14);
var dPs = __webpack_require__(69);
var enumBugKeys = __webpack_require__(22);
var IE_PROTO = __webpack_require__(20)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(38)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(70).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(35);
var hiddenKeys = __webpack_require__(22).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getNodeKey = exports.markNodeData = exports.NODE_KEY = undefined;

var _defineProperty = __webpack_require__(45);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NODE_KEY = exports.NODE_KEY = '$treeNodeId';

var markNodeData = exports.markNodeData = function markNodeData(node, data) {
    if (data[NODE_KEY]) return;
    (0, _defineProperty2.default)(data, NODE_KEY, {
        value: node.id,
        enumerable: false,
        configurable: false,
        writable: false
    });
};

var getNodeKey = exports.getNodeKey = function getNodeKey(key, data) {
    if (!key) return data[NODE_KEY];
    return data[key];
};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_47__;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.areaTree = exports.tree = undefined;

var _tree = __webpack_require__(33);

var _tree2 = _interopRequireDefault(_tree);

var _areaTree = __webpack_require__(106);

var _areaTree2 = _interopRequireDefault(_areaTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.tree = _tree2.default;
exports.areaTree = _areaTree2.default;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(17)("1696f6f7", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-27ef0262\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tree.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-27ef0262\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tree.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n.el-tree[data-v-27ef0262] {\n    cursor: default;\n    background: #fff;\n}\n.el-tree__empty-block[data-v-27ef0262] {\n    position: relative;\n    min-height: 60px;\n    text-align: center;\n    width: 100%;\n    height: 100%\n}\n.el-tree__empty-text[data-v-27ef0262] {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    color: #5e7382\n}\n.el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content[data-v-27ef0262] {\n    background-color: #edf7ff\n}\n", ""]);

// exports


/***/ }),
/* 51 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _treeStore = __webpack_require__(53);

var _treeStore2 = _interopRequireDefault(_treeStore);

var _emitter = __webpack_require__(32);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'tree',

    mixins: [_emitter2.default],

    components: {
        ElTreeNode: __webpack_require__(91)
    },

    data: function data() {
        return {
            store: null,
            root: null,
            currentNode: null
        };
    },


    props: {
        data: {
            type: Array
        },
        emptyText: {
            type: String,
            default: '暂无数据'
        },
        nodeKey: String,
        checkStrictly: Boolean,
        defaultExpandAll: Boolean,
        expandOnClickNode: {
            type: Boolean,
            default: true
        },
        autoExpandParent: {
            type: Boolean,
            default: true
        },
        defaultCheckedKeys: Array,
        defaultExpandedKeys: Array,
        renderContent: Function,
        showCheckbox: {
            type: Boolean,
            default: false
        },
        props: {
            default: function _default() {
                return {
                    children: 'children',
                    label: 'label',
                    icon: 'icon'
                };
            }
        },
        lazy: {
            type: Boolean,
            default: false
        },
        highlightCurrent: Boolean,
        currentNodeKey: [String, Number],
        load: Function,
        filterNodeMethod: Function,
        accordion: Boolean,
        indent: {
            type: Number,
            default: 16
        }
    },

    computed: {
        children: {
            set: function set(value) {
                this.data = value;
            },
            get: function get() {
                return this.data;
            }
        }
    },

    watch: {
        defaultCheckedKeys: function defaultCheckedKeys(newVal) {
            this.store.defaultCheckedKeys = newVal;
            this.store.setDefaultCheckedKey(newVal);
        },
        defaultExpandedKeys: function defaultExpandedKeys(newVal) {
            this.store.defaultExpandedKeys = newVal;
            this.store.setDefaultExpandedKeys(newVal);
        },
        currentNodeKey: function currentNodeKey(newVal) {
            this.store.setCurrentNodeKey(newVal);
            this.store.currentNodeKey = newVal;
        },
        data: function data(newVal) {
            this.store.setData(newVal);
        }
    },

    methods: {
        filter: function filter(value) {
            if (!this.filterNodeMethod) throw new Error('[Tree] filterNodeMethod is required when filter');
            this.store.filter(value);
        },
        getNodeKey: function getNodeKey(node, index) {
            var nodeKey = this.nodeKey;
            if (nodeKey && node) {
                return node.data[nodeKey];
            }
            return index;
        },
        getCheckedNodes: function getCheckedNodes(leafOnly) {
            return this.store.getCheckedNodes(leafOnly);
        },
        getCheckedKeys: function getCheckedKeys(leafOnly) {
            return this.store.getCheckedKeys(leafOnly);
        },
        setCheckedNodes: function setCheckedNodes(nodes, leafOnly) {
            if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedNodes');
            this.store.setCheckedNodes(nodes, leafOnly);
        },
        setCheckedKeys: function setCheckedKeys(keys, leafOnly) {
            if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedNodes');
            this.store.setCheckedKeys(keys, leafOnly);
        },
        setChecked: function setChecked(data, checked, deep) {
            this.store.setChecked(data, checked, deep);
        },
        handleNodeExpand: function handleNodeExpand(nodeData, node, instance) {
            this.broadcast('ElTreeNode', 'tree-node-expand', node);
            this.$emit('node-expand', nodeData, node, instance);
        }
    },

    created: function created() {
        this.isTree = true;

        this.store = new _treeStore2.default({
            key: this.nodeKey,
            data: this.data,
            lazy: this.lazy,
            props: this.props,
            load: this.load,
            currentNodeKey: this.currentNodeKey,
            checkStrictly: this.checkStrictly,
            defaultCheckedKeys: this.defaultCheckedKeys,
            defaultExpandedKeys: this.defaultExpandedKeys,
            autoExpandParent: this.autoExpandParent,
            defaultExpandAll: this.defaultExpandAll,
            filterNodeMethod: this.filterNodeMethod
        });

        this.root = this.store.root;
    }
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(54);

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = __webpack_require__(39);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(30);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(31);

var _createClass3 = _interopRequireDefault(_createClass2);

var _node = __webpack_require__(89);

var _node2 = _interopRequireDefault(_node);

var _util = __webpack_require__(46);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TreeStore = function () {
    function TreeStore(options) {
        var _this = this;

        (0, _classCallCheck3.default)(this, TreeStore);

        this.currentNode = null;
        this.currentNodeKey = null;

        for (var option in options) {
            if (options.hasOwnProperty(option)) {
                this[option] = options[option];
            }
        }

        this.nodesMap = {};

        this.root = new _node2.default({
            data: this.data,
            store: this
        });

        if (this.lazy && this.load) {
            var loadFn = this.load;

            loadFn(this.root, function (data) {
                _this.root.doCreateChildren(data);
                _this._initDefaultCheckedNodes();
            });
        } else {
            this._initDefaultCheckedNodes();
        }
    }

    (0, _createClass3.default)(TreeStore, [{
        key: 'filter',
        value: function filter(value) {
            var filterNodeMethod = this.filterNodeMethod;
            var traverse = function traverse(node) {
                var childNodes = node.root ? node.root.childNodes : node.childNodes;

                childNodes.forEach(function (child) {
                    child.visible = filterNodeMethod.call(child, value, child.data, child);

                    traverse(child);
                });

                if (!node.visible && childNodes.length) {
                    var allHidden = true;

                    childNodes.forEach(function (child) {
                        if (child.visible) allHidden = false;
                    });

                    if (node.root) {
                        node.root.visible = allHidden === false;
                    } else {
                        node.visible = allHidden === false;
                    }
                }

                if (node.visible && !node.isLeaf) node.expand();
            };

            traverse(this);
        }
    }, {
        key: 'setData',
        value: function setData(newVal) {
            var instanceChanged = newVal !== this.root.data;

            this.root.setData(newVal);
            if (instanceChanged) {
                this._initDefaultCheckedNodes();
            }
        }
    }, {
        key: 'getNode',
        value: function getNode(data) {
            var key = (typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) !== 'object' ? data : (0, _util.getNodeKey)(this.key, data);

            return this.nodesMap[key];
        }
    }, {
        key: 'insertBefore',
        value: function insertBefore(data, refData) {
            var refNode = this.getNode(refData);

            refNode.parent.insertBefore({ data: data }, refNode);
        }
    }, {
        key: 'insertAfter',
        value: function insertAfter(data, refData) {
            var refNode = this.getNode(refData);

            refNode.parent.insertAfter({ data: data }, refNode);
        }
    }, {
        key: 'remove',
        value: function remove(data) {
            var node = this.getNode(data);

            if (node) {
                node.parent.removeChild(node);
            }
        }
    }, {
        key: 'append',
        value: function append(data, parentData) {
            var parentNode = parentData ? this.getNode(parentData) : this.root;

            if (parentNode) {
                parentNode.insertChild({ data: data });
            }
        }
    }, {
        key: '_initDefaultCheckedNodes',
        value: function _initDefaultCheckedNodes() {
            var _this2 = this;

            var defaultCheckedKeys = this.defaultCheckedKeys || [];
            var nodesMap = this.nodesMap;

            defaultCheckedKeys.forEach(function (checkedKey) {
                var node = nodesMap[checkedKey];

                if (node) {
                    node.setChecked(true, !_this2.checkStrictly);
                }
            });
        }
    }, {
        key: '_initDefaultCheckedNode',
        value: function _initDefaultCheckedNode(node) {
            var defaultCheckedKeys = this.defaultCheckedKeys || [];

            if (defaultCheckedKeys.indexOf(node.key) !== -1) {
                node.setChecked(true, !this.checkStrictly);
            }
        }
    }, {
        key: 'setDefaultCheckedKey',
        value: function setDefaultCheckedKey(newVal) {
            if (newVal !== this.defaultCheckedKeys) {
                this.defaultCheckedKeys = newVal;
                this._initDefaultCheckedNodes();
            }
        }
    }, {
        key: 'registerNode',
        value: function registerNode(node) {
            var key = this.key;

            if (!key || !node || !node.data) return;

            var nodeKey = node.key;

            if (nodeKey) this.nodesMap[node.key] = node;
        }
    }, {
        key: 'deregisterNode',
        value: function deregisterNode(node) {
            var key = this.key;

            if (!key || !node || !node.data) return;

            delete this.nodesMap[node.key];
        }
    }, {
        key: 'getCheckedNodes',
        value: function getCheckedNodes() {
            var leafOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var checkedNodes = [];
            var traverse = function traverse(node) {
                var childNodes = node.root ? node.root.childNodes : node.childNodes;

                childNodes.forEach(function (child) {
                    if (!leafOnly && child.checked || leafOnly && child.isLeaf && child.checked) {
                        checkedNodes.push(child.data);
                    }

                    traverse(child);
                });
            };

            traverse(this);

            return checkedNodes;
        }
    }, {
        key: 'getCheckedKeys',
        value: function getCheckedKeys() {
            var leafOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var key = this.key;
            var allNodes = this._getAllNodes();
            var keys = [];

            allNodes.forEach(function (node) {
                if (!leafOnly || leafOnly && node.isLeaf) {
                    if (node.checked) {
                        keys.push((node.data || {})[key]);
                    }
                }
            });
            return keys;
        }
    }, {
        key: '_getAllNodes',
        value: function _getAllNodes() {
            var allNodes = [];
            var nodesMap = this.nodesMap;

            for (var nodeKey in nodesMap) {
                if (nodesMap.hasOwnProperty(nodeKey)) {
                    allNodes.push(nodesMap[nodeKey]);
                }
            }

            return allNodes;
        }
    }, {
        key: '_setCheckedKeys',
        value: function _setCheckedKeys(key) {
            var _this3 = this;

            var leafOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var checkedKeys = arguments[2];

            var allNodes = this._getAllNodes();

            allNodes.sort(function (a, b) {
                return a.level < b.level;
            });

            var keys = (0, _keys2.default)(checkedKeys);

            allNodes.forEach(function (node) {
                var checked = keys.indexOf(node.data[key] + '') > -1;

                if (!node.isLeaf) {
                    if (!_this3.checkStrictly) {
                        var childNodes = node.childNodes;
                        var all = true;
                        var none = true;

                        for (var i = 0, j = childNodes.length; i < j; i++) {
                            var child = childNodes[i];

                            if (child.checked !== true || child.indeterminate) {
                                all = false;
                            }
                            if (child.checked !== false || child.indeterminate) {
                                none = false;
                            }
                        }

                        if (all) {
                            node.setChecked(true, !_this3.checkStrictly);
                        } else if (!all && !none) {
                            checked = checked ? true : 'half';
                            node.setChecked(checked, !_this3.checkStrictly && checked === true);
                        } else if (none) {
                            node.setChecked(checked, !_this3.checkStrictly);
                        }
                    } else {
                        node.setChecked(checked, false);
                    }

                    if (leafOnly) {
                        node.setChecked(false, false);
                        var traverse = function traverse(node) {
                            var childNodes = node.childNodes;

                            childNodes.forEach(function (child) {
                                if (!child.isLeaf) {
                                    child.setChecked(false, false);
                                }
                                traverse(child);
                            });
                        };

                        traverse(node);
                    }
                } else {
                    node.setChecked(checked, false);
                }
            });
        }
    }, {
        key: 'setCheckedNodes',
        value: function setCheckedNodes(array) {
            var leafOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var key = this.key;
            var checkedKeys = {};

            array.forEach(function (item) {
                checkedKeys[(item || {})[key]] = true;
            });
            if (this.lazy) {
                this._setCheckedKeys(key, leafOnly, checkedKeys);
            }
            this._setCheckedKeys(key, leafOnly, checkedKeys);
        }
    }, {
        key: 'setCheckedKeys',
        value: function setCheckedKeys(keys) {
            var leafOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            this.defaultCheckedKeys = keys;
            var key = this.key;
            var checkedKeys = {};

            keys.forEach(function (key) {
                checkedKeys[key] = true;
            });

            this._setCheckedKeys(key, leafOnly, checkedKeys);
        }
    }, {
        key: 'setDefaultExpandedKeys',
        value: function setDefaultExpandedKeys(keys) {
            var _this4 = this;

            keys = keys || [];
            this.defaultExpandedKeys = keys;

            keys.forEach(function (key) {
                var node = _this4.getNode(key);

                if (node) node.expand(null, _this4.autoExpandParent);
            });
        }
    }, {
        key: 'setChecked',
        value: function setChecked(data, checked, deep) {
            var node = this.getNode(data);

            if (node) {
                node.setChecked(!!checked, deep);
            }
        }
    }, {
        key: 'getCurrentNode',
        value: function getCurrentNode() {
            return this.currentNode;
        }
    }, {
        key: 'setCurrentNode',
        value: function setCurrentNode(node) {
            this.currentNode = node;
        }
    }, {
        key: 'setCurrentNodeKey',
        value: function setCurrentNodeKey(key) {
            var node = this.getNode(key);

            if (node) {
                this.currentNode = node;
            }
        }
    }]);
    return TreeStore;
}();

exports.default = TreeStore;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(55), __esModule: true };

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56);
module.exports = __webpack_require__(5).Object.keys;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(34);
var $keys = __webpack_require__(11);

__webpack_require__(61)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(36);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(4);
var toLength = __webpack_require__(59);
var toAbsoluteIndex = __webpack_require__(60);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(19);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(19);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(13);
var core = __webpack_require__(5);
var fails = __webpack_require__(9);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(63);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(65), __esModule: true };

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66);
__webpack_require__(72);
module.exports = __webpack_require__(27).f('iterator');


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(67)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(40)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(19);
var defined = __webpack_require__(18);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(42);
var descriptor = __webpack_require__(15);
var setToStringTag = __webpack_require__(26);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(7)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(2);
var anObject = __webpack_require__(14);
var getKeys = __webpack_require__(11);

module.exports = __webpack_require__(3) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(1);
var toObject = __webpack_require__(34);
var IE_PROTO = __webpack_require__(20)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(73);
var global = __webpack_require__(0);
var hide = __webpack_require__(6);
var Iterators = __webpack_require__(25);
var TO_STRING_TAG = __webpack_require__(7)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(74);
var step = __webpack_require__(75);
var Iterators = __webpack_require__(25);
var toIObject = __webpack_require__(4);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(40)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(77), __esModule: true };

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78);
__webpack_require__(84);
__webpack_require__(85);
__webpack_require__(86);
module.exports = __webpack_require__(5).Symbol;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(0);
var has = __webpack_require__(1);
var DESCRIPTORS = __webpack_require__(3);
var $export = __webpack_require__(13);
var redefine = __webpack_require__(41);
var META = __webpack_require__(79).KEY;
var $fails = __webpack_require__(9);
var shared = __webpack_require__(21);
var setToStringTag = __webpack_require__(26);
var uid = __webpack_require__(12);
var wks = __webpack_require__(7);
var wksExt = __webpack_require__(27);
var wksDefine = __webpack_require__(28);
var enumKeys = __webpack_require__(80);
var isArray = __webpack_require__(81);
var anObject = __webpack_require__(14);
var isObject = __webpack_require__(8);
var toIObject = __webpack_require__(4);
var toPrimitive = __webpack_require__(23);
var createDesc = __webpack_require__(15);
var _create = __webpack_require__(42);
var gOPNExt = __webpack_require__(82);
var $GOPD = __webpack_require__(83);
var $DP = __webpack_require__(2);
var $keys = __webpack_require__(11);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(44).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(29).f = $propertyIsEnumerable;
  __webpack_require__(43).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(24)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(6)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(12)('meta');
var isObject = __webpack_require__(8);
var has = __webpack_require__(1);
var setDesc = __webpack_require__(2).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(9)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(11);
var gOPS = __webpack_require__(43);
var pIE = __webpack_require__(29);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(36);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(4);
var gOPN = __webpack_require__(44).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(29);
var createDesc = __webpack_require__(15);
var toIObject = __webpack_require__(4);
var toPrimitive = __webpack_require__(23);
var has = __webpack_require__(1);
var IE8_DOM_DEFINE = __webpack_require__(37);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(3) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 84 */
/***/ (function(module, exports) {



/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('asyncIterator');


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('observable');


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(88);
var $Object = __webpack_require__(5).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(13);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(3), 'Object', { defineProperty: __webpack_require__(2).f });


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(30);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(31);

var _createClass3 = _interopRequireDefault(_createClass2);

var _merge = __webpack_require__(90);

var _merge2 = _interopRequireDefault(_merge);

var _util = __webpack_require__(46);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reInitChecked = function reInitChecked(node) {
    var siblings = node.childNodes;

    var all = true;
    var none = true;

    for (var i = 0, j = siblings.length; i < j; i++) {
        var sibling = siblings[i];
        if (sibling.checked !== true || sibling.indeterminate) {
            all = false;
        }
        if (sibling.checked !== false || sibling.indeterminate) {
            none = false;
        }
    }

    if (all) {
        node.setChecked(true);
    } else if (!all && !none) {
        node.setChecked('half');
    } else if (none) {
        node.setChecked(false);
    }
};

var getPropertyFromData = function getPropertyFromData(node, prop) {
    var props = node.store.props;
    var data = node.data || {};
    var config = props[prop];

    if (typeof config === 'function') {
        return config(data, node);
    } else if (typeof config === 'string') {
        return data[config];
    } else if (typeof config === 'undefined') {
        return '';
    }
};

var nodeIdSeed = 0;

var Node = function () {
    function Node(options) {
        (0, _classCallCheck3.default)(this, Node);

        this.id = nodeIdSeed++;
        this.text = null;
        this.checked = false;
        this.indeterminate = false;
        this.data = null;
        this.expanded = false;
        this.parent = null;
        this.visible = true;

        for (var name in options) {
            if (options.hasOwnProperty(name)) {
                this[name] = options[name];
            }
        }

        this.level = 0;
        this.loaded = false;
        this.childNodes = [];
        this.loading = false;

        if (this.parent) {
            this.level = this.parent.level + 1;
        }

        var store = this.store;
        if (!store) {
            throw new Error('[Node]store is required!');
        }
        store.registerNode(this);

        var props = store.props;
        if (props && typeof props.isLeaf !== 'undefined') {
            var isLeaf = getPropertyFromData(this, 'isLeaf');
            if (typeof isLeaf === 'boolean') {
                this.isLeafByUser = isLeaf;
            }
        }

        if (store.lazy !== true && this.data) {
            this.setData(this.data);

            if (store.defaultExpandAll) {
                this.expanded = true;
            }
        } else if (this.level > 0 && store.lazy && store.defaultExpandAll) {
            this.expand();
        }

        if (!this.data) return;
        var defaultExpandedKeys = store.defaultExpandedKeys;
        var key = store.key;
        if (key && defaultExpandedKeys && defaultExpandedKeys.indexOf(this.key) !== -1) {
            this.expand(null, store.autoExpandParent);
        }

        if (key && store.currentNodeKey && this.key === store.currentNodeKey) {
            store.currentNode = this;
        }

        if (store.lazy) {
            store._initDefaultCheckedNode(this);
        }

        this.updateLeafState();
    }

    (0, _createClass3.default)(Node, [{
        key: 'setData',
        value: function setData(data) {
            if (!Array.isArray(data)) {
                (0, _util.markNodeData)(this, data);
            }

            this.data = data;
            this.childNodes = [];

            var children = void 0;
            if (this.level === 0 && this.data instanceof Array) {
                children = this.data;
            } else {
                children = getPropertyFromData(this, 'children') || [];
            }

            for (var i = 0, j = children.length; i < j; i++) {
                this.insertChild({ data: children[i] });
            }
        }
    }, {
        key: 'insertChild',
        value: function insertChild(child, index) {
            if (!child) throw new Error('insertChild error: child is required.');

            if (!(child instanceof Node)) {
                (0, _merge2.default)(child, {
                    parent: this,
                    store: this.store
                });
                child = new Node(child);
            }

            child.level = this.level + 1;

            if (typeof index === 'undefined' || index < 0) {
                this.childNodes.push(child);
            } else {
                this.childNodes.splice(index, 0, child);
            }

            this.updateLeafState();
        }
    }, {
        key: 'insertBefore',
        value: function insertBefore(child, ref) {
            var index = void 0;
            if (ref) {
                index = this.childNodes.indexOf(ref);
            }
            this.insertChild(child, index);
        }
    }, {
        key: 'insertAfter',
        value: function insertAfter(child, ref) {
            var index = void 0;
            if (ref) {
                index = this.childNodes.indexOf(ref);
                if (index !== -1) index += 1;
            }
            this.insertChild(child, index);
        }
    }, {
        key: 'removeChild',
        value: function removeChild(child) {
            var index = this.childNodes.indexOf(child);

            if (index > -1) {
                this.store && this.store.deregisterNode(child);
                child.parent = null;
                this.childNodes.splice(index, 1);
            }

            this.updateLeafState();
        }
    }, {
        key: 'removeChildByData',
        value: function removeChildByData(data) {
            var targetNode = null;
            this.childNodes.forEach(function (node) {
                if (node.data === data) {
                    targetNode = node;
                }
            });

            if (targetNode) {
                this.removeChild(targetNode);
            }
        }
    }, {
        key: 'expand',
        value: function expand(callback, expandParent) {
            var _this = this;

            var done = function done() {
                if (expandParent) {
                    var parent = _this.parent;
                    while (parent.level > 0) {
                        parent.expanded = true;
                        parent = parent.parent;
                    }
                }
                _this.expanded = true;
                if (callback) callback();
            };

            if (this.shouldLoadData()) {
                this.loadData(function (data) {
                    if (data instanceof Array) {
                        done();
                    }
                });
            } else {
                done();
            }
        }
    }, {
        key: 'doCreateChildren',
        value: function doCreateChildren(array) {
            var _this2 = this;

            var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            array.forEach(function (item) {
                _this2.insertChild((0, _merge2.default)({ data: item }, defaultProps));
            });
        }
    }, {
        key: 'collapse',
        value: function collapse() {
            this.expanded = false;
        }
    }, {
        key: 'shouldLoadData',
        value: function shouldLoadData() {
            return this.store.lazy === true && this.store.load && !this.loaded;
        }
    }, {
        key: 'updateLeafState',
        value: function updateLeafState() {
            if (this.store.lazy === true && this.loaded !== true && typeof this.isLeafByUser !== 'undefined') {
                this.isLeaf = this.isLeafByUser;
                return;
            }
            var childNodes = this.childNodes;
            if (!this.store.lazy || this.store.lazy === true && this.loaded === true) {
                this.isLeaf = !childNodes || childNodes.length === 0;
                return;
            }
            this.isLeaf = false;
        }
    }, {
        key: 'setChecked',
        value: function setChecked(value, deep) {
            var _this3 = this;

            this.indeterminate = value === 'half';
            this.checked = value === true;

            var handleDescendants = function handleDescendants() {
                if (deep) {
                    var childNodes = _this3.childNodes;
                    for (var i = 0, j = childNodes.length; i < j; i++) {
                        var child = childNodes[i];
                        child.setChecked(value !== false, deep);
                    }
                }
            };

            if (!this.store.checkStrictly && this.shouldLoadData()) {
                this.loadData(function () {
                    handleDescendants();
                }, {
                    checked: value !== false
                });
            } else {
                handleDescendants();
            }

            var parent = this.parent;
            if (!parent || parent.level === 0) return;

            if (!this.store.checkStrictly) {
                reInitChecked(parent);
            }
        }
    }, {
        key: 'getChildren',
        value: function getChildren() {
            var data = this.data;
            if (!data) return null;

            var props = this.store.props;
            var children = 'children';
            if (props) {
                children = props.children || 'children';
            }

            if (data[children] === undefined) {
                data[children] = null;
            }

            return data[children];
        }
    }, {
        key: 'updateChildren',
        value: function updateChildren() {
            var _this4 = this;

            var newData = this.getChildren() || [];
            var oldData = this.childNodes.map(function (node) {
                return node.data;
            });

            var newDataMap = {};
            var newNodes = [];

            newData.forEach(function (item, index) {
                if (item[_util.NODE_KEY]) {
                    newDataMap[item[_util.NODE_KEY]] = { index: index, data: item };
                } else {
                    newNodes.push({ index: index, data: item });
                }
            });

            oldData.forEach(function (item) {
                if (!newDataMap[item[_util.NODE_KEY]]) _this4.removeChildByData(item);
            });

            newNodes.forEach(function (_ref) {
                var index = _ref.index,
                    data = _ref.data;

                _this4.insertChild({ data: data }, index);
            });

            this.updateLeafState();
        }
    }, {
        key: 'loadData',
        value: function loadData(callback) {
            var _this5 = this;

            var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (this.store.lazy === true && this.store.load && !this.loaded && !this.loading) {
                this.loading = true;

                var resolve = function resolve(children) {
                    _this5.loaded = true;
                    _this5.loading = false;
                    _this5.childNodes = [];

                    _this5.doCreateChildren(children, defaultProps);

                    _this5.updateLeafState();
                    if (callback) {
                        callback.call(_this5, children);
                    }
                };

                this.store.load(this, resolve);
            } else {
                if (callback) {
                    callback.call(this);
                }
            }
        }
    }, {
        key: 'label',
        get: function get() {
            return getPropertyFromData(this, 'label');
        }
    }, {
        key: 'icon',
        get: function get() {
            return getPropertyFromData(this, 'icon');
        }
    }, {
        key: 'key',
        get: function get() {
            var nodeKey = this.store.key;
            if (this.data) return this.data[nodeKey];
            return null;
        }
    }]);
    return Node;
}();

exports.default = Node;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (target) {
    for (var i = 1, j = arguments.length; i < j; i++) {
        var source = arguments[i] || {};

        for (var prop in source) {
            if (source.hasOwnProperty(prop)) {
                var value = source[prop];

                if (value !== undefined) {
                    target[prop] = value;
                }
            }
        }
    }
    return target;
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(92)

var Component = __webpack_require__(10)(
  /* script */
  __webpack_require__(94),
  /* template */
  __webpack_require__(104),
  /* scopeId */
  "data-v-9fe15e20",
  /* cssModules */
  null
)
Component.options.__file = "/Users/rubyisapm/teamshare/adc-packages/tree/src/component/tree/tree-node.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tree-node.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9fe15e20", Component.options)
  } else {
    hotAPI.reload("data-v-9fe15e20", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(17)("ffeefa2a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-9fe15e20\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tree-node.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-9fe15e20\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tree-node.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n.el-tree-node[data-v-9fe15e20] {\n    white-space: nowrap\n}\n.el-tree-node > .el-tree-node__children[data-v-9fe15e20] {\n    overflow: hidden;\n    background-color: transparent\n}\n.el-tree-node.is-expanded > .el-tree-node__children[data-v-9fe15e20] {\n    display: block\n}\n.el-tree-node__expand-icon[data-v-9fe15e20], .el-tree-node__label[data-v-9fe15e20], .el-tree-node__loading-icon[data-v-9fe15e20] {\n    display: inline-block;\n    vertical-align: middle\n}\n.el-tree-node__content[data-v-9fe15e20] {\n    line-height: 28px;\n    height: 28px;\n    cursor: pointer\n}\n.el-tree-node__content > .el-checkbox[data-v-9fe15e20], .el-tree-node__content > .el-tree-node__expand-icon[data-v-9fe15e20] {\n    margin-right: 8px\n}\n.el-tree-node__content > .el-checkbox[data-v-9fe15e20] {\n    vertical-align: middle;\n    margin-bottom: 0\n}\n.el-tree-node__content[data-v-9fe15e20]:hover {\n    background: #e4e8f1\n}\n.el-tree-node__expand-icon[data-v-9fe15e20] {\n    cursor: pointer;\n    width: 0;\n    height: 0;\n    margin-left: 10px;\n    border: 4px solid transparent;\n    border-right-width: 0;\n    border-left-color: #97a8be;\n    border-left-width: 6px;\n    transform: rotate(0);\n    transition: transform .3s ease-in-out\n}\n.el-tree-node__expand-icon[data-v-9fe15e20]:hover {\n    border-left-color: #999\n}\n.el-tree-node__expand-icon.expanded[data-v-9fe15e20] {\n    transform: rotate(90deg)\n}\n.el-tree-node__expand-icon.is-leaf[data-v-9fe15e20] {\n    border-color: transparent;\n    cursor: default\n}\n.el-tree-node__label[data-v-9fe15e20] {\n    font-size: 12px\n}\n.el-tree-node__loading-icon[data-v-9fe15e20] {\n    margin-right: 4px;\n    font-size: 12px;\n    color: #97a8be\n}\n", ""]);

// exports


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _collapseTransition = __webpack_require__(95);

var _collapseTransition2 = _interopRequireDefault(_collapseTransition);

var _checkbox = __webpack_require__(98);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _emitter = __webpack_require__(32);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ElTreeNode',

    componentName: 'ElTreeNode',

    mixins: [_emitter2.default],

    props: {
        node: {
            default: function _default() {
                return {};
            }
        },
        props: {},
        renderContent: Function
    },

    components: {
        ElCheckbox: _checkbox2.default,
        CollapseTransition: _collapseTransition2.default,
        NodeContent: {
            props: {
                node: {
                    required: true
                }
            },
            render: function render(h) {
                var parent = this.$parent;
                var node = this.node;
                var data = node.data;
                var store = node.store;
                return parent.renderContent ? parent.renderContent.call(parent._renderProxy, h, {
                    _self: parent.tree.$vnode.context,
                    node: node,
                    data: data,
                    store: store
                }) : h(
                    'span',
                    { 'class': 'el-tree-node__label' },
                    [this.node.label]
                );
            }
        }
    },

    data: function data() {
        return {
            tree: null,
            expanded: false,
            childNodeRendered: false,
            showCheckbox: false,
            oldChecked: null,
            oldIndeterminate: null
        };
    },


    watch: {
        'node.indeterminate': function nodeIndeterminate(val) {
            this.handleSelectChange(this.node.checked, val);
        },
        'node.checked': function nodeChecked(val) {
            this.handleSelectChange(val, this.node.indeterminate);
        },
        'node.expanded': function nodeExpanded(val) {
            this.expanded = val;
            if (val) {
                this.childNodeRendered = true;
            }
        }
    },

    methods: {
        getNodeKey: function getNodeKey(node, index) {
            var nodeKey = this.tree.nodeKey;
            if (nodeKey && node) {
                return node.data[nodeKey];
            }
            return index;
        },
        handleSelectChange: function handleSelectChange(checked, indeterminate) {
            if (this.oldChecked !== checked && this.oldIndeterminate !== indeterminate) {
                this.tree.$emit('check-change', this.node.data, checked, indeterminate);
            }
            this.oldChecked = checked;
            this.indeterminate = indeterminate;
        },
        handleClick: function handleClick() {
            var store = this.tree.store;
            store.setCurrentNode(this.node);
            this.tree.$emit('current-change', store.currentNode ? store.currentNode.data : null, store.currentNode);
            this.tree.currentNode = this;
            if (this.tree.expandOnClickNode) {
                this.handleExpandIconClick();
            }
            this.tree.$emit('node-click', this.node.data, this.node, this);
        },
        handleExpandIconClick: function handleExpandIconClick() {
            if (this.node.isLeaf) return;
            if (this.expanded) {
                this.tree.$emit('node-collapse', this.node.data, this.node, this);
                this.node.collapse();
            } else {
                this.node.expand();
                this.$emit('node-expand', this.node.data, this.node, this);
            }
        },
        handleUserClick: function handleUserClick() {
            if (this.node.indeterminate) {
                this.node.setChecked(this.node.checked, !this.tree.checkStrictly);
            }
        },
        handleCheckChange: function handleCheckChange(ev) {
            if (!this.node.indeterminate) {
                this.node.setChecked(ev.target.checked, !this.tree.checkStrictly);
            }
        },
        handleChildNodeExpand: function handleChildNodeExpand(nodeData, node, instance) {
            this.broadcast('ElTreeNode', 'tree-node-expand', node);
            this.tree.$emit('node-expand', nodeData, node, instance);
        }
    },

    created: function created() {
        var _this = this;

        var parent = this.$parent;

        if (parent.isTree) {
            this.tree = parent;
        } else {
            this.tree = parent.tree;
        }

        var tree = this.tree;
        if (!tree) {
            console.warn('Can not find node\'s tree.');
        }

        var props = tree.props || {};
        var childrenKey = props['children'] || 'children';

        this.$watch('node.data.' + childrenKey, function () {
            _this.node.updateChildren();
        });

        this.showCheckbox = tree.showCheckbox;

        if (this.node.expanded) {
            this.expanded = true;
            this.childNodeRendered = true;
        }

        if (this.tree.accordion) {
            this.$on('tree-node-expand', function (node) {
                if (_this.node !== node) {
                    _this.node.collapse();
                }
            });
        }
    }
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(30);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(31);

var _createClass3 = _interopRequireDefault(_createClass2);

var _dom = __webpack_require__(96);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Transition = function () {
    function Transition() {
        (0, _classCallCheck3.default)(this, Transition);
    }

    (0, _createClass3.default)(Transition, [{
        key: 'beforeEnter',
        value: function beforeEnter(el) {
            (0, _dom.addClass)(el, 'collapse-transition');
            if (!el.dataset) el.dataset = {};

            el.dataset.oldPaddingTop = el.style.paddingTop;
            el.dataset.oldPaddingBottom = el.style.paddingBottom;

            el.style.height = '0';
            el.style.paddingTop = 0;
            el.style.paddingBottom = 0;
        }
    }, {
        key: 'enter',
        value: function enter(el) {
            el.dataset.oldOverflow = el.style.overflow;
            if (el.scrollHeight !== 0) {
                el.style.height = el.scrollHeight + 'px';
                el.style.paddingTop = el.dataset.oldPaddingTop;
                el.style.paddingBottom = el.dataset.oldPaddingBottom;
            } else {
                el.style.height = '';
                el.style.paddingTop = el.dataset.oldPaddingTop;
                el.style.paddingBottom = el.dataset.oldPaddingBottom;
            }

            el.style.overflow = 'hidden';
        }
    }, {
        key: 'afterEnter',
        value: function afterEnter(el) {
            (0, _dom.removeClass)(el, 'collapse-transition');
            el.style.height = '';
            el.style.overflow = el.dataset.oldOverflow;
        }
    }, {
        key: 'beforeLeave',
        value: function beforeLeave(el) {
            if (!el.dataset) el.dataset = {};
            el.dataset.oldPaddingTop = el.style.paddingTop;
            el.dataset.oldPaddingBottom = el.style.paddingBottom;
            el.dataset.oldOverflow = el.style.overflow;

            el.style.height = el.scrollHeight + 'px';
            el.style.overflow = 'hidden';
        }
    }, {
        key: 'leave',
        value: function leave(el) {
            if (el.scrollHeight !== 0) {
                (0, _dom.addClass)(el, 'collapse-transition');
                el.style.height = 0;
                el.style.paddingTop = 0;
                el.style.paddingBottom = 0;
            }
        }
    }, {
        key: 'afterLeave',
        value: function afterLeave(el) {
            (0, _dom.removeClass)(el, 'collapse-transition');
            el.style.height = '';
            el.style.overflow = el.dataset.oldOverflow;
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
        }
    }]);
    return Transition;
}();

exports.default = {
    functional: true,
    render: function render(h, _ref) {
        var children = _ref.children;

        var data = {
            on: new Transition()
        };

        return h('transition', data, children);
    }
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setStyle = exports.getStyle = exports.removeClass = exports.addClass = exports.hasClass = exports.once = exports.off = exports.on = undefined;

var _typeof2 = __webpack_require__(39);

var _typeof3 = _interopRequireDefault(_typeof2);

var _vue = __webpack_require__(97);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isServer = _vue2.default.prototype.$isServer;
var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;
var ieVersion = isServer ? 0 : Number(document.documentMode);

var trim = function trim(string) {
    return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

var camelCase = function camelCase(name) {
    return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
    }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

var on = function () {
    if (!isServer && document.addEventListener) {
        return function (element, event, handler) {
            if (element && event && handler) {
                element.addEventListener(event, handler, false);
            }
        };
    }
    return function (element, event, handler) {
        if (element && event && handler) {
            element.attachEvent('on' + event, handler);
        }
    };
}();

var off = function () {
    if (!isServer && document.removeEventListener) {
        return function (element, event, handler) {
            if (element && event) {
                element.removeEventListener(event, handler, false);
            }
        };
    }
    return function (element, event, handler) {
        if (element && event) {
            element.detachEvent('on' + event, handler);
        }
    };
}();

var once = function once(el, event, fn) {
    var listener = function listener() {
        if (fn) {
            fn.apply(this, arguments);
        }
        off(el, event, listener);
    };

    on(el, event, listener);
};

var hasClass = function hasClass(el, cls) {
    if (!el || !cls) return false;
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
    if (el.classList) {
        return el.classList.contains(cls);
    }
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
};

var addClass = function addClass(el, cls) {
    if (!el) return;
    var curClass = el.className;
    var classes = (cls || '').split(' ');

    for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i];

        if (!clsName) continue;

        if (el.classList) {
            el.classList.add(clsName);
        } else {
            if (!hasClass(el, clsName)) {
                curClass += ' ' + clsName;
            }
        }
    }
    if (!el.classList) {
        el.className = curClass;
    }
};

var removeClass = function removeClass(el, cls) {
    if (!el || !cls) return;
    var classes = cls.split(' ');
    var curClass = ' ' + el.className + ' ';

    for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i];

        if (!clsName) continue;

        if (el.classList) {
            el.classList.remove(clsName);
        } else {
            if (hasClass(el, clsName)) {
                curClass = curClass.replace(' ' + clsName + ' ', ' ');
            }
        }
    }
    if (!el.classList) {
        el.className = trim(curClass);
    }
};

var getStyle = ieVersion < 9 ? function (element, styleName) {
    if (isServer) return;
    if (!element || !styleName) return null;
    styleName = camelCase(styleName);
    if (styleName === 'float') {
        styleName = 'styleFloat';
    }
    try {
        switch (styleName) {
            case 'opacity':
                try {
                    return element.filters.item('alpha').opacity / 100;
                } catch (e) {
                    return 1.0;
                }
            default:
                return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
        }
    } catch (e) {
        return element.style[styleName];
    }
} : function (element, styleName) {
    if (isServer) return;
    if (!element || !styleName) return null;
    styleName = camelCase(styleName);
    if (styleName === 'float') {
        styleName = 'cssFloat';
    }
    try {
        var computed = document.defaultView.getComputedStyle(element, '');

        return element.style[styleName] || computed ? computed[styleName] : null;
    } catch (e) {
        return element.style[styleName];
    }
};

var setStyle = function setStyle(element, styleName, value) {
    if (!element || !styleName) return;
    if ((typeof styleName === 'undefined' ? 'undefined' : (0, _typeof3.default)(styleName)) === 'object') {
        for (var prop in styleName) {
            if (styleName.hasOwnProperty(prop)) {
                setStyle(element, prop, styleName[prop]);
            }
        }
    } else {
        styleName = camelCase(styleName);
        if (styleName === 'opacity' && ieVersion < 9) {
            element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
        } else {
            element.style[styleName] = value;
        }
    }
};

exports.on = on;
exports.off = off;
exports.once = once;
exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.getStyle = getStyle;
exports.setStyle = setStyle;

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_97__;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _checkbox = __webpack_require__(99);

var _checkbox2 = _interopRequireDefault(_checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_checkbox2.default.install = function (Vue) {
    Vue.component(_checkbox2.default.name, _checkbox2.default);
};

exports.default = _checkbox2.default;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(100)

var Component = __webpack_require__(10)(
  /* script */
  __webpack_require__(102),
  /* template */
  __webpack_require__(103),
  /* scopeId */
  "data-v-7265ac3a",
  /* cssModules */
  null
)
Component.options.__file = "/Users/rubyisapm/teamshare/adc-packages/tree/src/component/checkbox/src/checkbox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] checkbox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7265ac3a", Component.options)
  } else {
    hotAPI.reload("data-v-7265ac3a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(101);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(17)("296e6489", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7265ac3a\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./checkbox.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7265ac3a\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./checkbox.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n.el-checkbox[data-v-7265ac3a], .el-checkbox__input[data-v-7265ac3a] {\n    white-space: nowrap;\n    cursor: pointer;\n    display: inline-block;\n    position: relative\n}\n.el-checkbox[data-v-7265ac3a] {\n    color: #1f2d3d;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none\n}\n.el-checkbox + .el-checkbox[data-v-7265ac3a] {\n    margin-left: 15px\n}\n.el-checkbox__input[data-v-7265ac3a] {\n    outline: 0;\n    line-height: 1;\n    vertical-align: middle\n}\n.el-checkbox__input.is-indeterminate .el-checkbox__inner[data-v-7265ac3a] {\n    background-color: #20a0ff;\n    border-color: #0190fe\n}\n.el-checkbox__input.is-indeterminate .el-checkbox__inner[data-v-7265ac3a]::before {\n    content: '';\n    position: absolute;\n    display: block;\n    border: 1px solid #fff;\n    margin-top: -1px;\n    left: 3px;\n    right: 3px;\n    top: 50%\n}\n.el-checkbox__input.is-indeterminate .el-checkbox__inner[data-v-7265ac3a]::after {\n    display: none\n}\n.el-checkbox__input.is-focus .el-checkbox__inner[data-v-7265ac3a] {\n    border-color: #20a0ff\n}\n.el-checkbox__input.is-checked .el-checkbox__inner[data-v-7265ac3a] {\n    background-color: #20a0ff;\n    border-color: #0190fe\n}\n.el-checkbox__input.is-checked .el-checkbox__inner[data-v-7265ac3a]::after {\n    transform: rotate(45deg) scaleY(1)\n}\n.el-checkbox__input.is-disabled .el-checkbox__inner[data-v-7265ac3a] {\n    background-color: #eef1f6;\n    border-color: #d1dbe5;\n    cursor: not-allowed\n}\n.el-checkbox__input.is-disabled .el-checkbox__inner[data-v-7265ac3a]::after {\n    cursor: not-allowed;\n    border-color: #eef1f6\n}\n.el-checkbox__input.is-disabled .el-checkbox__inner + .el-checkbox__label[data-v-7265ac3a] {\n    cursor: not-allowed\n}\n.el-checkbox__input.is-disabled.is-checked .el-checkbox__inner[data-v-7265ac3a] {\n    background-color: #d1dbe5;\n    border-color: #d1dbe5\n}\n.el-checkbox__input.is-disabled.is-checked .el-checkbox__inner[data-v-7265ac3a]::after {\n    border-color: #fff\n}\n.el-checkbox__input.is-disabled.is-indeterminate .el-checkbox__inner[data-v-7265ac3a] {\n    background-color: #d1dbe5;\n    border-color: #d1dbe5\n}\n.el-checkbox__input.is-disabled.is-indeterminate .el-checkbox__inner[data-v-7265ac3a]::before {\n    border-color: #fff\n}\n.el-checkbox__input.is-disabled + .el-checkbox__label[data-v-7265ac3a] {\n    color: #bbb;\n    cursor: not-allowed\n}\n.el-checkbox__inner[data-v-7265ac3a] {\n    display: inline-block;\n    position: relative;\n    border: 1px solid #bfcbd9;\n    border-radius: 4px;\n    box-sizing: border-box;\n    width: 16px;\n    height: 16px;\n    background-color: #fff;\n    z-index: 1;\n    transition: border-color .25s cubic-bezier(.71, -.46, .29, 1.46), background-color .25s cubic-bezier(.71, -.46, .29, 1.46)\n}\n.el-checkbox__inner[data-v-7265ac3a]:hover {\n    border-color: #20a0ff\n}\n.el-checkbox__inner[data-v-7265ac3a]::after {\n    box-sizing: content-box;\n    content: \"\";\n    border: 2px solid #fff;\n    border-left: 0;\n    border-top: 0;\n    height: 6px;\n    left: 4px;\n    position: absolute;\n    top: 2px;\n    transform: rotate(45deg) scaleY(0);\n    width: 4px;\n    transition: transform .15s cubic-bezier(.71, -.46, .88, .6) .05s;\n    transform-origin: center\n}\n.el-checkbox__original[data-v-7265ac3a] {\n    opacity: 0;\n    outline: 0;\n    position: absolute;\n    margin: 0;\n    left: -999px\n}\n.el-checkbox__label[data-v-7265ac3a] {\n    font-size: 14px;\n    padding-left: 5px\n}\n", ""]);

// exports


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _emitter = __webpack_require__(32);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ElCheckbox',

    mixins: [_emitter2.default],

    componentName: 'ElCheckbox',

    data: function data() {
        return {
            selfModel: false,
            focus: false
        };
    },


    computed: {
        model: {
            get: function get() {
                return this.isGroup ? this.store : this.value !== undefined ? this.value : this.selfModel;
            },
            set: function set(val) {
                if (this.isGroup) {
                    this.dispatch('ElCheckboxGroup', 'input', [val]);
                } else if (this.value !== undefined) {
                    this.$emit('input', val);
                } else {
                    this.selfModel = val;
                }
            }
        },

        isChecked: function isChecked() {
            if ({}.toString.call(this.model) === '[object Boolean]') {
                return this.model;
            } else if (Array.isArray(this.model)) {
                return this.model.indexOf(this.label) > -1;
            } else if (this.model !== null && this.model !== undefined) {
                return this.model === this.trueLabel;
            }
        },
        isGroup: function isGroup() {
            var parent = this.$parent;
            while (parent) {
                if (parent.$options.componentName !== 'ElCheckboxGroup') {
                    parent = parent.$parent;
                } else {
                    this._checkboxGroup = parent;
                    return true;
                }
            }
            return false;
        },
        store: function store() {
            return this._checkboxGroup ? this._checkboxGroup.value : this.value;
        }
    },

    props: {
        value: {},
        label: {},
        indeterminate: Boolean,
        disabled: Boolean,
        checked: Boolean,
        name: String,
        trueLabel: [String, Number],
        falseLabel: [String, Number]
    },

    methods: {
        addToStore: function addToStore() {
            if (Array.isArray(this.model) && this.model.indexOf(this.label) === -1) {
                this.model.push(this.label);
            } else {
                this.model = this.trueLabel || true;
            }
        },
        handleChange: function handleChange(ev) {
            var _this = this;

            this.$emit('change', ev);
            if (this.isGroup) {
                this.$nextTick(function (_) {
                    _this.dispatch('ElCheckboxGroup', 'change', [_this._checkboxGroup.value]);
                });
            }
        }
    },

    created: function created() {
        this.checked && this.addToStore();
    }
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "el-checkbox"
  }, [_c('span', {
    staticClass: "el-checkbox__input",
    class: {
      'is-disabled': _vm.disabled,
      'is-checked': _vm.isChecked,
      'is-indeterminate': _vm.indeterminate,
      'is-focus': _vm.focus
    }
  }, [_c('span', {
    staticClass: "el-checkbox__inner"
  }), _vm._v(" "), (_vm.trueLabel || _vm.falseLabel) ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.model),
      expression: "model"
    }],
    staticClass: "el-checkbox__original",
    attrs: {
      "type": "checkbox",
      "name": _vm.name,
      "disabled": _vm.disabled,
      "true-value": _vm.trueLabel,
      "false-value": _vm.falseLabel
    },
    domProps: {
      "checked": Array.isArray(_vm.model) ? _vm._i(_vm.model, null) > -1 : _vm._q(_vm.model, _vm.trueLabel)
    },
    on: {
      "change": [function($event) {
        var $$a = _vm.model,
          $$el = $event.target,
          $$c = $$el.checked ? (_vm.trueLabel) : (_vm.falseLabel);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.model = $$a.concat([$$v]))
          } else {
            $$i > -1 && (_vm.model = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.model = $$c
        }
      }, _vm.handleChange],
      "focus": function($event) {
        _vm.focus = true
      },
      "blur": function($event) {
        _vm.focus = false
      }
    }
  }) : _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.model),
      expression: "model"
    }],
    staticClass: "el-checkbox__original",
    attrs: {
      "type": "checkbox",
      "disabled": _vm.disabled,
      "name": _vm.name
    },
    domProps: {
      "value": _vm.label,
      "checked": Array.isArray(_vm.model) ? _vm._i(_vm.model, _vm.label) > -1 : (_vm.model)
    },
    on: {
      "change": [function($event) {
        var $$a = _vm.model,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = _vm.label,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.model = $$a.concat([$$v]))
          } else {
            $$i > -1 && (_vm.model = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.model = $$c
        }
      }, _vm.handleChange],
      "focus": function($event) {
        _vm.focus = true
      },
      "blur": function($event) {
        _vm.focus = false
      }
    }
  })]), _vm._v(" "), (_vm.$slots.default || _vm.label) ? _c('span', {
    staticClass: "el-checkbox__label"
  }, [_vm._t("default"), _vm._v(" "), (!_vm.$slots.default) ? [_vm._v(_vm._s(_vm.label))] : _vm._e()], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7265ac3a", module.exports)
  }
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.node.visible),
      expression: "node.visible"
    }],
    staticClass: "el-tree-node",
    class: {
      'is-expanded': _vm.childNodeRendered && _vm.expanded,
        'is-current': _vm.tree.store.currentNode === _vm.node,
        'is-hidden': !_vm.node.visible
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.handleClick($event)
      }
    }
  }, [_c('div', {
    staticClass: "el-tree-node__content",
    style: ({
      'padding-left': (_vm.node.level - 1) * _vm.tree.indent + 'px'
    })
  }, [_c('span', {
    staticClass: "el-tree-node__expand-icon",
    class: {
      'is-leaf': _vm.node.isLeaf, expanded: !_vm.node.isLeaf && _vm.expanded
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.handleExpandIconClick($event)
      }
    }
  }), _vm._v(" "), (_vm.showCheckbox) ? _c('el-checkbox', {
    attrs: {
      "indeterminate": _vm.node.indeterminate
    },
    on: {
      "change": _vm.handleCheckChange
    },
    nativeOn: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.handleUserClick($event)
      }
    },
    model: {
      value: (_vm.node.checked),
      callback: function($$v) {
        _vm.$set(_vm.node, "checked", $$v)
      },
      expression: "node.checked"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.node.loading) ? _c('span', {
    staticClass: "el-tree-node__loading-icon el-icon-loading"
  }) : _vm._e(), _vm._v(" "), _c('node-content', {
    attrs: {
      "node": _vm.node
    }
  })], 1), _vm._v(" "), _c('collapse-transition', [(!_vm.childNodeRendered) ? [(_vm.expanded) ? _c('div', {
    staticClass: "el-tree-node__children"
  }, _vm._l((_vm.node.childNodes), function(child) {
    return _c('el-tree-node', {
      key: _vm.getNodeKey(child),
      attrs: {
        "render-content": _vm.renderContent,
        "node": child
      },
      on: {
        "node-expand": _vm.handleChildNodeExpand
      }
    })
  })) : _vm._e()] : _vm._e(), _vm._v(" "), (_vm.childNodeRendered) ? [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.expanded),
      expression: "expanded"
    }],
    staticClass: "el-tree-node__children"
  }, _vm._l((_vm.node.childNodes), function(child) {
    return _c('el-tree-node', {
      key: _vm.getNodeKey(child),
      attrs: {
        "render-content": _vm.renderContent,
        "node": child
      },
      on: {
        "node-expand": _vm.handleChildNodeExpand
      }
    })
  }))] : _vm._e()], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9fe15e20", module.exports)
  }
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "el-tree",
    class: {
      'el-tree--highlight-current': _vm.highlightCurrent
    }
  }, [_vm._l((_vm.root.childNodes), function(child) {
    return _c('el-tree-node', {
      key: _vm.getNodeKey(child),
      attrs: {
        "node": child,
        "props": _vm.props,
        "render-content": _vm.renderContent
      },
      on: {
        "node-expand": _vm.handleNodeExpand
      }
    })
  }), _vm._v(" "), (!_vm.root.childNodes || _vm.root.childNodes.length === 0) ? _c('div', {
    staticClass: "el-tree__empty-block"
  }, [_c('span', {
    staticClass: "el-tree__empty-text"
  }, [_vm._v(_vm._s(_vm.emptyText))])]) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-27ef0262", module.exports)
  }
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(10)(
  /* script */
  __webpack_require__(107),
  /* template */
  __webpack_require__(109),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/rubyisapm/teamshare/adc-packages/tree/src/component/area-tree/area-tree.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] area-tree.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-30503966", Component.options)
  } else {
    hotAPI.reload("data-v-30503966", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tree = __webpack_require__(33);

var _tree2 = _interopRequireDefault(_tree);

var _dataTransfer = __webpack_require__(108);

var _dataTransfer2 = _interopRequireDefault(_dataTransfer);

var _ctUtility = __webpack_require__(47);

var _ctUtility2 = _interopRequireDefault(_ctUtility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'area-tree',
    components: {
        tree: _tree2.default
    },
    props: {
        sep: {
            type: String,
            default: '-'
        },
        selected: {
            type: [Array, String],
            default: function _default() {
                return [];
            }
        }
    },
    data: function data() {
        return {
            loadNode: _dataTransfer2.default.loadNode
        };
    },
    mounted: function mounted() {
        this.setChecked(this.selected);
    },

    methods: {
        getChecked: function getChecked(readable) {
            var that = this;
            var checkedKeys = this.$refs.areaList.getCheckedKeys(false);
            checkedKeys.sort();
            var filtered = checkedKeys.filter(function (item, index, arr) {
                var cityOfHasP = item.length == 4 && arr.indexOf(item.substr(0, 2)) > -1;
                var regionOfHasC = item.length == 6 && arr.indexOf(item.substr(0, 4)) > -1;
                return !(cityOfHasP || regionOfHasC);
            });
            if (readable) {
                return filtered.map(function (item) {
                    return _ctUtility2.default.areaDataFormat.getAreaNameById(item, that.sep);
                });
            } else {
                return filtered;
            }
        },
        setChecked: function setChecked(areaToAdd) {
            var nodes = [];
            var areaList;
            if (typeof areaToAdd === 'string') {
                if (!/^\s*$/.test(areaToAdd)) {
                    try {
                        areaList = JSON.parse(areaToAdd);
                    } catch (e) {
                        areaList = areaToAdd.split(/,|，/);
                    }
                } else {
                    areaList = [];
                }
            } else {
                areaList = areaToAdd;
            }
            if (areaList.length > 0) {
                if (/^\d+$/.test(areaList[0] + '')) {
                    areaList.map(function (item) {
                        nodes = nodes.concat(_dataTransfer2.default.getNodesById(item + ''));
                    });
                } else {
                    areaList.map(function (item) {
                        nodes = nodes.concat(_dataTransfer2.default.getNodesByName(item));
                    });
                }
            }
            this.$refs.areaList.setCheckedNodes(nodes);
        },
        checkedChange: function checkedChange() {
            var that = this;
            setTimeout(function () {
                that.$emit('change', that.getChecked(true));
            });
        }
    },
    watch: {
        selected: function selected(newVal) {
            this.setChecked(newVal);
        }
    }
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ctUtility = __webpack_require__(47);

var _ctUtility2 = _interopRequireDefault(_ctUtility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    getNodesById: function getNodesById(id) {
        var areaName = _ctUtility2.default.areaDataFormat.getAreaNameById(id);
        return this.getNodesByName(areaName);
    },

    getNodesByName: function getNodesByName(name) {
        var nameArr = name.split(/[^\u4e00-\u9fa5]+/),
            provinceName = nameArr[0],
            cityName = nameArr[1],
            regionName = nameArr[2],
            cities,
            regions,
            nodes = [];
        if (_ctUtility2.default.areaDataFormat.areaType(name) === 'province') {
            cities = _ctUtility2.default.areaDataFormat.getCitiesOfProvinceName(provinceName);
            cities.map(function (city) {
                regions = _ctUtility2.default.areaDataFormat.getRegionsOfCityName(city.Name);
                if (regions.length === 0) {
                    nodes = nodes.concat(city);
                } else {
                    nodes = nodes.concat(regions);
                }
            });
        } else if (_ctUtility2.default.areaDataFormat.areaType(name) === 'city') {
            cities = _ctUtility2.default.areaDataFormat.getCitiesOfProvinceName(provinceName);
            regions = _ctUtility2.default.areaDataFormat.getRegionsOfCityName(cityName);
            if (regions.length === 0) {
                nodes = cities.filter(function (city) {
                    return city.Name === cityName;
                });
            } else {
                nodes = regions;
            }
        } else {
            regions = _ctUtility2.default.areaDataFormat.getRegionsOfCityName(cityName);
            nodes = regions.filter(function (region) {
                return region.Name === regionName;
            });
        }
        return nodes;
    },

    loadNode: function loadNode(node, resolve) {
        if (node.level === 0) {
            return resolve(AREA.province);
        }
        if (node.level === 1 && AREA.city[node.data.Name]) {
            return resolve(AREA.city[node.data.Name]);
        } else if (node.level === 2 && AREA.region[node.data.Name]) {
            return resolve(AREA.region[node.data.Name]);
        } else {
            return resolve([]);
        }
    }
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tree', {
    ref: "areaList",
    attrs: {
      "show-checkbox": "",
      "props": {
        label: 'Name'
      },
      "load": _vm.loadNode,
      "lazy": "",
      "node-key": "ID"
    },
    on: {
      "check-change": _vm.checkedChange
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-30503966", module.exports)
  }
}

/***/ })
/******/ ]);
});