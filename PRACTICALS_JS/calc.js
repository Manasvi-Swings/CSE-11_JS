function calculateResult(){
    const n=document.getElementById("subjects").value;
    let total=0;
    let i;
    for(i=0;i<n;i++){
        let x=parseFloat(prompt("Enter the subject number "+(i+1)));
        total+=x;
    }
    let average=total/n;
    let grade;
    if(average>=90){
        grade='A+';
    }
    if(average>=80){
        grade='A';
    }
    if(average>=60){
        grade='B';
    }
    if(average>=50){
        grade='C';
    }
 let r;
 if(average>40)
    r="pass";
else 
    r="fail";
let result=document.getElementById("result").innerHTML="Total marks="+total+"</br>"+"Average="+average+"</br>"+"Grade="+grade+"</br>"+"Result="+r+"</br>";
 
}