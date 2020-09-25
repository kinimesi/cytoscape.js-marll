import {FDLayout} from './FDLayout';
//import * as ContinuousLayout from './continuous-base/';
import ContinuousLayout from './continuous-base/';
const assign = require('../assign');
const isFn = fn => typeof fn === 'function';

const optFn = ( opt, ele ) => {
	if( isFn( opt ) ){
		return opt( ele );
	} else {
		return opt;
	}
};

const defaults = {
	idealEdgeLength: 100,
	springConstant: 0.2,
	repulsionConstant: 4500,
	incremental: false,
	delta: 10,
}; // TODO define


class Layout extends ContinuousLayout {
	constructor( options ){
		super( assign( {}, defaults, options ) );
		this.state.delta = 10;

		if (!this.state.maxDistance || options.rewardFunction == 'globalStress') {
			this.state.maxDistance = this.state.nodes.length;
		}

		if (this.state.incremental) {
			this.state.randomize = false;
		}

		if (!this.state.newNodes) {
			this.state.newNodes = this.state.cy.collection();
		}

		if (options.rewardFunction == 'customReward') {
			this.rewardFunction = (n) => {
				return 5*this.getEdgeLengthVariance(n) + 10 * this.getNumberOfNodeOverlaps(n) +
					this.getNumberOfEdgeCrossings(n) + this.getAngleVariance(n) + this.getNodeDistanceVariance(n);
			}
		} else if (options.rewardFunction == 'localStress') {
			var shortestPaths = this.state.eles.floydWarshall().distance;
			this.state.allPairsShortestPath = {};
			for (let i = 0; i< this.state.nodes.length; i++ ) {
					var nodeA = this.state.nodes[i];
					this.state.allPairsShortestPath[nodeA.id()] = {};
				for (let j = 0; j< this.state.nodes.length; j++ ) {
					var nodeB = this.state.nodes[j];
					this.state.allPairsShortestPath[nodeA.id()][nodeB.id()] = shortestPaths(nodeA, nodeB);
				}
			}
			this.rewardFunction = this.getCurrentLocalStress;
		} else if (options.rewardFunction == 'globalStress') {
			this.state.allPairsShortestPath = this.state.eles.floydWarshall().distance;
			this.rewardFunction = this.getCurrentGlobalStress;
		} else if (options.rewardFunction == 'forceDirectedFR') {
			this.rewardFunction = this.getCurrentTotalForcesFR;
		} else if (options.rewardFunction == 'hybrid') {
			var shortestPaths = this.state.eles.floydWarshall().distance;
			this.state.allPairsShortestPath = {};
			for (let i = 0; i< this.state.nodes.length; i++ ) {
					var nodeA = this.state.nodes[i];
					this.state.allPairsShortestPath[nodeA.id()] = {};
				for (let j = 0; j< this.state.nodes.length; j++ ) {
					var nodeB = this.state.nodes[j];
					this.state.allPairsShortestPath[nodeA.id()][nodeB.id()] = shortestPaths(nodeA, nodeB);
				}
			}
			this.rewardFunction = (n) => this.getCurrentTotalForcesFR(n) + this.getCurrentLocalStress(n);
		} else {
			this.rewardFunction = this.getCurrentTotalForces;
		}

		this.FDLayout = new FDLayout(this.state);
	}

	initAgent(n, scratch) {
		var env = {};
		env.getNumStates = function() { return 9; }
		env.getMaxNumActions = function() { return 9; }
		env.allowedActions = function() { return [0, 1, 2, 3, 4, 5, 6, 7, 8]; }
		env.initialState = function() { return 4; }
		var spec = {}
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

	getCurrentLocalStress(n) {
		return this.FDLayout.calcLocalStress(n);
	}

	getCurrentGlobalStress() {
		return this.FDLayout.calcGlobalStress();
	}

	getCurrentTotalForces(node) {
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
		var totalForce = Math.sqrt(fx*fx + fy*fy);
		return totalForce;
	}

	getCurrentTotalForcesFR(n) {
		let scratch = n;
		scratch.springForceX = 0;
		scratch.springForceY = 0;
		scratch.repulsionForceX = 0;
		scratch.repulsionForceY = 0;
		this.FDLayout.calcSpringForcesFR(n);
		this.FDLayout.calcRepulsionForcesFR(n);
		var fx = scratch.springForceX + scratch.repulsionForceX;
		var fy = scratch.springForceY + scratch.repulsionForceY;
		var totalForce = Math.sqrt(fx*fx + fy*fy);
		return totalForce;
	}

	getNumberOfNodeOverlaps(node) {
		let state = this.state;
		let boundingBox = function(node) {
			let scratch = node;
			return {x1: scratch.x - scratch.wHalf, y1: scratch.y - scratch.hHalf,
				x2: scratch.x + scratch.wHalf, y2: scratch.y + scratch.hHalf};
		}

		let doesOverlap = function(node, otherNode) {
			let bb = boundingBox(node), bbOther = boundingBox(otherNode);
			return !(bbOther.x1 > bb.x2 || bbOther.x2 < bb.x1 || bbOther.y1 > bb.y2 || bbOther.y2 < bb.y1);
		};

		let overlaps = -1;
		//let nodeArray = this.state.cy.nodes().toArray();

		//for (let i = 0; i < nodeArray.length; i++) {
		this.state.nodes.forEach(otherNode => {
			if (doesOverlap(node, otherNode)) {
				overlaps++;
			}
		});
		return overlaps;
	}

	getNumberOfEdgeCrossings(n) {
		let doesIntersect = function(a,b,c,d,p,q,r,s) {
			var det, gamma, lambda;
			det = (c - a) * (s - q) - (r - p) * (d - b);
			if (det === 0) {
				return false;
			} else {
				lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
				gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
				return (0.01 < lambda && lambda < 0.99) && (0.1 < gamma && gamma < 0.99);
			}
		};

		let crosses = 0;
		var edges = n.edges;
		let edgeArray = this.state.edges;

		for (let i = 0; i < edges.length; i++) {
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

	getTotalArea(cy) {
		let bb = this.state.nodes.boundingBox();
		return bb.w * bb.h;
	}

	calcDegree(node, center) {
		let nScrath = node;
		let cScrath = center;
		return Math.atan2(nScrath.y - cScrath.y, nScrath.x - cScrath.x);
	}

	calcEdgeLengthVariance(edge) {
		var sourcePos = edge.source();
		var targetPos = edge.target();

		var lengthX = targetPos.x - sourcePos.x;
		var lengthY = targetPos.y - sourcePos.y;

		length = Math.sqrt(lengthX * lengthX + lengthY * lengthY);


		// Calculate variance
		return ((length - this.options.idealEdgeLength)/this.options.idealEdgeLength) ** 2;
	}

	calcNodeDistanceVariance(sourceNode, targetNode) {
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
		return Math.abs((length - this.options.idealEdgeLength))
	}

	getNodeDistanceVariance(n) {
		var variance = 0;
		//for (var i = 0; i < this.state.nodes.length; i++) {
			let nodeA = n;//this.state.nodes[i];
			for (let j = 0; j < this.state.nodes.length; j++)
			{
				let nodeB = this.state.nodes[j];
				variance += this.calcNodeDistanceVariance(nodeA, nodeB)
			}
		//}
		//console.log( 'var: ' +variance) 
		return variance;
	}

	getEdgeLengthVariance(n) {
		var edges = n.edges;
		var variance = 0;
		for (var i = 0; i < edges.length; i++) {
			let edge = edges[i]
			variance += this.calcEdgeLengthVariance(edge);
		}
		return variance / edges.length;
	}

	calcAngle(n,c,m) {
		let nScrath = n;
		let mScrath = m;
		let cScrath = c;
		let ndy = nScrath.y - cScrath.y, ndx = nScrath.x - cScrath.x;
		let mdy = mScrath.y - cScrath.y, mdx = mScrath.x - cScrath.x;
		let na = Math.atan2(ndy, ndx)
		let ma =  Math.atan2(mdy, mdx);

		let da = Math.abs(na - ma);
		da = da < Math.PI ? da : 2 * Math.PI - da;

		return da
	}

	getAngleVariance(n) {
		var arr = n.neighbours;//hood('node');
		arr.sort((a, b) => this.calcDegree(a, n) - this.calcDegree(b, n));
		var length = arr.length;
		var variance = 0;
		for (let i = 0; i < length - 1; i++) {
			variance += (Math.abs(this.calcAngle(arr[i], n, arr[i+1])) - 2 * Math.PI / length) ** 2;
		}

		variance += (Math.abs(this.calcAngle(arr[length - 1], n, arr[0])) - 2 * Math.PI / length) ** 2;
		return variance;
	}

	takeStep(n) {
		var displacement = [
			[-1, -1], [0, -1], [1, -1],
			[-1, 0], [0, 0], [1, 0],
			[-1, 1], [0, 1], [1, 1]
		];

		var delta = this.state.delta;

		if (this.state.incremental && !this.state.newNodes.has(n)) {
			delta /= 10;
		}

		var totalForce = this.rewardFunction(n);
		let scratch = n;//this.getScratch( n ); // per-element layout data/state, x/y, etc.
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
			reward = scratch.oldTotalForce - scratch.stress;//totalForce - newtotalForce;//totalForce - scratch.oldTotalForce;
			reward = totalForce - newtotalForce;//totalForce - scratch.oldTotalForce;
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

	prerun(){
		let state = this.state; // options object combined with current state

		// regular nodes
		state.nodes.forEach( n => {
			let scratch = n//state.layoutData[n.id()];//this.getScratch( n ); // per-element layout data/state, x/y, etc.

			n.springForceX = 0;
			n.springForceY = 0;
			n.repulsionForceX = 0;
			n.repulsionForceY = 0;

			if (this.state.rewardFunction == 'customReward') {
				n.wHalf = n.outerWidth() / 2;
				n.hHalf = n.outerHeight() / 2;
				n.neighbours = n.neighbourhood('node');
			}
			n.edges = n.connectedEdges();
			n.ID = n.id();

			this.initAgent(n, scratch);
		} );
	}

	// run this each iteraction
	tick(){
		let state = this.state;
		let isDone = true;

		state.nodes.forEach(n => {
			this.takeStep(n)

			n.springForceX = 0;
			n.springForceY = 0;
			n.repulsionForceX = 0;
			n.repulsionForceY = 0;
		} );

		if (this.state.currentIteration > 0 &&this.state.currentIteration % 800 == 0) {
		this.state.delta /= 2;
		}
		return false//this.FDLayout.isConverged();
	}

	// run this function after the layout is done ticking
	postrun(){

	}

	// clean up any object refs that could prevent garbage collection, etc.
	destroy(){
		super.destroy();

		return this;
	}
}

module.exports = Layout;
