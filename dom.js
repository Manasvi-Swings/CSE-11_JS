//selecting with id :unique value return krta he
const result= document.getElementById("para");
result.innerHTML="hello world";
result.title="manassvvi";
console.log(result);

//selecting by class name :returns array with index
const x=document.getElementsByClassName("p1");
console.log(x);
x[0].innerHTML="Manasvi";
x[1].innerHTML="Singh";

//selecting by tag name
const y1=document.getElementsByTagName("p");
y1[2].innerHTML="this is manasvi.";
y1[1].style.color="blue";
y1[1].innerText="my paragraph";
console.log(y1);

//query selector :always returns the first element/child
document.querySelector("ul li:nth-child(3)");


//querySelectorAll to return all elements/node list
let test2=document.querySelectorAll("ul li");
for (x in test2){
    test2[x].style.backgroundColor="green";
    test2[x].style.margin="10 px";
    test2[x].style.color="blue";
} console.log(test2);