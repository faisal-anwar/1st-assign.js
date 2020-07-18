// Assignment No.1:-(feetToMile)

function feetToMile(feet)
{
    var mile = feet / 5280 ;    // 1 mile = 5280 feet
    return mile;
}
var result = feetToMile(10000); 
console.log(result.toFixed(2));                

// Assignment No.2:-(woodCalculator)

function woodCalculator(chair,table,bed)     //   Measurement Count as (Cubic Feet)
{
    var chairCount = chair * 0.66;          //Here,Length:2 feet, Width:2 feet,Thickness: 50mm    
    var tableCount = table * 8.61;          //Here,Length:7 feet, Width:5 feet,Thickness: 75mm 
    var bedCount = bed * 13.78;             //Here,Length:7 feet, Width:6 feet,Thickness: 100mm 
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}
var woodNeeded = woodCalculator(6,2,1);     // For 6 chair, 2 Table, 1 bed
console.log(woodNeeded);

 // Assignment No.4:-(tinyFriend)

 
function tinyFriend (ages){
    var smaller = ages[0];                  // Here : Given Ages compare as tinyFriend
    for( i=0; i<ages.length; i++){       
        var currentages = ages[i];
        if(currentages < smaller){
            smaller = currentages;
        }
    }
    return smaller;
}
var smallerAges = tinyFriend([56,67,49,84,30,86,75,64]);
console.log(smallerAges);

