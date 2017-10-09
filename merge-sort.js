// c = output array (length n)
// a = 1st sorted array (length n/2)
// b = 2nd sorted array (length n/2)
// i = counter to increment array a
// j = counter to increment array b
let a = [2,4,6];
let b = [1,3,5,7];

// Merge sorted arrays
function merge(a,b) {
    let c = a;
    let d = b;
    let totalArray = c.length + d.length;
    let output = [];

    for (let i = 0; i < (totalArray); i++) {
        if (c[0] <= d[0]) {
            output.push(c.shift());
        }else if(c.length > 0 && d.length > 0){
            output.push(d.shift());
        }else if(d.length < 1){
            output.push(c.shift());
        }else if(c.length < 1){
            output.push(d.shift());
        }
    }
    return output;
};

// Merge sort function
function mergeSort(array) {
    if(array.length < 2){
        return array;
    }
    
    const middle = Math.floor(array.length/2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    return merge(mergeSort(left),mergeSort(right));
}

console.log(mergeSort([4,2,3]));

