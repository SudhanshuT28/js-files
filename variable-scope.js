
// var , let, const

function test(){

   const a = 20;
    
   console.log(a);

   a = 34;

   console.log(a);
   var i ; // declaration
   i =0; // asssignemnt
    for(;i<10;i++){
        // let j=10;
        var j=10; // definition
        console.log(i+j);
    }

    console.log('j',j);

    console.log('i',i);


    function nested(){
        let nestedvar = 34;
        console.log(nestedvar);
        console.log(j);
        console.log(i);
    }

    // console.log(nestedvar);

    nested();

}




test();