class FDLayout {
	constructor(options) {
		this.options = options;
		console.log( options) 
	}

	calcSpringForce(edge) {
		var sourceNode = edge.source();
		var targetNode = edge.target();
		var sourcePos = edge.sourceEndpoint();
		var targetPos = edge.sourceEndpoint();

		var lengthX = targetPos.x - sourcePos.x;
		var lengthY = targetPos.y - sourcePos.y;
		var springForce;
		var springForceX;
		var springForceY;


		length = Math.sqrt(lengthX * lengthX + lengthY * lengthY);

		if(length == 0)
			return;

		// Calculate spring forces
		springForce = this.options.springConstant * (length - this.options.idealEdgeLength);

		// Project force onto x and y axes
		springForceX = springForce * (lengthX / length);
		springForceY = springForce * (lengthY / length);

		// Apply forces on the end nodes
		sourceNode.scratch('forces').springForceX += springForceX;
		sourceNode.scratch('forces').springForceY += springForceY;
		targetNode.scratch('forces').springForceX -= springForceX;
		targetNode.scratch('forces').springForceY -= springForceY;
	};

	calcSpringForces() {
		var edge;

		for (var i = 0; i < this.options.edges.length; i++)
		{
			edge = this.options.edges[i];

			this.calcSpringForce(edge);
		}
	}
}

export {FDLayout};
