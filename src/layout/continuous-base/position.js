const assign = require('../../assign');

let setInitialPositionState = function( node, state ){
	let p = node.position();
	let bb = state.currentBoundingBox;
	let scratch = state.layoutData[node.id()];

	assign( scratch, state.randomize ? {
		x: bb.x1 + Math.round( Math.random() * bb.w ),
		y: bb.y1 + Math.round( Math.random() * bb.h )
	} : {
		x: p.x,
		y: p.y
	} );

	if (state.randomize) {
		p.x = bb.x1 + Math.round( Math.random() * bb.w );
		p.y = bb.y1 + Math.round( Math.random() * bb.h );
	}

	node.x = p.x;
	node.y = p.y;
	scratch.locked = node.locked();
};

let getNodePositionData = function( node, state ){
	return {x:node.x, y: node.y};
};

let refreshPositions = function( nodes, state ){
	nodes.positions(function( node ){
		return {
			x: node.x,
			y: node.y
		};
	});
};

module.exports = { setInitialPositionState, getNodePositionData, refreshPositions };
