console.log('hello')

function uniqueArr(a){
    let b = a.sort((a,b) => a-b).filter(item => item > 0)
    let c = new Set(b)
    return c
}

console.log(uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]))

function specialReverse(a,b){
    // let x = []
    let c = a.split(' ')
    // for(let i in c){
    //     if(b.includes(c[i][0])){
    //         x.push(c[i])
    //     }
    // }
    let x = c.map(item => b.includes(item[0]) ? item + '21': item)
    return x
}

console.log(specialReverse("word searches are super fun", "s"))

let x = [...'hello']
console.log(x.reverse().join(''))

function identicalFilter(a){
    let b = a.filter(item => item[0] === item[1] || item.length === 1)
    return b
}

console.log(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]))


function identicalFilter_2(a){
    let x = []
    for(let i of a){
        if(i.length === 1){
            x.push(i)
        }
        for(let g in i){
            let y = +g+1
            console.log(y)
            if(i[g] === i[y]){
                x.push(i[g])
            }
        }
    }
    let z = x.join('')
    return z
}

console.log(identicalFilter_2(["aaaaaa", "bc", "d", "eeee", "xyz"]))