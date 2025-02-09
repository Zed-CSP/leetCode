var numIslands = function(grid) {
    if (!grid || !grid.length) return 0;
    const rows = grid.length
    const cols = grid[0].length
    let islands = 0

    const exploreIsland = (argRow, argCol) => {
        const stack = [[argRow, argCol]] //create a stack with the args

        while (stack.length > 0) {
            //return the first in stack as row col
            const [row, col] = stack.pop(); 

            //if within grid and not water
            if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === '0') {
                continue;
            };

            //set current to 0
            grid[row][col] = '0';
            //recursive N, S, E, W,

            stack.push([row - 1, col]); // north
            stack.push([row + 1, col]); // south
            stack.push([row, col + 1]);  // east
            stack.push([row, col - 1]); // west
        };
    };
        
    // iterate through every cell in grid
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === "1") {
                islands++;
                exploreIsland(row, col);
            };
        };
    };

    return islands;
};