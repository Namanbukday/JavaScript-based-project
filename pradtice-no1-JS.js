//.................................VARIABLES..............................
// let firstVariable = 10 ;
// let mes = " practice session" ;
// alert(mes);
// alert(firstVariable * 10);

// let one = 1, two = 2, three = 3;
// alert(one);
// alert(two);
// alert(three);

// let x = 10, y = "20";
// let z = x + y ;
// let a = x * y ;
// alert("addition : " + z);
// alert("multiplication : " + a);

// let a = "1", b = 2;
// let x = Number(a);
// let example = `dfcnsbfvja  sdhf a;r asdjhf ayfwhf;aweyf awefakweuftg akweyyft  ahh v${1+2}`;
// // alert(example);
// let y = toString(b);
// let lengthOfString = example.length;
// alert(lengthOfString)?

// let x = 20 , y = 3 ;
// // (x<y) ? alert("x is less than y") : alert("y is greater than x");
// (y<1) ? alert("< 1") :
// (y<2) ? alert("< 2") :
// (y<3) ? alert("< 3") : alert("gg"); 

//..........................FUNCTIONS.........................
// function pracFunction(){
//     alert("alert from a function, gg.");
// }
// pracFunction();

// let x = function(){ //ANONYMOUS FUNCTION//
//     alert("alert from a anonymous function");
// }
// x();

// let globalVar = 1;
// let gg = function(x,y){
//     let localVar = x + y ;
//     alert("addition of two variable : " + localVar)
// }
// gg("1",4);
// alert("Global variable is : " + globalVar);
// alert(" Local variable : " + localVar);

// .............Func calling in nested functions................
// function a() {
//     function b(){

//     }
// }
// b();        // error here

//So to remove this error, we use function expression 
// function a(){
//     let b = function(){      // this is function expression 

//     }
// }
// b();         // this will work


//..................ARROW FUNCTION...........................

// syntax = let var = (arg1, arg2,...) => exprssion;

// let sum = (a,b) => a + b ;
// alert(sum(2,4));

// let doubleANumber = (n) => n * 2 ;
// alert(doubleANumber(2));

//.........USE OF "?" IN ARROW FUNCTION..........

// let a = (a < 8) ?
//     function(){}:       // HERE, WE WILL ARROW FUNCTION
//     function(){};       // HERE, WE WILL ARROW FUNCTION

// let a = (a < 8) ? 
// () => alert():       // this will work
// () => alert();

// MULTILINE ARROW FUNCTION
// let x = (a, b) => {
//     return a*b
// };

//.........FIZZBUZZ............
// let fizzbuzz = function(){
//     let n = Number(prompt("Enter a number for fizzbuzz"));
//     // console.log(typeof(n));
//     for( let i = 0; i <= n; i++){
//         if (i % 3 == 0 && i % 5 == 0){
//             console.log("fizzbuzz");
//         }
//         else if(i % 3 == 0){
//             console.log("fizz");
//         }
//         else if(i % 5 == 0){
//             console.log("buzz");
//         }
//         else { console.log(i)}
//     }
// }
// fizzbuzz();

// let numbUpto = Number(prompt(" enter a number upto which you want a fizzbuzz"));
// let fizzbuzz = function(x){
//     for (let i = 1; i <= x; i++){
//         if(i %5 == 0 && i % 3 == 0) console.log("FizzBuzz")
//         else if(i % 3 == 0) console.log("Fizz")
//         else if(i % 5 == 0) console.log("Buzz")
//         else console.log(i);
//     }
// }
// fizzbuzz(numbUpto);

//................ ARRAYS ...........................

// let cars = ["audi", "BMW", "mercedes"];
// cars[1] = "porsche";
// console.log(cars[1]);

// let arrayLength = cars.length;
// console.log(arrayLength);       // to get length of an array
// console.log(cars[-1]);      // last element of an array
// let sortedArray = cars.sort();      // to sort an array
// console.log(cars);

//.......................................IMPORTANT......................................................................

//callback function : let 2 funtion are passed as agruments, and are saved into some variable x & y.
// then when we want to call those function, we just need use the variablesto call those function like 
// we use anonymous function or like the "function expression".
// arrow function

// function ask( ques, yes, no){
//     if(confirm(ques)) yes();
//     else no() ;
// }
//  ask("do you agree?",()=>alert("agreed"),()=>alert("not agreed")); // using callback fn and arrow fn

//.............................................................................................................

// to make a function visible outside of its block, we use "Function Expression". that means we need to declare a
// functon using a variable.


// let array1 = [2,3,6,4,6,4,6];
// array1 = array1.toString();
// let z = array1.join("*");
// console.log(z);
