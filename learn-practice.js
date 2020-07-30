var inputarr = [2,3,4,6,7,5,3,2,5,1,5,7,8,5,3];

function countOccurance(arr,num){                   //Function_to_count_numberOfoccurances
  
  var x = 0;
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] === num){ 
        x++; 
                       }};                     
  console.log('No of times '+num+' has occurred -', x);
}

countOccurance(inputarr, 2)

countOccurance(inputarr, 5)


arr = [
    {
    name:'A',
    address: {
      street: 'StrA'
    }
  },
    {
    name:'B',
    address: {
      street: 'StrB'
    }
  },
    {
    name:'C',
    address: {
      street: 'StrC'
    }
  },
    {
    name:'D',
    address: {
      street: 'StrD'
    }
  },
    {
    name:'E',
    address: {
      street: 'StrE'
    }
  },
  ]
  for (var i = 0; i < arr.length; i++){
  console.log('userName- ', arr[i].name,'userStreet -', arr[i].address.street);

  }

arr = [3,4,5,6,2,1,7,8];
var min = arr[0];
  for (var i = 0; i < arr.length;i++) {
      if (min > arr[i]){                         //program_To_Find_Min&Max Values
                      min = arr[i]
                      }};                 
  console.log('Smallest no is -', min);

arr = [3,4,5,6,2,1,7,8];
var max = arr[0];
  for (var i = 0; i < arr.length;i++) {
      if (max < arr[i]){ 
                      max = arr[i]
                      }};                 
  console.log('Greater no is -', max);


arr = [
        [1,2,3],
        [2,3,4],
        [4,5,6]
      ]                                          //problem-On-Nested-Loop

for (var i = 0; i<arr.length; i++) {
  var innerArr = arr[i];
  console.log(innerArr)
for (var j = 0; j<innerArr.length; j++){
  console.log('Element at position '+i+','+j+'',' is ', innerArr[j])
};
};

var bankBalance = 1000;
var pay = function makeTransaction (priceOfSale) {
  if ( priceOfSale <= bankBalance) {
bankBalance -= priceOfSale;
console.log("Transaction Successful");
  }
  else {
console.log("Insufficient Balance");
  }                                               // programForMakingATransaction
}
// console.log(bankBalance);
// makeTransaction(500)
// console.log(bankBalance);
// makeTransaction(300)
// console.log(bankBalance);
// makeTransaction(400)

pay (500)
console.log(bankBalance);

Arr = [1,7,6,5,4,3]

function reverseArray(arr){
for (var x = 0, y = Arr.length-1; x <= (Arr.length/2), y >= (Arr.length/2); x++, y--){
  var t = Arr[x];
  Arr[x] = Arr[y];                                                                      //Function to reverse an Array
  Arr[y] = t;
}
console.log(Arr);
}

Arr = [1,7,6,5,4,3];

function findElement(arr,num){
var a = num;
var index=-1;
for (var x = 0; x<arr.length; x++){
  if(arr[x] === a) {
    index  = x;                                                                         //function to find an element
  }};
if (index === -1){
  console.log("Element not found");
}
else {
  console.log('Element found at index '+index+'');
}
}

findElement(Arr,5)

Arr = [2,3,4,6,7,5,3,2,5,1,5,7,8,5,3];

function calculateSum (arr) {
var z = 0;
for (var x = 0; x<Arr.length; x++){                                                  //function to add elements of an array
  z += Arr[x];
}
console.log('Sum is '+z+'');
}

calculateSum(Arr)

Arr = [3,4,5,6,2,1,7,8];


function checkSorted(arr){
var isSorted = true;
for (var x = 0, y = 1; x<Arr.length-1,y<Arr.length-2; x++, y++){        //function to check whether an array is sorted or not
  if (Arr[x]>Arr[y]){
    isSorted = false;
    break;  
  }};
  if (isSorted === false){
    console.log("Array is not sorted");
  }
  else {
    console.log("Array is sorted");
  }}


checkSorted(Arr)

Arr = [3,4,5,6,2,1,7,8];

function sortAnArray(arr){
for (var z =0; z<arr.length; z++){
for (var x = 0, y = 1; x<arr.length-1,y<Arr.length; x++, y++){        //function for bubble sorting
  if (arr[x]>arr[y]) {
    var t = arr[x];
    arr[x] = arr[y];
    arr[y] = t;
  }}};
  console.log(arr);
}
sortAnArray(Arr)

Arr = [3,4,5,6,2,1,7,8];
var min = Arr[0];
for (var y = 0; y<Arr.length; y++){
for (var x = 1; x<Arr.length; x++){
  if(min > Arr[x]){
    var t = Arr[x];
    Arr[x] = min;
    min = t;
    console.log(Arr);
}}}
