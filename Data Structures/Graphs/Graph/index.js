class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  // Add a vertex to the graph
  addVertex(node) {
    // add key to the adjacentList with the node name and set its value to be an empty array
    // since this node doesn't have any connections yet
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }

  // Add an edge between two nodes connected to each other
  // undirected graph
  addEdge(node1, node2) {
    // assuming that both nodes already exist in the graph
    // Connect node1 to node2
    this.adjacentList[node1].push(node2);
    // Connect node2 to node1
    this.adjacentList[node2].push(node1);
  }

  // show all the connections
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections();
/*
0-->1 2
1-->3 2 0
2-->4 1 0
3-->1 4
4-->3 2 5
5-->4 6
6-->5
*/
