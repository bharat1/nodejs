const checkDataType = (input) =>{
  
    if(input == '' ||   input == null ){
        return "Please enter a valid input";
    }else{
        return typeof input; 
    }


}



console.log(checkDataType(10));
console.log(checkDataType("10"));
console.log(checkDataType(true));
console.log(checkDataType(!!!!"ankit"));
console.log(checkDataType(!"ankit"));
console.log(checkDataType(Number("ankit")));
console.log(checkDataType());
console.log(checkDataType(undefined));
console.log(checkDataType(null));
console.log(checkDataType([1,2,3]));
console.log(checkDataType({name:"Ankit"}))