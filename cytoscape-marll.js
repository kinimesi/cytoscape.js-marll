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
		this.length = this.options.nodes.length;
		this.nodes = this.options.nodes;
		this.repulsionConstant = this.options.repulsionConstant;
		this.springConstant = this.options.springConstant;
		this.idealEdgeLength = this.options.idealEdgeLength;
		this.maxDistance = this.options.maxDistance;
		this.allPairsShortestPath = this.options.allPairsShortestPath;
	}

	_createClass(FDLayout, [{
		key: "calcSpringForce",
		value: function calcSpringForce(edge, nodeID) {
			var sourceNodeData = edge.source();
			var targetNodeData = edge.target();

			var lengthX = targetNodeData.x - sourceNodeData.x;
			var lengthY = targetNodeData.y - sourceNodeData.y;

			var length = Math.sqrt(lengthX * lengthX + lengthY * lengthY);

			if (length == 0) return;

			// Calculate spring forces
			var springForce = this.springConstant * (length - this.idealEdgeLength);

			// Project force onto x and y axes
			var springForceX = springForce * (lengthX / length);
			var springForceY = springForce * (lengthY / length);

			// Apply forces on the end nodes
			if (sourceNodeData.ID == nodeID) {
				sourceNodeData.springForceX += springForceX;
				sourceNodeData.springForceY += springForceY;
			} else {
				targetNodeData.springForceX -= springForceX;
				targetNodeData.springForceY -= springForceY;
			}
		}
	}, {
		key: "calcSpringForces",
		value: function calcSpringForces(n) {
			var edges = n.edges;
			var nodeID = n.ID;
			var edge;

			for (var i = 0; i < edges.length; i++) {
				edge = edges[i];

				this.calcSpringForce(edge, nodeID);
			}
		}
	}, {
		key: "calcRepulsionForce",
		value: function calcRepulsionForce(nodeA, nodeB) {
			var distanceX = nodeB.x - nodeA.x;
			var distanceY = nodeB.y - nodeA.y;
			var distanceSquared = distanceX * distanceX + distanceY * distanceY;
			var distance = Math.sqrt(distanceSquared);
			if (distance == 0 || distance > 100) return;

			var repulsionForce = this.repulsionConstant / distanceSquared;

			// Project force onto x and y axes
			var repulsionForceX = repulsionForce * distanceX / distance;
			var repulsionForceY = repulsionForce * distanceY / distance;

			// Apply forces on the two nodes
			nodeA.repulsionForceX -= repulsionForceX;
			nodeA.repulsionForceY -= repulsionForceY;
			//nodeB.repulsionForceX += repulsionForceX;
			//nodeB.repulsionForceY += repulsionForceY;
		}
	}, {
		key: "calcRepulsionForces",
		value: function calcRepulsionForces(n) {
			//for (let i = 0; i < this.options.nodes.length; i++)
			{
				var nodeA = n; //this.options.nodes[i];

				for (var j = 0; j < this.length; j++) {
					var nodeB = this.nodes[j];
					this.calcRepulsionForce(nodeA, nodeB);
				}
			}
		}
	}, {
		key: "calcSpringForceFR",
		value: function calcSpringForceFR(edge) {
			var sourceNodeData = edge.source();
			var targetNodeData = edge.target();

			var lengthX = targetNodeData.x - sourceNodeData.x;
			var lengthY = targetNodeData.y - sourceNodeData.y;

			var length = Math.sqrt(lengthX * lengthX + lengthY * lengthY);

			if (length == 0) return;

			// Calculate spring forces
			var springForce = Math.pow(length - this.idealEdgeLength, 2) / this.idealEdgeLength;

			// Project force onto x and y axes
			var springForceX = springForce * (lengthX / length);
			var springForceY = springForce * (lengthY / length);

			// Apply forces on the end nodes
			sourceNodeData.springForceX += springForceX;
			sourceNodeData.springForceY += springForceY;
			targetNodeData.springForceX -= springForceX;
			targetNodeData.springForceY -= springForceY;
		}
	}, {
		key: "calcSpringForcesFR",
		value: function calcSpringForcesFR(n) {
			var edges = n.edges;
			var nodeID = n.ID;
			var edge;

			for (var i = 0; i < edges.length; i++) {
				edge = edges[i];

				this.calcSpringForceFR(edge, nodeID);
			}
		}
	}, {
		key: "calcRepulsionForceFR",
		value: function calcRepulsionForceFR(nodeA, nodeB) {
			var distanceX = nodeB.x - nodeA.x;
			var distanceY = nodeB.y - nodeA.y;
			var distanceSquared = distanceX * distanceX + distanceY * distanceY;
			var distance = Math.sqrt(distanceSquared);
			if (distance == 0) return;

			var repulsionForce = Math.pow(this.idealEdgeLength, 2) / distance;

			// Project force onto x and y axes
			var repulsionForceX = repulsionForce * distanceX / distance;
			var repulsionForceY = repulsionForce * distanceY / distance;

			// Apply forces on the two nodes
			nodeA.repulsionForceX -= repulsionForceX;
			nodeA.repulsionForceY -= repulsionForceY;
			nodeB.repulsionForceX += repulsionForceX;
			nodeB.repulsionForceY += repulsionForceY;
		}
	}, {
		key: "calcRepulsionForcesFR",
		value: function calcRepulsionForcesFR(n) {
			//for (let i = 0; i < this.options.nodes.length; i++)
			{
				var nodeA = n; //this.options.nodes[i];

				for (var j = 0; j < this.length; j++) {
					var nodeB = this.nodes[j];
					this.calcRepulsionForceFR(nodeA, nodeB);
				}
			}
		}
	}, {
		key: "calcStressPerNode",
		value: function calcStressPerNode(nodeA, nodeB) {
			var stress = 0;
			var distanceX = nodeB.x - nodeA.x;
			var distanceY = nodeB.y - nodeA.y;
			var distanceSquared = distanceX * distanceX + distanceY * distanceY;
			var distance = Math.sqrt(distanceSquared);

			var theoricDistance = this.allPairsShortestPath[nodeA.ID][nodeB.ID];
			if (theoricDistance && theoricDistance <= this.maxDistance) {
				stress = 1 / theoricDistance * Math.pow(distance - theoricDistance * this.idealEdgeLength, 2);
			}

			return stress;
		}
	}, {
		key: "calcLocalStress",
		value: function calcLocalStress(node) {
			var stress = 0;
			for (var i = 0; i < this.length; i++) {
				var nodeB = this.nodes[i];
				stress += this.calcStressPerNode(node, nodeB);
			}
			return stress;
		}
	}, {
		key: "calcGlobalStress",
		value: function calcGlobalStress() {
			var stress = 0;
			for (var i = 0; i < this.options.nodes.length; i++) {
				var nodeA = this.options.nodes[i];

				for (var j = i + 1; j < this.options.nodes.length; j++) {
					var nodeB = this.options.nodes[j];
					stress += this.calcStressPerNode(nodeA, nodeB);
				}
			}
			return stress;
		}
	}, {
		key: "isConverged",
		value: function isConverged() {
			var oscilating = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2;
			var converged = this.totalDisplacement < this.totalDisplacementThreshold;
			var stressConverged = Math.abs(this.newStress - this.oldStress) / this.oldStress < 0.0001;

			this.oldTotalDisplacement = this.totalDisplacement;
			this.oldStress = this.newStress;
			this.totalDisplacement = 0;
			this.newStress = 0;
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
    multitick = _require2.multitick,
    alltick = _require2.alltick;

var ContinuousLayout = function () {
	function ContinuousLayout(options) {
		_classCallCheck(this, ContinuousLayout);

		var o = this.options = assign({}, defaults, options);

		var s = this.state = assign({}, o, {
			layout: this,
			nodes: o.eles.nodes().toArray(),
			edges: o.eles.edges().toArray(),
			nodesCollection: o.eles.nodes(),
			tickIndex: 0,
			firstUpdate: true
		});

		s.animateEnd = o.animate && o.animate === 'end';
		s.animateContinuously = o.animate && !s.animateEnd;
		s.layoutData = {};
		s.nodes.forEach(function (ele) {
			return s.layoutData[ele.id()] = {};
		});
	}

	_createClass(ContinuousLayout, [{
		key: 'getScratch',
		value: function getScratch(el) {
			return this.state.layoutData[el.id()];
		}
	}, {
		key: 'run',
		value: function run() {
			var l = this;
			var s = this.state;

			s.tickIndex = 0;
			s.firstUpdate = true;
			s.startTime = Date.now();
			s.running = true;

			s.currentBoundingBox = makeBoundingBox(s.boundingBox, s.cy);

			if (s.ready) {
				l.one('ready', s.ready);
			}
			if (s.stop) {
				l.one('layoutstop', s.stop);
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
					refreshPositions(s.nodesCollection, s);
					fit();

					requestAnimationFrame(_frame);
				};

				var _frame = function _frame() {
					multitick(s, onNotDone, _onDone);
				};

				var _onDone = function _onDone() {
					refreshPositions(s.nodesCollection, s);
					fit();

					s.nodes.forEach(function (n) {
						regrabify(n);
						unlistenToGrab(n);
					});

					s.running = false;

					l.emit('layoutstop');
				};

				l.emit('layoutstart');

				s.nodes.forEach(function (n) {
					ungrabify(n);
					listenToGrab(n);
				});

				_frame(); // kick off
			} else {
				alltick(s);

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
	var scratch = state.layoutData[node.id()];

	assign(scratch, state.randomize ? {
		x: bb.x1 + Math.round(Math.random() * bb.w),
		y: bb.y1 + Math.round(Math.random() * bb.h)
	} : {
		x: p.x,
		y: p.y
	});

	if (state.randomize) {
		p.x = bb.x1 + Math.round(Math.random() * bb.w);
		p.y = bb.y1 + Math.round(Math.random() * bb.h);
	}

	node.x = p.x;
	node.y = p.y;
	scratch.locked = node.locked();
};

var getNodePositionData = function getNodePositionData(node, state) {
	return { x: node.x, y: node.y };
};

var refreshPositions = function refreshPositions(nodes, state) {
	nodes.positions(function (node) {
		return {
			x: node.x,
			y: node.y
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

	for (var i = 0; i < s.refresh; i++) {
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

var alltick = function alltick(state) {
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

module.exports = { tick: tick, multitick: multitick, alltick: alltick };

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
	repulsionConstant: 4500,
	incremental: false,
	delta: 10
}; // TODO define


var Layout = function (_ContinuousLayout) {
	_inherits(Layout, _ContinuousLayout);

	function Layout(options) {
		_classCallCheck(this, Layout);

		var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, assign({}, defaults, options)));

		_this.state.delta = 10;

		if (!_this.state.maxDistance || options.rewardFunction == 'globalStress') {
			_this.state.maxDistance = _this.state.nodes.length;
		}

		if (_this.state.incremental) {
			_this.state.randomize = false;
		}

		if (!_this.state.newNodes) {
			_this.state.newNodes = _this.state.cy.collection();
		}

		if (options.rewardFunction == 'customReward') {
			_this.rewardFunction = function (n) {
				return 5 * _this.getEdgeLengthVariance(n) + 10 * _this.getNumberOfNodeOverlaps(n) + _this.getNumberOfEdgeCrossings(n) + _this.getAngleVariance(n) + _this.getNodeDistanceVariance(n);
			};
		} else if (options.rewardFunction == 'localStress') {
			var shortestPaths = _this.state.eles.floydWarshall().distance;
			_this.state.allPairsShortestPath = {};
			for (var i = 0; i < _this.state.nodes.length; i++) {
				var nodeA = _this.state.nodes[i];
				_this.state.allPairsShortestPath[nodeA.id()] = {};
				for (var j = 0; j < _this.state.nodes.length; j++) {
					var nodeB = _this.state.nodes[j];
					_this.state.allPairsShortestPath[nodeA.id()][nodeB.id()] = shortestPaths(nodeA, nodeB);
				}
			}
			_this.rewardFunction = _this.getCurrentLocalStress;
		} else if (options.rewardFunction == 'globalStress') {
			_this.state.allPairsShortestPath = _this.state.eles.floydWarshall().distance;
			_this.rewardFunction = _this.getCurrentGlobalStress;
		} else if (options.rewardFunction == 'forceDirectedFR') {
			_this.rewardFunction = _this.getCurrentTotalForcesFR;
		} else if (options.rewardFunction == 'hybrid') {
			var shortestPaths = _this.state.eles.floydWarshall().distance;
			_this.state.allPairsShortestPath = {};
			for (var _i = 0; _i < _this.state.nodes.length; _i++) {
				var nodeA = _this.state.nodes[_i];
				_this.state.allPairsShortestPath[nodeA.id()] = {};
				for (var _j = 0; _j < _this.state.nodes.length; _j++) {
					var nodeB = _this.state.nodes[_j];
					_this.state.allPairsShortestPath[nodeA.id()][nodeB.id()] = shortestPaths(nodeA, nodeB);
				}
			}
			_this.rewardFunction = function (n) {
				return _this.getCurrentTotalForcesFR(n) + _this.getCurrentLocalStress(n);
			};
		} else {
			_this.rewardFunction = _this.getCurrentTotalForces;
		}

		_this.FDLayout = new _FDLayout.FDLayout(_this.state);
		return _this;
	}

	_createClass(Layout, [{
		key: 'initAgent',
		value: function initAgent(n, scratch) {
			var env = {};
			env.getNumStates = function () {
				return 9;
			};
			env.getMaxNumActions = function () {
				return 9;
			};
			env.allowedActions = function () {
				return [0, 1, 2, 3, 4, 5, 6, 7, 8];
			};
			env.initialState = function () {
				return 4;
			};
			var spec = {};
			spec.update = 'qlearn'; // 'qlearn' or 'sarsa'
			spec.gamma = 0.9; // discount factor, [0, 1)
			spec.epsilon = 0.1; // initial epsilon for epsilon-greedy policy, [0, 1)
			spec.alpha = 0.1; // value function learning rate
			spec.lambda = 0.1; // eligibility trace decay, [0,1). 0 = no eligibility traces
			spec.replacing_traces = false; // use replacing or accumulating traces
			spec.planN = 20; // number of planning steps per iteration. 0 = no planning

			spec.smooth_policy_update = false; // non-standard, updates policy smoothly to follow max_a Q
			spec.beta = 0.3; // learning rate for smooth policy update

			scratch.agent = new RL.TDAgent(env, spec);
			scratch.env = env;
			scratch.state = 4;
			scratch.agent.counter = 0;
			scratch.oldTotalForce = null;
		}
	}, {
		key: 'getCurrentLocalStress',
		value: function getCurrentLocalStress(n) {
			return this.FDLayout.calcLocalStress(n);
		}
	}, {
		key: 'getCurrentGlobalStress',
		value: function getCurrentGlobalStress() {
			return this.FDLayout.calcGlobalStress();
		}
	}, {
		key: 'getCurrentTotalForces',
		value: function getCurrentTotalForces(node) {
			//this.state.nodes.forEach(n => {
			node.springForceX = 0;
			node.springForceY = 0;
			node.repulsionForceX = 0;
			node.repulsionForceY = 0;
			//})
			this.FDLayout.calcSpringForces(node);
			this.FDLayout.calcRepulsionForces(node);
			var fx = node.springForceX + node.repulsionForceX;
			var fy = node.springForceY + node.repulsionForceY;
			var totalForce = Math.sqrt(fx * fx + fy * fy);
			return totalForce;
		}
	}, {
		key: 'getCurrentTotalForcesFR',
		value: function getCurrentTotalForcesFR(n) {
			var scratch = n;
			scratch.springForceX = 0;
			scratch.springForceY = 0;
			scratch.repulsionForceX = 0;
			scratch.repulsionForceY = 0;
			this.FDLayout.calcSpringForcesFR(n);
			this.FDLayout.calcRepulsionForcesFR(n);
			var fx = scratch.springForceX + scratch.repulsionForceX;
			var fy = scratch.springForceY + scratch.repulsionForceY;
			var totalForce = Math.sqrt(fx * fx + fy * fy);
			return totalForce;
		}
	}, {
		key: 'getNumberOfNodeOverlaps',
		value: function getNumberOfNodeOverlaps(node) {
			var state = this.state;
			var boundingBox = function boundingBox(node) {
				var scratch = node;
				return { x1: scratch.x - scratch.wHalf, y1: scratch.y - scratch.hHalf,
					x2: scratch.x + scratch.wHalf, y2: scratch.y + scratch.hHalf };
			};

			var doesOverlap = function doesOverlap(node, otherNode) {
				var bb = boundingBox(node),
				    bbOther = boundingBox(otherNode);
				return !(bbOther.x1 > bb.x2 || bbOther.x2 < bb.x1 || bbOther.y1 > bb.y2 || bbOther.y2 < bb.y1);
			};

			var overlaps = -1;
			//let nodeArray = this.state.cy.nodes().toArray();

			//for (let i = 0; i < nodeArray.length; i++) {
			this.state.nodes.forEach(function (otherNode) {
				if (doesOverlap(node, otherNode)) {
					overlaps++;
				}
			});
			return overlaps;
		}
	}, {
		key: 'getNumberOfEdgeCrossings',
		value: function getNumberOfEdgeCrossings(n) {
			var doesIntersect = function doesIntersect(a, b, c, d, p, q, r, s) {
				var det, gamma, lambda;
				det = (c - a) * (s - q) - (r - p) * (d - b);
				if (det === 0) {
					return false;
				} else {
					lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
					gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
					return 0.01 < lambda && lambda < 0.99 && 0.1 < gamma && gamma < 0.99;
				}
			};

			var crosses = 0;
			var edges = n.edges;
			var edgeArray = this.state.edges;

			for (var i = 0; i < edges.length; i++) {
				var p = edges[i].source();
				var q = edges[i].target();
				for (var j = i + 1; j < edgeArray.length; j++) {
					var r = edgeArray[j].source();
					var s = edgeArray[j].target();
					if (doesIntersect(p.x, p.y, q.x, q.y, r.x, r.y, s.x, s.y)) {
						crosses++;
					}
				}
			}
			return crosses;
		}
	}, {
		key: 'getTotalArea',
		value: function getTotalArea(cy) {
			var bb = this.state.nodes.boundingBox();
			return bb.w * bb.h;
		}
	}, {
		key: 'calcDegree',
		value: function calcDegree(node, center) {
			var nScrath = node;
			var cScrath = center;
			return Math.atan2(nScrath.y - cScrath.y, nScrath.x - cScrath.x);
		}
	}, {
		key: 'calcEdgeLengthVariance',
		value: function calcEdgeLengthVariance(edge) {
			var sourcePos = edge.source();
			var targetPos = edge.target();

			var lengthX = targetPos.x - sourcePos.x;
			var lengthY = targetPos.y - sourcePos.y;

			length = Math.sqrt(lengthX * lengthX + lengthY * lengthY);

			// Calculate variance
			return Math.pow((length - this.options.idealEdgeLength) / this.options.idealEdgeLength, 2);
		}
	}, {
		key: 'calcNodeDistanceVariance',
		value: function calcNodeDistanceVariance(sourceNode, targetNode) {
			var sourcePos = sourceNode;
			var targetPos = targetNode;

			var lengthX = targetPos.x - sourcePos.x;
			var lengthY = targetPos.y - sourcePos.y;
			var springForce;
			var springForceX;
			var springForceY;

			length = Math.sqrt(lengthX * lengthX + lengthY * lengthY);

			if (length > this.options.idealEdgeLength / 4) {
				return 0;
			}

			// Calculate variance
			return Math.abs(length - this.options.idealEdgeLength);
		}
	}, {
		key: 'getNodeDistanceVariance',
		value: function getNodeDistanceVariance(n) {
			var variance = 0;
			//for (var i = 0; i < this.state.nodes.length; i++) {
			var nodeA = n; //this.state.nodes[i];
			for (var j = 0; j < this.state.nodes.length; j++) {
				var nodeB = this.state.nodes[j];
				variance += this.calcNodeDistanceVariance(nodeA, nodeB);
			}
			//}
			//console.log( 'var: ' +variance) 
			return variance;
		}
	}, {
		key: 'getEdgeLengthVariance',
		value: function getEdgeLengthVariance(n) {
			var edges = n.edges;
			var variance = 0;
			for (var i = 0; i < edges.length; i++) {
				var edge = edges[i];
				variance += this.calcEdgeLengthVariance(edge);
			}
			return variance / edges.length;
		}
	}, {
		key: 'calcAngle',
		value: function calcAngle(n, c, m) {
			var nScrath = n;
			var mScrath = m;
			var cScrath = c;
			var ndy = nScrath.y - cScrath.y,
			    ndx = nScrath.x - cScrath.x;
			var mdy = mScrath.y - cScrath.y,
			    mdx = mScrath.x - cScrath.x;
			var na = Math.atan2(ndy, ndx);
			var ma = Math.atan2(mdy, mdx);

			var da = Math.abs(na - ma);
			da = da < Math.PI ? da : 2 * Math.PI - da;

			return da;
		}
	}, {
		key: 'getAngleVariance',
		value: function getAngleVariance(n) {
			var _this2 = this;

			var arr = n.neighbours; //hood('node');
			arr.sort(function (a, b) {
				return _this2.calcDegree(a, n) - _this2.calcDegree(b, n);
			});
			var length = arr.length;
			var variance = 0;
			for (var i = 0; i < length - 1; i++) {
				variance += Math.pow(Math.abs(this.calcAngle(arr[i], n, arr[i + 1])) - 2 * Math.PI / length, 2);
			}

			variance += Math.pow(Math.abs(this.calcAngle(arr[length - 1], n, arr[0])) - 2 * Math.PI / length, 2);
			return variance;
		}
	}, {
		key: 'takeStep',
		value: function takeStep(n) {
			var displacement = [[-1, -1], [0, -1], [1, -1], [-1, 0], [0, 0], [1, 0], [-1, 1], [0, 1], [1, 1]];

			var delta = this.state.delta;

			if (this.state.incremental && !this.state.newNodes.has(n)) {
				delta /= 10;
			}

			var totalForce = this.rewardFunction(n);
			var scratch = n; //this.getScratch( n ); // per-element layout data/state, x/y, etc.
			var action = scratch.agent.act(scratch.state);
			var displacementX = displacement[action][0];
			var displacementY = displacement[action][1];
			scratch.x += displacement[action][0] * delta;
			scratch.y += displacement[action][1] * delta;
			var reward = 0;
			this.FDLayout.totalDisplacement += Math.abs(displacementX) + Math.abs(displacementY);

			var newtotalForce = this.rewardFunction(n);

			if (scratch.oldTotalForce === null) {
				reward = 1;
			} else {
				reward = scratch.oldTotalForce - scratch.stress; //totalForce - newtotalForce;//totalForce - scratch.oldTotalForce;
				reward = totalForce - newtotalForce; //totalForce - scratch.oldTotalForce;
			}
			//console.log( reward) 


			scratch.oldTotalForce = totalForce;
			scratch.agent.learn(reward, scratch.state, action);
			if (reward < 0 && Math.random() > 0.1) {
				scratch.x -= displacement[action][0] * delta;
				scratch.y -= displacement[action][1] * delta;
				//console.log( 'too small: ' + reward) 
			} else {
				scratch.state = action;
			}
		}
	}, {
		key: 'prerun',
		value: function prerun() {
			var _this3 = this;

			var state = this.state; // options object combined with current state

			// regular nodes
			state.nodes.forEach(function (n) {
				var scratch = n; //state.layoutData[n.id()];//this.getScratch( n ); // per-element layout data/state, x/y, etc.

				n.springForceX = 0;
				n.springForceY = 0;
				n.repulsionForceX = 0;
				n.repulsionForceY = 0;

				if (_this3.state.rewardFunction == 'customReward') {
					n.wHalf = n.outerWidth() / 2;
					n.hHalf = n.outerHeight() / 2;
					n.neighbours = n.neighbourhood('node');
				}
				n.edges = n.connectedEdges();
				n.ID = n.id();

				_this3.initAgent(n, scratch);
			});
		}

		// run this each iteraction

	}, {
		key: 'tick',
		value: function tick() {
			var _this4 = this;

			var state = this.state;
			var isDone = true;

			state.nodes.forEach(function (n) {
				_this4.takeStep(n);

				n.springForceX = 0;
				n.springForceY = 0;
				n.repulsionForceX = 0;
				n.repulsionForceY = 0;
			});

			if (this.state.currentIteration > 0 && this.state.currentIteration % 800 == 0) {
				this.state.delta /= 2;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jeXRvc2NhcGVNYXJsbC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlTWFybGwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlTWFybGwvLi9zcmMvYXNzaWduLmpzIiwid2VicGFjazovL2N5dG9zY2FwZU1hcmxsLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2N5dG9zY2FwZU1hcmxsLy4vc3JjL2xheW91dC9GRExheW91dC5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVNYXJsbC8uL3NyYy9sYXlvdXQvY29udGludW91cy1iYXNlL2RlZmF1bHRzLmpzIiwid2VicGFjazovL2N5dG9zY2FwZU1hcmxsLy4vc3JjL2xheW91dC9jb250aW51b3VzLWJhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlTWFybGwvLi9zcmMvbGF5b3V0L2NvbnRpbnVvdXMtYmFzZS9tYWtlLWJiLmpzIiwid2VicGFjazovL2N5dG9zY2FwZU1hcmxsLy4vc3JjL2xheW91dC9jb250aW51b3VzLWJhc2UvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlTWFybGwvLi9zcmMvbGF5b3V0L2NvbnRpbnVvdXMtYmFzZS90aWNrLmpzIiwid2VicGFjazovL2N5dG9zY2FwZU1hcmxsLy4vc3JjL2xheW91dC9jb250aW51b3VzLmpzIiwid2VicGFjazovL2N5dG9zY2FwZU1hcmxsLy4vc3JjL2xheW91dC9pbmRleC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiT2JqZWN0IiwiYXNzaWduIiwiYmluZCIsInRndCIsInNyY3MiLCJmb3JFYWNoIiwia2V5cyIsInNyYyIsImsiLCJpbXBsIiwicmVxdWlyZSIsInJlZ2lzdGVyIiwiY3l0b3NjYXBlIiwiRkRMYXlvdXQiLCJvcHRpb25zIiwidG90YWxEaXNwbGFjZW1lbnQiLCJvbGRUb3RhbERpc3BsYWNlbWVudCIsImRpc3BsYWNlbWVudFRocmVzaG9sZFBlck5vZGUiLCJpZGVhbEVkZ2VMZW5ndGgiLCJ0b3RhbERpc3BsYWNlbWVudFRocmVzaG9sZCIsIm5vZGVzIiwibGVuZ3RoIiwicmVwdWxzaW9uQ29uc3RhbnQiLCJzcHJpbmdDb25zdGFudCIsIm1heERpc3RhbmNlIiwiYWxsUGFpcnNTaG9ydGVzdFBhdGgiLCJlZGdlIiwibm9kZUlEIiwic291cmNlTm9kZURhdGEiLCJzb3VyY2UiLCJ0YXJnZXROb2RlRGF0YSIsInRhcmdldCIsImxlbmd0aFgiLCJ4IiwibGVuZ3RoWSIsInkiLCJNYXRoIiwic3FydCIsInNwcmluZ0ZvcmNlIiwic3ByaW5nRm9yY2VYIiwic3ByaW5nRm9yY2VZIiwiSUQiLCJuIiwiZWRnZXMiLCJpIiwiY2FsY1NwcmluZ0ZvcmNlIiwibm9kZUEiLCJub2RlQiIsImRpc3RhbmNlWCIsImRpc3RhbmNlWSIsImRpc3RhbmNlU3F1YXJlZCIsImRpc3RhbmNlIiwicmVwdWxzaW9uRm9yY2UiLCJyZXB1bHNpb25Gb3JjZVgiLCJyZXB1bHNpb25Gb3JjZVkiLCJqIiwiY2FsY1JlcHVsc2lvbkZvcmNlIiwiY2FsY1NwcmluZ0ZvcmNlRlIiLCJjYWxjUmVwdWxzaW9uRm9yY2VGUiIsInN0cmVzcyIsInRoZW9yaWNEaXN0YW5jZSIsIm5vZGUiLCJjYWxjU3RyZXNzUGVyTm9kZSIsIm9zY2lsYXRpbmciLCJhYnMiLCJjb252ZXJnZWQiLCJzdHJlc3NDb252ZXJnZWQiLCJuZXdTdHJlc3MiLCJvbGRTdHJlc3MiLCJmcmVlemUiLCJhbmltYXRlIiwicmVmcmVzaCIsIm1heEl0ZXJhdGlvbnMiLCJtYXhTaW11bGF0aW9uVGltZSIsInVuZ3JhYmlmeVdoaWxlU2ltdWxhdGluZyIsImZpdCIsInBhZGRpbmciLCJib3VuZGluZ0JveCIsInVuZGVmaW5lZCIsInJlYWR5Iiwic3RvcCIsInJhbmRvbWl6ZSIsImluZmluaXRlIiwiZGVmYXVsdHMiLCJtYWtlQm91bmRpbmdCb3giLCJzZXRJbml0aWFsUG9zaXRpb25TdGF0ZSIsInJlZnJlc2hQb3NpdGlvbnMiLCJnZXROb2RlUG9zaXRpb25EYXRhIiwibXVsdGl0aWNrIiwiYWxsdGljayIsIkNvbnRpbnVvdXNMYXlvdXQiLCJvIiwicyIsInN0YXRlIiwibGF5b3V0IiwiZWxlcyIsInRvQXJyYXkiLCJub2Rlc0NvbGxlY3Rpb24iLCJ0aWNrSW5kZXgiLCJmaXJzdFVwZGF0ZSIsImFuaW1hdGVFbmQiLCJhbmltYXRlQ29udGludW91c2x5IiwibGF5b3V0RGF0YSIsImVsZSIsImlkIiwiZWwiLCJsIiwic3RhcnRUaW1lIiwiRGF0ZSIsIm5vdyIsInJ1bm5pbmciLCJjdXJyZW50Qm91bmRpbmdCb3giLCJjeSIsIm9uZSIsInByZXJ1biIsInVuZ3JhYmlmeSIsImdyYWJiYWJsZSIsInJlZ3JhYmlmeSIsImdyYWJpZnkiLCJ1cGRhdGVHcmFiU3RhdGUiLCJncmFiYmVkIiwib25HcmFiIiwib25GcmVlIiwib25EcmFnIiwicCIsInRwIiwicG9zaXRpb24iLCJsaXN0ZW5Ub0dyYWIiLCJvbiIsInVubGlzdGVuVG9HcmFiIiwicmVtb3ZlTGlzdGVuZXIiLCJvbk5vdERvbmUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmcmFtZSIsIm9uRG9uZSIsImVtaXQiLCJsYXlvdXRQb3NpdGlvbnMiLCJwb3N0cnVuIiwiYmIiLCJ4MSIsInkxIiwidyIsIndpZHRoIiwiaCIsImhlaWdodCIsIngyIiwieTIiLCJzY3JhdGNoIiwicm91bmQiLCJyYW5kb20iLCJsb2NrZWQiLCJwb3NpdGlvbnMiLCJub3AiLCJ0aWNrIiwidGlja0luZGljYXRlc0RvbmUiLCJkdXJhdGlvbiIsImRvbmUiLCJjdXJyZW50SXRlcmF0aW9uIiwiaXNGbiIsImZuIiwib3B0Rm4iLCJvcHQiLCJpbmNyZW1lbnRhbCIsImRlbHRhIiwiTGF5b3V0IiwicmV3YXJkRnVuY3Rpb24iLCJuZXdOb2RlcyIsImNvbGxlY3Rpb24iLCJnZXRFZGdlTGVuZ3RoVmFyaWFuY2UiLCJnZXROdW1iZXJPZk5vZGVPdmVybGFwcyIsImdldE51bWJlck9mRWRnZUNyb3NzaW5ncyIsImdldEFuZ2xlVmFyaWFuY2UiLCJnZXROb2RlRGlzdGFuY2VWYXJpYW5jZSIsInNob3J0ZXN0UGF0aHMiLCJmbG95ZFdhcnNoYWxsIiwiZ2V0Q3VycmVudExvY2FsU3RyZXNzIiwiZ2V0Q3VycmVudEdsb2JhbFN0cmVzcyIsImdldEN1cnJlbnRUb3RhbEZvcmNlc0ZSIiwiZ2V0Q3VycmVudFRvdGFsRm9yY2VzIiwiZW52IiwiZ2V0TnVtU3RhdGVzIiwiZ2V0TWF4TnVtQWN0aW9ucyIsImFsbG93ZWRBY3Rpb25zIiwiaW5pdGlhbFN0YXRlIiwic3BlYyIsInVwZGF0ZSIsImdhbW1hIiwiZXBzaWxvbiIsImFscGhhIiwibGFtYmRhIiwicmVwbGFjaW5nX3RyYWNlcyIsInBsYW5OIiwic21vb3RoX3BvbGljeV91cGRhdGUiLCJiZXRhIiwiYWdlbnQiLCJSTCIsIlREQWdlbnQiLCJjb3VudGVyIiwib2xkVG90YWxGb3JjZSIsImNhbGNMb2NhbFN0cmVzcyIsImNhbGNHbG9iYWxTdHJlc3MiLCJjYWxjU3ByaW5nRm9yY2VzIiwiY2FsY1JlcHVsc2lvbkZvcmNlcyIsImZ4IiwiZnkiLCJ0b3RhbEZvcmNlIiwiY2FsY1NwcmluZ0ZvcmNlc0ZSIiwiY2FsY1JlcHVsc2lvbkZvcmNlc0ZSIiwid0hhbGYiLCJoSGFsZiIsImRvZXNPdmVybGFwIiwib3RoZXJOb2RlIiwiYmJPdGhlciIsIm92ZXJsYXBzIiwiZG9lc0ludGVyc2VjdCIsImEiLCJiIiwiYyIsImQiLCJxIiwiciIsImRldCIsImNyb3NzZXMiLCJlZGdlQXJyYXkiLCJjZW50ZXIiLCJuU2NyYXRoIiwiY1NjcmF0aCIsImF0YW4yIiwic291cmNlUG9zIiwidGFyZ2V0UG9zIiwic291cmNlTm9kZSIsInRhcmdldE5vZGUiLCJ2YXJpYW5jZSIsImNhbGNOb2RlRGlzdGFuY2VWYXJpYW5jZSIsImNhbGNFZGdlTGVuZ3RoVmFyaWFuY2UiLCJtIiwibVNjcmF0aCIsIm5keSIsIm5keCIsIm1keSIsIm1keCIsIm5hIiwibWEiLCJkYSIsIlBJIiwiYXJyIiwibmVpZ2hib3VycyIsInNvcnQiLCJjYWxjRGVncmVlIiwiY2FsY0FuZ2xlIiwiZGlzcGxhY2VtZW50IiwiaGFzIiwiYWN0aW9uIiwiYWN0IiwiZGlzcGxhY2VtZW50WCIsImRpc3BsYWNlbWVudFkiLCJyZXdhcmQiLCJuZXd0b3RhbEZvcmNlIiwibGVhcm4iLCJvdXRlcldpZHRoIiwib3V0ZXJIZWlnaHQiLCJuZWlnaGJvdXJob29kIiwiY29ubmVjdGVkRWRnZXMiLCJpbml0QWdlbnQiLCJpc0RvbmUiLCJ0YWtlU3RlcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFFQUEsT0FBT0MsT0FBUCxHQUFpQkMsT0FBT0MsTUFBUCxJQUFpQixJQUFqQixHQUF3QkQsT0FBT0MsTUFBUCxDQUFj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UCxHQUFpQnFLLE1BQWpCLEM7Ozs7Ozs7Ozs7Ozs7O0FDbFpBOzs7Ozs7Ozs7O0FBVUE7QUFDQXRLLE9BQU9DLE9BQVAsR0FBaUJXLG1CQUFPQSxDQUFDLGdEQUFSLENBQWpCLEMiLCJmaWxlIjoiY3l0b3NjYXBlLW1hcmxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY3l0b3NjYXBlTWFybGxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY3l0b3NjYXBlTWFybGxcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gU2ltcGxlLCBpbnRlcm5hbCBPYmplY3QuYXNzaWduKCkgcG9seWZpbGwgZm9yIG9wdGlvbnMgb2JqZWN0cyBldGMuXG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbiAhPSBudWxsID8gT2JqZWN0LmFzc2lnbi5iaW5kKCBPYmplY3QgKSA6IGZ1bmN0aW9uKCB0Z3QsIC4uLnNyY3MgKXtcbiAgc3Jjcy5mb3JFYWNoKCBzcmMgPT4ge1xuICAgIE9iamVjdC5rZXlzKCBzcmMgKS5mb3JFYWNoKCBrID0+IHRndFtrXSA9IHNyY1trXSApO1xuICB9ICk7XG5cbiAgcmV0dXJuIHRndDtcbn07XG4iLCJjb25zdCBpbXBsID0gcmVxdWlyZSgnLi9sYXlvdXQnKTtcblxuLy8gcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gb24gYSBjeXRvc2NhcGUgbGliIHJlZlxubGV0IHJlZ2lzdGVyID0gZnVuY3Rpb24oIGN5dG9zY2FwZSApe1xuICBpZiggIWN5dG9zY2FwZSApeyByZXR1cm47IH0gLy8gY2FuJ3QgcmVnaXN0ZXIgaWYgY3l0b3NjYXBlIHVuc3BlY2lmaWVkXG5cbiAgY3l0b3NjYXBlKCAnbGF5b3V0JywgJ21hcmxsJywgaW1wbCApOyAvLyByZWdpc3RlciB3aXRoIGN5dG9zY2FwZS5qc1xufTtcblxuaWYoIHR5cGVvZiBjeXRvc2NhcGUgIT09ICd1bmRlZmluZWQnICl7IC8vIGV4cG9zZSB0byBnbG9iYWwgY3l0b3NjYXBlIChpLmUuIHdpbmRvdy5jeXRvc2NhcGUpXG4gIHJlZ2lzdGVyKCBjeXRvc2NhcGUgKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZWdpc3RlcjtcbiIsImNsYXNzIEZETGF5b3V0IHtcblx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy50b3RhbERpc3BsYWNlbWVudCA9IDAuMDtcblx0XHR0aGlzLm9sZFRvdGFsRGlzcGxhY2VtZW50ID0gMC4wO1xuXHRcdHRoaXMuZGlzcGxhY2VtZW50VGhyZXNob2xkUGVyTm9kZSA9ICgxLjAgKiBvcHRpb25zLmlkZWFsRWRnZUxlbmd0aCkgLyAxMDA7XG5cdFx0dGhpcy50b3RhbERpc3BsYWNlbWVudFRocmVzaG9sZCA9XG5cdFx0XHR0aGlzLmRpc3BsYWNlbWVudFRocmVzaG9sZFBlck5vZGUgKiBvcHRpb25zLm5vZGVzLmxlbmd0aDtcblx0XHR0aGlzLmxlbmd0aCA9IHRoaXMub3B0aW9ucy5ub2Rlcy5sZW5ndGg7XG5cdFx0dGhpcy5ub2RlcyA9IHRoaXMub3B0aW9ucy5ub2Rlcztcblx0XHR0aGlzLnJlcHVsc2lvbkNvbnN0YW50ID0gdGhpcy5vcHRpb25zLnJlcHVsc2lvbkNvbnN0YW50O1xuXHRcdHRoaXMuc3ByaW5nQ29uc3RhbnQgPSB0aGlzLm9wdGlvbnMuc3ByaW5nQ29uc3RhbnQ7XG5cdFx0dGhpcy5pZGVhbEVkZ2VMZW5ndGggPSB0aGlzLm9wdGlvbnMuaWRlYWxFZGdlTGVuZ3RoO1xuXHRcdHRoaXMubWF4RGlzdGFuY2UgPSB0aGlzLm9wdGlvbnMubWF4RGlzdGFuY2U7XG5cdFx0dGhpcy5hbGxQYWlyc1Nob3J0ZXN0UGF0aCA9IHRoaXMub3B0aW9ucy5hbGxQYWlyc1Nob3J0ZXN0UGF0aDtcblx0fVxuXG5cdGNhbGNTcHJpbmdGb3JjZShlZGdlLCBub2RlSUQpIHtcblx0XHR2YXIgc291cmNlTm9kZURhdGEgPSBlZGdlLnNvdXJjZSgpO1xuXHRcdHZhciB0YXJnZXROb2RlRGF0YSA9IGVkZ2UudGFyZ2V0KCk7XG5cblx0XHR2YXIgbGVuZ3RoWCA9IHRhcmdldE5vZGVEYXRhLnggLSBzb3VyY2VOb2RlRGF0YS54O1xuXHRcdHZhciBsZW5ndGhZID0gdGFyZ2V0Tm9kZURhdGEueSAtIHNvdXJjZU5vZGVEYXRhLnk7XG5cblxuXHRcdHZhciBsZW5ndGggPSBNYXRoLnNxcnQobGVuZ3RoWCAqIGxlbmd0aFggKyBsZW5ndGhZICogbGVuZ3RoWSk7XG5cblx0XHRpZihsZW5ndGggPT0gMClcblx0XHRcdHJldHVybjtcblxuXHRcdC8vIENhbGN1bGF0ZSBzcHJpbmcgZm9yY2VzXG5cdFx0dmFyIHNwcmluZ0ZvcmNlID0gdGhpcy5zcHJpbmdDb25zdGFudCAqIChsZW5ndGggLSB0aGlzLmlkZWFsRWRnZUxlbmd0aCk7XG5cblx0XHQvLyBQcm9qZWN0IGZvcmNlIG9udG8geCBhbmQgeSBheGVzXG5cdFx0dmFyIHNwcmluZ0ZvcmNlWCA9IHNwcmluZ0ZvcmNlICogKGxlbmd0aFggLyBsZW5ndGgpO1xuXHRcdHZhciBzcHJpbmdGb3JjZVkgPSBzcHJpbmdGb3JjZSAqIChsZW5ndGhZIC8gbGVuZ3RoKTtcblxuXHRcdC8vIEFwcGx5IGZvcmNlcyBvbiB0aGUgZW5kIG5vZGVzXG5cdFx0aWYgKHNvdXJjZU5vZGVEYXRhLklEID09IG5vZGVJRCkge1xuXHRcdFx0c291cmNlTm9kZURhdGEuc3ByaW5nRm9yY2VYICs9IHNwcmluZ0ZvcmNlWDtcblx0XHRcdHNvdXJjZU5vZGVEYXRhLnNwcmluZ0ZvcmNlWSArPSBzcHJpbmdGb3JjZVk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldE5vZGVEYXRhLnNwcmluZ0ZvcmNlWCAtPSBzcHJpbmdGb3JjZVg7XG5cdFx0XHR0YXJnZXROb2RlRGF0YS5zcHJpbmdGb3JjZVkgLT0gc3ByaW5nRm9yY2VZO1xuXHRcdH1cblx0fTtcblxuXHRjYWxjU3ByaW5nRm9yY2VzKG4pIHtcblx0XHR2YXIgZWRnZXMgPSBuLmVkZ2VzO1xuXHRcdHZhciBub2RlSUQgPSBuLklEO1xuXHRcdHZhciBlZGdlO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlZGdlcy5sZW5ndGg7IGkrKylcblx0XHR7XG5cdFx0XHRlZGdlID0gZWRnZXNbaV07XG5cblx0XHRcdHRoaXMuY2FsY1NwcmluZ0ZvcmNlKGVkZ2UsIG5vZGVJRCk7XG5cdFx0fVxuXHR9XG5cblx0Y2FsY1JlcHVsc2lvbkZvcmNlKG5vZGVBLCBub2RlQikge1xuXHRcdHZhciBkaXN0YW5jZVggPSBub2RlQi54IC0gbm9kZUEueFxuXHRcdHZhciBkaXN0YW5jZVkgPSBub2RlQi55IC0gbm9kZUEueVxuXHRcdHZhciBkaXN0YW5jZVNxdWFyZWQgPSBkaXN0YW5jZVggKiBkaXN0YW5jZVggKyBkaXN0YW5jZVkgKiBkaXN0YW5jZVk7XG5cdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KGRpc3RhbmNlU3F1YXJlZCk7XG5cdFx0aWYgKGRpc3RhbmNlID09IDAgfHwgZGlzdGFuY2UgPiAxMDApXG5cdFx0XHRyZXR1cm47XG5cblx0XHR2YXIgcmVwdWxzaW9uRm9yY2UgPSB0aGlzLnJlcHVsc2lvbkNvbnN0YW50IC8gZGlzdGFuY2VTcXVhcmVkO1xuXG5cdFx0Ly8gUHJvamVjdCBmb3JjZSBvbnRvIHggYW5kIHkgYXhlc1xuXHRcdHZhciByZXB1bHNpb25Gb3JjZVggPSByZXB1bHNpb25Gb3JjZSAqIGRpc3RhbmNlWCAvIGRpc3RhbmNlO1xuXHRcdHZhciByZXB1bHNpb25Gb3JjZVkgPSByZXB1bHNpb25Gb3JjZSAqIGRpc3RhbmNlWSAvIGRpc3RhbmNlO1xuXG5cdFx0Ly8gQXBwbHkgZm9yY2VzIG9uIHRoZSB0d28gbm9kZXNcblx0XHRub2RlQS5yZXB1bHNpb25Gb3JjZVggLT0gcmVwdWxzaW9uRm9yY2VYO1xuXHRcdG5vZGVBLnJlcHVsc2lvbkZvcmNlWSAtPSByZXB1bHNpb25Gb3JjZVk7XG5cdFx0Ly9ub2RlQi5yZXB1bHNpb25Gb3JjZVggKz0gcmVwdWxzaW9uRm9yY2VYO1xuXHRcdC8vbm9kZUIucmVwdWxzaW9uRm9yY2VZICs9IHJlcHVsc2lvbkZvcmNlWTtcblx0fVxuXG5cdGNhbGNSZXB1bHNpb25Gb3JjZXMobikge1xuXHRcdC8vZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMubm9kZXMubGVuZ3RoOyBpKyspXG5cdFx0e1xuXHRcdFx0bGV0IG5vZGVBID0gbi8vdGhpcy5vcHRpb25zLm5vZGVzW2ldO1xuXG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubGVuZ3RoOyBqKyspXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBub2RlQiA9IHRoaXMubm9kZXNbal07XG5cdFx0XHRcdHRoaXMuY2FsY1JlcHVsc2lvbkZvcmNlKG5vZGVBLCBub2RlQik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y2FsY1NwcmluZ0ZvcmNlRlIoZWRnZSkge1xuXHRcdHZhciBzb3VyY2VOb2RlRGF0YSA9IGVkZ2Uuc291cmNlKCk7XG5cdFx0dmFyIHRhcmdldE5vZGVEYXRhID0gZWRnZS50YXJnZXQoKTtcblxuXHRcdHZhciBsZW5ndGhYID0gdGFyZ2V0Tm9kZURhdGEueCAtIHNvdXJjZU5vZGVEYXRhLng7XG5cdFx0dmFyIGxlbmd0aFkgPSB0YXJnZXROb2RlRGF0YS55IC0gc291cmNlTm9kZURhdGEueTtcblxuXG5cdFx0dmFyIGxlbmd0aCA9IE1hdGguc3FydChsZW5ndGhYICogbGVuZ3RoWCArIGxlbmd0aFkgKiBsZW5ndGhZKTtcblxuXHRcdGlmKGxlbmd0aCA9PSAwKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0Ly8gQ2FsY3VsYXRlIHNwcmluZyBmb3JjZXNcblx0XHR2YXIgc3ByaW5nRm9yY2UgPSAobGVuZ3RoIC0gdGhpcy5pZGVhbEVkZ2VMZW5ndGgpICoqIDIgLyB0aGlzLmlkZWFsRWRnZUxlbmd0aFxuXG5cdFx0Ly8gUHJvamVjdCBmb3JjZSBvbnRvIHggYW5kIHkgYXhlc1xuXHRcdHZhciBzcHJpbmdGb3JjZVggPSBzcHJpbmdGb3JjZSAqIChsZW5ndGhYIC8gbGVuZ3RoKTtcblx0XHR2YXIgc3ByaW5nRm9yY2VZID0gc3ByaW5nRm9yY2UgKiAobGVuZ3RoWSAvIGxlbmd0aCk7XG5cblx0XHQvLyBBcHBseSBmb3JjZXMgb24gdGhlIGVuZCBub2Rlc1xuXHRcdHNvdXJjZU5vZGVEYXRhLnNwcmluZ0ZvcmNlWCArPSBzcHJpbmdGb3JjZVg7XG5cdFx0c291cmNlTm9kZURhdGEuc3ByaW5nRm9yY2VZICs9IHNwcmluZ0ZvcmNlWTtcblx0XHR0YXJnZXROb2RlRGF0YS5zcHJpbmdGb3JjZVggLT0gc3ByaW5nRm9yY2VYO1xuXHRcdHRhcmdldE5vZGVEYXRhLnNwcmluZ0ZvcmNlWSAtPSBzcHJpbmdGb3JjZVk7XG5cdH1cblxuXHRjYWxjU3ByaW5nRm9yY2VzRlIobikge1xuXHRcdHZhciBlZGdlcyA9IG4uZWRnZXM7XG5cdFx0dmFyIG5vZGVJRCA9IG4uSUQ7XG5cdFx0dmFyIGVkZ2U7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGVkZ2VzLmxlbmd0aDsgaSsrKVxuXHRcdHtcblx0XHRcdGVkZ2UgPSBlZGdlc1tpXTtcblxuXHRcdFx0dGhpcy5jYWxjU3ByaW5nRm9yY2VGUihlZGdlLCBub2RlSUQpO1xuXHRcdH1cblx0fVxuXG5cdGNhbGNSZXB1bHNpb25Gb3JjZUZSKG5vZGVBLCBub2RlQikge1xuXHRcdHZhciBkaXN0YW5jZVggPSBub2RlQi54IC0gbm9kZUEueFxuXHRcdHZhciBkaXN0YW5jZVkgPSBub2RlQi55IC0gbm9kZUEueVxuXHRcdHZhciBkaXN0YW5jZVNxdWFyZWQgPSBkaXN0YW5jZVggKiBkaXN0YW5jZVggKyBkaXN0YW5jZVkgKiBkaXN0YW5jZVk7XG5cdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KGRpc3RhbmNlU3F1YXJlZCk7XG5cdFx0aWYgKGRpc3RhbmNlID09IDApXG5cdFx0XHRyZXR1cm47XG5cblx0XHR2YXIgcmVwdWxzaW9uRm9yY2UgPSB0aGlzLmlkZWFsRWRnZUxlbmd0aCAqKiAyIC8gZGlzdGFuY2U7XG5cblx0XHQvLyBQcm9qZWN0IGZvcmNlIG9udG8geCBhbmQgeSBheGVzXG5cdFx0dmFyIHJlcHVsc2lvbkZvcmNlWCA9IHJlcHVsc2lvbkZvcmNlICogZGlzdGFuY2VYIC8gZGlzdGFuY2U7XG5cdFx0dmFyIHJlcHVsc2lvbkZvcmNlWSA9IHJlcHVsc2lvbkZvcmNlICogZGlzdGFuY2VZIC8gZGlzdGFuY2U7XG5cblx0XHQvLyBBcHBseSBmb3JjZXMgb24gdGhlIHR3byBub2Rlc1xuXHRcdG5vZGVBLnJlcHVsc2lvbkZvcmNlWCAtPSByZXB1bHNpb25Gb3JjZVg7XG5cdFx0bm9kZUEucmVwdWxzaW9uRm9yY2VZIC09IHJlcHVsc2lvbkZvcmNlWTtcblx0XHRub2RlQi5yZXB1bHNpb25Gb3JjZVggKz0gcmVwdWxzaW9uRm9yY2VYO1xuXHRcdG5vZGVCLnJlcHVsc2lvbkZvcmNlWSArPSByZXB1bHNpb25Gb3JjZVk7XG5cdH1cblxuXHRjYWxjUmVwdWxzaW9uRm9yY2VzRlIobikge1xuXHRcdC8vZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMubm9kZXMubGVuZ3RoOyBpKyspXG5cdFx0e1xuXHRcdFx0bGV0IG5vZGVBID0gbi8vdGhpcy5vcHRpb25zLm5vZGVzW2ldO1xuXG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubGVuZ3RoOyBqKyspXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBub2RlQiA9IHRoaXMubm9kZXNbal07XG5cdFx0XHRcdHRoaXMuY2FsY1JlcHVsc2lvbkZvcmNlRlIobm9kZUEsIG5vZGVCKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjYWxjU3RyZXNzUGVyTm9kZShub2RlQSwgbm9kZUIpIHtcblx0XHR2YXIgc3RyZXNzID0gMDtcblx0XHR2YXIgZGlzdGFuY2VYID0gbm9kZUIueCAtIG5vZGVBLnhcblx0XHR2YXIgZGlzdGFuY2VZID0gbm9kZUIueSAtIG5vZGVBLnlcblx0XHR2YXIgZGlzdGFuY2VTcXVhcmVkID0gZGlzdGFuY2VYICogZGlzdGFuY2VYICsgZGlzdGFuY2VZICogZGlzdGFuY2VZO1xuXHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChkaXN0YW5jZVNxdWFyZWQpO1xuXG5cdFx0dmFyIHRoZW9yaWNEaXN0YW5jZSA9IHRoaXMuYWxsUGFpcnNTaG9ydGVzdFBhdGhbbm9kZUEuSURdW25vZGVCLklEXTtcblx0XHRpZiAodGhlb3JpY0Rpc3RhbmNlICYmIHRoZW9yaWNEaXN0YW5jZSA8PSB0aGlzLm1heERpc3RhbmNlKSB7XG5cdFx0XHRzdHJlc3MgPSAxL3RoZW9yaWNEaXN0YW5jZSAqIChkaXN0YW5jZSAtIHRoZW9yaWNEaXN0YW5jZSAqIHRoaXMuaWRlYWxFZGdlTGVuZ3RoKSAqKiAyO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdHJlc3M7XG5cdH1cblxuXHRjYWxjTG9jYWxTdHJlc3Mobm9kZSkge1xuXHRcdHZhciBzdHJlc3MgPSAwO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IG5vZGVCID0gdGhpcy5ub2Rlc1tpXTtcblx0XHRcdHN0cmVzcyArPSB0aGlzLmNhbGNTdHJlc3NQZXJOb2RlKG5vZGUsIG5vZGVCKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN0cmVzcztcblx0fVxuXG5cdGNhbGNHbG9iYWxTdHJlc3MoKSB7XG5cdFx0dmFyIHN0cmVzcyA9IDA7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMubm9kZXMubGVuZ3RoOyBpKyspXG5cdFx0e1xuXHRcdFx0bGV0IG5vZGVBID0gdGhpcy5vcHRpb25zLm5vZGVzW2ldO1xuXG5cdFx0XHRmb3IgKGxldCBqID0gaSArIDE7IGogPCB0aGlzLm9wdGlvbnMubm9kZXMubGVuZ3RoOyBqKyspXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBub2RlQiA9IHRoaXMub3B0aW9ucy5ub2Rlc1tqXTtcblx0XHRcdFx0c3RyZXNzICs9IHRoaXMuY2FsY1N0cmVzc1Blck5vZGUobm9kZUEsIG5vZGVCKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHN0cmVzcztcblx0fVxuXG5cdGlzQ29udmVyZ2VkKCkge1xuXHRcdHZhciBvc2NpbGF0aW5nID0gTWF0aC5hYnModGhpcy50b3RhbERpc3BsYWNlbWVudCAtIHRoaXMub2xkVG90YWxEaXNwbGFjZW1lbnQpIDwgMjtcblx0XHR2YXIgY29udmVyZ2VkID0gdGhpcy50b3RhbERpc3BsYWNlbWVudCA8IHRoaXMudG90YWxEaXNwbGFjZW1lbnRUaHJlc2hvbGQ7XG5cdFx0dmFyIHN0cmVzc0NvbnZlcmdlZCA9IE1hdGguYWJzKHRoaXMubmV3U3RyZXNzIC0gdGhpcy5vbGRTdHJlc3MpIC8gdGhpcy5vbGRTdHJlc3MgPCAwLjAwMDE7XG5cblx0XHR0aGlzLm9sZFRvdGFsRGlzcGxhY2VtZW50ID0gdGhpcy50b3RhbERpc3BsYWNlbWVudDtcblx0XHR0aGlzLm9sZFN0cmVzcyA9IHRoaXMubmV3U3RyZXNzO1xuXHRcdHRoaXMudG90YWxEaXNwbGFjZW1lbnQgPSAwO1xuXHRcdHRoaXMubmV3U3RyZXNzID0gMDtcblx0XHRyZXR1cm4gY29udmVyZ2VkIHx8IG9zY2lsYXRpbmc7XG5cdH1cbn1cblxuZXhwb3J0IHtGRExheW91dH07XG4iLCIvLyBnZW5lcmFsIGRlZmF1bHQgb3B0aW9ucyBmb3IgZm9yY2UtZGlyZWN0ZWQgbGF5b3V0XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZSh7XG5cdGFuaW1hdGU6IHRydWUsIC8vIHdoZXRoZXIgdG8gc2hvdyB0aGUgbGF5b3V0IGFzIGl0J3MgcnVubmluZzsgc3BlY2lhbCAnZW5kJyB2YWx1ZSBtYWtlcyB0aGUgbGF5b3V0IGFuaW1hdGUgbGlrZSBhIGRpc2NyZXRlIGxheW91dFxuXHRyZWZyZXNoOiAxMCwgLy8gbnVtYmVyIG9mIHRpY2tzIHBlciBmcmFtZTsgaGlnaGVyIGlzIGZhc3RlciBidXQgbW9yZSBqZXJreVxuXHRtYXhJdGVyYXRpb25zOiAxMDAwLCAvLyBtYXggaXRlcmF0aW9ucyBiZWZvcmUgdGhlIGxheW91dCB3aWxsIGJhaWwgb3V0XG5cdG1heFNpbXVsYXRpb25UaW1lOiA0MDAwMCwgLy8gbWF4IGxlbmd0aCBpbiBtcyB0byBydW4gdGhlIGxheW91dFxuXHR1bmdyYWJpZnlXaGlsZVNpbXVsYXRpbmc6IGZhbHNlLCAvLyBzbyB5b3UgY2FuJ3QgZHJhZyBub2RlcyBkdXJpbmcgbGF5b3V0XG5cdGZpdDogdHJ1ZSwgLy8gb24gZXZlcnkgbGF5b3V0IHJlcG9zaXRpb24gb2Ygbm9kZXMsIGZpdCB0aGUgdmlld3BvcnRcblx0cGFkZGluZzogMzAsIC8vIHBhZGRpbmcgYXJvdW5kIHRoZSBzaW11bGF0aW9uXG5cdGJvdW5kaW5nQm94OiB1bmRlZmluZWQsIC8vIGNvbnN0cmFpbiBsYXlvdXQgYm91bmRzOyB7IHgxLCB5MSwgeDIsIHkyIH0gb3IgeyB4MSwgeTEsIHcsIGggfVxuXG5cdC8vIGxheW91dCBldmVudCBjYWxsYmFja3Ncblx0cmVhZHk6IGZ1bmN0aW9uKCl7fSwgLy8gb24gbGF5b3V0cmVhZHlcblx0c3RvcDogZnVuY3Rpb24oKXt9LCAvLyBvbiBsYXlvdXRzdG9wXG5cblx0Ly8gcG9zaXRpb25pbmcgb3B0aW9uc1xuXHRyYW5kb21pemU6IHRydWUsIC8vIHVzZSByYW5kb20gbm9kZSBwb3NpdGlvbnMgYXQgYmVnaW5uaW5nIG9mIGxheW91dFxuXG5cdC8vIGluZmluaXRlIGxheW91dCBvcHRpb25zXG5cdGluZmluaXRlOiBmYWxzZSAvLyBvdmVycmlkZXMgYWxsIG90aGVyIG9wdGlvbnMgZm9yIGEgZm9yY2VzLWFsbC10aGUtdGltZSBtb2RlXG5cbn0pO1xuIiwiLyoqXG5BIGdlbmVyaWMgY29udGludW91cyBsYXlvdXQgY2xhc3NcbiovXG5cbmNvbnN0IGFzc2lnbiA9IHJlcXVpcmUoJy4uLy4uL2Fzc2lnbicpO1xuY29uc3QgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5jb25zdCBtYWtlQm91bmRpbmdCb3ggPSByZXF1aXJlKCcuL21ha2UtYmInKTtcbmNvbnN0IHsgc2V0SW5pdGlhbFBvc2l0aW9uU3RhdGUsIHJlZnJlc2hQb3NpdGlvbnMsIGdldE5vZGVQb3NpdGlvbkRhdGEgfSA9IHJlcXVpcmUoJy4vcG9zaXRpb24nKTtcbmNvbnN0IHsgbXVsdGl0aWNrLCBhbGx0aWNrIH0gPSByZXF1aXJlKCcuL3RpY2snKTtcblxuY2xhc3MgQ29udGludW91c0xheW91dCB7XG5cdGNvbnN0cnVjdG9yKCBvcHRpb25zICl7XG5cdFx0bGV0IG8gPSB0aGlzLm9wdGlvbnMgPSBhc3NpZ24oIHt9LCBkZWZhdWx0cywgb3B0aW9ucyApO1xuXG5cdFx0bGV0IHMgPSB0aGlzLnN0YXRlID0gYXNzaWduKCB7fSwgbywge1xuXHRcdFx0bGF5b3V0OiB0aGlzLFxuXHRcdFx0bm9kZXM6IG8uZWxlcy5ub2RlcygpLnRvQXJyYXkoKSxcblx0XHRcdGVkZ2VzOiBvLmVsZXMuZWRnZXMoKS50b0FycmF5KCksXG5cdFx0XHRub2Rlc0NvbGxlY3Rpb246IG8uZWxlcy5ub2RlcygpLFxuXHRcdFx0dGlja0luZGV4OiAwLFxuXHRcdFx0Zmlyc3RVcGRhdGU6IHRydWVcblx0XHR9ICk7XG5cblx0XHRzLmFuaW1hdGVFbmQgPSBvLmFuaW1hdGUgJiYgby5hbmltYXRlID09PSAnZW5kJztcblx0XHRzLmFuaW1hdGVDb250aW51b3VzbHkgPSBvLmFuaW1hdGUgJiYgIXMuYW5pbWF0ZUVuZDtcblx0XHRzLmxheW91dERhdGEgPSB7fVxuXHRcdHMubm9kZXMuZm9yRWFjaChlbGUgPT4gcy5sYXlvdXREYXRhW2VsZS5pZCgpXSA9IHt9KTtcblx0fVxuXG5cdGdldFNjcmF0Y2goIGVsICl7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUubGF5b3V0RGF0YVtlbC5pZCgpXTtcblx0fVxuXG5cdHJ1bigpe1xuXHRcdGxldCBsID0gdGhpcztcblx0XHRsZXQgcyA9IHRoaXMuc3RhdGU7XG5cblx0XHRzLnRpY2tJbmRleCA9IDA7XG5cdFx0cy5maXJzdFVwZGF0ZSA9IHRydWU7XG5cdFx0cy5zdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuXHRcdHMucnVubmluZyA9IHRydWU7XG5cblx0XHRzLmN1cnJlbnRCb3VuZGluZ0JveCA9IG1ha2VCb3VuZGluZ0JveCggcy5ib3VuZGluZ0JveCwgcy5jeSApO1xuXG5cdFx0aWYoIHMucmVhZHkgKXsgbC5vbmUoICdyZWFkeScsIHMucmVhZHkgKTsgfVxuXHRcdGlmKCBzLnN0b3AgKXsgbC5vbmUoICdsYXlvdXRzdG9wJywgcy5zdG9wICk7IH1cblxuXHRcdHMubm9kZXMuZm9yRWFjaCggbiA9PiBzZXRJbml0aWFsUG9zaXRpb25TdGF0ZSggbiwgcyApICk7XG5cblx0XHRsLnByZXJ1biggcyApO1xuXG5cdFx0aWYoIHMuYW5pbWF0ZUNvbnRpbnVvdXNseSApe1xuXHRcdFx0bGV0IHVuZ3JhYmlmeSA9IG5vZGUgPT4ge1xuXHRcdFx0XHRpZiggIXMudW5ncmFiaWZ5V2hpbGVTaW11bGF0aW5nICl7IHJldHVybjsgfVxuXG5cdFx0XHRcdGxldCBncmFiYmFibGUgPSBnZXROb2RlUG9zaXRpb25EYXRhKCBub2RlLCBzICkuZ3JhYmJhYmxlID0gbm9kZS5ncmFiYmFibGUoKTtcblxuXHRcdFx0XHRpZiggZ3JhYmJhYmxlICl7XG5cdFx0XHRcdFx0bm9kZS51bmdyYWJpZnkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0bGV0IHJlZ3JhYmlmeSA9IG5vZGUgPT4ge1xuXHRcdFx0XHRpZiggIXMudW5ncmFiaWZ5V2hpbGVTaW11bGF0aW5nICl7IHJldHVybjsgfVxuXG5cdFx0XHRcdGxldCBncmFiYmFibGUgPSBnZXROb2RlUG9zaXRpb25EYXRhKCBub2RlLCBzICkuZ3JhYmJhYmxlO1xuXG5cdFx0XHRcdGlmKCBncmFiYmFibGUgKXtcblx0XHRcdFx0XHRub2RlLmdyYWJpZnkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0bGV0IHVwZGF0ZUdyYWJTdGF0ZSA9IG5vZGUgPT4gZ2V0Tm9kZVBvc2l0aW9uRGF0YSggbm9kZSwgcyApLmdyYWJiZWQgPSBub2RlLmdyYWJiZWQoKTtcblxuXHRcdFx0bGV0IG9uR3JhYiA9IGZ1bmN0aW9uKHsgdGFyZ2V0IH0pe1xuXHRcdFx0XHR1cGRhdGVHcmFiU3RhdGUoIHRhcmdldCApO1xuXHRcdFx0fTtcblxuXHRcdFx0bGV0IG9uRnJlZSA9IG9uR3JhYjtcblxuXHRcdFx0bGV0IG9uRHJhZyA9IGZ1bmN0aW9uKHsgdGFyZ2V0IH0pe1xuXHRcdFx0XHRsZXQgcCA9IGdldE5vZGVQb3NpdGlvbkRhdGEoIHRhcmdldCwgcyApO1xuXHRcdFx0XHRsZXQgdHAgPSB0YXJnZXQucG9zaXRpb24oKTtcblxuXHRcdFx0XHRwLnggPSB0cC54O1xuXHRcdFx0XHRwLnkgPSB0cC55O1xuXHRcdFx0fTtcblxuXHRcdFx0bGV0IGxpc3RlblRvR3JhYiA9IG5vZGUgPT4ge1xuXHRcdFx0XHRub2RlLm9uKCdncmFiJywgb25HcmFiKTtcblx0XHRcdFx0bm9kZS5vbignZnJlZScsIG9uRnJlZSk7XG5cdFx0XHRcdG5vZGUub24oJ2RyYWcnLCBvbkRyYWcpO1xuXHRcdFx0fTtcblxuXHRcdFx0bGV0IHVubGlzdGVuVG9HcmFiID0gbm9kZSA9PiB7XG5cdFx0XHRcdG5vZGUucmVtb3ZlTGlzdGVuZXIoJ2dyYWInLCBvbkdyYWIpO1xuXHRcdFx0XHRub2RlLnJlbW92ZUxpc3RlbmVyKCdmcmVlJywgb25GcmVlKTtcblx0XHRcdFx0bm9kZS5yZW1vdmVMaXN0ZW5lcignZHJhZycsIG9uRHJhZyk7XG5cdFx0XHR9O1xuXG5cdFx0XHRsZXQgZml0ID0gKCkgPT4ge1xuXHRcdFx0XHRpZiggcy5maXQgJiYgcy5hbmltYXRlQ29udGludW91c2x5ICl7XG5cdFx0XHRcdFx0cy5jeS5maXQoIHMucGFkZGluZyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRsZXQgb25Ob3REb25lID0gKCkgPT4ge1xuXHRcdFx0XHRyZWZyZXNoUG9zaXRpb25zKCBzLm5vZGVzQ29sbGVjdGlvbiwgcyApO1xuXHRcdFx0XHRmaXQoKTtcblxuXHRcdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGZyYW1lICk7XG5cdFx0XHR9O1xuXG5cdFx0XHRsZXQgZnJhbWUgPSBmdW5jdGlvbigpe1xuXHRcdFx0XHRtdWx0aXRpY2soIHMsIG9uTm90RG9uZSwgb25Eb25lICk7XG5cdFx0XHR9O1xuXG5cdFx0XHRsZXQgb25Eb25lID0gKCkgPT4ge1xuXHRcdFx0XHRyZWZyZXNoUG9zaXRpb25zKCBzLm5vZGVzQ29sbGVjdGlvbiwgcyApO1xuXHRcdFx0XHRmaXQoKTtcblxuXHRcdFx0XHRzLm5vZGVzLmZvckVhY2goIG4gPT4ge1xuXHRcdFx0XHRcdHJlZ3JhYmlmeSggbiApO1xuXHRcdFx0XHRcdHVubGlzdGVuVG9HcmFiKCBuICk7XG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRzLnJ1bm5pbmcgPSBmYWxzZTtcblxuXHRcdFx0XHRsLmVtaXQoJ2xheW91dHN0b3AnKTtcblx0XHRcdH07XG5cblxuXHRcdFx0bC5lbWl0KCdsYXlvdXRzdGFydCcpO1xuXG5cdFx0XHRzLm5vZGVzLmZvckVhY2goIG4gPT4ge1xuXHRcdFx0XHR1bmdyYWJpZnkoIG4gKTtcblx0XHRcdFx0bGlzdGVuVG9HcmFiKCBuICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdGZyYW1lKCk7IC8vIGtpY2sgb2ZmXG5cdFx0fSBlbHNlIHtcblx0XHRcdGFsbHRpY2soIHMgKTtcblxuXHRcdFx0cy5lbGVzLmxheW91dFBvc2l0aW9ucyggdGhpcywgcywgbm9kZSA9PiBnZXROb2RlUG9zaXRpb25EYXRhKCBub2RlLCBzICkgKTtcblx0XHR9XG5cblx0XHRsLnBvc3RydW4oIHMgKTtcblxuXHRcdHJldHVybiB0aGlzOyAvLyBjaGFpbmluZ1xuXHR9XG5cblx0cHJlcnVuKCl7fVxuXHRwb3N0cnVuKCl7fVxuXHR0aWNrKCl7fVxuXG5cdHN0b3AoKXtcblx0XHR0aGlzLnN0YXRlLnJ1bm5pbmcgPSBmYWxzZTtcblxuXHRcdHJldHVybiB0aGlzOyAvLyBjaGFpbmluZ1xuXHR9XG5cblx0ZGVzdHJveSgpe1xuXHRcdHJldHVybiB0aGlzOyAvLyBjaGFpbmluZ1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRpbnVvdXNMYXlvdXQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCBiYiwgY3kgKXtcbiAgaWYoIGJiID09IG51bGwgKXtcbiAgICBiYiA9IHsgeDE6IDAsIHkxOiAwLCB3OiBjeS53aWR0aCgpLCBoOiBjeS5oZWlnaHQoKSB9O1xuICB9IGVsc2UgeyAvLyBjb3B5XG4gICAgYmIgPSB7IHgxOiBiYi54MSwgeDI6IGJiLngyLCB5MTogYmIueTEsIHkyOiBiYi55MiwgdzogYmIudywgaDogYmIuaCB9O1xuICB9XG5cbiAgaWYoIGJiLngyID09IG51bGwgKXsgYmIueDIgPSBiYi54MSArIGJiLnc7IH1cbiAgaWYoIGJiLncgPT0gbnVsbCApeyBiYi53ID0gYmIueDIgLSBiYi54MTsgfVxuICBpZiggYmIueTIgPT0gbnVsbCApeyBiYi55MiA9IGJiLnkxICsgYmIuaDsgfVxuICBpZiggYmIuaCA9PSBudWxsICl7IGJiLmggPSBiYi55MiAtIGJiLnkxOyB9XG5cbiAgcmV0dXJuIGJiO1xufTtcbiIsImNvbnN0IGFzc2lnbiA9IHJlcXVpcmUoJy4uLy4uL2Fzc2lnbicpO1xuXG5sZXQgc2V0SW5pdGlhbFBvc2l0aW9uU3RhdGUgPSBmdW5jdGlvbiggbm9kZSwgc3RhdGUgKXtcblx0bGV0IHAgPSBub2RlLnBvc2l0aW9uKCk7XG5cdGxldCBiYiA9IHN0YXRlLmN1cnJlbnRCb3VuZGluZ0JveDtcblx0bGV0IHNjcmF0Y2ggPSBzdGF0ZS5sYXlvdXREYXRhW25vZGUuaWQoKV07XG5cblx0YXNzaWduKCBzY3JhdGNoLCBzdGF0ZS5yYW5kb21pemUgPyB7XG5cdFx0eDogYmIueDEgKyBNYXRoLnJvdW5kKCBNYXRoLnJhbmRvbSgpICogYmIudyApLFxuXHRcdHk6IGJiLnkxICsgTWF0aC5yb3VuZCggTWF0aC5yYW5kb20oKSAqIGJiLmggKVxuXHR9IDoge1xuXHRcdHg6IHAueCxcblx0XHR5OiBwLnlcblx0fSApO1xuXG5cdGlmIChzdGF0ZS5yYW5kb21pemUpIHtcblx0XHRwLnggPSBiYi54MSArIE1hdGgucm91bmQoIE1hdGgucmFuZG9tKCkgKiBiYi53ICk7XG5cdFx0cC55ID0gYmIueTEgKyBNYXRoLnJvdW5kKCBNYXRoLnJhbmRvbSgpICogYmIuaCApO1xuXHR9XG5cblx0bm9kZS54ID0gcC54O1xuXHRub2RlLnkgPSBwLnk7XG5cdHNjcmF0Y2gubG9ja2VkID0gbm9kZS5sb2NrZWQoKTtcbn07XG5cbmxldCBnZXROb2RlUG9zaXRpb25EYXRhID0gZnVuY3Rpb24oIG5vZGUsIHN0YXRlICl7XG5cdHJldHVybiB7eDpub2RlLngsIHk6IG5vZGUueX07XG59O1xuXG5sZXQgcmVmcmVzaFBvc2l0aW9ucyA9IGZ1bmN0aW9uKCBub2Rlcywgc3RhdGUgKXtcblx0bm9kZXMucG9zaXRpb25zKGZ1bmN0aW9uKCBub2RlICl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHg6IG5vZGUueCxcblx0XHRcdHk6IG5vZGUueVxuXHRcdH07XG5cdH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IHNldEluaXRpYWxQb3NpdGlvblN0YXRlLCBnZXROb2RlUG9zaXRpb25EYXRhLCByZWZyZXNoUG9zaXRpb25zIH07XG4iLCJjb25zdCBub3AgPSBmdW5jdGlvbigpe307XG5cbmxldCB0aWNrID0gZnVuY3Rpb24oIHN0YXRlICl7XG5cdGxldCBzID0gc3RhdGU7XG5cdGxldCBsID0gc3RhdGUubGF5b3V0O1xuXG5cdGxldCB0aWNrSW5kaWNhdGVzRG9uZSA9IGwudGljayggcyApO1xuXG5cdGlmKCBzLmZpcnN0VXBkYXRlICl7XG5cdFx0aWYoIHMuYW5pbWF0ZUNvbnRpbnVvdXNseSApeyAvLyBpbmRpY2F0ZSB0aGUgaW5pdGlhbCBwb3NpdGlvbnMgaGF2ZSBiZWVuIHNldFxuXHRcdFx0cy5sYXlvdXQuZW1pdCgnbGF5b3V0cmVhZHknKTtcblx0XHR9XG5cdFx0cy5maXJzdFVwZGF0ZSA9IGZhbHNlO1xuXHR9XG5cblx0cy50aWNrSW5kZXgrKztcblxuXHRsZXQgZHVyYXRpb24gPSBzLnN0YXJ0VGltZSAtIERhdGUubm93KCk7XG5cblx0cmV0dXJuICFzLmluZmluaXRlICYmICggdGlja0luZGljYXRlc0RvbmUgfHwgcy50aWNrSW5kZXggPj0gcy5tYXhJdGVyYXRpb25zIHx8IGR1cmF0aW9uID49IHMubWF4U2ltdWxhdGlvblRpbWUgKTtcbn07XG5cbmxldCBtdWx0aXRpY2sgPSBmdW5jdGlvbiggc3RhdGUsIG9uTm90RG9uZSA9IG5vcCwgb25Eb25lID0gbm9wICl7XG5cdGxldCBkb25lID0gZmFsc2U7XG5cdGxldCBzID0gc3RhdGU7XG5cblx0Zm9yKCBsZXQgaSA9IDA7IGkgPCBzLnJlZnJlc2g7IGkrKyApe1xuXHRcdHMuY3VycmVudEl0ZXJhdGlvbiA9IGk7XG5cdFx0ZG9uZSA9ICFzLnJ1bm5pbmcgfHwgdGljayggcyApO1xuXG5cdFx0aWYoIGRvbmUgKXsgYnJlYWs7IH1cblx0fVxuXG5cdGlmKCAhZG9uZSApe1xuXHRcdG9uTm90RG9uZSgpO1xuXHR9IGVsc2Uge1xuXHRcdG9uRG9uZSgpO1xuXHR9XG59O1xuXG5sZXQgYWxsdGljayA9IGZ1bmN0aW9uKCBzdGF0ZSwgb25Ob3REb25lID0gbm9wLCBvbkRvbmUgPSBub3AgKXtcblx0bGV0IGRvbmUgPSBmYWxzZTtcblx0bGV0IHMgPSBzdGF0ZTtcblxuXHRmb3IoIGxldCBpID0gMDsgaSA8IHMubWF4SXRlcmF0aW9uczsgaSsrICl7XG5cdFx0cy5jdXJyZW50SXRlcmF0aW9uID0gaTtcblx0XHRkb25lID0gIXMucnVubmluZyB8fCB0aWNrKCBzICk7XG5cblx0XHRpZiggZG9uZSApeyBicmVhazsgfVxuXHR9XG5cblx0aWYoICFkb25lICl7XG5cdFx0b25Ob3REb25lKCk7XG5cdH0gZWxzZSB7XG5cdFx0b25Eb25lKCk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0geyB0aWNrLCBtdWx0aXRpY2sgLCBhbGx0aWNrfTtcbiIsImltcG9ydCB7RkRMYXlvdXR9IGZyb20gJy4vRkRMYXlvdXQnO1xuLy9pbXBvcnQgKiBhcyBDb250aW51b3VzTGF5b3V0IGZyb20gJy4vY29udGludW91cy1iYXNlLyc7XG5pbXBvcnQgQ29udGludW91c0xheW91dCBmcm9tICcuL2NvbnRpbnVvdXMtYmFzZS8nO1xuY29uc3QgYXNzaWduID0gcmVxdWlyZSgnLi4vYXNzaWduJyk7XG5jb25zdCBpc0ZuID0gZm4gPT4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nO1xuXG5jb25zdCBvcHRGbiA9ICggb3B0LCBlbGUgKSA9PiB7XG5cdGlmKCBpc0ZuKCBvcHQgKSApe1xuXHRcdHJldHVybiBvcHQoIGVsZSApO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBvcHQ7XG5cdH1cbn07XG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuXHRpZGVhbEVkZ2VMZW5ndGg6IDEwMCxcblx0c3ByaW5nQ29uc3RhbnQ6IDAuMixcblx0cmVwdWxzaW9uQ29uc3RhbnQ6IDQ1MDAsXG5cdGluY3JlbWVudGFsOiBmYWxzZSxcblx0ZGVsdGE6IDEwLFxufTsgLy8gVE9ETyBkZWZpbmVcblxuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb250aW51b3VzTGF5b3V0IHtcblx0Y29uc3RydWN0b3IoIG9wdGlvbnMgKXtcblx0XHRzdXBlciggYXNzaWduKCB7fSwgZGVmYXVsdHMsIG9wdGlvbnMgKSApO1xuXHRcdHRoaXMuc3RhdGUuZGVsdGEgPSAxMDtcblxuXHRcdGlmICghdGhpcy5zdGF0ZS5tYXhEaXN0YW5jZSB8fCBvcHRpb25zLnJld2FyZEZ1bmN0aW9uID09ICdnbG9iYWxTdHJlc3MnKSB7XG5cdFx0XHR0aGlzLnN0YXRlLm1heERpc3RhbmNlID0gdGhpcy5zdGF0ZS5ub2Rlcy5sZW5ndGg7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc3RhdGUuaW5jcmVtZW50YWwpIHtcblx0XHRcdHRoaXMuc3RhdGUucmFuZG9taXplID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLnN0YXRlLm5ld05vZGVzKSB7XG5cdFx0XHR0aGlzLnN0YXRlLm5ld05vZGVzID0gdGhpcy5zdGF0ZS5jeS5jb2xsZWN0aW9uKCk7XG5cdFx0fVxuXG5cdFx0aWYgKG9wdGlvbnMucmV3YXJkRnVuY3Rpb24gPT0gJ2N1c3RvbVJld2FyZCcpIHtcblx0XHRcdHRoaXMucmV3YXJkRnVuY3Rpb24gPSAobikgPT4ge1xuXHRcdFx0XHRyZXR1cm4gNSp0aGlzLmdldEVkZ2VMZW5ndGhWYXJpYW5jZShuKSArIDEwICogdGhpcy5nZXROdW1iZXJPZk5vZGVPdmVybGFwcyhuKSArXG5cdFx0XHRcdFx0dGhpcy5nZXROdW1iZXJPZkVkZ2VDcm9zc2luZ3MobikgKyB0aGlzLmdldEFuZ2xlVmFyaWFuY2UobikgKyB0aGlzLmdldE5vZGVEaXN0YW5jZVZhcmlhbmNlKG4pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAob3B0aW9ucy5yZXdhcmRGdW5jdGlvbiA9PSAnbG9jYWxTdHJlc3MnKSB7XG5cdFx0XHR2YXIgc2hvcnRlc3RQYXRocyA9IHRoaXMuc3RhdGUuZWxlcy5mbG95ZFdhcnNoYWxsKCkuZGlzdGFuY2U7XG5cdFx0XHR0aGlzLnN0YXRlLmFsbFBhaXJzU2hvcnRlc3RQYXRoID0ge307XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaTwgdGhpcy5zdGF0ZS5ub2Rlcy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0XHR2YXIgbm9kZUEgPSB0aGlzLnN0YXRlLm5vZGVzW2ldO1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUuYWxsUGFpcnNTaG9ydGVzdFBhdGhbbm9kZUEuaWQoKV0gPSB7fTtcblx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGo8IHRoaXMuc3RhdGUubm9kZXMubGVuZ3RoOyBqKysgKSB7XG5cdFx0XHRcdFx0dmFyIG5vZGVCID0gdGhpcy5zdGF0ZS5ub2Rlc1tqXTtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmFsbFBhaXJzU2hvcnRlc3RQYXRoW25vZGVBLmlkKCldW25vZGVCLmlkKCldID0gc2hvcnRlc3RQYXRocyhub2RlQSwgbm9kZUIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnJld2FyZEZ1bmN0aW9uID0gdGhpcy5nZXRDdXJyZW50TG9jYWxTdHJlc3M7XG5cdFx0fSBlbHNlIGlmIChvcHRpb25zLnJld2FyZEZ1bmN0aW9uID09ICdnbG9iYWxTdHJlc3MnKSB7XG5cdFx0XHR0aGlzLnN0YXRlLmFsbFBhaXJzU2hvcnRlc3RQYXRoID0gdGhpcy5zdGF0ZS5lbGVzLmZsb3lkV2Fyc2hhbGwoKS5kaXN0YW5jZTtcblx0XHRcdHRoaXMucmV3YXJkRnVuY3Rpb24gPSB0aGlzLmdldEN1cnJlbnRHbG9iYWxTdHJlc3M7XG5cdFx0fSBlbHNlIGlmIChvcHRpb25zLnJld2FyZEZ1bmN0aW9uID09ICdmb3JjZURpcmVjdGVkRlInKSB7XG5cdFx0XHR0aGlzLnJld2FyZEZ1bmN0aW9uID0gdGhpcy5nZXRDdXJyZW50VG90YWxGb3JjZXNGUjtcblx0XHR9IGVsc2UgaWYgKG9wdGlvbnMucmV3YXJkRnVuY3Rpb24gPT0gJ2h5YnJpZCcpIHtcblx0XHRcdHZhciBzaG9ydGVzdFBhdGhzID0gdGhpcy5zdGF0ZS5lbGVzLmZsb3lkV2Fyc2hhbGwoKS5kaXN0YW5jZTtcblx0XHRcdHRoaXMuc3RhdGUuYWxsUGFpcnNTaG9ydGVzdFBhdGggPSB7fTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpPCB0aGlzLnN0YXRlLm5vZGVzLmxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRcdHZhciBub2RlQSA9IHRoaXMuc3RhdGUubm9kZXNbaV07XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5hbGxQYWlyc1Nob3J0ZXN0UGF0aFtub2RlQS5pZCgpXSA9IHt9O1xuXHRcdFx0XHRmb3IgKGxldCBqID0gMDsgajwgdGhpcy5zdGF0ZS5ub2Rlcy5sZW5ndGg7IGorKyApIHtcblx0XHRcdFx0XHR2YXIgbm9kZUIgPSB0aGlzLnN0YXRlLm5vZGVzW2pdO1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUuYWxsUGFpcnNTaG9ydGVzdFBhdGhbbm9kZUEuaWQoKV1bbm9kZUIuaWQoKV0gPSBzaG9ydGVzdFBhdGhzKG5vZGVBLCBub2RlQik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMucmV3YXJkRnVuY3Rpb24gPSAobikgPT4gdGhpcy5nZXRDdXJyZW50VG90YWxGb3JjZXNGUihuKSArIHRoaXMuZ2V0Q3VycmVudExvY2FsU3RyZXNzKG4pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnJld2FyZEZ1bmN0aW9uID0gdGhpcy5nZXRDdXJyZW50VG90YWxGb3JjZXM7XG5cdFx0fVxuXG5cdFx0dGhpcy5GRExheW91dCA9IG5ldyBGRExheW91dCh0aGlzLnN0YXRlKTtcblx0fVxuXG5cdGluaXRBZ2VudChuLCBzY3JhdGNoKSB7XG5cdFx0dmFyIGVudiA9IHt9O1xuXHRcdGVudi5nZXROdW1TdGF0ZXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDk7IH1cblx0XHRlbnYuZ2V0TWF4TnVtQWN0aW9ucyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gOTsgfVxuXHRcdGVudi5hbGxvd2VkQWN0aW9ucyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdOyB9XG5cdFx0ZW52LmluaXRpYWxTdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gNDsgfVxuXHRcdHZhciBzcGVjID0ge31cblx0XHRzcGVjLnVwZGF0ZSA9ICdxbGVhcm4nOyAvLyAncWxlYXJuJyBvciAnc2Fyc2EnXG5cdFx0c3BlYy5nYW1tYSA9IDAuOTsgLy8gZGlzY291bnQgZmFjdG9yLCBbMCwgMSlcblx0XHRzcGVjLmVwc2lsb24gPSAwLjE7IC8vIGluaXRpYWwgZXBzaWxvbiBmb3IgZXBzaWxvbi1ncmVlZHkgcG9saWN5LCBbMCwgMSlcblx0XHRzcGVjLmFscGhhID0gMC4xOyAvLyB2YWx1ZSBmdW5jdGlvbiBsZWFybmluZyByYXRlXG5cdFx0c3BlYy5sYW1iZGEgPSAwLjE7IC8vIGVsaWdpYmlsaXR5IHRyYWNlIGRlY2F5LCBbMCwxKS4gMCA9IG5vIGVsaWdpYmlsaXR5IHRyYWNlc1xuXHRcdHNwZWMucmVwbGFjaW5nX3RyYWNlcyA9IGZhbHNlOyAvLyB1c2UgcmVwbGFjaW5nIG9yIGFjY3VtdWxhdGluZyB0cmFjZXNcblx0XHRzcGVjLnBsYW5OID0gMjA7IC8vIG51bWJlciBvZiBwbGFubmluZyBzdGVwcyBwZXIgaXRlcmF0aW9uLiAwID0gbm8gcGxhbm5pbmdcblxuXHRcdHNwZWMuc21vb3RoX3BvbGljeV91cGRhdGUgPSBmYWxzZTsgLy8gbm9uLXN0YW5kYXJkLCB1cGRhdGVzIHBvbGljeSBzbW9vdGhseSB0byBmb2xsb3cgbWF4X2EgUVxuXHRcdHNwZWMuYmV0YSA9IDAuMzsgLy8gbGVhcm5pbmcgcmF0ZSBmb3Igc21vb3RoIHBvbGljeSB1cGRhdGVcblxuXHRcdHNjcmF0Y2guYWdlbnQgPSBuZXcgUkwuVERBZ2VudChlbnYsIHNwZWMpO1xuXHRcdHNjcmF0Y2guZW52ID0gZW52O1xuXHRcdHNjcmF0Y2guc3RhdGUgPSA0O1xuXHRcdHNjcmF0Y2guYWdlbnQuY291bnRlciA9IDA7XG5cdFx0c2NyYXRjaC5vbGRUb3RhbEZvcmNlID0gbnVsbDtcblxuXHR9XG5cblx0Z2V0Q3VycmVudExvY2FsU3RyZXNzKG4pIHtcblx0XHRyZXR1cm4gdGhpcy5GRExheW91dC5jYWxjTG9jYWxTdHJlc3Mobik7XG5cdH1cblxuXHRnZXRDdXJyZW50R2xvYmFsU3RyZXNzKCkge1xuXHRcdHJldHVybiB0aGlzLkZETGF5b3V0LmNhbGNHbG9iYWxTdHJlc3MoKTtcblx0fVxuXG5cdGdldEN1cnJlbnRUb3RhbEZvcmNlcyhub2RlKSB7XG5cdFx0Ly90aGlzLnN0YXRlLm5vZGVzLmZvckVhY2gobiA9PiB7XG5cdFx0XHRub2RlLnNwcmluZ0ZvcmNlWCA9IDA7XG5cdFx0XHRub2RlLnNwcmluZ0ZvcmNlWSA9IDA7XG5cdFx0XHRub2RlLnJlcHVsc2lvbkZvcmNlWCA9IDA7XG5cdFx0XHRub2RlLnJlcHVsc2lvbkZvcmNlWSA9IDA7XG5cdFx0Ly99KVxuXHRcdHRoaXMuRkRMYXlvdXQuY2FsY1NwcmluZ0ZvcmNlcyhub2RlKTtcblx0XHR0aGlzLkZETGF5b3V0LmNhbGNSZXB1bHNpb25Gb3JjZXMobm9kZSk7XG5cdFx0dmFyIGZ4ID0gbm9kZS5zcHJpbmdGb3JjZVggKyBub2RlLnJlcHVsc2lvbkZvcmNlWDtcblx0XHR2YXIgZnkgPSBub2RlLnNwcmluZ0ZvcmNlWSArIG5vZGUucmVwdWxzaW9uRm9yY2VZO1xuXHRcdHZhciB0b3RhbEZvcmNlID0gTWF0aC5zcXJ0KGZ4KmZ4ICsgZnkqZnkpO1xuXHRcdHJldHVybiB0b3RhbEZvcmNlO1xuXHR9XG5cblx0Z2V0Q3VycmVudFRvdGFsRm9yY2VzRlIobikge1xuXHRcdGxldCBzY3JhdGNoID0gbjtcblx0XHRzY3JhdGNoLnNwcmluZ0ZvcmNlWCA9IDA7XG5cdFx0c2NyYXRjaC5zcHJpbmdGb3JjZVkgPSAwO1xuXHRcdHNjcmF0Y2gucmVwdWxzaW9uRm9yY2VYID0gMDtcblx0XHRzY3JhdGNoLnJlcHVsc2lvbkZvcmNlWSA9IDA7XG5cdFx0dGhpcy5GRExheW91dC5jYWxjU3ByaW5nRm9yY2VzRlIobik7XG5cdFx0dGhpcy5GRExheW91dC5jYWxjUmVwdWxzaW9uRm9yY2VzRlIobik7XG5cdFx0dmFyIGZ4ID0gc2NyYXRjaC5zcHJpbmdGb3JjZVggKyBzY3JhdGNoLnJlcHVsc2lvbkZvcmNlWDtcblx0XHR2YXIgZnkgPSBzY3JhdGNoLnNwcmluZ0ZvcmNlWSArIHNjcmF0Y2gucmVwdWxzaW9uRm9yY2VZO1xuXHRcdHZhciB0b3RhbEZvcmNlID0gTWF0aC5zcXJ0KGZ4KmZ4ICsgZnkqZnkpO1xuXHRcdHJldHVybiB0b3RhbEZvcmNlO1xuXHR9XG5cblx0Z2V0TnVtYmVyT2ZOb2RlT3ZlcmxhcHMobm9kZSkge1xuXHRcdGxldCBzdGF0ZSA9IHRoaXMuc3RhdGU7XG5cdFx0bGV0IGJvdW5kaW5nQm94ID0gZnVuY3Rpb24obm9kZSkge1xuXHRcdFx0bGV0IHNjcmF0Y2ggPSBub2RlO1xuXHRcdFx0cmV0dXJuIHt4MTogc2NyYXRjaC54IC0gc2NyYXRjaC53SGFsZiwgeTE6IHNjcmF0Y2gueSAtIHNjcmF0Y2guaEhhbGYsXG5cdFx0XHRcdHgyOiBzY3JhdGNoLnggKyBzY3JhdGNoLndIYWxmLCB5Mjogc2NyYXRjaC55ICsgc2NyYXRjaC5oSGFsZn07XG5cdFx0fVxuXG5cdFx0bGV0IGRvZXNPdmVybGFwID0gZnVuY3Rpb24obm9kZSwgb3RoZXJOb2RlKSB7XG5cdFx0XHRsZXQgYmIgPSBib3VuZGluZ0JveChub2RlKSwgYmJPdGhlciA9IGJvdW5kaW5nQm94KG90aGVyTm9kZSk7XG5cdFx0XHRyZXR1cm4gIShiYk90aGVyLngxID4gYmIueDIgfHwgYmJPdGhlci54MiA8IGJiLngxIHx8IGJiT3RoZXIueTEgPiBiYi55MiB8fCBiYk90aGVyLnkyIDwgYmIueTEpO1xuXHRcdH07XG5cblx0XHRsZXQgb3ZlcmxhcHMgPSAtMTtcblx0XHQvL2xldCBub2RlQXJyYXkgPSB0aGlzLnN0YXRlLmN5Lm5vZGVzKCkudG9BcnJheSgpO1xuXG5cdFx0Ly9mb3IgKGxldCBpID0gMDsgaSA8IG5vZGVBcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdHRoaXMuc3RhdGUubm9kZXMuZm9yRWFjaChvdGhlck5vZGUgPT4ge1xuXHRcdFx0aWYgKGRvZXNPdmVybGFwKG5vZGUsIG90aGVyTm9kZSkpIHtcblx0XHRcdFx0b3ZlcmxhcHMrKztcblx0XHRcdH1cblx0XHR9KTtcblx0XHRyZXR1cm4gb3ZlcmxhcHM7XG5cdH1cblxuXHRnZXROdW1iZXJPZkVkZ2VDcm9zc2luZ3Mobikge1xuXHRcdGxldCBkb2VzSW50ZXJzZWN0ID0gZnVuY3Rpb24oYSxiLGMsZCxwLHEscixzKSB7XG5cdFx0XHR2YXIgZGV0LCBnYW1tYSwgbGFtYmRhO1xuXHRcdFx0ZGV0ID0gKGMgLSBhKSAqIChzIC0gcSkgLSAociAtIHApICogKGQgLSBiKTtcblx0XHRcdGlmIChkZXQgPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGFtYmRhID0gKChzIC0gcSkgKiAociAtIGEpICsgKHAgLSByKSAqIChzIC0gYikpIC8gZGV0O1xuXHRcdFx0XHRnYW1tYSA9ICgoYiAtIGQpICogKHIgLSBhKSArIChjIC0gYSkgKiAocyAtIGIpKSAvIGRldDtcblx0XHRcdFx0cmV0dXJuICgwLjAxIDwgbGFtYmRhICYmIGxhbWJkYSA8IDAuOTkpICYmICgwLjEgPCBnYW1tYSAmJiBnYW1tYSA8IDAuOTkpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRsZXQgY3Jvc3NlcyA9IDA7XG5cdFx0dmFyIGVkZ2VzID0gbi5lZGdlcztcblx0XHRsZXQgZWRnZUFycmF5ID0gdGhpcy5zdGF0ZS5lZGdlcztcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZWRnZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBwID0gZWRnZXNbaV0uc291cmNlKCk7XG5cdFx0XHR2YXIgcSA9IGVkZ2VzW2ldLnRhcmdldCgpO1xuXHRcdFx0Zm9yICh2YXIgaiA9IGkgKyAxOyBqIDwgZWRnZUFycmF5Lmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHZhciByID0gZWRnZUFycmF5W2pdLnNvdXJjZSgpO1xuXHRcdFx0XHR2YXIgcyA9IGVkZ2VBcnJheVtqXS50YXJnZXQoKTtcblx0XHRcdFx0aWYgKGRvZXNJbnRlcnNlY3QocC54LCBwLnksIHEueCwgcS55LCByLngsIHIueSwgcy54LCBzLnkpKSB7XG5cdFx0XHRcdFx0Y3Jvc3NlcysrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjcm9zc2VzO1xuXHR9XG5cblx0Z2V0VG90YWxBcmVhKGN5KSB7XG5cdFx0bGV0IGJiID0gdGhpcy5zdGF0ZS5ub2Rlcy5ib3VuZGluZ0JveCgpO1xuXHRcdHJldHVybiBiYi53ICogYmIuaDtcblx0fVxuXG5cdGNhbGNEZWdyZWUobm9kZSwgY2VudGVyKSB7XG5cdFx0bGV0IG5TY3JhdGggPSBub2RlO1xuXHRcdGxldCBjU2NyYXRoID0gY2VudGVyO1xuXHRcdHJldHVybiBNYXRoLmF0YW4yKG5TY3JhdGgueSAtIGNTY3JhdGgueSwgblNjcmF0aC54IC0gY1NjcmF0aC54KTtcblx0fVxuXG5cdGNhbGNFZGdlTGVuZ3RoVmFyaWFuY2UoZWRnZSkge1xuXHRcdHZhciBzb3VyY2VQb3MgPSBlZGdlLnNvdXJjZSgpO1xuXHRcdHZhciB0YXJnZXRQb3MgPSBlZGdlLnRhcmdldCgpO1xuXG5cdFx0dmFyIGxlbmd0aFggPSB0YXJnZXRQb3MueCAtIHNvdXJjZVBvcy54O1xuXHRcdHZhciBsZW5ndGhZID0gdGFyZ2V0UG9zLnkgLSBzb3VyY2VQb3MueTtcblxuXHRcdGxlbmd0aCA9IE1hdGguc3FydChsZW5ndGhYICogbGVuZ3RoWCArIGxlbmd0aFkgKiBsZW5ndGhZKTtcblxuXG5cdFx0Ly8gQ2FsY3VsYXRlIHZhcmlhbmNlXG5cdFx0cmV0dXJuICgobGVuZ3RoIC0gdGhpcy5vcHRpb25zLmlkZWFsRWRnZUxlbmd0aCkvdGhpcy5vcHRpb25zLmlkZWFsRWRnZUxlbmd0aCkgKiogMjtcblx0fVxuXG5cdGNhbGNOb2RlRGlzdGFuY2VWYXJpYW5jZShzb3VyY2VOb2RlLCB0YXJnZXROb2RlKSB7XG5cdFx0dmFyIHNvdXJjZVBvcyA9IHNvdXJjZU5vZGU7XG5cdFx0dmFyIHRhcmdldFBvcyA9IHRhcmdldE5vZGU7XG5cblx0XHR2YXIgbGVuZ3RoWCA9IHRhcmdldFBvcy54IC0gc291cmNlUG9zLng7XG5cdFx0dmFyIGxlbmd0aFkgPSB0YXJnZXRQb3MueSAtIHNvdXJjZVBvcy55O1xuXHRcdHZhciBzcHJpbmdGb3JjZTtcblx0XHR2YXIgc3ByaW5nRm9yY2VYO1xuXHRcdHZhciBzcHJpbmdGb3JjZVk7XG5cblxuXHRcdGxlbmd0aCA9IE1hdGguc3FydChsZW5ndGhYICogbGVuZ3RoWCArIGxlbmd0aFkgKiBsZW5ndGhZKTtcblxuXHRcdGlmIChsZW5ndGggPiB0aGlzLm9wdGlvbnMuaWRlYWxFZGdlTGVuZ3RoIC8gNCkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0Ly8gQ2FsY3VsYXRlIHZhcmlhbmNlXG5cdFx0cmV0dXJuIE1hdGguYWJzKChsZW5ndGggLSB0aGlzLm9wdGlvbnMuaWRlYWxFZGdlTGVuZ3RoKSlcblx0fVxuXG5cdGdldE5vZGVEaXN0YW5jZVZhcmlhbmNlKG4pIHtcblx0XHR2YXIgdmFyaWFuY2UgPSAwO1xuXHRcdC8vZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLm5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgbm9kZUEgPSBuOy8vdGhpcy5zdGF0ZS5ub2Rlc1tpXTtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5zdGF0ZS5ub2Rlcy5sZW5ndGg7IGorKylcblx0XHRcdHtcblx0XHRcdFx0bGV0IG5vZGVCID0gdGhpcy5zdGF0ZS5ub2Rlc1tqXTtcblx0XHRcdFx0dmFyaWFuY2UgKz0gdGhpcy5jYWxjTm9kZURpc3RhbmNlVmFyaWFuY2Uobm9kZUEsIG5vZGVCKVxuXHRcdFx0fVxuXHRcdC8vfVxuXHRcdC8vY29uc29sZS5sb2coICd2YXI6ICcgK3ZhcmlhbmNlKSBcblx0XHRyZXR1cm4gdmFyaWFuY2U7XG5cdH1cblxuXHRnZXRFZGdlTGVuZ3RoVmFyaWFuY2Uobikge1xuXHRcdHZhciBlZGdlcyA9IG4uZWRnZXM7XG5cdFx0dmFyIHZhcmlhbmNlID0gMDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGVkZ2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgZWRnZSA9IGVkZ2VzW2ldXG5cdFx0XHR2YXJpYW5jZSArPSB0aGlzLmNhbGNFZGdlTGVuZ3RoVmFyaWFuY2UoZWRnZSk7XG5cdFx0fVxuXHRcdHJldHVybiB2YXJpYW5jZSAvIGVkZ2VzLmxlbmd0aDtcblx0fVxuXG5cdGNhbGNBbmdsZShuLGMsbSkge1xuXHRcdGxldCBuU2NyYXRoID0gbjtcblx0XHRsZXQgbVNjcmF0aCA9IG07XG5cdFx0bGV0IGNTY3JhdGggPSBjO1xuXHRcdGxldCBuZHkgPSBuU2NyYXRoLnkgLSBjU2NyYXRoLnksIG5keCA9IG5TY3JhdGgueCAtIGNTY3JhdGgueDtcblx0XHRsZXQgbWR5ID0gbVNjcmF0aC55IC0gY1NjcmF0aC55LCBtZHggPSBtU2NyYXRoLnggLSBjU2NyYXRoLng7XG5cdFx0bGV0IG5hID0gTWF0aC5hdGFuMihuZHksIG5keClcblx0XHRsZXQgbWEgPSAgTWF0aC5hdGFuMihtZHksIG1keCk7XG5cblx0XHRsZXQgZGEgPSBNYXRoLmFicyhuYSAtIG1hKTtcblx0XHRkYSA9IGRhIDwgTWF0aC5QSSA/IGRhIDogMiAqIE1hdGguUEkgLSBkYTtcblxuXHRcdHJldHVybiBkYVxuXHR9XG5cblx0Z2V0QW5nbGVWYXJpYW5jZShuKSB7XG5cdFx0dmFyIGFyciA9IG4ubmVpZ2hib3VyczsvL2hvb2QoJ25vZGUnKTtcblx0XHRhcnIuc29ydCgoYSwgYikgPT4gdGhpcy5jYWxjRGVncmVlKGEsIG4pIC0gdGhpcy5jYWxjRGVncmVlKGIsIG4pKTtcblx0XHR2YXIgbGVuZ3RoID0gYXJyLmxlbmd0aDtcblx0XHR2YXIgdmFyaWFuY2UgPSAwO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHR2YXJpYW5jZSArPSAoTWF0aC5hYnModGhpcy5jYWxjQW5nbGUoYXJyW2ldLCBuLCBhcnJbaSsxXSkpIC0gMiAqIE1hdGguUEkgLyBsZW5ndGgpICoqIDI7XG5cdFx0fVxuXG5cdFx0dmFyaWFuY2UgKz0gKE1hdGguYWJzKHRoaXMuY2FsY0FuZ2xlKGFycltsZW5ndGggLSAxXSwgbiwgYXJyWzBdKSkgLSAyICogTWF0aC5QSSAvIGxlbmd0aCkgKiogMjtcblx0XHRyZXR1cm4gdmFyaWFuY2U7XG5cdH1cblxuXHR0YWtlU3RlcChuKSB7XG5cdFx0dmFyIGRpc3BsYWNlbWVudCA9IFtcblx0XHRcdFstMSwgLTFdLCBbMCwgLTFdLCBbMSwgLTFdLFxuXHRcdFx0Wy0xLCAwXSwgWzAsIDBdLCBbMSwgMF0sXG5cdFx0XHRbLTEsIDFdLCBbMCwgMV0sIFsxLCAxXVxuXHRcdF07XG5cblx0XHR2YXIgZGVsdGEgPSB0aGlzLnN0YXRlLmRlbHRhO1xuXG5cdFx0aWYgKHRoaXMuc3RhdGUuaW5jcmVtZW50YWwgJiYgIXRoaXMuc3RhdGUubmV3Tm9kZXMuaGFzKG4pKSB7XG5cdFx0XHRkZWx0YSAvPSAxMDtcblx0XHR9XG5cblx0XHR2YXIgdG90YWxGb3JjZSA9IHRoaXMucmV3YXJkRnVuY3Rpb24obik7XG5cdFx0bGV0IHNjcmF0Y2ggPSBuOy8vdGhpcy5nZXRTY3JhdGNoKCBuICk7IC8vIHBlci1lbGVtZW50IGxheW91dCBkYXRhL3N0YXRlLCB4L3ksIGV0Yy5cblx0XHR2YXIgYWN0aW9uID0gc2NyYXRjaC5hZ2VudC5hY3Qoc2NyYXRjaC5zdGF0ZSk7XG5cdFx0dmFyIGRpc3BsYWNlbWVudFggPSBkaXNwbGFjZW1lbnRbYWN0aW9uXVswXTtcblx0XHR2YXIgZGlzcGxhY2VtZW50WSA9IGRpc3BsYWNlbWVudFthY3Rpb25dWzFdO1xuXHRcdHNjcmF0Y2gueCArPSBkaXNwbGFjZW1lbnRbYWN0aW9uXVswXSAqIGRlbHRhO1xuXHRcdHNjcmF0Y2gueSArPSBkaXNwbGFjZW1lbnRbYWN0aW9uXVsxXSAqIGRlbHRhO1xuXHRcdHZhciByZXdhcmQgPSAwO1xuXHRcdHRoaXMuRkRMYXlvdXQudG90YWxEaXNwbGFjZW1lbnQgKz0gTWF0aC5hYnMoZGlzcGxhY2VtZW50WCkgKyBNYXRoLmFicyhkaXNwbGFjZW1lbnRZKTtcblxuXHRcdHZhciBuZXd0b3RhbEZvcmNlID0gdGhpcy5yZXdhcmRGdW5jdGlvbihuKTtcblxuXHRcdGlmIChzY3JhdGNoLm9sZFRvdGFsRm9yY2UgPT09IG51bGwpIHtcblx0XHRcdHJld2FyZCA9IDE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJld2FyZCA9IHNjcmF0Y2gub2xkVG90YWxGb3JjZSAtIHNjcmF0Y2guc3RyZXNzOy8vdG90YWxGb3JjZSAtIG5ld3RvdGFsRm9yY2U7Ly90b3RhbEZvcmNlIC0gc2NyYXRjaC5vbGRUb3RhbEZvcmNlO1xuXHRcdFx0cmV3YXJkID0gdG90YWxGb3JjZSAtIG5ld3RvdGFsRm9yY2U7Ly90b3RhbEZvcmNlIC0gc2NyYXRjaC5vbGRUb3RhbEZvcmNlO1xuXHRcdH1cblx0XHQvL2NvbnNvbGUubG9nKCByZXdhcmQpIFxuXG5cblxuXG5cdFx0c2NyYXRjaC5vbGRUb3RhbEZvcmNlID0gdG90YWxGb3JjZTtcblx0XHRzY3JhdGNoLmFnZW50LmxlYXJuKHJld2FyZCwgc2NyYXRjaC5zdGF0ZSwgYWN0aW9uKTtcblx0XHRpZiAocmV3YXJkIDwgMCAmJiBNYXRoLnJhbmRvbSgpID4gMC4xKSB7XG5cdFx0XHRzY3JhdGNoLnggLT0gZGlzcGxhY2VtZW50W2FjdGlvbl1bMF0gKiBkZWx0YTtcblx0XHRcdHNjcmF0Y2gueSAtPSBkaXNwbGFjZW1lbnRbYWN0aW9uXVsxXSAqIGRlbHRhO1xuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ3RvbyBzbWFsbDogJyArIHJld2FyZCkgXG5cdFx0fSBlbHNlIHtcblx0XHRcdHNjcmF0Y2guc3RhdGUgPSBhY3Rpb247XG5cdFx0fVxuXHR9XG5cblx0cHJlcnVuKCl7XG5cdFx0bGV0IHN0YXRlID0gdGhpcy5zdGF0ZTsgLy8gb3B0aW9ucyBvYmplY3QgY29tYmluZWQgd2l0aCBjdXJyZW50IHN0YXRlXG5cblx0XHQvLyByZWd1bGFyIG5vZGVzXG5cdFx0c3RhdGUubm9kZXMuZm9yRWFjaCggbiA9PiB7XG5cdFx0XHRsZXQgc2NyYXRjaCA9IG4vL3N0YXRlLmxheW91dERhdGFbbi5pZCgpXTsvL3RoaXMuZ2V0U2NyYXRjaCggbiApOyAvLyBwZXItZWxlbWVudCBsYXlvdXQgZGF0YS9zdGF0ZSwgeC95LCBldGMuXG5cblx0XHRcdG4uc3ByaW5nRm9yY2VYID0gMDtcblx0XHRcdG4uc3ByaW5nRm9yY2VZID0gMDtcblx0XHRcdG4ucmVwdWxzaW9uRm9yY2VYID0gMDtcblx0XHRcdG4ucmVwdWxzaW9uRm9yY2VZID0gMDtcblxuXHRcdFx0aWYgKHRoaXMuc3RhdGUucmV3YXJkRnVuY3Rpb24gPT0gJ2N1c3RvbVJld2FyZCcpIHtcblx0XHRcdFx0bi53SGFsZiA9IG4ub3V0ZXJXaWR0aCgpIC8gMjtcblx0XHRcdFx0bi5oSGFsZiA9IG4ub3V0ZXJIZWlnaHQoKSAvIDI7XG5cdFx0XHRcdG4ubmVpZ2hib3VycyA9IG4ubmVpZ2hib3VyaG9vZCgnbm9kZScpO1xuXHRcdFx0fVxuXHRcdFx0bi5lZGdlcyA9IG4uY29ubmVjdGVkRWRnZXMoKTtcblx0XHRcdG4uSUQgPSBuLmlkKCk7XG5cblx0XHRcdHRoaXMuaW5pdEFnZW50KG4sIHNjcmF0Y2gpO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8vIHJ1biB0aGlzIGVhY2ggaXRlcmFjdGlvblxuXHR0aWNrKCl7XG5cdFx0bGV0IHN0YXRlID0gdGhpcy5zdGF0ZTtcblx0XHRsZXQgaXNEb25lID0gdHJ1ZTtcblxuXHRcdHN0YXRlLm5vZGVzLmZvckVhY2gobiA9PiB7XG5cdFx0XHR0aGlzLnRha2VTdGVwKG4pXG5cblx0XHRcdG4uc3ByaW5nRm9yY2VYID0gMDtcblx0XHRcdG4uc3ByaW5nRm9yY2VZID0gMDtcblx0XHRcdG4ucmVwdWxzaW9uRm9yY2VYID0gMDtcblx0XHRcdG4ucmVwdWxzaW9uRm9yY2VZID0gMDtcblx0XHR9ICk7XG5cblx0XHRpZiAodGhpcy5zdGF0ZS5jdXJyZW50SXRlcmF0aW9uID4gMCAmJnRoaXMuc3RhdGUuY3VycmVudEl0ZXJhdGlvbiAlIDgwMCA9PSAwKSB7XG5cdFx0dGhpcy5zdGF0ZS5kZWx0YSAvPSAyO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2UvL3RoaXMuRkRMYXlvdXQuaXNDb252ZXJnZWQoKTtcblx0fVxuXG5cdC8vIHJ1biB0aGlzIGZ1bmN0aW9uIGFmdGVyIHRoZSBsYXlvdXQgaXMgZG9uZSB0aWNraW5nXG5cdHBvc3RydW4oKXtcblxuXHR9XG5cblx0Ly8gY2xlYW4gdXAgYW55IG9iamVjdCByZWZzIHRoYXQgY291bGQgcHJldmVudCBnYXJiYWdlIGNvbGxlY3Rpb24sIGV0Yy5cblx0ZGVzdHJveSgpe1xuXHRcdHN1cGVyLmRlc3Ryb3koKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGF5b3V0O1xuIiwiLyoqXG4gKiBUT0RPXG4gKiBDaG9vc2UgdGhlIHR5cGUgb2YgbGF5b3V0IHRoYXQgYmVzdCBzdWl0cyB5b3VyIHVzZWNhc2UgYXMgYSBzdGFydGluZyBwb2ludC5cbiAqXG4gKiBBIGRpc2NyZXRlIGxheW91dCBpcyBvbmUgdGhhdCBhbGdvcml0aG1pY2FsbHkgc2V0cyByZXN1bHRhbnQgcG9zaXRpb25zLiAgSXRcbiAqIGRvZXMgbm90IGhhdmUgaW50ZXJtZWRpYXRlIHBvc2l0aW9ucy5cbiAqXG4gKiBBIGNvbnRpbnVvdXMgbGF5b3V0IGlzIG9uZSB0aGF0IHVwZGF0ZXMgcG9zaXRpb25zIGNvbnRpbnVvdXNseSwgbGlrZSBhIGZvcmNlLVxuICogZGlyZWN0ZWQgLyBwaHlzaWNzIHNpbXVsYXRpb24gbGF5b3V0LlxuICovXG4vLyBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzY3JldGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb250aW51b3VzJyk7XG4iXSwic291cmNlUm9vdCI6IiJ9