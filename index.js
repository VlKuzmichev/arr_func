arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

sum = function (array){
   let result = 0;
   for (let i = 0; i < array.length; i++){
       result = result + array[i];
   }
   return result;
};

console.log(sum(arr));

revert = function (array){
    let newArray = [];
    let index = 0;
    for (let i = array.length-1; i >= 0; i--) {
        newArray[index] = array[i];
        index++;
    }
    return newArray;
}

console.log(revert(arr));
