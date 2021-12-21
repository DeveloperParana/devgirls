// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"11zn2":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "3a6cf3c0e7f05703";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"jZgE0":[function(require,module,exports) {
var _textOnPath = require("./animations/text-on-path");
var _accordion = require("./elements/accordion");
var _details = require("./elements/details");
const details = document.querySelectorAll('details');
const detailsList = Array.from(details).map((el)=>new _details.Details(el)
);
const accordion = new _accordion.Accordion(detailsList);
const svgTexts = document.querySelectorAll('svg.svgtext');
svgTexts.forEach((el)=>new _textOnPath.TextOnPath(el)
);
const textPath = document.querySelector("#text-path");
const h = document.documentElement, b = document.body, st = 'scrollTop', sh = 'scrollHeight';
document.addEventListener("scroll", (e)=>{
    console.log(textPath);
    let percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    textPath?.setAttribute("start-offset", -percent * 40 + 1200 + '');
});

},{"./animations/text-on-path":"fJh2K","./elements/accordion":"fY6Uh","./elements/details":"bB5tb"}],"fJh2K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TextOnPath", ()=>TextOnPath
);
var _filterPrimitive = require("../utilities/filter-primitive");
var _isFirefox = require("../utilities/is-firefox");
var _math = require("../utilities/math");
var _winsize = require("../utilities/winsize");
class TextOnPath {
    constructor(svgEl){
        this.svgEl = svgEl;
        this.pathLength = 0;
        this.isVisible = false;
        this.entered = false;
        // The SVG element
        this.DOM = {
            svg: svgEl
        };
        // The text element
        this.DOM.text = this.DOM.svg.querySelector('text');
        // Sadly firefox does not yet play nicely with SVG filters, so take them out if any applied to the text element..
        if (_isFirefox.isFirefox) this.DOM.text?.removeAttribute('filter');
        // Get the filter to know which one to get the primitive from
        // The textPath element
        this.DOM.textPath = this.DOM.text?.querySelector('textPath');
        // The filter type (defined in the svg element as data-filter-type)
        const filterType = this.DOM.svg.dataset.filterType;
        // The filter element id
        const filter = this.DOM.text && this.DOM.text.getAttribute('filter');
        let filterId;
        if (!!filter) filterId = this.DOM.text?.getAttribute('filter') && filter.match(/url\(["']?([^"']*)["']?\)/)?.[1];
        // The SVG filter primitive object
        // This is where the logic of the svg filter is done for the update on scroll
        // Depending on what filter type we set up in the data-filter-type, a specific filter primitive attribute will get updated depending on the scroll speed
        this.filterPrimitive = filterType && filterId && new _filterPrimitive.FilterPrimitive(filterType, filterId);
        // The path total length
        this.pathLength = this.DOM.svg?.querySelector('path')?.getTotalLength();
        // SVG element's size/position 
        this.svgRect = this.DOM.svg.getBoundingClientRect();
        // this is the svg element top value relative to the document
        // To calculate this, we need to get the top value relative to the viewport and sum the current page scroll
        this.positionY = this.svgRect.top + window.pageYOffset;
        // Recalculate on window resize
        window.addEventListener('resize', ()=>{
            this.svgRect = this.DOM.svg.getBoundingClientRect();
            this.positionY = this.svgRect.top + window.pageYOffset;
        });
        // In order to smooth the text animation, we will use linear interpolation to calculate the value of the startOffset
        // "value" is the current interpolated value and "amt" the amount to interpolate
        this.startOffset = {
            value: this.computeOffset(),
            amt: 0.22
        };
        // Calculate and set initial startOffset value
        this.startOffset.value = this.computeOffset();
        this.updateTextPathOffset();
        // Interpolated scroll value. 
        // This will be used to calculate the text blur value which will change proportionally to the scrolling speed
        // To calculate the speed, we use the distance from the current scroll value to the previous scroll value (or interpolated one)
        this.scroll = {
            value: window.pageYOffset,
            amt: 0.17
        };
        // By using the IntersectionObserverAPI to check when the SVG element in inside the viewport, we can avoid calculating and updating the values for the elements outside the viewport
        this.observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                this.isVisible = entry.intersectionRatio > 0;
                if (!this.isVisible) {
                    this.entered = false;
                    // reset
                    this.update();
                }
            });
        });
        this.observer.observe(this.DOM.svg);
        // rAF/loop
        requestAnimationFrame(()=>this.render()
        );
    }
    // Calculate the textPath element startOffset value
    // This will allow us to position the text, depending on the current scroll position
    computeOffset() {
        // We want the text to start appearing from the right side of the screen when it comes into the viewport. 
        // This translates into saying that the text startOffset should have it's highest value (total path length) when the svg top value minus the page scroll equals the viewport height and it's lowest value (this case -this.pathLength/2) when it equals 0 (element is on the top part of the viewport)
        return _math.map(this.positionY - window.pageYOffset, _winsize.winsize.height, 0, this.pathLength, -this.pathLength / 2);
    }
    // Updates the text startOffset value
    updateTextPathOffset() {
        this.DOM.textPath?.setAttribute('startOffset', this.startOffset?.value + '');
    }
    update() {
        // Calculate and set the interpolated startOffset value
        const currentOffset = this.computeOffset();
        this.startOffset.value = !this.entered ? currentOffset : _math.lerp(+this.startOffset?.value, currentOffset, this.startOffset?.amt);
        this.updateTextPathOffset();
        // SVG Filter related:
        // The current scroll value
        const currentScroll = window.pageYOffset;
        // Interpolated scroll value
        this.scroll.value = !this.entered ? currentScroll : _math.lerp(this.scroll.value, currentScroll, this.scroll.amt);
        // Distance between the current and interpolated scroll value
        const distance = Math.abs(this.scroll.value - currentScroll);
        // Update the filter primitive attribute that changes as the scroll speed increases
        this.filterPrimitive && this.filterPrimitive.update(distance);
        if (!this.entered) this.entered = true;
    }
    render() {
        if (this.isVisible) this.update();
        // ...
        requestAnimationFrame(()=>this.render()
        );
    }
}

},{"../utilities/filter-primitive":"jlmiv","../utilities/is-firefox":"5lAba","../utilities/math":"imD1d","../utilities/winsize":"gW6KX","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jlmiv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FilterPrimitive", ()=>FilterPrimitive
);
var _math = require("./math");
class FilterPrimitive {
    constructor(type, id){
        this.type = type;
        this.type = type;
        this.DOM = {
            el: document.querySelector(`${id} > ${this.getPrimitiveType(this.type)}`)
        };
    }
    getPrimitiveType(type1) {
        const types = {
            'blur': 'feGaussianBlur',
            'distortion': 'feDisplacementMap'
        };
        return types[type1];
    }
    update(distance) {
        const element = this.DOM.el;
        const numbers = {
        };
        if (element) {
            const { minDeviation =0 , maxDeviation =10 , minScale =0 , maxScale =100  } = element?.dataset;
            const blur = _math.clamp(_math.map(distance, 0, 400, +minDeviation, +maxDeviation), +minDeviation, +maxDeviation);
            const distortion = _math.clamp(_math.map(distance, 0, 200, +minScale, +maxScale), +minScale, +maxScale);
            const types = {
                // The blur stdDeviation will be 0 when the distance equals 0 and 10 when the distance equals 400
                'blur': ()=>blur
                ,
                // The displacementMap scale will be 0 when the distance equals 0 and 100 when the distance equals 200
                'distortion': ()=>element.scale.baseVal = distortion
            };
            return types[this.type]();
        }
    }
}

},{"./math":"imD1d","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"imD1d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "map", ()=>map
);
parcelHelpers.export(exports, "lerp", ()=>lerp
);
parcelHelpers.export(exports, "clamp", ()=>clamp
);
// Map number x from range [a, b] to [c, d]
function map(x, a, b, c, d) {
    return (x - a) * (d - c) / (b - a) + c;
}
// Linear interpolation
function lerp(a, b, n) {
    return (1 - n) * a + n * b;
}
// Clamp val within min and max
function clamp(val, min, max) {
    return Math.max(Math.min(val, max), min);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5lAba":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isFirefox", ()=>isFirefox
);
const isFirefox = navigator.userAgent.indexOf('Firefox') > -1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gW6KX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "winsize", ()=>winsize
);
// Viewport size
const getWinSize = ()=>{
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };
};
let winsize = getWinSize();
window.addEventListener('resize', ()=>winsize = getWinSize()
);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fY6Uh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Accordion", ()=>Accordion
);
class Accordion {
    constructor(detailsList){
        this.detailsList = detailsList;
        this.closeAllOnExpandEnabled = true;
        this.detailsList.forEach((details1)=>{
            details1.el.addEventListener('expand', ({ detail  })=>{
                this.detailsList.forEach((details)=>{
                    if (this.closeAllOnExpandEnabled && details.el.id !== detail) details.close();
                });
            });
        });
    }
    enableCloseAllOnExpand() {
        this.closeAllOnExpandEnabled = true;
    }
    disableCloseAllOnExpand() {
        this.closeAllOnExpandEnabled = false;
    }
    openAll() {
        this.detailsList.forEach((details)=>details.open()
        );
    }
    closeAll() {
        this.detailsList.forEach((details)=>details.close()
        );
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bB5tb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Details", ()=>Details
);
var _px = require("../utilities/px");
let ID = 0;
class Details {
    constructor(el){
        this.el = el;
        const index = ID++;
        this.el.dataset.id = `${index}`;
        this.el.id = `details-${index}`;
        // Armazena o elemento <summary>
        this.summary = el.querySelector('.details__summary');
        // Armazene o elemento <div class="details__content">
        this.content = el.querySelector('.details__content');
        // Armazena o objeto de animação (para que possamos cancelá-lo se necessário)
        this.animation = null;
        // Armazena se o elemento está fechando
        this.isClosing = false;
        // Armazena se o elemento está se expandindo
        this.isExpanding = false;
        // Detecta cliques do usuário no elemento de resumo
        if (this.summary) this.summary.onclick = (e)=>this.onClick(e)
        ;
    }
    onClick(e) {
        // Interrompe o comportamento padrão do navegador
        e.preventDefault();
        // Adicione um estouro em <detalhes> para evitar o estouro de conteúdo
        this.el.style.overflow = 'hidden';
        // Verifique se o elemento está sendo fechado ou já está fechado
        if (this.isClosing || !this.el.open) this.open();
        else if (this.isExpanding || this.el.open) this.close();
    }
    close() {
        // Defina o elemento como "sendo fechado"
        this.isClosing = true;
        // Armazena a altura atual do elemento
        const startHeight = _px.px(this.el.offsetHeight);
        // Calcule a altura do resumo
        let endHeight = this.summary ? _px.px(this.summary?.offsetHeight) : _px.px(75);
        // Se já houver uma animação em execução
        if (this.animation) // Cancela a animação atual
        this.animation.cancel();
        // Iniciar uma animação WAAPI
        this.animation = this.el.animate({
            // Defina os keyframes de startHeight a endHeight
            height: [
                startHeight,
                endHeight
            ]
        }, {
            duration: 400,
            easing: 'ease-out'
        });
        // Quando a animação estiver concluída, chame onAnimationFinish ()
        this.animation.onfinish = ()=>this.onAnimationFinish(false)
        ;
        // Se a animação for cancelada, a variável isClosing é definida como falsa
        this.animation.oncancel = ()=>this.isClosing = false
        ;
    }
    open() {
        // Aplicar uma altura fixa no elemento
        this.el.style.height = _px.px(this.el.offsetHeight);
        // Força o atributo [abrir] no elemento de detalhes
        this.el.open = true;
        this.el.dispatchEvent(new CustomEvent('expand', {
            detail: this.el.id
        }));
        // Aguarde o próximo quadro para chamar a função de expansão
        requestAnimationFrame(()=>this.expand()
        );
    }
    expand() {
        // Defina o elemento como "em expansão"
        this.isExpanding = true;
        // Obtenha a altura fixa atual do elemento
        const startHeight = _px.px(this.el.offsetHeight);
        // Calcule a altura aberta do elemento (altura do resumo + altura do conteúdo)
        const endHeight = this.summary && this.content ? _px.px(this.summary.offsetHeight + this.content.offsetHeight) : _px.px(75);
        // Se já houver uma animação em execução
        if (this.animation) // Cancela a animação atual
        this.animation.cancel();
        // Iniciar uma animação WAAPI
        this.animation = this.el.animate({
            // Defina os quadros-chave de startHeight a endHeight
            height: [
                startHeight,
                endHeight
            ]
        }, {
            duration: 400,
            easing: 'ease-out'
        });
        // Quando a animação estiver concluída, chame onAnimationFinish ()
        this.animation.onfinish = ()=>this.onAnimationFinish(true)
        ;
        // Se a animação for cancelada, a variável isExpanding é definida como falsa
        this.animation.oncancel = ()=>this.isExpanding = false
        ;
    }
    onAnimationFinish(open) {
        // Defina o atributo aberto com base no parâmetro
        this.el.open = open;
        // Limpa a animação armazenada
        this.animation = null;
        // Redefinir isClosing & isExpanding
        this.isClosing = false;
        this.isExpanding = false;
        // Remova o estouro oculto e a altura fixa
        this.el.style.height = this.el.style.overflow = '';
    }
}

},{"../utilities/px":"8NX6I","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8NX6I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "px", ()=>px
);
function px(n) {
    return `${n}px`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["11zn2","jZgE0"], "jZgE0", "parcelRequire8d52")

//# sourceMappingURL=index.e7f05703.js.map
