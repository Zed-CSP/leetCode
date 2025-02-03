var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i]; //determine the compliment we would need at current index

        if (map.has(compliment)) { //check our map for compliment
            return [map.get(compliment), i]; //return the compliment's index and current index in an array
        };

        map.set(nums[i],i); // iteratively set key and value pair in the map
    };
    return[]; //shell return as not to throw error, will never activate per guidelines
};