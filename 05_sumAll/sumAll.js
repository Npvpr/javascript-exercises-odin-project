const sumAll = function(a, b) {
    let ta = typeof(a), tb = typeof(b);
    if(ta !== 'number' || tb !== 'number' || a<0 || b<0){
        console.log(ta, tb)
        return "ERROR"
    }
    if(a>b){
        let c = a;
        a = b;
        b = c;
    }
    let sum = 0;
    for(let i=a;i<=b;i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
