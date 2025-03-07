var climbStairs = function(n) {
    let arr = [] 
    //solve for 1 & 2, solution is dynamically the fibionacci sequence
    arr[1] = 1
    arr[2] = 2

    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i-1] + arr[i-2] //fibionacci 
    }
    
    return arr[n]
};