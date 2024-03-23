//functions
function hello(){
    console.log("hello nam!!")
    console.log("how are you")
}
hello()
hello()
hello()

//print 1 to 5
function print(){
for (let i=1;i<=10;i++){
    console.log(i*2)
}
}
print()

//adult or not
function isadult(){
    let age=17
    if(age>=18){
        console.log("adult")
    }
    else{
        console.log("teenager")
    }
}
isadult()

//practice print a poem
console.log("poem")
function poem(){
    console.log("twinkle twinkle litter star")
    console.log("how i wonder what you are")
}
poem()
poem()

//function with random integer
//dice roll
function dice(){
    
    let random= Math.floor(Math.random()*6)+1
    console.log(random)
}
dice()
dice()

//function with argument
function name(name){
    console.log(name)
}
name("namrata raj")
name("milky") 

function info(name,age){
    console.log(`${name}'s age is ${age}`)
}
info("namrata",21)
info("milky",20)

//math functions
function math(a,b){
    console.log( `sum of a and b are ${a+b}`)
    console.log( `div of a and b are ${a/b}`)
}
math(2,3)
math(6,2)

//average of three number with argument
function average(a,b,c){
    console.log(`average of these three number are ${(a+b+c)/3}`)
}
average(4,5,6)

//without argument
function avg(){
    a=2
    b=3
    c=6
    console.log((a+b+c)/3)
}
avg()

//function of multiplication
function mul(num){
    for(let i=1;i<=10;i++)
    console.log(i*2)
}
mul(2)
mul(4)

//function with return value
console.log("sum of 2 no.")
function sum(a,b){
    return a+b
}
s=sum(2,3)
console.log("sum is:",s)
console.log(sum(4,5))
//sum of sum
console.log("sum of sum")
console.log(sum(sum(2,3),4))

//sum of 1 to n
function sumN(n){
    let sum=0
    for(let i=1;i<=n;i++){
        sum=sum+1
    }
   return sum
}
console.log(sumN(10))

//Returns strings
let str=["hey","this","is","namrata","raj","!!"]

function concat(str){
    let result
    for(let i=0;i<=str.length;i++){
        result=result+str[i]
    }
    return result
}
console.log(concat(str))

//scope
let add=50 //global scope
function sumAdd(a,b){
    let add=a+b //function scope
    console.log(add)
}
sumAdd(3,4)
console.log(add)

//block scope
// {
//     let g=34
// }
// console.log(g)

//lexical scope
// function outfun(){
//     let x=10
//    let  y=20
//     function infun(){
//     console.log(y)
//    }
// }
// outfun()

//practice ques
let greet="hello" //global scope

function changeGreet(){
    let greet="namaste"
    console.log(greet) //function scope
    function innerGreet(){
        console.log(greet) //lexical scope
    }
}
console.log(greet)
changeGreet()

//funtions expressions

let m = function(a,b){
    return a+b
}
m(4,5)
let hel=function (){
    console.log(hello)
}
hel()

//higher order functions

function multipleGreet(func,count){
    for(let i=1;i<=count;i++){
        func()
    }
   
}
let gret=function(){
    console.log("hello")
}
multipleGreet(gret,10)

//