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
}; // TODO define


class Layout extends ContinuousLayout {
	constructor( options ){
		super( assign( {}, defaults, options ) );
		this.FDLayout = new FDLayout(this.state);
		this.state.delta = 10;
		console.log( this.state) 
	}

	initAgent(n) {
		let scratch = this.getScratch( n ); // per-element layout data/state, x/y, etc.
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
		spec.planN = 50; // number of planning steps per iteration. 0 = no planning

		spec.smooth_policy_update = false; // non-standard, updates policy smoothly to follow max_a Q
		spec.beta = 0.3; // learning rate for smooth policy update

		scratch.agent = new RL.TDAgent(env, spec);
		scratch.env = env;
		scratch.state = 4;
		scratch.agent.counter = 0;
		scratch.oldTotalForce = null;
	}

	takeStep(n) {
		var displacement = [
			[-1, -1], [0, -1], [1, -1],
			[-1, 0], [0, 0], [1, 0],
			[-1, 1], [0, 1], [1, 1]
		];

		var delta = this.state.delta;
		this.state.nodes.forEach(n => {
			let scratch = this.getScratch( n );
			scratch.springForceX = 0;
			scratch.springForceY = 0;
			scratch.repulsionForceX = 0;
			scratch.repulsionForceY = 0;
		})
		this.FDLayout.calcSpringForces();
		this.FDLayout.calcRepulsionForces();
		let scratch = this.getScratch( n ); // per-element layout data/state, x/y, etc.
		var action = scratch.agent.act(scratch.state);
		var fx = scratch.springForceX + scratch.repulsionForceX;
		var fy = scratch.springForceY + scratch.repulsionForceY;
		var displacementX = displacement[action][0];
		var displacementY = displacement[action][1];
		var totalForce = Math.sqrt(fx*fx + fy*fy);
		scratch.x += displacement[action][0] * delta;
		scratch.y += displacement[action][1] * delta;
		var reward = 0;

		this.state.nodes.forEach(n => {
			let scratch = this.getScratch( n );
			scratch.springForceX = 0;
			scratch.springForceY = 0;
			scratch.repulsionForceX = 0;
			scratch.repulsionForceY = 0;
		})

		this.FDLayout.calcSpringForces();
		this.FDLayout.calcRepulsionForces();
		fx = scratch.springForceX + scratch.repulsionForceX;
		fy = scratch.springForceY + scratch.repulsionForceY;
		var newtotalForce = Math.sqrt(fx*fx + fy*fy);

		if (scratch.oldTotalForce === null) {
			console.log( 'resetting') 
			reward = 1;
		} else {
			reward = totalForce - newtotalForce;//totalForce - scratch.oldTotalForce;
		}


		if (Math.abs(reward < 0.1)) {
			scratch.x -= displacement[action][0] * delta;
			scratch.y -= displacement[action][1] * delta;
		}


		//console.log( totalForce +', ' +newtotalForce) 
		scratch.oldTotalForce = totalForce;
		scratch.agent.learn(reward, scratch.state, action);
		scratch.state = action;
	}

	prerun(){
		let state = this.state; // options object combined with current state

		// regular nodes
		state.nodes.forEach( n => {
			let scratch = this.getScratch( n ); // per-element layout data/state, x/y, etc.

			// example of setting per-element state based on an option value/function
			scratch.foo = optFn( state.foo, n );
			scratch.springForceX = 0;
			scratch.springForceY = 0;
			scratch.repulsionForceX = 0;
			scratch.repulsionForceY = 0;

			this.initAgent(n);
		} );

		// regular edge springs
		state.edges.forEach( e => {
			let scratch = this.getScratch( e ); // per-element layout data/state, x/y, etc.

			// example of setting per-element state based on an option value/function
			scratch.foo = optFn( state.foo, e );
		} );
	}

	// run this each iteraction
	tick(){
		let state = this.state;
		let isDone = true;

		this.FDLayout.calcSpringForces();
		this.FDLayout.calcRepulsionForces();
		state.nodes.forEach(n => {
			let s = this.getScratch(n);

			// example : put node at random position
			let displacementX = s.springForceX + s.repulsionForceX;
			let displacementY = s.springForceY + s.repulsionForceY;
			this.FDLayout.totalDisplacement +=
				Math.abs(displacementX) + Math.abs(displacementY);
			//s.x += displacementX;
			//s.y += displacementY;
			this.takeStep(n)


			s.springForceX = 0;
			s.springForceY = 0;
			s.repulsionForceX = 0;
			s.repulsionForceY = 0;
		} );

		if (this.state.currentIteration % 100 == 0) {
			console.log( this.state.currentIteration) 
			console.log( this.FDLayout.totalDisplacement) 
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
