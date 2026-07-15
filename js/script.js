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

const teams=['Argentina','France','Spain','England','Norway','Belgium']
 for(i=0;i<teams.length;i++){
    console.log(teams[i]);
    
 }

 function info(name,age) {
    console.log(`My name is ${name} and my age is ${age}`);
    
    
 }
 info("Sudipta",24)

 //object

 const data = {
    name: "sudipta",
    age: 24,
    position:"z"

 }
 console.log(data.position);


 const { name,boyos, position}={
    name: "sudipta",
    boyos: 24,
    position:"z"
 }
 console.log(name);
 console.log(boyos);
 console.log(position);

 //array with object
 const employee=[
    {
        employeeOne:{
            id:1,
            nam:'S',
            salary: 10
        },
        employeeTwo:{
            id:2,
            nam: 'U',
            salary:20
        }
    
    }
 ]
 console.log(employee[0].employeeOne);


 let num=[1,2,3,4,5,6,7,8,9]
 num.map((item)=>{
    console.log(item);
    
 })
 let numr=[1,2,3,4,5,6,7,8,9]
 numr.map((item)=>{
    console.log(item*2);
    
 })

 let numbr=[1,2,3,4,5,6,7,8,9]
 let result= numbr.map((item)=>{
    return(item*7);
 })
 console.log(result);
 console.log(result[2]);

 let s='sudipta'
 console.log(typeof s);

 let pargph =document.querySelector('p')
 pargph.style.color='red'
 pargph.style.backgroundColor='blue'
 pargph.style.fontSize='100px'
 
 let heading= document.querySelector('h1')
let button= document.querySelector('button')
button.addEventListener('click',()=>{
heading.innerHTML='I am Sudipta'
heading.style.color='teal'
heading.style.backgroundColor='red'
heading.style.fontSize='100px'
})
 


 
 