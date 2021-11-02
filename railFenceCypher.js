function encodeRailFenceCipher(string, numberRails) {

    let arr = [], num = ((numberRails - 3) * 2) + 4, row = 1
    //row 1
    for(let i = 0; i < string.length; i += num) arr.push(string[i])
    //row 2 to penultimate
    while(row < numberRails -1) {
        for(let i = row; i <= string.length * 2; i += num) {
            if(i > numberRails) arr.push(string[i - (row * 2)])
            if(i < string.length) arr.push(string[i])
        }
        row++
    }
    //last row
    for(let i = numberRails - 1; i < string.length ; i += num) arr.push(string[i])
    return arr.join("")
}


function decodeRailFenceCipher(string, numberRails) {

    let arr = [], rail = 0, change = 1, strArr = string.split("")
    //arr = [ [], [], [] ]
    for(let i = 0; i < numberRails; i++) arr.push([])

    strArr.forEach(char => {
        arr[rail].push(char); rail += change
        if( rail === numberRails - 1 || rail === 0) change = -change
    })

    let row = 0, final = [], lengths = [] ; rail = 0; change = 1
    //final = [ [], [], [] ]
    for(let i = 0; i < numberRails; i++) final.push([])
    //arrs' array lengths saved to set finals' array lengths. important for next step's execution.
    for(let i = 0; i < arr.length; i++) lengths.push(arr[i].length)

    //insert each rail string to finals' respective empty arrays
    while([].concat(...final).length < string.length) {

        for(let i = 0; i < lengths[row]; i++ ) {
            final[row].push(arr[rail].shift()); rail += change
            if(rail === numberRails - 1 || rail === 0) change = -change
        }
        if(row < numberRails - 1) row++
    }

    let ans = ""; rail = 0; change = 1
    //shift first letter of finals' arrays into empty string (ans)
    while(ans.length < string.length) {
        ans += final[rail].shift(); rail += change
        if(rail === numberRails - 1 || rail === 0) change = -change
    }
    return ans
}