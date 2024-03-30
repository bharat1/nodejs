// const data1  = {
//     name:'bharat',
//     profile:'developer',
//  }
 
//  const data2  = {
//      name:'bharat',
//      profile:'developer',
//   }

// const deepCopy = (obj1 , obj2) =>{
       
//     if(typeof obj1 !== 'object' || typeof obj2 !== 'object'){
//         return false;
//     }
//    const objk1 = Object.keys(obj1).sort();
//    const objk2 = Object.keys(obj2).sort(); 

//  if(objk1.length !== obj2.length) {
//       return false;
//     }


//        return  objk1.every((key , index) => {
//        const objV = obj1[key];
//        const objV2 = obj2[objk2[index]];
//        return objV === objV2; 

//       });
     
   

// }


// console.log(deepCopy(data1 , data2));

const data1 = {
    name: 'bharat',
    profile: 'developer',
  };
  
  const data2 = {
    name: 'bharat',
    profile: 'developer',
  };
  
  const deepCopy = (obj1, obj2) => {
    // Check if both inputs are objects
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
      return false; // Not objects, can't compare
    }
  
    // Get keys of both objects
    const keys1 = Object.keys(obj1).sort();
    const keys2 = Object.keys(obj2).sort();
  
    // If lengths of keys are not the same, objects are not equal
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    // Check if all keys and values match
    return keys1.every((key, index) => {
      const value1 = obj1[key];
      const value2 = obj2[keys2[index]];
      return value1 === value2;
    });
  };
  
  console.log(deepCopy(data1, data2)); // true
  