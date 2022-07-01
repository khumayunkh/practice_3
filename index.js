console.log('hello')

function uniqueArr(a){
    let b = a.sort((a,b) => a-b).filter(item => item > 0)
    let c = new Set(b)
    return c
}

console.log(uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]))

function specialReverse(a,b){
    let c = a.split(' ')
    let x = []
    for(let i in c){
        if(b.includes(c[i][0])){
            x.push(c[i])
        }

    }
    let reverseWordArr = 
        x.map(word => word.split("")
    .reverse().join(""));
    return reverseWordArr
}

console.log(specialReverse("word searches are super fun", "s"))

let x = [...'hello']
console.log(x.reverse().join(''))

function identicalFilter(a){
    let x = []
    for(let i of a){
        if(i.length === 1){
            x.push(i)
        }
        for(let g in i){
            let y = +g+1
            if(i[g] === i[y]){
                x.push(i[g])
            }
        }
    }
    let z = x.join('')
    return z
}

console.log(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]))

function add(a){
    return function(b){
        return a + b
    }
}

console.log(add(10)(20))

function marathonDistance(a){
    let x = a.map(item => item<0 ? item * -1 : item).reduce((a,b) => a + b)
    return x === 25
}

console.log(marathonDistance([6, 15, -4]))

function century(a){
    let b = a.toString()
    let y = b[0] + b[1]
    return +y + 1 +'th century'
}

console.log(century(1756))


function equal(a,b,c){
    let newArray = []
    let x = a.toString() + b.toString() + c.toString()
    let y = [...x]
    let z = y.sort((a,b) => a - b)
    for(let i in z){
        let g = +i+1
        if(z[i] == z[g]){
            newArray.push(z[i])
        }
    }
    return newArray
}

console.log(equal(3, 3, 4))

function validDivision(a){
    let x = [...a]
    const obj ={
        '/' : +x[0] / +x[x.length-1] % 2 === 0
    }
    return obj['/']
}

console.log(validDivision('6/3'))


function validDivision_2(a){
    let x = [...a]
    return (+x[0] / +x[x.length-1]) % 2===0
}

console.log(validDivision_2('6/4'))


function ar(str){
    let reverseWordArr = 
        str.map(word => word.split("")
    .reverse().join(""));
    return reverseWordArr.join(' ')
}

console.log(ar(['heelo', 'ewew']))


let y = 1 
let xx = new Map()
xx.set('one', y)
console.log(xx.get('one'))
let yy = new Set()
yy.add('hello').add('Humoyun')
console.log(yy)