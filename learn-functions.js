// function area (base, height) {
//     return (1/2) * base * height;
// }

// var triangleAreas = [];
// triangleAreas.push(area(10,15));
// triangleAreas.push(area(5,6));
// triangleAreas.push(area(12,20));
// triangleAreas.push(area(4,10));
// console.log(triangleAreas);


// var arr = [];

// arr[0]= 23;

// console.log(arr);

// var obj = {};

// var newobj = {};

// obj.name = 'Sudhanshu';
// obj.age = 26;
// obj.address = {
//     street:{
//         first:12
//     },
//     pin: 560102
// };

// newobj.name = 'sourav';

// console.log("newobj - ",newobj);

// console.log("obj-", obj);


// var t = {
// name:'abc',
// age:26,
// _100:'strr',
// greet : function(i,j){
//     console.log('hello world');
//     return 45 +i -j;
// }
// };

// console.log(t);

// console.log(obj.address.street.first);

// arr.push(obj);
// arr.push(newobj);
// arr.push(12);
// arr.push('test');


// console.log(arr);

// console.log(arr[1].address.street.first)

// console.log(t.greet(90,100));
// console.log(t.name);

function findMin (arr){
    var min = arr[0];
    for (var i = 0; i < arr.length;i++) {
        if (min > arr[i]){ 
                        min = arr[i]
                        }};                 
    console.log('Smallest no is -', min);
  }
  
  arr = [3,4,5,6,2,1,7,8]; 
  findMin(arr)