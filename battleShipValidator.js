function validateBattlefield(field) {

    let [XL, L, M, S, horz, vert] = [0, 0, 0, 0, 0, 0]  //counter
    //horz = squares horizontal
    //vert = squares vertical

    for(let i = 0; i < field.length; i++) {
        for(let x = 0; x < field[i].length; x++) {

            if(field[i][x]  && field[i +1][x + 1] )  {return false}
            if(field[i][x]  && field[i +1][x - 1] )  {return false}
            if(i) {
                if(field[i][x]  && field[i -1][x + 1] )  {return false}
                if(field[i][x]  && field[i -1][x - 1] )  {return false}
            }
            if(i) {
                if(field[i][x]  && (field[i][x - 1]  || field[i][x + 1] ) &&
                    (field[i - 1][x]  || field[i + 1][x] )
                ) {return false}
            }

            if((!i && field[i][x]  && !field[i + 1][x] ) ||
                (field[i][x]  && !field[i + 1][x]  && !field[i - 1][x] )) {horz += 1}
            else {
                horz === 4 ? XL += 1 : horz === 3 ? L += 1 : horz === 2 ? M += 1 :
                    horz === 1 ? S += 1 : 0
                horz = 0
            }

            if(field[i][x] && field[i + 1][x]) {
                if(field[i + 2][x] && field[i + 3][x]) {
                    vert += 4
                    field[i + 3].splice(x, 1, 0)
                    field[i + 2].splice(x, 1, 0)
                    field[i + 1].splice(x, 1, 0)
                } else if(field[i + 2][x] && !field[i + 3][x] ) {
                    vert += 3
                    field[i + 2].splice(x, 1, 0)
                    field[i + 1].splice(x, 1, 0)
                } else {
                    vert += 2
                    field[i + 1].splice(x, 1, 0)
                }
                vert === 4 ? XL += 1 : vert === 3 ? L += 1 :
                    vert === 2 ? M += 1 :  vert === 1  ? S += 1 : 0
                vert = 0
            }
        }
    }
    // console.log(XL, L, M, S)
    return XL !== 1 || L !== 2 || M !== 3 || S !== 4 ? false : true
}