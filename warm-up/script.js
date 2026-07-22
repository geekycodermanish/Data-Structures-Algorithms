// let voters = [
//     {name: "manish", age: 27},
//     {name: "Rohit", age: 12},
//     {name: "Ajay", age: 23},
//     {name: "Rahul", age: 45},
//     {name: "Nikhil", age: 13},
//     {name: "Raj", age: 18},
//     {name: "Yesh", age: 19}
// ]

// let eleagbleVoters = []
// let index;

// function checkVoter (){
//     console.log(voters[1])

//     // for(let key of voters){
//     //     if(key.age >= 18){
//     //         eleagbleVoters.push(key)
//     //     }
//     // }

//     // return eleagbleVoters

// }
// checkVoter()
// // console.log(eleagbleVoters)
// // // console.log()



// const arr = [10, 20, 30, 2, 50];

// let result;

// function check(){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < arr[i + 1]){
//             result = arr[i]
//         }
//     }

//     return console.log(result)
// }

// check()



// const arr = [10, 20, 30, 2, 50];

// function searchElement (arr, num) {
//   if(!num && !arr) return -1 ;
//     for(let i = 0; i < arr.length; i++){
//       if(arr[i] == num){
//         return i;
//       }
//     }
//     return -1
// }

// console.log(searchElement(arr) )


// const arr = [10, 20, -30, 2, -50, 1, 3, -9];

// let describe = 0 // 1

// function check (arr, describe){
//   if(!arr || !describe) return 0;
//   let result = 0
//   for(let i = 0; i < arr.length; i++){
//       if(describe === 0){
//         if(arr[i] < 0){
//           result++
//         }
//       }else {
//         if(arr[i] > 0){
//           result++
//         };
//       }

//   }

//   return result;
// }


// console.log(check(arr, 1))



// const arr = [80, 10, 20, 30, 2, -50, 1, 3, -9];

// function check (arr, desc) {
//   if(!arr || !desc) return 0
  
//   let result = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(desc == 1){
//       if(result < arr[i]){
//         result = arr[i]
//       }
//     }else {
//       if(result > arr[i]){
//         result = arr[i]
//       }
//     }
//   }

//   return result;
// }

// console.log(check(arr, 0))



// let arr = [10, 20, 4, 30, 2, -50, 1, 3, -9];

// function check(arr) {

//   if(!arr && arr.length < 2) return null
//   let max = 0;
//   let secondMax = 0;

//   for(let i = 0; i < arr.length; i++){
//     if(max < arr[i]){
//       secondMax = max
//       max = arr[i]
//     }
//     // else if(secondMax < arr[i]){
//     //   secondMax = arr[i]
//     // }
//   }


//   return secondMax;
// }


// console.log(check(arr))




// *****
// *****
// *****
// *****
// *****

  // function check(n) {
  //   if(!n) return console.log("N Number Empty Not Alow...");
  //   for(let outer = 0; outer < n; outer++){
  //       let row = "";
  //       for(let inner = 0; inner < n; inner++){
  //         row = row + "*"
  //       }
  //       console.log(row)
  //   }
  // }
  

  // check(5)




// *
// **
// ***
// ****
// *****
// ******


  //   function check(n) {
  //   if(!n && typeof x == "String") return console.log("N Is Not Correct...");

  //   for(let outer = 0; outer <= n; outer++){
  //       let row = "";
  //       for(let inner = 0; inner <= outer; inner++){
  //         row = row + "*"
  //       }
  //       console.log(row)
  //   }
  // }
  

  // check("5")





// *****
// ****
// ***
// **
// *

  // function check(n) {
  //   // if(!n && typeof x == "String") return console.log("N Is Not Correct...");

  //   for(let outer = n; outer > 0; outer--){
  //       let row = "";
  //       for(let inner = 0; inner < outer; inner++){
  //         row = row + "*"
  //       }
  //       console.log(row)
  //   }
  // }
  

  // check(5)



// 12345
// 1234
// 123
// 12
// 1


//     function check(n) {
//     // if(!n && typeof x == "String") return console.log("N Is Not Correct...");

//     for(let outer = n; outer > 0; outer--){
//         let row = "";
//         for(let inner = 0; inner < outer; inner++){
//           row = row + (inner + 1)
//         }
//         console.log(row)
//     }
//   }
  

//   check(5)


//     *
//    **
//   ***
//  ****
// *****

//     function check(n) {
//     // if(!n && typeof x == "String") return console.log("N Is Not Correct...");

//     for(let outer = 0; outer < n; outer++){
//         let row = "";
//         for(let middel = 0; middel < (n-outer); middel++){
//           row = row + " "
//         }
//         for(let inner = 0; inner <= outer; inner++){
//           row = row + "*"
//         }
//         console.log(row)
//     }
//   }
  

//   check(5)


//find the length of the number.....
  // function check(num) {
  //   if(!num ) return 0;
  //   if(num == 0) return 1
  //   if(num < 0) num = num * -1

  //   let index = 0;
  //   while(num > 0){
  //     num = Math.trunc(num/10)
  //     index++
  //   }
  //     return index;
    
  // }
  

  // console.log(check(-10))



// ------- palindrome challenge
  // function check(n) {
  //   if(!n) return false;
  //   if(n < 0) n = n * -1
    
  //   let reversNum = 0;
  //   let currentNum = n
  //   // let index = 0;
  //   while(n > 0){
  //     reversNum = reversNum * 10 + (n % 10)
  //     n = Math.floor(n/10)
  //     // index++
  //   }

  //   return reversNum != currentNum ? false : true
  // }

  // console.log(check(-212))


  //-------------Reverse Integer

  function check (n) {
    if(!n) return 0;
    let orignalNum = n;

    if(n < 0) n = n * -1
    let reverseNum = 0;
    while(n > 0){
      reverseNum = reverseNum * 10 + (n % 10)
      n = Math.floor(n/10)
    }

    return orignalNum < 0 ? -reverseNum : reverseNum
  }

console.log(check(-123))
