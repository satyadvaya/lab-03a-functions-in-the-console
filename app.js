const apple = { weight: '5', color: 'red', taste: 'yummy' };
const pear = { weight: '3', color: 'yellow', taste: 'meh' };
const grape = { weight: '1', color: 'purple', taste: 'delish' };
const kiwi = { weight: '2', color: 'green', taste: 'sweet' };
const banana = { weight: '4', color: 'yellow', taste: 'bland' };
const orange = { weight: '6', color: 'orange', taste: 'bright' };

const fruit = [apple, pear, grape, kiwi, banana, orange];

console.log(fruit);

for (let i = 0; i < fruit.length; i++) {
    const food = fruit[i];
    console.log('Weight by Index: ', i, 'yields', food.weight);
}

function logOutThings (){
    console.log('Here are your', fruit.length, 'things' + '!')
}
logOutThings()

function loopMove (){
    console.log('Here are your', fruit.length, 'things' + '!')
}
for (let i = 0; i < fruit.length; i++) {
    const food = fruit[i];
    console.log(food.weight);
}    
loopMove()



// console.log('hello world');
// console.log('second thing')
// document.body.style.color = 'orange';
// let x = 6;
// if(x%2===0){
//     console.log(x, 'is even');
// }
// else{
//     console.log(x, 'is odd');
// }
// // for(/* initializer */; /*test*; /*post-loop action*/) {
// //}
// for(let i=0; i<x; i++) {
//     console.log(i);
// }
// const colors=['yellow', 'red,' 'blue', 'purple'];
// console.log('color by index 1:', colors[1]);

// for(let i=0; i<colors.length; i++) {
//     const color=colors[i];
//     console.log('color at index', i, color);
// }