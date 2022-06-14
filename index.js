console.log("%cAssignements of videos  from 33 up to 37: ","color: blue; font-size:28px");

//task 1.........................................
console.log("%cPart 1: ","color: red; font-size:25px");
// Test Case 1
let num = 159; // "009"

// Test Case 2
//let num = 20; // "020"

// Test Case 3
//let num = 110; // "110"
// if(num<10){
//     console.log('"00'+num+'"');
// }else{
//     if(num>10 && num<100){
//         console.log('"0'+num+'"');  
//     }else{
//         console.log('"'+num+'"');
//     }
// }
// or we can do it with ternary operator:

num <10
?console.log('"00'+num+'"')
:(num>10 && num<100)
?console.log('"0'+num+'"')
:console.log('"'+num+'"');
//task 2.........................................
console.log("%cPart 2: ","color: red; font-size:25px");

let num1 = 9;
let str = "9";
let str2 = "20";

// Output

if(num1==str){
    console.log(`${num1} is the same value as ${str}`)
    }
if(num1==str && !(num1===str)){
    console.log(`${num1} is the same value as ${str} but not the same type`)
 }
 if( !(num1===str2)){
    console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);
 }



  

"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"

// if(str==str && !(num1===str)){
    
// }

//task 3.........................................
console.log("%cPart 3: ","color: red; font-size:25px");

let num11=10,
num22=30,
num33="30";


(num33 > num11 && !(num33===num22))?
console.log(`${num33} is larger than ${num11} and type string is not the same type as number`)
:(num33 > num11 && !(num33===num22) && num33==num22)?
console.log(`${num33} is larger than ${num11} and the values are the same and type string is not the same type as number`)
:(!(num33==num11) && !(num33===num11))?
console.log(`${num33} is larger than ${num11} and type string is not the same type as number`)
