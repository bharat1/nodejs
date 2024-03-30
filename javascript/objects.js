const data1  = {
   name:'bharat',
   profile:'developer',
}

const data2  = {
    name:'devinai',
    profile:'aitool',
 }



 const compare =(obj1 , obj2) =>{
  if(JSON.stringify(obj1) === JSON.stringify(obj2)){
    console.log("true");
  }else{
    console.log("false");
  }



 }

 console.log(compare(data1 , data2));



