class Node {
  constructor(x, y, parent = null) {
    this.x = x;
    this.y = y;
    this.parent = parent;
  }
  getCoords() {
    return [this.x, this.y];
  }
}

knightMoves = (position, target) => {
  const queue = [new Node(position[0], position[1])];
  const visited = new Set();
  visited.add([position.toString()]);

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.x === target[0] && current.y === target[1]) {
      const path = [];
      let node = current;

      while (node !== null) {
        path.unshift(node.getCoords());
        node = node.parent;
      }
      return path;
    }
    const moves = [
      [2, 1],
      [1, 2],
      [-2, 1],
      [-1, 2],
      [-2, -1],
      [-1, -2],
      [1, -2],
      [2, -1],
    ];
    for (const [dx, dy] of moves) {
      const x = current.x + dx;
      const y = current.y + dy;

      if (x < 0 || y < 0 || x > 7 || y > 7) {
        continue;
      }

      const pos = [x, y].toString();

      if (!visited.has(pos)) {
        visited.add(pos);
        queue.push(new Node(x, y, current));
      }
    }
  }
  return null;
};

let result = knightMoves([0, 0], [7, 7]);
console.log(result);
for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
