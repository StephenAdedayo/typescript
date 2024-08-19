// let firstName : string = 'stephen'
// let age : number = 35
// let isAdmin : boolean = true
// let accBal : undefined = undefined
// let brain : null = null
// let sport : any = 'Ayo'

// let scores : number[] = [25, 67, 68]
// let devs : string[] = ['dml','alu', 'cm']

// let scores2 : Array<number> = [23, 45, 67]
// let dev2 : Array<string> = ['stephen', 'ayo']

// let person : [string, number, boolean] = ['stephen', 45, false]
// console.log(person);

// enum HttpStatus{
//     Success = 200,
//     NotFound = 404,
//     Unauthorized = 401,
//     BadRequest = 400,
//     ServerError = 500
// }

// let myStatus : HttpStatus = HttpStatus.Success
// console.log(myStatus);


// function profit (cp:number, sp:number): number {
//    const profit : number = sp - cp
//    return profit
// }

// console.log(profit(39, 200));


// function percentageProfit (cp:number , sp:number) : number {
//     const percentageProfit : number = (sp-cp/100)
//     return percentageProfit 
// }

// console.log(percentageProfit(10000, 15000));

// const greet = (name: string, age: number) : void => {
//     console.log(`my name is ${name} and i am ${age} years old `);
         
// }

// console.log(greet('steve', 12));



// let value : string | boolean | number
// value = 'stephen'
// value = true
// value = 34


// let value1 : any
// value1 = 'stephen'
// value1 = 45


// type Steve = string | boolean

// let job : Steve

// job = 'stephen'
// job = true


class Animals {
    name: string
    legs: number
    fur: boolean

    constructor(name : string, legs: number, fur:boolean ){
        this.name  = name,
        this.legs = legs,
        this.fur = fur
    }

     sound(){
        console.log(`${this.name} has ${this.legs} legs and fur is ${this.fur}`);
        
     }
    
}


class Dog extends Animals{
    breed: string

    constructor(name : string, legs: number, fur: boolean, breed: string){
      super(name, legs, fur )

      this.breed = breed
    }
    
}


interface Animal{
    name: string
    legs: number
    fur: boolean
    sound() : void
}

interface Dog extends Animals{
    breed:string
}


