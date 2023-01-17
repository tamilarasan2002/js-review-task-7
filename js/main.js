let tamil=document.querySelector("#tamil");
let english=document.querySelector("#english");
let maths=document.querySelector("#maths");
let science=document.querySelector("#science");
let social=document.querySelector("#social");
let grade;
let button=document.querySelector(".btn");
let result=document.querySelector(".result");

 button.addEventListener("click",function(){
    let total=parseInt(tamil.value)+parseInt(english.value)+parseInt(maths.value)+parseInt(science.value)+parseInt(social.value)
    let average=total/5;
    let percentage=(total/500)*100;
    
    
    if(average>=90){
        grade="A+";
     }
     else if(average<90 && average>=80){
        grade="A";
     }
     else if(average<80 && average>=70){
        grade="B";
     }
     else if(average<70 && average>=60){
        grade="C";
     }
     else if(average<60 && average>=40){
        grade="D";
     }
     else{
        grade="E";
     }
    
     result.innerText="Out of 500 your total is "+total+" and percentage is "+percentage+"%  your grade is "+ grade;
});

