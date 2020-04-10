class FDLayout {
	constructor(options) {
		this.options = options;
		this.totalDisplacement = 0.0;
		this.oldTotalDisplacement = 0.0;
		this.displacementThresholdPerNode = (1.0 * options.idealEdgeLength) / 100;
		this.totalDisplacementThreshold =
			this.displacementThresholdPerNode * options.nodes.length;
	}

	calcSpringForce(edge) {
		var sourceNode = edge.source();
		var targetNode = edge.target();
		var sourcePos = sourceNode.scratch('marll')
		var targetPos = targetNode.scratch('marll')

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
		sourceNode.scratch('marll').springForceX += springForceX;
		sourceNode.scratch('marll').springForceY += springForceY;
		targetNode.scratch('marll').springForceX -= springForceX;
		targetNode.scratch('marll').springForceY -= springForceY;
	};

	calcSpringForces() {
		var edge;

		for (var i = 0; i < this.options.edges.length; i++)
		{
			edge = this.options.edges[i];

			this.calcSpringForce(edge);
		}
	}

	calcRepulsionForce(nodeA, nodeB) {
		var distanceX = nodeB.scratch('marll').x - nodeA.scratch('marll').x
		var distanceY = nodeB.scratch('marll').y - nodeA.scratch('marll').y
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

	calcRepulsionForces() {
		for (let i = 0; i < this.options.nodes.length; i++)
		{
			let nodeA = this.options.nodes[i];

			for (let j = i + 1; j < this.options.nodes.length; j++)
			{
				let nodeB = this.options.nodes[j];
				this.calcRepulsionForce(nodeA, nodeB);
			}
		}
	}

	isConverged() {
		var oscilating = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2;
		var converged = this.totalDisplacement < this.totalDisplacementThreshold;

		this.oldTotalDisplacement = this.totalDisplacement;
		this.totalDisplacement = 0;
		return converged || oscilating;
	}
}

export {FDLayout};
