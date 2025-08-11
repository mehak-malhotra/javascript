// // creating arrow function
// const multiply= (a, b) => {
//     console.log(a*b);
// }

// // console.log(multiply);
// multiply(3,2);

// // question 1
// function returnVowels(str){
//     str= str.toLowerCase();
//     let count=0;
//     for(let i=0; i<str.length; i++){
//         if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
//             count++;
//         }
//     }
//     return count;
// }

// let i= returnVowels("mEhak");
// console.log(i);

// // question 2
// let vowelCount= () => {
//     return returnVowels("Mehak");
// }

// console.log(vowelCount());

// // question 3
// let arr= [1, 2, 3, 4];
// arr.forEach((val) => {
//     console.log(val*val);
// });

// // question 4
// let marks= [45, 91, 78, 99, 1, 95];
// let newArr= marks.filter((val) => {
//     return val>= 90;
// })
// console.log(newArr);

// question 5
let n= 4;
let arr= [];
for(let i=1; i<=n; i++){
    arr[i-1]= i;
}

// let sum= arr.reduce((prev, curr) => {
//     return prev+curr;
// })

// console.log(sum);

let prod= arr.reduce((prev, curr) => {
    return prev*curr;
})

console.log(prod);