function dblLinear(n) {

    let a = 0
    let b = 0
    let arr = [1]

    while(arr.length <= n * 2) {

        let x = 2 * arr[a] + 1
        let y = 3 * arr[b] + 1

        if(x < y) {
            // console.log(`x,y : ${x}, ${y}`)
            arr.push(x)
            a += 1
        } else if (y <= x) {
            // console.log(`y,x : ${y}, ${x}`)
            arr.push(y)
            b += 1
        }

    }
    let set = new Set(arr)
    return Array.from(set)[n]
}