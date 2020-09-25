class FDLayout {
	constructor(options) {
		this.options = options;
		this.totalDisplacement = 0.0;
		this.oldTotalDisplacement = 0.0;
		this.displacementThresholdPerNode = (1.0 * options.idealEdgeLength) / 100;
		this.totalDisplacementThreshold =
			this.displacementThresholdPerNode * options.nodes.length;
		this.length = this.options.nodes.length;
		this.nodes = this.options.nodes;
		this.repulsionConstant = this.options.repulsionConstant;
		this.springConstant = this.options.springConstant;
		this.idealEdgeLength = this.options.idealEdgeLength;
		this.maxDistance = this.options.maxDistance;
		this.allPairsShortestPath = this.options.allPairsShortestPath;
	}

	calcSpringForce(edge, nodeID) {
		var sourceNodeData = edge.source();
		var targetNodeData = edge.target();

		var lengthX = targetNodeData.x - sourceNodeData.x;
		var lengthY = targetNodeData.y - sourceNodeData.y;


		var length = Math.sqrt(lengthX * lengthX + lengthY * lengthY);

		if(length == 0)
			return;

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
	};

	calcSpringForces(n) {
		var edges = n.edges;
		var nodeID = n.ID;
		var edge;

		for (var i = 0; i < edges.length; i++)
		{
			edge = edges[i];

			this.calcSpringForce(edge, nodeID);
		}
	}

	calcRepulsionForce(nodeA, nodeB) {
		var distanceX = nodeB.x - nodeA.x
		var distanceY = nodeB.y - nodeA.y
		var distanceSquared = distanceX * distanceX + distanceY * distanceY;
		var distance = Math.sqrt(distanceSquared);
		if (distance == 0 || distance > 100)
			return;

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

	calcRepulsionForces(n) {
		//for (let i = 0; i < this.options.nodes.length; i++)
		{
			let nodeA = n//this.options.nodes[i];

			for (let j = 0; j < this.length; j++)
			{
				let nodeB = this.nodes[j];
				this.calcRepulsionForce(nodeA, nodeB);
			}
		}
	}

	calcSpringForceFR(edge) {
		var sourceNodeData = edge.source();
		var targetNodeData = edge.target();

		var lengthX = targetNodeData.x - sourceNodeData.x;
		var lengthY = targetNodeData.y - sourceNodeData.y;


		var length = Math.sqrt(lengthX * lengthX + lengthY * lengthY);

		if(length == 0)
			return;

		// Calculate spring forces
		var springForce = (length - this.idealEdgeLength) ** 2 / this.idealEdgeLength

		// Project force onto x and y axes
		var springForceX = springForce * (lengthX / length);
		var springForceY = springForce * (lengthY / length);

		// Apply forces on the end nodes
		sourceNodeData.springForceX += springForceX;
		sourceNodeData.springForceY += springForceY;
		targetNodeData.springForceX -= springForceX;
		targetNodeData.springForceY -= springForceY;
	}

	calcSpringForcesFR(n) {
		var edges = n.edges;
		var nodeID = n.ID;
		var edge;

		for (var i = 0; i < edges.length; i++)
		{
			edge = edges[i];

			this.calcSpringForceFR(edge, nodeID);
		}
	}

	calcRepulsionForceFR(nodeA, nodeB) {
		var distanceX = nodeB.x - nodeA.x
		var distanceY = nodeB.y - nodeA.y
		var distanceSquared = distanceX * distanceX + distanceY * distanceY;
		var distance = Math.sqrt(distanceSquared);
		if (distance == 0)
			return;

		var repulsionForce = this.idealEdgeLength ** 2 / distance;

		// Project force onto x and y axes
		var repulsionForceX = repulsionForce * distanceX / distance;
		var repulsionForceY = repulsionForce * distanceY / distance;

		// Apply forces on the two nodes
		nodeA.repulsionForceX -= repulsionForceX;
		nodeA.repulsionForceY -= repulsionForceY;
		nodeB.repulsionForceX += repulsionForceX;
		nodeB.repulsionForceY += repulsionForceY;
	}

	calcRepulsionForcesFR(n) {
		//for (let i = 0; i < this.options.nodes.length; i++)
		{
			let nodeA = n//this.options.nodes[i];

			for (let j = 0; j < this.length; j++)
			{
				let nodeB = this.nodes[j];
				this.calcRepulsionForceFR(nodeA, nodeB);
			}
		}
	}

	calcStressPerNode(nodeA, nodeB) {
		var stress = 0;
		var distanceX = nodeB.x - nodeA.x
		var distanceY = nodeB.y - nodeA.y
		var distanceSquared = distanceX * distanceX + distanceY * distanceY;
		var distance = Math.sqrt(distanceSquared);

		var theoricDistance = this.allPairsShortestPath[nodeA.ID][nodeB.ID];
		if (theoricDistance && theoricDistance <= this.maxDistance) {
			stress = 1/theoricDistance * (distance - theoricDistance * this.idealEdgeLength) ** 2;
		}

		return stress;
	}

	calcLocalStress(node) {
		var stress = 0;
		for (let i = 0; i < this.length; i++) {
			let nodeB = this.nodes[i];
			stress += this.calcStressPerNode(node, nodeB);
		}
		return stress;
	}

	calcGlobalStress() {
		var stress = 0;
		for (let i = 0; i < this.options.nodes.length; i++)
		{
			let nodeA = this.options.nodes[i];

			for (let j = i + 1; j < this.options.nodes.length; j++)
			{
				let nodeB = this.options.nodes[j];
				stress += this.calcStressPerNode(nodeA, nodeB);
			}
		}
		return stress;
	}

	isConverged() {
		var oscilating = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2;
		var converged = this.totalDisplacement < this.totalDisplacementThreshold;
		var stressConverged = Math.abs(this.newStress - this.oldStress) / this.oldStress < 0.0001;

		this.oldTotalDisplacement = this.totalDisplacement;
		this.oldStress = this.newStress;
		this.totalDisplacement = 0;
		this.newStress = 0;
		return converged || oscilating;
	}
}

export {FDLayout};
