(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cytoscapeMarll"] = factory();
	else
		root["cytoscapeMarll"] = factory();
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assign.js":
/*!***********************!*\
  !*** ./src/assign.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Simple, internal Object.assign() polyfill for options objects etc.

module.exports = Object.assign != null ? Object.assign.bind(Object) : function (tgt) {
  for (var _len = arguments.length, srcs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    srcs[_key - 1] = arguments[_key];
  }

  srcs.forEach(function (src) {
    Object.keys(src).forEach(function (k) {
      return tgt[k] = src[k];
    });
  });

  return tgt;
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var impl = __webpack_require__(/*! ./layout */ "./src/layout/index.js");

// registers the extension on a cytoscape lib ref
var register = function register(cytoscape) {
  if (!cytoscape) {
    return;
  } // can't register if cytoscape unspecified

  cytoscape('layout', 'marll', impl); // register with cytoscape.js
};

if (typeof cytoscape !== 'undefined') {
  // expose to global cytoscape (i.e. window.cytoscape)
  register(cytoscape);
}

module.exports = register;

/***/ }),

/***/ "./src/layout/FDLayout.js":
/*!********************************!*\
  !*** ./src/layout/FDLayout.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FDLayout = function () {
	function FDLayout(options) {
		_classCallCheck(this, FDLayout);

		this.options = options;
		this.totalDisplacement = 0.0;
		this.oldTotalDisplacement = 0.0;
		this.displacementThresholdPerNode = 1.0 * options.idealEdgeLength / 100;
		this.totalDisplacementThreshold = this.displacementThresholdPerNode * options.nodes.length;
	}

	_createClass(FDLayout, [{
		key: 'calcSpringForce',
		value: function calcSpringForce(edge) {
			var sourceNode = edge.source();
			var targetNode = edge.target();
			var sourcePos = sourceNode.scratch('marll');
			var targetPos = targetNode.scratch('marll');

			var lengthX = targetPos.x - sourcePos.x;
			var lengthY = targetPos.y - sourcePos.y;
			var springForce;
			var springForceX;
			var springForceY;

			length = Math.sqrt(lengthX * lengthX + lengthY * lengthY);

			if (length == 0) return;

			// Calculate spring forces
			springForce = this.options.springConstant * (length - this.options.idealEdgeLength);

			// Project force onto x and y axes
			springForceX = springForce * (lengthX / length);
			springForceY = springForce * (lengthY / length);

			// Apply forces on the end nodes
			sourceNode.scratch('marll').springForceX += springForceX;
			sourceNode.scratch('marll').springForceY += springForceY;
			targetNode.scratch('marll').springForceX -= springForceX;
			targetNode.scratch('marll').springForceY -= springForceY;
		}
	}, {
		key: 'calcSpringForces',
		value: function calcSpringForces() {
			var edge;

			for (var i = 0; i < this.options.edges.length; i++) {
				edge = this.options.edges[i];

				this.calcSpringForce(edge);
			}
		}
	}, {
		key: 'calcRepulsionForce',
		value: function calcRepulsionForce(nodeA, nodeB) {
			var distanceX = nodeB.scratch('marll').x - nodeA.scratch('marll').x;
			var distanceY = nodeB.scratch('marll').y - nodeA.scratch('marll').y;
			var distanceSquared = distanceX * distanceX + distanceY * distanceY;
			var distance = Math.sqrt(distanceSquared);

			var repulsionForce = this.options.repulsionConstant / distanceSquared;

			// Project force onto x and y axes
			var repulsionForceX = repulsionForce * distanceX / distance;
			var repulsionForceY = repulsionForce * distanceY / distance;

			// Apply forces on the two nodes
			nodeA.scratch('marll').repulsionForceX -= repulsionForceX;
			nodeA.scratch('marll').repulsionForceY -= repulsionForceY;
			nodeB.scratch('marll').repulsionForceX += repulsionForceX;
			nodeB.scratch('marll').repulsionForceY += repulsionForceY;
		}
	}, {
		key: 'calcRepulsionForces',
		value: function calcRepulsionForces() {
			for (var i = 0; i < this.options.nodes.length; i++) {
				var nodeA = this.options.nodes[i];

				for (var j = i + 1; j < this.options.nodes.length; j++) {
					var nodeB = this.options.nodes[j];
					this.calcRepulsionForce(nodeA, nodeB);
				}
			}
		}
	}, {
		key: 'isConverged',
		value: function isConverged() {
			var oscilating = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2;
			var converged = this.totalDisplacement < this.totalDisplacementThreshold;

			this.oldTotalDisplacement = this.totalDisplacement;
			this.totalDisplacement = 0;
			return converged || oscilating;
		}
	}]);

	return FDLayout;
}();

exports.FDLayout = FDLayout;

/***/ }),

/***/ "./src/layout/continuous-base/defaults.js":
/*!************************************************!*\
  !*** ./src/layout/continuous-base/defaults.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// general default options for force-directed layout

module.exports = Object.freeze({
	animate: true, // whether to show the layout as it's running; special 'end' value makes the layout animate like a discrete layout
	refresh: 10, // number of ticks per frame; higher is faster but more jerky
	maxIterations: 1000, // max iterations before the layout will bail out
	maxSimulationTime: 40000, // max length in ms to run the layout
	ungrabifyWhileSimulating: false, // so you can't drag nodes during layout
	fit: true, // on every layout reposition of nodes, fit the viewport
	padding: 30, // padding around the simulation
	boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }

	// layout event callbacks
	ready: function ready() {}, // on layoutready
	stop: function stop() {}, // on layoutstop

	// positioning options
	randomize: true, // use random node positions at beginning of layout

	// infinite layout options
	infinite: false // overrides all other options for a forces-all-the-time mode

});

/***/ }),

/***/ "./src/layout/continuous-base/index.js":
/*!*********************************************!*\
  !*** ./src/layout/continuous-base/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
A generic continuous layout class
*/

var assign = __webpack_require__(/*! ../../assign */ "./src/assign.js");
var defaults = __webpack_require__(/*! ./defaults */ "./src/layout/continuous-base/defaults.js");
var makeBoundingBox = __webpack_require__(/*! ./make-bb */ "./src/layout/continuous-base/make-bb.js");

var _require = __webpack_require__(/*! ./position */ "./src/layout/continuous-base/position.js"),
    setInitialPositionState = _require.setInitialPositionState,
    refreshPositions = _require.refreshPositions,
    getNodePositionData = _require.getNodePositionData;

var _require2 = __webpack_require__(/*! ./tick */ "./src/layout/continuous-base/tick.js"),
    multitick = _require2.multitick;

var ContinuousLayout = function () {
  function ContinuousLayout(options) {
    _classCallCheck(this, ContinuousLayout);

    var o = this.options = assign({}, defaults, options);

    var s = this.state = assign({}, o, {
      layout: this,
      nodes: o.eles.nodes(),
      edges: o.eles.edges(),
      tickIndex: 0,
      firstUpdate: true
    });

    s.animateEnd = o.animate && o.animate === 'end';
    s.animateContinuously = o.animate && !s.animateEnd;
  }

  _createClass(ContinuousLayout, [{
    key: 'getScratch',
    value: function getScratch(el) {
      var name = this.state.name;
      var scratch = el.scratch(name);

      if (!scratch) {
        scratch = {};

        el.scratch(name, scratch);
      }

      return scratch;
    }
  }, {
    key: 'run',
    value: function run() {
      var l = this;
      var s = this.state;

      s.tickIndex = 0;
      s.firstUpdate = true;

      s.running = true;

      s.currentBoundingBox = makeBoundingBox(s.boundingBox, s.cy);

      if (s.ready) {
        l.one('ready', s.ready);
      }
      if (s.stop) {
        l.one('stop', s.stop);
      }

      s.nodes.forEach(function (n) {
        return setInitialPositionState(n, s);
      });

      l.prerun(s);

      if (s.animateContinuously) {
        var ungrabify = function ungrabify(node) {
          if (!s.ungrabifyWhileSimulating) {
            return;
          }

          var grabbable = getNodePositionData(node, s).grabbable = node.grabbable();

          if (grabbable) {
            node.ungrabify();
          }
        };

        var regrabify = function regrabify(node) {
          if (!s.ungrabifyWhileSimulating) {
            return;
          }

          var grabbable = getNodePositionData(node, s).grabbable;

          if (grabbable) {
            node.grabify();
          }
        };

        var updateGrabState = function updateGrabState(node) {
          return getNodePositionData(node, s).grabbed = node.grabbed();
        };

        var onGrab = function onGrab(_ref) {
          var target = _ref.target;

          updateGrabState(target);
        };

        var onFree = onGrab;

        var onDrag = function onDrag(_ref2) {
          var target = _ref2.target;

          var p = getNodePositionData(target, s);
          var tp = target.position();

          p.x = tp.x;
          p.y = tp.y;
        };

        var listenToGrab = function listenToGrab(node) {
          node.on('grab', onGrab);
          node.on('free', onFree);
          node.on('drag', onDrag);
        };

        var unlistenToGrab = function unlistenToGrab(node) {
          node.removeListener('grab', onGrab);
          node.removeListener('free', onFree);
          node.removeListener('drag', onDrag);
        };

        var fit = function fit() {
          if (s.fit && s.animateContinuously) {
            s.cy.fit(s.padding);
          }
        };

        var onNotDone = function onNotDone() {
          refreshPositions(s.nodes, s);
          fit();

          requestAnimationFrame(_frame);
        };

        var _frame = function _frame() {
          multitick(s, onNotDone, _onDone);
        };

        var _onDone = function _onDone() {
          refreshPositions(s.nodes, s);
          fit();

          s.nodes.forEach(function (n) {
            regrabify(n);
            unlistenToGrab(n);
          });

          s.running = false;

          l.emit('layoutstop');
        };

        s.startTime = Date.now();

        l.emit('layoutstart');

        s.nodes.forEach(function (n) {
          ungrabify(n);
          listenToGrab(n);
        });

        _frame(); // kick off
      } else {
        multitick(s);

        s.eles.layoutPositions(this, s, function (node) {
          return getNodePositionData(node, s);
        });
      }

      l.postrun(s);

      return this; // chaining
    }
  }, {
    key: 'prerun',
    value: function prerun() {}
  }, {
    key: 'postrun',
    value: function postrun() {}
  }, {
    key: 'tick',
    value: function tick() {}
  }, {
    key: 'stop',
    value: function stop() {
      this.state.running = false;

      return this; // chaining
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      return this; // chaining
    }
  }]);

  return ContinuousLayout;
}();

exports.default = ContinuousLayout;

/***/ }),

/***/ "./src/layout/continuous-base/make-bb.js":
/*!***********************************************!*\
  !*** ./src/layout/continuous-base/make-bb.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (bb, cy) {
  if (bb == null) {
    bb = { x1: 0, y1: 0, w: cy.width(), h: cy.height() };
  } else {
    // copy
    bb = { x1: bb.x1, x2: bb.x2, y1: bb.y1, y2: bb.y2, w: bb.w, h: bb.h };
  }

  if (bb.x2 == null) {
    bb.x2 = bb.x1 + bb.w;
  }
  if (bb.w == null) {
    bb.w = bb.x2 - bb.x1;
  }
  if (bb.y2 == null) {
    bb.y2 = bb.y1 + bb.h;
  }
  if (bb.h == null) {
    bb.h = bb.y2 - bb.y1;
  }

  return bb;
};

/***/ }),

/***/ "./src/layout/continuous-base/position.js":
/*!************************************************!*\
  !*** ./src/layout/continuous-base/position.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! ../../assign */ "./src/assign.js");

var setInitialPositionState = function setInitialPositionState(node, state) {
  var p = node.position();
  var bb = state.currentBoundingBox;
  var scratch = node.scratch(state.name);

  if (scratch == null) {
    scratch = {};

    node.scratch(state.name, scratch);
  }

  assign(scratch, state.randomize ? {
    x: bb.x1 + Math.round(Math.random() * bb.w),
    y: bb.y1 + Math.round(Math.random() * bb.h)
  } : {
    x: p.x,
    y: p.y
  });

  scratch.locked = node.locked();
};

var getNodePositionData = function getNodePositionData(node, state) {
  return node.scratch(state.name);
};

var refreshPositions = function refreshPositions(nodes, state) {
  nodes.positions(function (node) {
    var scratch = node.scratch(state.name);

    return {
      x: scratch.x,
      y: scratch.y
    };
  });
};

module.exports = { setInitialPositionState: setInitialPositionState, getNodePositionData: getNodePositionData, refreshPositions: refreshPositions };

/***/ }),

/***/ "./src/layout/continuous-base/tick.js":
/*!********************************************!*\
  !*** ./src/layout/continuous-base/tick.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nop = function nop() {};

var tick = function tick(state) {
  var s = state;
  var l = state.layout;

  var tickIndicatesDone = l.tick(s);

  if (s.firstUpdate) {
    if (s.animateContinuously) {
      // indicate the initial positions have been set
      s.layout.emit('layoutready');
    }
    s.firstUpdate = false;
  }

  s.tickIndex++;

  var duration = s.startTime - Date.now();

  return !s.infinite && (tickIndicatesDone || s.tickIndex >= s.maxIterations || duration >= s.maxSimulationTime);
};

var multitick = function multitick(state) {
  var onNotDone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : nop;
  var onDone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : nop;

  var done = false;
  var s = state;

  for (var i = 0; i < s.maxIterations; i++) {
    s.currentIteration = i;
    done = !s.running || tick(s);

    if (done) {
      break;
    }
  }

  if (!done) {
    onNotDone();
  } else {
    onDone();
  }
};

module.exports = { tick: tick, multitick: multitick };

/***/ }),

/***/ "./src/layout/continuous.js":
/*!**********************************!*\
  !*** ./src/layout/continuous.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _FDLayout = __webpack_require__(/*! ./FDLayout */ "./src/layout/FDLayout.js");

var _continuousBase = __webpack_require__(/*! ./continuous-base/ */ "./src/layout/continuous-base/index.js");

var _continuousBase2 = _interopRequireDefault(_continuousBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import * as ContinuousLayout from './continuous-base/';


var assign = __webpack_require__(/*! ../assign */ "./src/assign.js");
var isFn = function isFn(fn) {
	return typeof fn === 'function';
};

var optFn = function optFn(opt, ele) {
	if (isFn(opt)) {
		return opt(ele);
	} else {
		return opt;
	}
};

var defaults = {
	idealEdgeLength: 100,
	springConstant: 0.2,
	repulsionConstant: 4500
}; // TODO define


var Layout = function (_ContinuousLayout) {
	_inherits(Layout, _ContinuousLayout);

	function Layout(options) {
		_classCallCheck(this, Layout);

		var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, assign({}, defaults, options)));

		_this.FDLayout = new _FDLayout.FDLayout(_this.state);
		_this.state.delta = 10;
		console.log(_this.state);
		return _this;
	}

	_createClass(Layout, [{
		key: 'initAgent',
		value: function initAgent(n) {
			var scratch = this.getScratch(n); // per-element layout data/state, x/y, etc.
			var env = {};
			env.getNumStates = function () {
				return 1;
			};
			env.getMaxNumActions = function () {
				return 9;
			};
			env.allowedActions = function () {
				return [0, 1, 2, 3, 4, 5, 6, 7, 8];
			};
			env.initialState = function () {
				return 0;
			};
			var spec = {};
			spec.update = 'qlearn'; // 'qlearn' or 'sarsa'
			spec.gamma = 0.9; // discount factor, [0, 1)
			spec.epsilon = 0.1; // initial epsilon for epsilon-greedy policy, [0, 1)
			spec.alpha = 0.1; // value function learning rate
			spec.lambda = 0.1; // eligibility trace decay, [0,1). 0 = no eligibility traces
			spec.replacing_traces = false; // use replacing or accumulating traces
			spec.planN = 50; // number of planning steps per iteration. 0 = no planning

			spec.smooth_policy_update = false; // non-standard, updates policy smoothly to follow max_a Q
			spec.beta = 0.3; // learning rate for smooth policy update

			scratch.agent = new RL.TDAgent(env, spec);
			scratch.env = env;
			scratch.state = 0;
			scratch.agent.counter = 0;
			scratch.oldTotalForce = null;
		}
	}, {
		key: 'takeStep',
		value: function takeStep(n) {
			var _this2 = this;

			var displacement = [[-1, -1], [0, -1], [1, -1], [-1, 0], [0, 0], [1, 0], [-1, 1], [0, 1], [1, 1]];

			var delta = this.state.delta;
			this.state.nodes.forEach(function (n) {
				var scratch = _this2.getScratch(n);
				scratch.springForceX = 0;
				scratch.springForceY = 0;
				scratch.repulsionForceX = 0;
				scratch.repulsionForceY = 0;
			});
			this.FDLayout.calcSpringForces();
			this.FDLayout.calcRepulsionForces();
			var scratch = this.getScratch(n); // per-element layout data/state, x/y, etc.
			var action = scratch.agent.act(scratch.state);
			var fx = scratch.springForceX + scratch.repulsionForceX;
			var fy = scratch.springForceY + scratch.repulsionForceY;
			var displacementX = displacement[action][0];
			var displacementY = displacement[action][1];
			var totalForce = Math.sqrt(fx * fx + fy * fy);
			scratch.x += displacement[action][0] * delta;
			scratch.y += displacement[action][1] * delta;
			var reward = 0;

			this.state.nodes.forEach(function (n) {
				var scratch = _this2.getScratch(n);
				scratch.springForceX = 0;
				scratch.springForceY = 0;
				scratch.repulsionForceX = 0;
				scratch.repulsionForceY = 0;
			});

			this.FDLayout.calcSpringForces();
			this.FDLayout.calcRepulsionForces();
			fx = scratch.springForceX + scratch.repulsionForceX;
			fy = scratch.springForceY + scratch.repulsionForceY;
			var newtotalForce = Math.sqrt(fx * fx + fy * fy);

			if (scratch.oldTotalForce === null) {
				console.log('resetting');
				reward = 1;
			} else {
				reward = totalForce - newtotalForce; //totalForce - scratch.oldTotalForce;
			}

			if (Math.abs(reward < 0.1)) {
				scratch.x -= displacement[action][0] * delta;
				scratch.y -= displacement[action][1] * delta;
			}

			//console.log( totalForce +', ' +newtotalForce) 
			scratch.oldTotalForce = totalForce;
			scratch.agent.learn(reward, scratch.state, action);
			scratch.state = 0; //action;
		}
	}, {
		key: 'prerun',
		value: function prerun() {
			var _this3 = this;

			var state = this.state; // options object combined with current state

			// regular nodes
			state.nodes.forEach(function (n) {
				var scratch = _this3.getScratch(n); // per-element layout data/state, x/y, etc.

				// example of setting per-element state based on an option value/function
				scratch.foo = optFn(state.foo, n);
				scratch.springForceX = 0;
				scratch.springForceY = 0;
				scratch.repulsionForceX = 0;
				scratch.repulsionForceY = 0;

				_this3.initAgent(n);
			});

			// regular edge springs
			state.edges.forEach(function (e) {
				var scratch = _this3.getScratch(e); // per-element layout data/state, x/y, etc.

				// example of setting per-element state based on an option value/function
				scratch.foo = optFn(state.foo, e);
			});
		}

		// run this each iteraction

	}, {
		key: 'tick',
		value: function tick() {
			var _this4 = this;

			var state = this.state;
			var isDone = true;

			this.FDLayout.calcSpringForces();
			this.FDLayout.calcRepulsionForces();
			state.nodes.forEach(function (n) {
				var s = _this4.getScratch(n);

				// example : put node at random position
				var displacementX = s.springForceX + s.repulsionForceX;
				var displacementY = s.springForceY + s.repulsionForceY;
				_this4.FDLayout.totalDisplacement += Math.abs(displacementX) + Math.abs(displacementY);
				//s.x += displacementX;
				//s.y += displacementY;
				_this4.takeStep(n);

				s.springForceX = 0;
				s.springForceY = 0;
				s.repulsionForceX = 0;
				s.repulsionForceY = 0;
			});

			if (this.state.currentIteration % 100 == 0) {
				console.log(this.state.currentIteration);
				console.log(this.FDLayout.totalDisplacement);
			}
			return false; //this.FDLayout.isConverged();
		}

		// run this function after the layout is done ticking

	}, {
		key: 'postrun',
		value: function postrun() {}

		// clean up any object refs that could prevent garbage collection, etc.

	}, {
		key: 'destroy',
		value: function destroy() {
			_get(Layout.prototype.__proto__ || Object.getPrototypeOf(Layout.prototype), 'destroy', this).call(this);

			return this;
		}
	}]);

	return Layout;
}(_continuousBase2.default);

module.exports = Layout;

/***/ }),

/***/ "./src/layout/index.js":
/*!*****************************!*\
  !*** ./src/layout/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * TODO
 * Choose the type of layout that best suits your usecase as a starting point.
 *
 * A discrete layout is one that algorithmically sets resultant positions.  It
 * does not have intermediate positions.
 *
 * A continuous layout is one that updates positions continuously, like a force-
 * directed / physics simulation layout.
 */
// module.exports = require('./discrete');
module.exports = __webpack_require__(/*! ./continuous */ "./src/layout/continuous.js");

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jeXRvc2NhcGVNYXJsbC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlTWFybGwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlTWFybGwvLi9zcmMvYXNzaWduLmpzIiwid2VicGFjazovL2N5dG9zY2FwZU1hcmxsLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2N5dG9zY2FwZU1hcmxsLy4vc3JjL2xheW91dC9GRExheW91dC5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVNYXJsbC8uL3NyYy9sYXlvdXQvY29udGludW91cy1iYXNlL2RlZmF1bHRzLmpzIiwid2VicGFjazovL2N5dG9zY2FwZU1hcmxsLy4vc3JjL2xheW91dC9jb250aW51b3VzLWJhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlTWFybGwvLi9zcmMvbGF5b3V0L2NvbnRpbnVvdXMtYmFzZS9tYWtlLWJiLmpzIiwid2VicGFjazovL2N5dG9zY2FwZU1hcmxsLy4vc3JjL2xheW91dC9jb250aW51b3VzLWJhc2UvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlTWFybGwvLi9zcmMvbGF5b3V0L2NvbnRpbnVvdXMtYmFzZS90aWNrLmpzIiwid2VicGFjazovL2N5dG9zY2FwZU1hcmxsLy4vc3JjL2xheW91dC9jb250aW51b3VzLmpzIiwid2VicGFjazovL2N5dG9zY2FwZU1hcmxsLy4vc3JjL2xheW91dC9pbmRleC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiT2JqZWN0IiwiYXNzaWduIiwiYmluZCIsInRndCIsInNyY3MiLCJmb3JFYWNoIiwia2V5cyIsInNyYyIsImsiLCJpbXBsIiwicmVxdWlyZSIsInJlZ2lzdGVyIiwiY3l0b3NjYXBlIiwiRkRMYXlvdXQiLCJvcHRpb25zIiwidG90YWxEaXNwbGFjZW1lbnQiLCJvbGRUb3RhbERpc3BsYWNlbWVudCIsImRpc3BsYWNlbWVudFRocmVzaG9sZFBlck5vZGUiLCJpZGVhbEVkZ2VMZW5ndGgiLCJ0b3RhbERpc3BsYWNlbWVudFRocmVzaG9sZCIsIm5vZGVzIiwibGVuZ3RoIiwiZWRnZSIsInNvdXJjZU5vZGUiLCJzb3VyY2UiLCJ0YXJnZXROb2RlIiwidGFyZ2V0Iiwic291cmNlUG9zIiwic2NyYXRjaCIsInRhcmdldFBvcyIsImxlbmd0aFgiLCJ4IiwibGVuZ3RoWSIsInkiLCJzcHJpbmdGb3JjZSIsInNwcmluZ0ZvcmNlWCIsInNwcmluZ0ZvcmNlWSIsIk1hdGgiLCJzcXJ0Iiwic3ByaW5nQ29uc3RhbnQiLCJpIiwiZWRnZXMiLCJjYWxjU3ByaW5nRm9yY2UiLCJub2RlQSIsIm5vZGVCIiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwiZGlzdGFuY2VTcXVhcmVkIiwiZGlzdGFuY2UiLCJyZXB1bHNpb25Gb3JjZSIsInJlcHVsc2lvbkNvbnN0YW50IiwicmVwdWxzaW9uRm9yY2VYIiwicmVwdWxzaW9uRm9yY2VZIiwiaiIsImNhbGNSZXB1bHNpb25Gb3JjZSIsIm9zY2lsYXRpbmciLCJhYnMiLCJjb252ZXJnZWQiLCJmcmVlemUiLCJhbmltYXRlIiwicmVmcmVzaCIsIm1heEl0ZXJhdGlvbnMiLCJtYXhTaW11bGF0aW9uVGltZSIsInVuZ3JhYmlmeVdoaWxlU2ltdWxhdGluZyIsImZpdCIsInBhZGRpbmciLCJib3VuZGluZ0JveCIsInVuZGVmaW5lZCIsInJlYWR5Iiwic3RvcCIsInJhbmRvbWl6ZSIsImluZmluaXRlIiwiZGVmYXVsdHMiLCJtYWtlQm91bmRpbmdCb3giLCJzZXRJbml0aWFsUG9zaXRpb25TdGF0ZSIsInJlZnJlc2hQb3NpdGlvbnMiLCJnZXROb2RlUG9zaXRpb25EYXRhIiwibXVsdGl0aWNrIiwiQ29udGludW91c0xheW91dCIsIm8iLCJzIiwic3RhdGUiLCJsYXlvdXQiLCJlbGVzIiwidGlja0luZGV4IiwiZmlyc3RVcGRhdGUiLCJhbmltYXRlRW5kIiwiYW5pbWF0ZUNvbnRpbnVvdXNseSIsImVsIiwibmFtZSIsImwiLCJydW5uaW5nIiwiY3VycmVudEJvdW5kaW5nQm94IiwiY3kiLCJvbmUiLCJuIiwicHJlcnVuIiwidW5ncmFiaWZ5IiwiZ3JhYmJhYmxlIiwibm9kZSIsInJlZ3JhYmlmeSIsImdyYWJpZnkiLCJ1cGRhdGVHcmFiU3RhdGUiLCJncmFiYmVkIiwib25HcmFiIiwib25GcmVlIiwib25EcmFnIiwicCIsInRwIiwicG9zaXRpb24iLCJsaXN0ZW5Ub0dyYWIiLCJvbiIsInVubGlzdGVuVG9HcmFiIiwicmVtb3ZlTGlzdGVuZXIiLCJvbk5vdERvbmUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmcmFtZSIsIm9uRG9uZSIsImVtaXQiLCJzdGFydFRpbWUiLCJEYXRlIiwibm93IiwibGF5b3V0UG9zaXRpb25zIiwicG9zdHJ1biIsImJiIiwieDEiLCJ5MSIsInciLCJ3aWR0aCIsImgiLCJoZWlnaHQiLCJ4MiIsInkyIiwicm91bmQiLCJyYW5kb20iLCJsb2NrZWQiLCJwb3NpdGlvbnMiLCJub3AiLCJ0aWNrIiwidGlja0luZGljYXRlc0RvbmUiLCJkdXJhdGlvbiIsImRvbmUiLCJjdXJyZW50SXRlcmF0aW9uIiwiaXNGbiIsImZuIiwib3B0Rm4iLCJvcHQiLCJlbGUiLCJMYXlvdXQiLCJkZWx0YSIsImNvbnNvbGUiLCJsb2ciLCJnZXRTY3JhdGNoIiwiZW52IiwiZ2V0TnVtU3RhdGVzIiwiZ2V0TWF4TnVtQWN0aW9ucyIsImFsbG93ZWRBY3Rpb25zIiwiaW5pdGlhbFN0YXRlIiwic3BlYyIsInVwZGF0ZSIsImdhbW1hIiwiZXBzaWxvbiIsImFscGhhIiwibGFtYmRhIiwicmVwbGFjaW5nX3RyYWNlcyIsInBsYW5OIiwic21vb3RoX3BvbGljeV91cGRhdGUiLCJiZXRhIiwiYWdlbnQiLCJSTCIsIlREQWdlbnQiLCJjb3VudGVyIiwib2xkVG90YWxGb3JjZSIsImRpc3BsYWNlbWVudCIsImNhbGNTcHJpbmdGb3JjZXMiLCJjYWxjUmVwdWxzaW9uRm9yY2VzIiwiYWN0aW9uIiwiYWN0IiwiZngiLCJmeSIsImRpc3BsYWNlbWVudFgiLCJkaXNwbGFjZW1lbnRZIiwidG90YWxGb3JjZSIsInJld2FyZCIsIm5ld3RvdGFsRm9yY2UiLCJsZWFybiIsImZvbyIsImluaXRBZ2VudCIsImUiLCJpc0RvbmUiLCJ0YWtlU3RlcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFFQUEsT0FBT0MsT0FBUCxHQUFpQkMsT0FBT0MsTUFBUCxJQUFpQixJQUFqQixHQUF3QkQsT0FBT0MsTUFBUCxDQUFjQyxJQUFkLENBQW9CRixNQUFwQixDQUF4QixHQUF1RCxVQUFVRyxHQUFWLEVBQXdCO0FBQUEsb0NBQU5DLElBQU07QUFBTkEsUUFBTTtBQUFBOztBQUM5RkEsT0FBS0MsT0FBTCxDQUFjLGVBQU87QUFDbkJMLFdBQU9N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QTZDLE1BQUU1QyxZQUFGLEdBQWlCLENBQWpCO0FBQ0E0QyxNQUFFN0IsZUFBRixHQUFvQixDQUFwQjtBQUNBNkIsTUFBRTVCLGVBQUYsR0FBb0IsQ0FBcEI7QUFDQSxJQWpCRDs7QUFtQkEsT0FBSSxLQUFLNkIsS0FBTCxDQUFXNkQsZ0JBQVgsR0FBOEIsR0FBOUIsSUFBcUMsQ0FBekMsRUFBNEM7QUFDM0NRLFlBQVFDLEdBQVIsQ0FBYSxLQUFLdEUsS0FBTCxDQUFXNkQsZ0JBQXhCO0FBQ0FRLFlBQVFDLEdBQVIsQ0FBYSxLQUFLMUksUUFBTCxDQUFjRSxpQkFBM0I7QUFDQTtBQUNELFVBQU8sS0FBUCxDQTdCSyxDQTZCTztBQUNaOztBQUVEOzs7OzRCQUNTLENBRVI7O0FBRUQ7Ozs7NEJBQ1M7QUFDUjs7QUFFQSxVQUFPLElBQVA7QUFDQTs7OztFQXJLbUIrRCx3Qjs7QUF3S3JCaEYsT0FBT0MsT0FBUCxHQUFpQnFKLE1BQWpCLEM7Ozs7Ozs7Ozs7Ozs7O0FDN0xBOzs7Ozs7Ozs7O0FBVUE7QUFDQXRKLE9BQU9DLE9BQVAsR0FBaUJXLG1CQUFPQSxDQUFDLGdEQUFSLENBQWpCLEMiLCJmaWxlIjoiY3l0b3NjYXBlLW1hcmxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY3l0b3NjYXBlTWFybGxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY3l0b3NjYXBlTWFybGxcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gU2ltcGxlLCBpbnRlcm5hbCBPYmplY3QuYXNzaWduKCkgcG9seWZpbGwgZm9yIG9wdGlvbnMgb2JqZWN0cyBldGMuXG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbiAhPSBudWxsID8gT2JqZWN0LmFzc2lnbi5iaW5kKCBPYmplY3QgKSA6IGZ1bmN0aW9uKCB0Z3QsIC4uLnNyY3MgKXtcbiAgc3Jjcy5mb3JFYWNoKCBzcmMgPT4ge1xuICAgIE9iamVjdC5rZXlzKCBzcmMgKS5mb3JFYWNoKCBrID0+IHRndFtrXSA9IHNyY1trXSApO1xuICB9ICk7XG5cbiAgcmV0dXJuIHRndDtcbn07XG4iLCJjb25zdCBpbXBsID0gcmVxdWlyZSgnLi9sYXlvdXQnKTtcblxuLy8gcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gb24gYSBjeXRvc2NhcGUgbGliIHJlZlxubGV0IHJlZ2lzdGVyID0gZnVuY3Rpb24oIGN5dG9zY2FwZSApe1xuICBpZiggIWN5dG9zY2FwZSApeyByZXR1cm47IH0gLy8gY2FuJ3QgcmVnaXN0ZXIgaWYgY3l0b3NjYXBlIHVuc3BlY2lmaWVkXG5cbiAgY3l0b3NjYXBlKCAnbGF5b3V0JywgJ21hcmxsJywgaW1wbCApOyAvLyByZWdpc3RlciB3aXRoIGN5dG9zY2FwZS5qc1xufTtcblxuaWYoIHR5cGVvZiBjeXRvc2NhcGUgIT09ICd1bmRlZmluZWQnICl7IC8vIGV4cG9zZSB0byBnbG9iYWwgY3l0b3NjYXBlIChpLmUuIHdpbmRvdy5jeXRvc2NhcGUpXG4gIHJlZ2lzdGVyKCBjeXRvc2NhcGUgKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZWdpc3RlcjtcbiIsImNsYXNzIEZETGF5b3V0IHtcblx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy50b3RhbERpc3BsYWNlbWVudCA9IDAuMDtcblx0XHR0aGlzLm9sZFRvdGFsRGlzcGxhY2VtZW50ID0gMC4wO1xuXHRcdHRoaXMuZGlzcGxhY2VtZW50VGhyZXNob2xkUGVyTm9kZSA9ICgxLjAgKiBvcHRpb25zLmlkZWFsRWRnZUxlbmd0aCkgLyAxMDA7XG5cdFx0dGhpcy50b3RhbERpc3BsYWNlbWVudFRocmVzaG9sZCA9XG5cdFx0XHR0aGlzLmRpc3BsYWNlbWVudFRocmVzaG9sZFBlck5vZGUgKiBvcHRpb25zLm5vZGVzLmxlbmd0aDtcblx0fVxuXG5cdGNhbGNTcHJpbmdGb3JjZShlZGdlKSB7XG5cdFx0dmFyIHNvdXJjZU5vZGUgPSBlZGdlLnNvdXJjZSgpO1xuXHRcdHZhciB0YXJnZXROb2RlID0gZWRnZS50YXJnZXQoKTtcblx0XHR2YXIgc291cmNlUG9zID0gc291cmNlTm9kZS5zY3JhdGNoKCdtYXJsbCcpXG5cdFx0dmFyIHRhcmdldFBvcyA9IHRhcmdldE5vZGUuc2NyYXRjaCgnbWFybGwnKVxuXG5cdFx0dmFyIGxlbmd0aFggPSB0YXJnZXRQb3MueCAtIHNvdXJjZVBvcy54O1xuXHRcdHZhciBsZW5ndGhZID0gdGFyZ2V0UG9zLnkgLSBzb3VyY2VQb3MueTtcblx0XHR2YXIgc3ByaW5nRm9yY2U7XG5cdFx0dmFyIHNwcmluZ0ZvcmNlWDtcblx0XHR2YXIgc3ByaW5nRm9yY2VZO1xuXG5cblx0XHRsZW5ndGggPSBNYXRoLnNxcnQobGVuZ3RoWCAqIGxlbmd0aFggKyBsZW5ndGhZICogbGVuZ3RoWSk7XG5cblx0XHRpZihsZW5ndGggPT0gMClcblx0XHRcdHJldHVybjtcblxuXHRcdC8vIENhbGN1bGF0ZSBzcHJpbmcgZm9yY2VzXG5cdFx0c3ByaW5nRm9yY2UgPSB0aGlzLm9wdGlvbnMuc3ByaW5nQ29uc3RhbnQgKiAobGVuZ3RoIC0gdGhpcy5vcHRpb25zLmlkZWFsRWRnZUxlbmd0aCk7XG5cblx0XHQvLyBQcm9qZWN0IGZvcmNlIG9udG8geCBhbmQgeSBheGVzXG5cdFx0c3ByaW5nRm9yY2VYID0gc3ByaW5nRm9yY2UgKiAobGVuZ3RoWCAvIGxlbmd0aCk7XG5cdFx0c3ByaW5nRm9yY2VZID0gc3ByaW5nRm9yY2UgKiAobGVuZ3RoWSAvIGxlbmd0aCk7XG5cblx0XHQvLyBBcHBseSBmb3JjZXMgb24gdGhlIGVuZCBub2Rlc1xuXHRcdHNvdXJjZU5vZGUuc2NyYXRjaCgnbWFybGwnKS5zcHJpbmdGb3JjZVggKz0gc3ByaW5nRm9yY2VYO1xuXHRcdHNvdXJjZU5vZGUuc2NyYXRjaCgnbWFybGwnKS5zcHJpbmdGb3JjZVkgKz0gc3ByaW5nRm9yY2VZO1xuXHRcdHRhcmdldE5vZGUuc2NyYXRjaCgnbWFybGwnKS5zcHJpbmdGb3JjZVggLT0gc3ByaW5nRm9yY2VYO1xuXHRcdHRhcmdldE5vZGUuc2NyYXRjaCgnbWFybGwnKS5zcHJpbmdGb3JjZVkgLT0gc3ByaW5nRm9yY2VZO1xuXHR9O1xuXG5cdGNhbGNTcHJpbmdGb3JjZXMoKSB7XG5cdFx0dmFyIGVkZ2U7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5lZGdlcy5sZW5ndGg7IGkrKylcblx0XHR7XG5cdFx0XHRlZGdlID0gdGhpcy5vcHRpb25zLmVkZ2VzW2ldO1xuXG5cdFx0XHR0aGlzLmNhbGNTcHJpbmdGb3JjZShlZGdlKTtcblx0XHR9XG5cdH1cblxuXHRjYWxjUmVwdWxzaW9uRm9yY2Uobm9kZUEsIG5vZGVCKSB7XG5cdFx0dmFyIGRpc3RhbmNlWCA9IG5vZGVCLnNjcmF0Y2goJ21hcmxsJykueCAtIG5vZGVBLnNjcmF0Y2goJ21hcmxsJykueFxuXHRcdHZhciBkaXN0YW5jZVkgPSBub2RlQi5zY3JhdGNoKCdtYXJsbCcpLnkgLSBub2RlQS5zY3JhdGNoKCdtYXJsbCcpLnlcblx0XHR2YXIgZGlzdGFuY2VTcXVhcmVkID0gZGlzdGFuY2VYICogZGlzdGFuY2VYICsgZGlzdGFuY2VZICogZGlzdGFuY2VZO1xuXHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChkaXN0YW5jZVNxdWFyZWQpO1xuXG5cdFx0dmFyIHJlcHVsc2lvbkZvcmNlID0gdGhpcy5vcHRpb25zLnJlcHVsc2lvbkNvbnN0YW50IC8gZGlzdGFuY2VTcXVhcmVkO1xuXG5cdFx0Ly8gUHJvamVjdCBmb3JjZSBvbnRvIHggYW5kIHkgYXhlc1xuXHRcdHZhciByZXB1bHNpb25Gb3JjZVggPSByZXB1bHNpb25Gb3JjZSAqIGRpc3RhbmNlWCAvIGRpc3RhbmNlO1xuXHRcdHZhciByZXB1bHNpb25Gb3JjZVkgPSByZXB1bHNpb25Gb3JjZSAqIGRpc3RhbmNlWSAvIGRpc3RhbmNlO1xuXG5cdFx0Ly8gQXBwbHkgZm9yY2VzIG9uIHRoZSB0d28gbm9kZXNcblx0XHRub2RlQS5zY3JhdGNoKCdtYXJsbCcpLnJlcHVsc2lvbkZvcmNlWCAtPSByZXB1bHNpb25Gb3JjZVg7XG5cdFx0bm9kZUEuc2NyYXRjaCgnbWFybGwnKS5yZXB1bHNpb25Gb3JjZVkgLT0gcmVwdWxzaW9uRm9yY2VZO1xuXHRcdG5vZGVCLnNjcmF0Y2goJ21hcmxsJykucmVwdWxzaW9uRm9yY2VYICs9IHJlcHVsc2lvbkZvcmNlWDtcblx0XHRub2RlQi5zY3JhdGNoKCdtYXJsbCcpLnJlcHVsc2lvbkZvcmNlWSArPSByZXB1bHNpb25Gb3JjZVk7XG5cdH1cblxuXHRjYWxjUmVwdWxzaW9uRm9yY2VzKCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zLm5vZGVzLmxlbmd0aDsgaSsrKVxuXHRcdHtcblx0XHRcdGxldCBub2RlQSA9IHRoaXMub3B0aW9ucy5ub2Rlc1tpXTtcblxuXHRcdFx0Zm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgdGhpcy5vcHRpb25zLm5vZGVzLmxlbmd0aDsgaisrKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgbm9kZUIgPSB0aGlzLm9wdGlvbnMubm9kZXNbal07XG5cdFx0XHRcdHRoaXMuY2FsY1JlcHVsc2lvbkZvcmNlKG5vZGVBLCBub2RlQik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aXNDb252ZXJnZWQoKSB7XG5cdFx0dmFyIG9zY2lsYXRpbmcgPSBNYXRoLmFicyh0aGlzLnRvdGFsRGlzcGxhY2VtZW50IC0gdGhpcy5vbGRUb3RhbERpc3BsYWNlbWVudCkgPCAyO1xuXHRcdHZhciBjb252ZXJnZWQgPSB0aGlzLnRvdGFsRGlzcGxhY2VtZW50IDwgdGhpcy50b3RhbERpc3BsYWNlbWVudFRocmVzaG9sZDtcblxuXHRcdHRoaXMub2xkVG90YWxEaXNwbGFjZW1lbnQgPSB0aGlzLnRvdGFsRGlzcGxhY2VtZW50O1xuXHRcdHRoaXMudG90YWxEaXNwbGFjZW1lbnQgPSAwO1xuXHRcdHJldHVybiBjb252ZXJnZWQgfHwgb3NjaWxhdGluZztcblx0fVxufVxuXG5leHBvcnQge0ZETGF5b3V0fTtcbiIsIi8vIGdlbmVyYWwgZGVmYXVsdCBvcHRpb25zIGZvciBmb3JjZS1kaXJlY3RlZCBsYXlvdXRcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKHtcblx0YW5pbWF0ZTogdHJ1ZSwgLy8gd2hldGhlciB0byBzaG93IHRoZSBsYXlvdXQgYXMgaXQncyBydW5uaW5nOyBzcGVjaWFsICdlbmQnIHZhbHVlIG1ha2VzIHRoZSBsYXlvdXQgYW5pbWF0ZSBsaWtlIGEgZGlzY3JldGUgbGF5b3V0XG5cdHJlZnJlc2g6IDEwLCAvLyBudW1iZXIgb2YgdGlja3MgcGVyIGZyYW1lOyBoaWdoZXIgaXMgZmFzdGVyIGJ1dCBtb3JlIGplcmt5XG5cdG1heEl0ZXJhdGlvbnM6IDEwMDAsIC8vIG1heCBpdGVyYXRpb25zIGJlZm9yZSB0aGUgbGF5b3V0IHdpbGwgYmFpbCBvdXRcblx0bWF4U2ltdWxhdGlvblRpbWU6IDQwMDAwLCAvLyBtYXggbGVuZ3RoIGluIG1zIHRvIHJ1biB0aGUgbGF5b3V0XG5cdHVuZ3JhYmlmeVdoaWxlU2ltdWxhdGluZzogZmFsc2UsIC8vIHNvIHlvdSBjYW4ndCBkcmFnIG5vZGVzIGR1cmluZyBsYXlvdXRcblx0Zml0OiB0cnVlLCAvLyBvbiBldmVyeSBsYXlvdXQgcmVwb3NpdGlvbiBvZiBub2RlcywgZml0IHRoZSB2aWV3cG9ydFxuXHRwYWRkaW5nOiAzMCwgLy8gcGFkZGluZyBhcm91bmQgdGhlIHNpbXVsYXRpb25cblx0Ym91bmRpbmdCb3g6IHVuZGVmaW5lZCwgLy8gY29uc3RyYWluIGxheW91dCBib3VuZHM7IHsgeDEsIHkxLCB4MiwgeTIgfSBvciB7IHgxLCB5MSwgdywgaCB9XG5cblx0Ly8gbGF5b3V0IGV2ZW50IGNhbGxiYWNrc1xuXHRyZWFkeTogZnVuY3Rpb24oKXt9LCAvLyBvbiBsYXlvdXRyZWFkeVxuXHRzdG9wOiBmdW5jdGlvbigpe30sIC8vIG9uIGxheW91dHN0b3BcblxuXHQvLyBwb3NpdGlvbmluZyBvcHRpb25zXG5cdHJhbmRvbWl6ZTogdHJ1ZSwgLy8gdXNlIHJhbmRvbSBub2RlIHBvc2l0aW9ucyBhdCBiZWdpbm5pbmcgb2YgbGF5b3V0XG5cblx0Ly8gaW5maW5pdGUgbGF5b3V0IG9wdGlvbnNcblx0aW5maW5pdGU6IGZhbHNlIC8vIG92ZXJyaWRlcyBhbGwgb3RoZXIgb3B0aW9ucyBmb3IgYSBmb3JjZXMtYWxsLXRoZS10aW1lIG1vZGVcblxufSk7XG4iLCIvKipcbkEgZ2VuZXJpYyBjb250aW51b3VzIGxheW91dCBjbGFzc1xuKi9cblxuY29uc3QgYXNzaWduID0gcmVxdWlyZSgnLi4vLi4vYXNzaWduJyk7XG5jb25zdCBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcbmNvbnN0IG1ha2VCb3VuZGluZ0JveCA9IHJlcXVpcmUoJy4vbWFrZS1iYicpO1xuY29uc3QgeyBzZXRJbml0aWFsUG9zaXRpb25TdGF0ZSwgcmVmcmVzaFBvc2l0aW9ucywgZ2V0Tm9kZVBvc2l0aW9uRGF0YSB9ID0gcmVxdWlyZSgnLi9wb3NpdGlvbicpO1xuY29uc3QgeyBtdWx0aXRpY2sgfSA9IHJlcXVpcmUoJy4vdGljaycpO1xuXG5jbGFzcyBDb250aW51b3VzTGF5b3V0IHtcbiAgY29uc3RydWN0b3IoIG9wdGlvbnMgKXtcbiAgICBsZXQgbyA9IHRoaXMub3B0aW9ucyA9IGFzc2lnbigge30sIGRlZmF1bHRzLCBvcHRpb25zICk7XG5cbiAgICBsZXQgcyA9IHRoaXMuc3RhdGUgPSBhc3NpZ24oIHt9LCBvLCB7XG4gICAgICBsYXlvdXQ6IHRoaXMsXG4gICAgICBub2Rlczogby5lbGVzLm5vZGVzKCksXG4gICAgICBlZGdlczogby5lbGVzLmVkZ2VzKCksXG4gICAgICB0aWNrSW5kZXg6IDAsXG4gICAgICBmaXJzdFVwZGF0ZTogdHJ1ZVxuICAgIH0gKTtcblxuICAgIHMuYW5pbWF0ZUVuZCA9IG8uYW5pbWF0ZSAmJiBvLmFuaW1hdGUgPT09ICdlbmQnO1xuICAgIHMuYW5pbWF0ZUNvbnRpbnVvdXNseSA9IG8uYW5pbWF0ZSAmJiAhcy5hbmltYXRlRW5kO1xuICB9XG5cbiAgZ2V0U2NyYXRjaCggZWwgKXtcbiAgICBsZXQgbmFtZSA9IHRoaXMuc3RhdGUubmFtZTtcbiAgICBsZXQgc2NyYXRjaCA9IGVsLnNjcmF0Y2goIG5hbWUgKTtcblxuICAgIGlmKCAhc2NyYXRjaCApe1xuICAgICAgc2NyYXRjaCA9IHt9O1xuXG4gICAgICBlbC5zY3JhdGNoKG5hbWUsIHNjcmF0Y2gpO1xuICAgIH1cblxuICAgIHJldHVybiBzY3JhdGNoO1xuICB9XG5cbiAgcnVuKCl7XG4gICAgbGV0IGwgPSB0aGlzO1xuICAgIGxldCBzID0gdGhpcy5zdGF0ZTtcblxuICAgIHMudGlja0luZGV4ID0gMDtcbiAgICBzLmZpcnN0VXBkYXRlID0gdHJ1ZTtcblxuICAgIHMucnVubmluZyA9IHRydWU7XG5cbiAgICBzLmN1cnJlbnRCb3VuZGluZ0JveCA9IG1ha2VCb3VuZGluZ0JveCggcy5ib3VuZGluZ0JveCwgcy5jeSApO1xuXG4gICAgaWYoIHMucmVhZHkgKXsgbC5vbmUoICdyZWFkeScsIHMucmVhZHkgKTsgfVxuICAgIGlmKCBzLnN0b3AgKXsgbC5vbmUoICdzdG9wJywgcy5zdG9wICk7IH1cblxuICAgIHMubm9kZXMuZm9yRWFjaCggbiA9PiBzZXRJbml0aWFsUG9zaXRpb25TdGF0ZSggbiwgcyApICk7XG5cbiAgICBsLnByZXJ1biggcyApO1xuXG4gICAgaWYoIHMuYW5pbWF0ZUNvbnRpbnVvdXNseSApe1xuICAgICAgbGV0IHVuZ3JhYmlmeSA9IG5vZGUgPT4ge1xuICAgICAgICBpZiggIXMudW5ncmFiaWZ5V2hpbGVTaW11bGF0aW5nICl7IHJldHVybjsgfVxuXG4gICAgICAgIGxldCBncmFiYmFibGUgPSBnZXROb2RlUG9zaXRpb25EYXRhKCBub2RlLCBzICkuZ3JhYmJhYmxlID0gbm9kZS5ncmFiYmFibGUoKTtcblxuICAgICAgICBpZiggZ3JhYmJhYmxlICl7XG4gICAgICAgICAgbm9kZS51bmdyYWJpZnkoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgbGV0IHJlZ3JhYmlmeSA9IG5vZGUgPT4ge1xuICAgICAgICBpZiggIXMudW5ncmFiaWZ5V2hpbGVTaW11bGF0aW5nICl7IHJldHVybjsgfVxuXG4gICAgICAgIGxldCBncmFiYmFibGUgPSBnZXROb2RlUG9zaXRpb25EYXRhKCBub2RlLCBzICkuZ3JhYmJhYmxlO1xuXG4gICAgICAgIGlmKCBncmFiYmFibGUgKXtcbiAgICAgICAgICBub2RlLmdyYWJpZnkoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgbGV0IHVwZGF0ZUdyYWJTdGF0ZSA9IG5vZGUgPT4gZ2V0Tm9kZVBvc2l0aW9uRGF0YSggbm9kZSwgcyApLmdyYWJiZWQgPSBub2RlLmdyYWJiZWQoKTtcblxuICAgICAgbGV0IG9uR3JhYiA9IGZ1bmN0aW9uKHsgdGFyZ2V0IH0pe1xuICAgICAgICB1cGRhdGVHcmFiU3RhdGUoIHRhcmdldCApO1xuICAgICAgfTtcblxuICAgICAgbGV0IG9uRnJlZSA9IG9uR3JhYjtcblxuICAgICAgbGV0IG9uRHJhZyA9IGZ1bmN0aW9uKHsgdGFyZ2V0IH0pe1xuICAgICAgICBsZXQgcCA9IGdldE5vZGVQb3NpdGlvbkRhdGEoIHRhcmdldCwgcyApO1xuICAgICAgICBsZXQgdHAgPSB0YXJnZXQucG9zaXRpb24oKTtcblxuICAgICAgICBwLnggPSB0cC54O1xuICAgICAgICBwLnkgPSB0cC55O1xuICAgICAgfTtcblxuICAgICAgbGV0IGxpc3RlblRvR3JhYiA9IG5vZGUgPT4ge1xuICAgICAgICBub2RlLm9uKCdncmFiJywgb25HcmFiKTtcbiAgICAgICAgbm9kZS5vbignZnJlZScsIG9uRnJlZSk7XG4gICAgICAgIG5vZGUub24oJ2RyYWcnLCBvbkRyYWcpO1xuICAgICAgfTtcblxuICAgICAgbGV0IHVubGlzdGVuVG9HcmFiID0gbm9kZSA9PiB7XG4gICAgICAgIG5vZGUucmVtb3ZlTGlzdGVuZXIoJ2dyYWInLCBvbkdyYWIpO1xuICAgICAgICBub2RlLnJlbW92ZUxpc3RlbmVyKCdmcmVlJywgb25GcmVlKTtcbiAgICAgICAgbm9kZS5yZW1vdmVMaXN0ZW5lcignZHJhZycsIG9uRHJhZyk7XG4gICAgICB9O1xuXG4gICAgICBsZXQgZml0ID0gKCkgPT4ge1xuICAgICAgICBpZiggcy5maXQgJiYgcy5hbmltYXRlQ29udGludW91c2x5ICl7XG4gICAgICAgICAgcy5jeS5maXQoIHMucGFkZGluZyApO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBsZXQgb25Ob3REb25lID0gKCkgPT4ge1xuICAgICAgICByZWZyZXNoUG9zaXRpb25zKCBzLm5vZGVzLCBzICk7XG4gICAgICAgIGZpdCgpO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggZnJhbWUgKTtcbiAgICAgIH07XG5cbiAgICAgIGxldCBmcmFtZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIG11bHRpdGljayggcywgb25Ob3REb25lLCBvbkRvbmUgKTtcbiAgICAgIH07XG5cbiAgICAgIGxldCBvbkRvbmUgPSAoKSA9PiB7XG4gICAgICAgIHJlZnJlc2hQb3NpdGlvbnMoIHMubm9kZXMsIHMgKTtcbiAgICAgICAgZml0KCk7XG5cbiAgICAgICAgcy5ub2Rlcy5mb3JFYWNoKCBuID0+IHtcbiAgICAgICAgICByZWdyYWJpZnkoIG4gKTtcbiAgICAgICAgICB1bmxpc3RlblRvR3JhYiggbiApO1xuICAgICAgICB9ICk7XG5cbiAgICAgICAgcy5ydW5uaW5nID0gZmFsc2U7XG5cbiAgICAgICAgbC5lbWl0KCdsYXlvdXRzdG9wJyk7XG4gICAgICB9O1xuXG4gICAgICBzLnN0YXJ0VGltZSA9IERhdGUubm93KCk7XG5cbiAgICAgIGwuZW1pdCgnbGF5b3V0c3RhcnQnKTtcblxuICAgICAgcy5ub2Rlcy5mb3JFYWNoKCBuID0+IHtcbiAgICAgICAgdW5ncmFiaWZ5KCBuICk7XG4gICAgICAgIGxpc3RlblRvR3JhYiggbiApO1xuICAgICAgfSApO1xuXG4gICAgICBmcmFtZSgpOyAvLyBraWNrIG9mZlxuICAgIH0gZWxzZSB7XG4gICAgICBtdWx0aXRpY2soIHMgKTtcblxuICAgICAgcy5lbGVzLmxheW91dFBvc2l0aW9ucyggdGhpcywgcywgbm9kZSA9PiBnZXROb2RlUG9zaXRpb25EYXRhKCBub2RlLCBzICkgKTtcbiAgICB9XG5cbiAgICBsLnBvc3RydW4oIHMgKTtcblxuICAgIHJldHVybiB0aGlzOyAvLyBjaGFpbmluZ1xuICB9XG5cbiAgcHJlcnVuKCl7fVxuICBwb3N0cnVuKCl7fVxuICB0aWNrKCl7fVxuXG4gIHN0b3AoKXtcbiAgICB0aGlzLnN0YXRlLnJ1bm5pbmcgPSBmYWxzZTtcblxuICAgIHJldHVybiB0aGlzOyAvLyBjaGFpbmluZ1xuICB9XG5cbiAgZGVzdHJveSgpe1xuICAgIHJldHVybiB0aGlzOyAvLyBjaGFpbmluZ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRpbnVvdXNMYXlvdXQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCBiYiwgY3kgKXtcbiAgaWYoIGJiID09IG51bGwgKXtcbiAgICBiYiA9IHsgeDE6IDAsIHkxOiAwLCB3OiBjeS53aWR0aCgpLCBoOiBjeS5oZWlnaHQoKSB9O1xuICB9IGVsc2UgeyAvLyBjb3B5XG4gICAgYmIgPSB7IHgxOiBiYi54MSwgeDI6IGJiLngyLCB5MTogYmIueTEsIHkyOiBiYi55MiwgdzogYmIudywgaDogYmIuaCB9O1xuICB9XG5cbiAgaWYoIGJiLngyID09IG51bGwgKXsgYmIueDIgPSBiYi54MSArIGJiLnc7IH1cbiAgaWYoIGJiLncgPT0gbnVsbCApeyBiYi53ID0gYmIueDIgLSBiYi54MTsgfVxuICBpZiggYmIueTIgPT0gbnVsbCApeyBiYi55MiA9IGJiLnkxICsgYmIuaDsgfVxuICBpZiggYmIuaCA9PSBudWxsICl7IGJiLmggPSBiYi55MiAtIGJiLnkxOyB9XG5cbiAgcmV0dXJuIGJiO1xufTtcbiIsImNvbnN0IGFzc2lnbiA9IHJlcXVpcmUoJy4uLy4uL2Fzc2lnbicpO1xuXG5sZXQgc2V0SW5pdGlhbFBvc2l0aW9uU3RhdGUgPSBmdW5jdGlvbiggbm9kZSwgc3RhdGUgKXtcbiAgbGV0IHAgPSBub2RlLnBvc2l0aW9uKCk7XG4gIGxldCBiYiA9IHN0YXRlLmN1cnJlbnRCb3VuZGluZ0JveDtcbiAgbGV0IHNjcmF0Y2ggPSBub2RlLnNjcmF0Y2goIHN0YXRlLm5hbWUgKTtcblxuICBpZiggc2NyYXRjaCA9PSBudWxsICl7XG4gICAgc2NyYXRjaCA9IHt9O1xuXG4gICAgbm9kZS5zY3JhdGNoKCBzdGF0ZS5uYW1lLCBzY3JhdGNoICk7XG4gIH1cblxuICBhc3NpZ24oIHNjcmF0Y2gsIHN0YXRlLnJhbmRvbWl6ZSA/IHtcbiAgICB4OiBiYi54MSArIE1hdGgucm91bmQoIE1hdGgucmFuZG9tKCkgKiBiYi53ICksXG4gICAgeTogYmIueTEgKyBNYXRoLnJvdW5kKCBNYXRoLnJhbmRvbSgpICogYmIuaCApXG4gIH0gOiB7XG4gICAgeDogcC54LFxuICAgIHk6IHAueVxuICB9ICk7XG5cbiAgc2NyYXRjaC5sb2NrZWQgPSBub2RlLmxvY2tlZCgpO1xufTtcblxubGV0IGdldE5vZGVQb3NpdGlvbkRhdGEgPSBmdW5jdGlvbiggbm9kZSwgc3RhdGUgKXtcbiAgcmV0dXJuIG5vZGUuc2NyYXRjaCggc3RhdGUubmFtZSApO1xufTtcblxubGV0IHJlZnJlc2hQb3NpdGlvbnMgPSBmdW5jdGlvbiggbm9kZXMsIHN0YXRlICl7XG4gIG5vZGVzLnBvc2l0aW9ucyhmdW5jdGlvbiggbm9kZSApe1xuICAgIGxldCBzY3JhdGNoID0gbm9kZS5zY3JhdGNoKCBzdGF0ZS5uYW1lICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgeDogc2NyYXRjaC54LFxuICAgICAgeTogc2NyYXRjaC55XG4gICAgfTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgc2V0SW5pdGlhbFBvc2l0aW9uU3RhdGUsIGdldE5vZGVQb3NpdGlvbkRhdGEsIHJlZnJlc2hQb3NpdGlvbnMgfTtcbiIsImNvbnN0IG5vcCA9IGZ1bmN0aW9uKCl7fTtcblxubGV0IHRpY2sgPSBmdW5jdGlvbiggc3RhdGUgKXtcbiAgbGV0IHMgPSBzdGF0ZTtcbiAgbGV0IGwgPSBzdGF0ZS5sYXlvdXQ7XG5cbiAgbGV0IHRpY2tJbmRpY2F0ZXNEb25lID0gbC50aWNrKCBzICk7XG5cbiAgaWYoIHMuZmlyc3RVcGRhdGUgKXtcbiAgICBpZiggcy5hbmltYXRlQ29udGludW91c2x5ICl7IC8vIGluZGljYXRlIHRoZSBpbml0aWFsIHBvc2l0aW9ucyBoYXZlIGJlZW4gc2V0XG4gICAgICBzLmxheW91dC5lbWl0KCdsYXlvdXRyZWFkeScpO1xuICAgIH1cbiAgICBzLmZpcnN0VXBkYXRlID0gZmFsc2U7XG4gIH1cblxuICBzLnRpY2tJbmRleCsrO1xuXG4gIGxldCBkdXJhdGlvbiA9IHMuc3RhcnRUaW1lIC0gRGF0ZS5ub3coKTtcblxuICByZXR1cm4gIXMuaW5maW5pdGUgJiYgKCB0aWNrSW5kaWNhdGVzRG9uZSB8fCBzLnRpY2tJbmRleCA+PSBzLm1heEl0ZXJhdGlvbnMgfHwgZHVyYXRpb24gPj0gcy5tYXhTaW11bGF0aW9uVGltZSApO1xufTtcblxubGV0IG11bHRpdGljayA9IGZ1bmN0aW9uKCBzdGF0ZSwgb25Ob3REb25lID0gbm9wLCBvbkRvbmUgPSBub3AgKXtcbiAgbGV0IGRvbmUgPSBmYWxzZTtcbiAgbGV0IHMgPSBzdGF0ZTtcblxuICBmb3IoIGxldCBpID0gMDsgaSA8IHMubWF4SXRlcmF0aW9uczsgaSsrICl7XG4gICAgcy5jdXJyZW50SXRlcmF0aW9uID0gaTtcbiAgICBkb25lID0gIXMucnVubmluZyB8fCB0aWNrKCBzICk7XG5cbiAgICBpZiggZG9uZSApeyBicmVhazsgfVxuICB9XG5cbiAgaWYoICFkb25lICl7XG4gICAgb25Ob3REb25lKCk7XG4gIH0gZWxzZSB7XG4gICAgb25Eb25lKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0geyB0aWNrLCBtdWx0aXRpY2sgfTtcbiIsImltcG9ydCB7RkRMYXlvdXR9IGZyb20gJy4vRkRMYXlvdXQnO1xuLy9pbXBvcnQgKiBhcyBDb250aW51b3VzTGF5b3V0IGZyb20gJy4vY29udGludW91cy1iYXNlLyc7XG5pbXBvcnQgQ29udGludW91c0xheW91dCBmcm9tICcuL2NvbnRpbnVvdXMtYmFzZS8nO1xuY29uc3QgYXNzaWduID0gcmVxdWlyZSgnLi4vYXNzaWduJyk7XG5jb25zdCBpc0ZuID0gZm4gPT4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nO1xuXG5jb25zdCBvcHRGbiA9ICggb3B0LCBlbGUgKSA9PiB7XG5cdGlmKCBpc0ZuKCBvcHQgKSApe1xuXHRcdHJldHVybiBvcHQoIGVsZSApO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBvcHQ7XG5cdH1cbn07XG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuXHRpZGVhbEVkZ2VMZW5ndGg6IDEwMCxcblx0c3ByaW5nQ29uc3RhbnQ6IDAuMixcblx0cmVwdWxzaW9uQ29uc3RhbnQ6IDQ1MDAsXG59OyAvLyBUT0RPIGRlZmluZVxuXG5cbmNsYXNzIExheW91dCBleHRlbmRzIENvbnRpbnVvdXNMYXlvdXQge1xuXHRjb25zdHJ1Y3Rvciggb3B0aW9ucyApe1xuXHRcdHN1cGVyKCBhc3NpZ24oIHt9LCBkZWZhdWx0cywgb3B0aW9ucyApICk7XG5cdFx0dGhpcy5GRExheW91dCA9IG5ldyBGRExheW91dCh0aGlzLnN0YXRlKTtcblx0XHR0aGlzLnN0YXRlLmRlbHRhID0gMTA7XG5cdFx0Y29uc29sZS5sb2coIHRoaXMuc3RhdGUpIFxuXHR9XG5cblx0aW5pdEFnZW50KG4pIHtcblx0XHRsZXQgc2NyYXRjaCA9IHRoaXMuZ2V0U2NyYXRjaCggbiApOyAvLyBwZXItZWxlbWVudCBsYXlvdXQgZGF0YS9zdGF0ZSwgeC95LCBldGMuXG5cdFx0dmFyIGVudiA9IHt9O1xuXHRcdGVudi5nZXROdW1TdGF0ZXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDE7IH1cblx0XHRlbnYuZ2V0TWF4TnVtQWN0aW9ucyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gOTsgfVxuXHRcdGVudi5hbGxvd2VkQWN0aW9ucyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdOyB9XG5cdFx0ZW52LmluaXRpYWxTdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfVxuXHRcdHZhciBzcGVjID0ge31cblx0XHRzcGVjLnVwZGF0ZSA9ICdxbGVhcm4nOyAvLyAncWxlYXJuJyBvciAnc2Fyc2EnXG5cdFx0c3BlYy5nYW1tYSA9IDAuOTsgLy8gZGlzY291bnQgZmFjdG9yLCBbMCwgMSlcblx0XHRzcGVjLmVwc2lsb24gPSAwLjE7IC8vIGluaXRpYWwgZXBzaWxvbiBmb3IgZXBzaWxvbi1ncmVlZHkgcG9saWN5LCBbMCwgMSlcblx0XHRzcGVjLmFscGhhID0gMC4xOyAvLyB2YWx1ZSBmdW5jdGlvbiBsZWFybmluZyByYXRlXG5cdFx0c3BlYy5sYW1iZGEgPSAwLjE7IC8vIGVsaWdpYmlsaXR5IHRyYWNlIGRlY2F5LCBbMCwxKS4gMCA9IG5vIGVsaWdpYmlsaXR5IHRyYWNlc1xuXHRcdHNwZWMucmVwbGFjaW5nX3RyYWNlcyA9IGZhbHNlOyAvLyB1c2UgcmVwbGFjaW5nIG9yIGFjY3VtdWxhdGluZyB0cmFjZXNcblx0XHRzcGVjLnBsYW5OID0gNTA7IC8vIG51bWJlciBvZiBwbGFubmluZyBzdGVwcyBwZXIgaXRlcmF0aW9uLiAwID0gbm8gcGxhbm5pbmdcblxuXHRcdHNwZWMuc21vb3RoX3BvbGljeV91cGRhdGUgPSBmYWxzZTsgLy8gbm9uLXN0YW5kYXJkLCB1cGRhdGVzIHBvbGljeSBzbW9vdGhseSB0byBmb2xsb3cgbWF4X2EgUVxuXHRcdHNwZWMuYmV0YSA9IDAuMzsgLy8gbGVhcm5pbmcgcmF0ZSBmb3Igc21vb3RoIHBvbGljeSB1cGRhdGVcblxuXHRcdHNjcmF0Y2guYWdlbnQgPSBuZXcgUkwuVERBZ2VudChlbnYsIHNwZWMpO1xuXHRcdHNjcmF0Y2guZW52ID0gZW52O1xuXHRcdHNjcmF0Y2guc3RhdGUgPSAwO1xuXHRcdHNjcmF0Y2guYWdlbnQuY291bnRlciA9IDA7XG5cdFx0c2NyYXRjaC5vbGRUb3RhbEZvcmNlID0gbnVsbDtcblx0fVxuXG5cdHRha2VTdGVwKG4pIHtcblx0XHR2YXIgZGlzcGxhY2VtZW50ID0gW1xuXHRcdFx0Wy0xLCAtMV0sIFswLCAtMV0sIFsxLCAtMV0sXG5cdFx0XHRbLTEsIDBdLCBbMCwgMF0sIFsxLCAwXSxcblx0XHRcdFstMSwgMV0sIFswLCAxXSwgWzEsIDFdXG5cdFx0XTtcblxuXHRcdHZhciBkZWx0YSA9IHRoaXMuc3RhdGUuZGVsdGE7XG5cdFx0dGhpcy5zdGF0ZS5ub2Rlcy5mb3JFYWNoKG4gPT4ge1xuXHRcdFx0bGV0IHNjcmF0Y2ggPSB0aGlzLmdldFNjcmF0Y2goIG4gKTtcblx0XHRcdHNjcmF0Y2guc3ByaW5nRm9yY2VYID0gMDtcblx0XHRcdHNjcmF0Y2guc3ByaW5nRm9yY2VZID0gMDtcblx0XHRcdHNjcmF0Y2gucmVwdWxzaW9uRm9yY2VYID0gMDtcblx0XHRcdHNjcmF0Y2gucmVwdWxzaW9uRm9yY2VZID0gMDtcblx0XHR9KVxuXHRcdHRoaXMuRkRMYXlvdXQuY2FsY1NwcmluZ0ZvcmNlcygpO1xuXHRcdHRoaXMuRkRMYXlvdXQuY2FsY1JlcHVsc2lvbkZvcmNlcygpO1xuXHRcdGxldCBzY3JhdGNoID0gdGhpcy5nZXRTY3JhdGNoKCBuICk7IC8vIHBlci1lbGVtZW50IGxheW91dCBkYXRhL3N0YXRlLCB4L3ksIGV0Yy5cblx0XHR2YXIgYWN0aW9uID0gc2NyYXRjaC5hZ2VudC5hY3Qoc2NyYXRjaC5zdGF0ZSk7XG5cdFx0dmFyIGZ4ID0gc2NyYXRjaC5zcHJpbmdGb3JjZVggKyBzY3JhdGNoLnJlcHVsc2lvbkZvcmNlWDtcblx0XHR2YXIgZnkgPSBzY3JhdGNoLnNwcmluZ0ZvcmNlWSArIHNjcmF0Y2gucmVwdWxzaW9uRm9yY2VZO1xuXHRcdHZhciBkaXNwbGFjZW1lbnRYID0gZGlzcGxhY2VtZW50W2FjdGlvbl1bMF07XG5cdFx0dmFyIGRpc3BsYWNlbWVudFkgPSBkaXNwbGFjZW1lbnRbYWN0aW9uXVsxXTtcblx0XHR2YXIgdG90YWxGb3JjZSA9IE1hdGguc3FydChmeCpmeCArIGZ5KmZ5KTtcblx0XHRzY3JhdGNoLnggKz0gZGlzcGxhY2VtZW50W2FjdGlvbl1bMF0gKiBkZWx0YTtcblx0XHRzY3JhdGNoLnkgKz0gZGlzcGxhY2VtZW50W2FjdGlvbl1bMV0gKiBkZWx0YTtcblx0XHR2YXIgcmV3YXJkID0gMDtcblxuXHRcdHRoaXMuc3RhdGUubm9kZXMuZm9yRWFjaChuID0+IHtcblx0XHRcdGxldCBzY3JhdGNoID0gdGhpcy5nZXRTY3JhdGNoKCBuICk7XG5cdFx0XHRzY3JhdGNoLnNwcmluZ0ZvcmNlWCA9IDA7XG5cdFx0XHRzY3JhdGNoLnNwcmluZ0ZvcmNlWSA9IDA7XG5cdFx0XHRzY3JhdGNoLnJlcHVsc2lvbkZvcmNlWCA9IDA7XG5cdFx0XHRzY3JhdGNoLnJlcHVsc2lvbkZvcmNlWSA9IDA7XG5cdFx0fSlcblxuXHRcdHRoaXMuRkRMYXlvdXQuY2FsY1NwcmluZ0ZvcmNlcygpO1xuXHRcdHRoaXMuRkRMYXlvdXQuY2FsY1JlcHVsc2lvbkZvcmNlcygpO1xuXHRcdGZ4ID0gc2NyYXRjaC5zcHJpbmdGb3JjZVggKyBzY3JhdGNoLnJlcHVsc2lvbkZvcmNlWDtcblx0XHRmeSA9IHNjcmF0Y2guc3ByaW5nRm9yY2VZICsgc2NyYXRjaC5yZXB1bHNpb25Gb3JjZVk7XG5cdFx0dmFyIG5ld3RvdGFsRm9yY2UgPSBNYXRoLnNxcnQoZngqZnggKyBmeSpmeSk7XG5cblx0XHRpZiAoc2NyYXRjaC5vbGRUb3RhbEZvcmNlID09PSBudWxsKSB7XG5cdFx0XHRjb25zb2xlLmxvZyggJ3Jlc2V0dGluZycpIFxuXHRcdFx0cmV3YXJkID0gMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV3YXJkID0gdG90YWxGb3JjZSAtIG5ld3RvdGFsRm9yY2U7Ly90b3RhbEZvcmNlIC0gc2NyYXRjaC5vbGRUb3RhbEZvcmNlO1xuXHRcdH1cblxuXG5cdFx0aWYgKE1hdGguYWJzKHJld2FyZCA8IDAuMSkpIHtcblx0XHRcdHNjcmF0Y2gueCAtPSBkaXNwbGFjZW1lbnRbYWN0aW9uXVswXSAqIGRlbHRhO1xuXHRcdFx0c2NyYXRjaC55IC09IGRpc3BsYWNlbWVudFthY3Rpb25dWzFdICogZGVsdGE7XG5cdFx0fVxuXG5cblx0XHQvL2NvbnNvbGUubG9nKCB0b3RhbEZvcmNlICsnLCAnICtuZXd0b3RhbEZvcmNlKSBcblx0XHRzY3JhdGNoLm9sZFRvdGFsRm9yY2UgPSB0b3RhbEZvcmNlO1xuXHRcdHNjcmF0Y2guYWdlbnQubGVhcm4ocmV3YXJkLCBzY3JhdGNoLnN0YXRlLCBhY3Rpb24pO1xuXHRcdHNjcmF0Y2guc3RhdGUgPSAwLy9hY3Rpb247XG5cdH1cblxuXHRwcmVydW4oKXtcblx0XHRsZXQgc3RhdGUgPSB0aGlzLnN0YXRlOyAvLyBvcHRpb25zIG9iamVjdCBjb21iaW5lZCB3aXRoIGN1cnJlbnQgc3RhdGVcblxuXHRcdC8vIHJlZ3VsYXIgbm9kZXNcblx0XHRzdGF0ZS5ub2Rlcy5mb3JFYWNoKCBuID0+IHtcblx0XHRcdGxldCBzY3JhdGNoID0gdGhpcy5nZXRTY3JhdGNoKCBuICk7IC8vIHBlci1lbGVtZW50IGxheW91dCBkYXRhL3N0YXRlLCB4L3ksIGV0Yy5cblxuXHRcdFx0Ly8gZXhhbXBsZSBvZiBzZXR0aW5nIHBlci1lbGVtZW50IHN0YXRlIGJhc2VkIG9uIGFuIG9wdGlvbiB2YWx1ZS9mdW5jdGlvblxuXHRcdFx0c2NyYXRjaC5mb28gPSBvcHRGbiggc3RhdGUuZm9vLCBuICk7XG5cdFx0XHRzY3JhdGNoLnNwcmluZ0ZvcmNlWCA9IDA7XG5cdFx0XHRzY3JhdGNoLnNwcmluZ0ZvcmNlWSA9IDA7XG5cdFx0XHRzY3JhdGNoLnJlcHVsc2lvbkZvcmNlWCA9IDA7XG5cdFx0XHRzY3JhdGNoLnJlcHVsc2lvbkZvcmNlWSA9IDA7XG5cblx0XHRcdHRoaXMuaW5pdEFnZW50KG4pO1xuXHRcdH0gKTtcblxuXHRcdC8vIHJlZ3VsYXIgZWRnZSBzcHJpbmdzXG5cdFx0c3RhdGUuZWRnZXMuZm9yRWFjaCggZSA9PiB7XG5cdFx0XHRsZXQgc2NyYXRjaCA9IHRoaXMuZ2V0U2NyYXRjaCggZSApOyAvLyBwZXItZWxlbWVudCBsYXlvdXQgZGF0YS9zdGF0ZSwgeC95LCBldGMuXG5cblx0XHRcdC8vIGV4YW1wbGUgb2Ygc2V0dGluZyBwZXItZWxlbWVudCBzdGF0ZSBiYXNlZCBvbiBhbiBvcHRpb24gdmFsdWUvZnVuY3Rpb25cblx0XHRcdHNjcmF0Y2guZm9vID0gb3B0Rm4oIHN0YXRlLmZvbywgZSApO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8vIHJ1biB0aGlzIGVhY2ggaXRlcmFjdGlvblxuXHR0aWNrKCl7XG5cdFx0bGV0IHN0YXRlID0gdGhpcy5zdGF0ZTtcblx0XHRsZXQgaXNEb25lID0gdHJ1ZTtcblxuXHRcdHRoaXMuRkRMYXlvdXQuY2FsY1NwcmluZ0ZvcmNlcygpO1xuXHRcdHRoaXMuRkRMYXlvdXQuY2FsY1JlcHVsc2lvbkZvcmNlcygpO1xuXHRcdHN0YXRlLm5vZGVzLmZvckVhY2gobiA9PiB7XG5cdFx0XHRsZXQgcyA9IHRoaXMuZ2V0U2NyYXRjaChuKTtcblxuXHRcdFx0Ly8gZXhhbXBsZSA6IHB1dCBub2RlIGF0IHJhbmRvbSBwb3NpdGlvblxuXHRcdFx0bGV0IGRpc3BsYWNlbWVudFggPSBzLnNwcmluZ0ZvcmNlWCArIHMucmVwdWxzaW9uRm9yY2VYO1xuXHRcdFx0bGV0IGRpc3BsYWNlbWVudFkgPSBzLnNwcmluZ0ZvcmNlWSArIHMucmVwdWxzaW9uRm9yY2VZO1xuXHRcdFx0dGhpcy5GRExheW91dC50b3RhbERpc3BsYWNlbWVudCArPVxuXHRcdFx0XHRNYXRoLmFicyhkaXNwbGFjZW1lbnRYKSArIE1hdGguYWJzKGRpc3BsYWNlbWVudFkpO1xuXHRcdFx0Ly9zLnggKz0gZGlzcGxhY2VtZW50WDtcblx0XHRcdC8vcy55ICs9IGRpc3BsYWNlbWVudFk7XG5cdFx0XHR0aGlzLnRha2VTdGVwKG4pXG5cblxuXHRcdFx0cy5zcHJpbmdGb3JjZVggPSAwO1xuXHRcdFx0cy5zcHJpbmdGb3JjZVkgPSAwO1xuXHRcdFx0cy5yZXB1bHNpb25Gb3JjZVggPSAwO1xuXHRcdFx0cy5yZXB1bHNpb25Gb3JjZVkgPSAwO1xuXHRcdH0gKTtcblxuXHRcdGlmICh0aGlzLnN0YXRlLmN1cnJlbnRJdGVyYXRpb24gJSAxMDAgPT0gMCkge1xuXHRcdFx0Y29uc29sZS5sb2coIHRoaXMuc3RhdGUuY3VycmVudEl0ZXJhdGlvbikgXG5cdFx0XHRjb25zb2xlLmxvZyggdGhpcy5GRExheW91dC50b3RhbERpc3BsYWNlbWVudCkgXG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZS8vdGhpcy5GRExheW91dC5pc0NvbnZlcmdlZCgpO1xuXHR9XG5cblx0Ly8gcnVuIHRoaXMgZnVuY3Rpb24gYWZ0ZXIgdGhlIGxheW91dCBpcyBkb25lIHRpY2tpbmdcblx0cG9zdHJ1bigpe1xuXG5cdH1cblxuXHQvLyBjbGVhbiB1cCBhbnkgb2JqZWN0IHJlZnMgdGhhdCBjb3VsZCBwcmV2ZW50IGdhcmJhZ2UgY29sbGVjdGlvbiwgZXRjLlxuXHRkZXN0cm95KCl7XG5cdFx0c3VwZXIuZGVzdHJveSgpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMYXlvdXQ7XG4iLCIvKipcbiAqIFRPRE9cbiAqIENob29zZSB0aGUgdHlwZSBvZiBsYXlvdXQgdGhhdCBiZXN0IHN1aXRzIHlvdXIgdXNlY2FzZSBhcyBhIHN0YXJ0aW5nIHBvaW50LlxuICpcbiAqIEEgZGlzY3JldGUgbGF5b3V0IGlzIG9uZSB0aGF0IGFsZ29yaXRobWljYWxseSBzZXRzIHJlc3VsdGFudCBwb3NpdGlvbnMuICBJdFxuICogZG9lcyBub3QgaGF2ZSBpbnRlcm1lZGlhdGUgcG9zaXRpb25zLlxuICpcbiAqIEEgY29udGludW91cyBsYXlvdXQgaXMgb25lIHRoYXQgdXBkYXRlcyBwb3NpdGlvbnMgY29udGludW91c2x5LCBsaWtlIGEgZm9yY2UtXG4gKiBkaXJlY3RlZCAvIHBoeXNpY3Mgc2ltdWxhdGlvbiBsYXlvdXQuXG4gKi9cbi8vIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXNjcmV0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvbnRpbnVvdXMnKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=