function nextBigger(n){
    arr = `${n}`.split("").map(function(unit) {return Number(unit)})
    let res = [...arr]
    let index = 0

    //loop starting from end of array, finding first digit matching a large->small swap (i.e. finding a digit less than 5 to swap with it)
    for(let i = arr.length-1, j = arr.length - 2, k = arr.length - 3, l = arr.length -4; i > 0; i--, j--, k--, l--) {
        if( arr[i] > arr[j]) {
            index = j + 1
            res.splice(i, 1) && res.splice(j, 0, arr[i])
            break;
        } else if (arr[i] > arr[k]) {
            index = k + 1
            res.splice(i, 1) && res.splice(k, 0, arr[i])
            break;
        }
        else if(arr[i] > arr[l] && (arr[j] <= arr[k])) {
            index = l + 1
            res.splice(i, 1) && res.splice(l, 0, arr[i])
            break;
        }
    }

    //loop to end of array starting from where swap occured in earlier loop (see above).
    // for each digit greater than last array digit, perform swap. (i.e. start of loop is a 7 digit, and end of array digit is 2. perform swap)
    for(let i = arr.length - 1, j = index; j < i; j++) {
        if(res[j] > res[i]) {
            let move = res.splice(i,1)[0]
            res.splice(j, 0, move)
        }
    }

    let ans = Number(res.join(""))
    return ans > n ? ans : -1
}