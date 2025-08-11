// question 1
// find the average marks of entire class

// let arr= [85, 97, 44, 37, 76, 60];
// let sum=0;

// for(let i=0; i< arr.length; i++){
//     sum += arr[i];
// }

// console.log(sum/arr.length);

// question 2
// applying discount on price of items

// let prices= [250, 645, 300, 900, 50];
// for(let i= 0; i<prices.length; i++){
//     prices[i]= 0.9*prices[i];
// }

// for(let i=0; i<prices.length; i++){
//     console.log(prices[i]);
// }

// question 3
let companies= ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.splice(0,1);
console.log(companies);

companies.splice(1, 1, "OLA");
console.log(companies);

companies.splice(companies.length, 0, "Amazon");
console.log(companies);