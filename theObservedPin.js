function getPINs(observed) {
    let obj = {
        1: ['1', '2', '4'],
        2: ['2', '1', '3', '5'],
        3: ['3', '2', '6'],
        4: ['4', '1', '5', '7'],
        5: ['5', '2', '4', '6', '8'],
        6: ['6', '3', '5', '9'],
        7: ['7', '4', '8'],
        8: ['8', '5', '7', '9', '0'],
        9: ['9', '6', '8'],
        0: ['0', '8'],
    }
    let arr = []
    for (let i = 0; i < observed.length; i++) {arr.push(obj[observed[i]])}
    let first = arr[0]

    arr.slice(1).forEach(row =>
        first = first.reduce((string, prefix) =>
            string.concat(row.map(number => prefix + number)), []
        ))
    return first
}