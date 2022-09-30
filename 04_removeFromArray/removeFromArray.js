const removeFromArray = function(array, ...res) {
    res.forEach(re => {
        let index = array.indexOf(re);
        if (index !== -1) array.splice(index, 1);
    })
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
