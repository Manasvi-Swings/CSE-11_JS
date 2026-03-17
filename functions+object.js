var res=mul(12,30); //a way of function creation
function mul(x,y) {
    return x*y;
}
document.write(res);
document.write("</br>");

//arrow functions: another way of defining functions
/* (x,y)=> {
    }*/
   
   var add2 = (a,b) =>{
    document.write(a+b );
    document.write("</br>" );
   } ;
   add2(102,20);

   //objects

   //arrays
   let collection=[
    {},
    [],
    true,
    "john",
    function() {},
    9003876,
    undefined,
    null,
    new String("abc"),
    new Date(),
   ];
   collection.teacherName="John Mac";
   console.log(collection);
   document.write(collection[5]);
   

   