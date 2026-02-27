console.log("Hello world!");
document.write("hello world");
document.write("<br/>");
var num=10;
console.log(num);
console.log(typeof(num));
num=false;
console.log(num);
console.log(typeof(num));
num="manasvi";
console.log(num);
console.log(typeof(num));
num=null;
console.log(num);
console.log(typeof(num))
num=undefined
console.log(num);
console.log(typeof(num))

/*reference type 
array
function
object */
//function
var sayHello=function() {
    alert("hello world");
}
//array
var numberArray=[1,2,3];
var animals= new Array("cat","dog","mouse");
 const sym1=Symbol(4)
 console.log(sym1);
 const sym2= Symbol(4)
 console.log(sym2);
 if (sym1==sym2){
    console.log("true");
 }
 else {
    console.log("false"); //because each symbol is unique
 }
var count;
document.write("starting loop "+"<br/>");
for (count=0;count<10;count++) {
    document.write("current count:"+count);
    document.write("<br/>");

} document.write("loop stopped");
document.write("<br/>");