console.log('hello')

function uniqueArr(a){
    let b = a.sort((a,b) => a-b).filter(item => item > 0)
    let c = new Set(b)
    return c
}

console.log(uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]))

function specialReverse(a,b){
    let x = []
    let c = a.split(' ')
    for(let i in c){
        if(b.includes(c[i][0])){
            x.push(c[i])
        }
    }
}

console.log(specialReverse("word searches are super fun", "s"))

let x = [...'hello']
console.log(x.reverse().join(''))