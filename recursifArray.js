function numberArrayPrima(arr) {
    // your code here
    if (arr == 0) {
        return []
    } else if (arr[0] % arr[0] !== 0) {
        return [arr[0]].concat(numberArrayPrima(arr.slice(1)))
    }
    return [].concat(numberArrayPrima(arr.slice(1)))
}

console.log(numberArrayPrima([2, 22, 4, 3, 5, 7, 11])); //[ 3, 5, 7, 11 ]
//console.log(numberArrayPrima([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])); // [ 1, 3, 5, 7, 9, 11, 13 ]