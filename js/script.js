//alert("Welcome")
var x=30
console.log(x);

var x=50
var x=70
console.log(x);

var x=55
var y=66
console.log(x,y);
console.log(x+y);

var x="sudipta"
console.log(x,"khub valo");


let z="uthso"
z= "sk"
console.log(z);

{

    var x="mine"

}
console.log(x);

{
    let y="uthso"

    console.log(y);
    
}

{
    const pi=3.1416

    console.log(pi);
    
}

let number=50
console.log(number +" "+ "X"+" "+1+" "+ "=" + " "+number*1);
console.log(number +" "+ "X"+" "+2+" "+ "=" + " "+number*2);


console.log(`${number} X 3= ${number*3}`)

for(let i=1; i<=10; i++){
    console.log(`${number} X ${i} = ${number * i}`);
}

let area="Gulshan"
let age=30
let salary=60000
if(area==="Gulshan"){
    
if(age>=25){
if(salary>50000){
console.log("You are accepted");

}
else{
console.log("You are disqualify");

}
    
}
else{
    console.log("age thik nai");
    
}
    
}
else{ 
    console.log("Location thik nai");
}


let score=55
if(score <0 || score> 100){
    alert("You are Messi like Super Human")
}

if(score >= 40 && score <=44){
    console.log("D");
    
}
else if(score>=45 && score<=49){
    console.log("C");
    
}
else if(score>=50 && score<=54){
    console.log("C+");
    
}
else if(score>=55 && score<=59){
    console.log("B-");
    
}
else if(score>=60 && score<=64){
    console.log("B");
    
}
else if(score>=65 && score<=69){
    console.log("B+");
    
}
else if(score>=70 && score<=74){
    console.log("A-");
    
}
else if(score>=75 && score<=79){
    console.log("A");
    
}
else if(score>=80 && score<=100){
    console.log("A+");
    
}
else{
    console.log("F")
}

function coffee(){
    let x="sugar"
    let y="coffee"
    let z="milk"
    let coffeemaker=(x+y+z)
    console.log(coffeemaker);
    
}
 coffee()
  coffee()
   coffee()
    coffee()
 coffee()

 //array //for multiple data
 let students=["A","B","C","D","E","F"]
 console.log(students);
 console.log(students[3]);

 //push //add a element in last
 let push = students.push("GG")
 console.log(push);
 console.log(students);

 //pop //remove a element from the last
 let pop =students.pop()
 console.log(pop);
 console.log(students);
 
 //shift //remove an element from the first
 let shift =students.shift()
 console.log(shift);
 console.log(students);

 //unshift //add an element to the begginnig of the array
 let unshift =students.unshift("ZZ")
console.log(unshift);
console.log(students);

 
 
 