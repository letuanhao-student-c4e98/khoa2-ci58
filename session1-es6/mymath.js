const myMath={
    sum: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
}

function multi(a,b){
    return a*b;
}
function pow(a,b){
    return a**b;
}
export default myMath; // chi dung dc 1 lan trong 1 file
export{multi,pow}; // export theo ten