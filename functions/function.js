// console.log ("i am connected ");

// --- Directions Difficulty Medium
// Given an array and a chunk size, divide the array into many subarrays
// where each subarray is the length of the chunk size see examples below
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const chunk = (arr,size) => {

    if ( size >= arr.length) { 
        return arr ;
    } else {

        let finalArr =[];
        while (arr.length > 0  ) {
        let smallArr = [];  

        

        for (let i=0 ; i < size ;i++) {
            if(arr[i]) {
         smallArr.push(arr[i]);
            }
        } 
        arr = arr.slice(size);
        finalArr.push(smallArr);
        
         
         }


        return finalArr;


       
    }

} 



// console.log (chunk ([1,2,3,4,5,6,7,8] ,4 ));
// console.log (chunk ([1,2,3,4,5,6,7,8] ,2 ));
// console.log (chunk ([1,2,3,4,5,6,7,8] ,5 ));
// console.log (chunk ([1,2,3,4,5,6,7,8] ,3 ));
// console.log (chunk ([1,2,3,4,5,6,7,8] ,10 ));

module.exports = chunk ;

