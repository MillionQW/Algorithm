const Dictionary = require('../dictionary/Dictionary');

function Graph() {
    let vertices = [];
    let adjList = new Dictionary();

    this.addVertex = function(v) {
        vertices.push(v);
        adjList.set(v, []);
    }

    // v, w 是两个顶点，v 把 w 加进自己的邻接表， w 把 v 加进自己的邻接表
    this.addEdge = function(v, w) {
        
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    }

    this.toString = function() {
        let s = '';
        for (let i = 0; i < vertices.length; i++) {
            s += vertices[i] + '->';
            let neighbors = adjList.get(vertices[i]);
            for (let j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' '
            }
            s += '\n';
        }
        return s;
    }

    this.bfs = function(v, callback) {
        let colors = [];
        let quene = [];
        function initalColor(v) {
            if (!colors[v]) {
                colors[v] = 'white';
            }
        }
        initalColor(v);
        quene.push(v);
        while (quene.length > 0) {
            let vertices = quene.shift();
            let neighbors = adjList.get(vertices);
            neighbors.forEach(item => {
                if (!colors[item] || colors[item] === 'white') {
                    colors[item] = 'gray';
                    quene.push(item);
                }
            })
            colors[vertices] = 'black';
            if (callback) callback(vertices);
        }
    }

    this.dfs = function(v, callback) {
        let colors = initalColor();
        vertices.forEach(item => {
            if (colors[item] === 'white') {
                dfsVisit(item, callback)
            }
        })

        function dfsVisit(v, callback) {
            let quene = [];
            quene.push(v);

            if (quene.length > 0) {
                let vertices = quene.shift();
                colors[vertices] = 'gray';
                if (callback) callback(vertices);
                let neighbors = adjList.get(vertices);
                neighbors.forEach((item) => {
                    if (colors[item] === 'white') {
                        colors[item] = 'gray';
                        dfsVisit(item, callback);
                    }
                })
                colors[vertices] = 'black';
                
            }
        }
        
        function initalColor() {
            let colors = [];
            vertices.forEach(item => {
                colors[item] = 'white';
            })
            return colors;
        }
    }
}

let graph = new Graph();
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

myVertices.forEach(item => {
    graph.addVertex(item);
})

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

// console.log(graph.toString());   

module.exports = Graph;