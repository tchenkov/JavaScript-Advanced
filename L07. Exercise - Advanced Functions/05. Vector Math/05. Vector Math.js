let commands = (function vectorMath() {
    return {
        add: (vec1, vec2) => [vec1[0] + vec2[0], vec1[1] + vec2[1]],
        multiply: (vec1, scalar) => [vec1[0] * scalar, vec1[1] * scalar],
        length: (vec1) => Math.sqrt(vec1[0] * vec1[0] + vec1[1] * vec1[1]),
        dot: (vec1, vec2) => vec1[0] * vec2[0] + vec1[1] * vec2[1],
        cross: (vec1, vec2) => vec1[0] * vec2[1] - vec1[1] * vec2[0]
    };
})();

// function tests
console.log(commands.add([1, 1], [1, 0]));
console.log(commands.multiply([3.5, -2], 2));
console.log(commands.length([3, -4]));
console.log(commands.dot([1, 0], [0, -1]));
console.log(commands.cross([3, 7], [1, 0]));