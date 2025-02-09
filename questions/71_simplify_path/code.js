function simplifyPath(path) {
    // Handle edge case
    if (!path || path[0] !== '/') return '/';
    
    // Split path by '/' and filter out empty strings and current directory '.'
    const parts = path.split('/').filter(part => part && part !== '.');
    const stack = [];

    console.log(parts)
    
    // Process each part of the path
    for (const part of parts) {
        if (part === '..') {
            // Go up one directory if possible
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            // Add valid directory/file name to stack
            stack.push(part);
        }
    }
    
    // Construct the final path
    const result = '/' + stack.join('/');
};