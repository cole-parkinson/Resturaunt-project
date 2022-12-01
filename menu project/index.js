var Steak = 'steak';
var Pasta = 'pasta';
var Price1 = '18';
var Price2 = '20';
var Price3 = '13';
var Price4 = '15';

if (prompt('choose an entree: steak = 15 dollars, pasta = 10 dollars') === 'steak') {
document.write('The steak is 15 dollars and a great choice');
} else if ('pasta'){
document.write('The pasta is 10 dollars and comes with free breadsticks')
}

var Bread = 'bread';
var Salad = 'salad';


if (prompt('chosse a side: bread = 3 dollars, salad = 5 dollars,') === 'bread') {
    document.write('The Bread is 3 dollars and is a great garlic bread');
    } else if ('salad') {
    document.write('The salad is 5 dollars and comes with ranch')
    };
function  Total(Price1,Price2,Price3,Price4) {
if (Price1) {
    document.write('the total is' `${Price1}`)
}else if (Price2){
    document.write('the total is' `${Price2}`)
}else if (Price3){
    document.write('the total is' `${Price3}`) 
}else if (Price4){
    document.write('the total is' `${Price4}`)
}
}

Total();