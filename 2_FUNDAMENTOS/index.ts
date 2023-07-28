// 1 - numbers
let x: number = 10

console.log(x)

x = 16

console.log(typeof x)

const y: number = 15.3421321312

console.log(typeof y)

console.log(y)

console.log(y.toPrecision(3))

// 2 - string
const firstName: string = "Matheus"

console.log(firstName.toUpperCase())

let fullName: string 

const lastName: string = "Batista"

fullName = firstName + " " + lastName 

console.log(fullName)

console.log(typeof fullName)

// 3 - booleanos
let a: boolean = false
console.log(a)
console.log(typeof a)

a = true
console.log(a)

// 4 - inference e annotation
const ann: string = "Teste"

let inf = "Teste"

/*  inf = 1
    ann = 1  */

console.log("testando 2")