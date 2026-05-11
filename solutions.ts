
// solution-1

const filterEvenNumbers = (array:number[]): number[] =>{
    const result: number[] = [];
    for(let i=0;i<array.length;i++){
        if(array[i]%2===0) result.push(array[i])
    }
    return result;
}

// solution 2

const reverseString = (value:string) :string=>{
    const arr = value.split("");
    let j = value.length-1;
    for(let i=0;i<(value.length)/2;i++){
        [arr[i],arr[j]] = [arr[j],arr[i]]
        j--;
    }
    return arr.join('');
}

// solution 3

const StringOrNumber = (param: number | string) : string=>{
    if(typeof param === "number"){
        return "Number";
    }
    else return "String"
}

// solution 4

const getProperty = <T> (UserInfo: T, key: keyof T) =>{
    return UserInfo[key]
}

// solution 5

interface Book{
    title: string;
    author: string;
    publishedYear: number;
}

const toggleReadStatus = (book: Book) =>{
    return{
        ...book,
        isRead: true
    }
}

// solution 6

class Person{
    name : string;
    age : number
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
}
class Student extends Person{
    grade: string
    constructor(name:string,age:number,grade:string){
        super(name,age);
        this.grade = grade
    }
    getDetails(){
        console.log(`"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}"`)
    }
}

// solution 7

const getIntersection = (arr1:number[],arr2:number[]) : number[] =>{
    const setArray = new Set(arr1);
    const result: number[] = [];

    for(let i=0;i<arr2.length;i++){
        if(setArray.has(arr2[i])){
            result.push(arr2[i])
        }
    }
    return result;
}