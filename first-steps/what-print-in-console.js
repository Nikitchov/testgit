//Отличие примитивного типа от ссылочного
const obj1 = {
    x: 5
}
const obj2 = obj1;

obj2.x = 8;

console.log(obj1.x)

let a = 5; //5
let b = a; //9

b = 9;

console.log(a);
console.log(b);

//Приведение типов примитивов
console.log(true + false) // 1
console.log(12 / "6") // 2
console.log(12 < "6") // false
console.log("number" + 15 + 3) // number153
console.log(15 + 3 + "number") //18number
console.log("foo" + +"bar") //fooNan
console.log('true' == true) // false
console.log(!!"false" == !!"true") // true
console.log(false == 'false') //false
console.log(null == '') // false
console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true
console.log(null == undefined) //true
console.log(null === undefined) //false


//Приведение типов с объектами
console.log([1] > null) // true
console.log([1, 2] > null) //true
console.log(['x'] == 'x') //false
console.log([] + null + 1) // 'null1'
console.log([1, 2, 3] == [1, 2, 3]) //false
console.log([1, 2, 3] === [1, 2, 3]) // false
console.log({ a: 1 } - 1) // NaN
console.log({ a: 1 } + 2) // [object Object]2