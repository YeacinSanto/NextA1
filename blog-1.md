
any: 
let data : any = "hello"
data.push(1)

any data type will let you do anything. here data.push() is not correct method but it won't show any error in compile time it will directly show error at runtime

unknown: 

let data : unknown = "hello"
data.toUpperCase();

here, even if the method is correct but the unknown datatype won't let you to do directly. so basically you have to check twice.

So that's why unknown is much safer than any


Type Narrowing:

To go from border type to specific type

const value : unknown = "Yeacin";;
if(typeof value === "string"){
    console.log(`hello ${value}`)
}

here we go from unknown -> string