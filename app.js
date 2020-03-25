const apple = { weight: '5', color: 'red', taste: 'yummy'};
const pear = { weight: '3', color: 'yellow', taste: 'meh'};
const grape = { weight: '1', color: 'purple', taste: 'delish'};
const kiwi = { weight: '2', color: 'green', taste: 'sweet'};
const banana = { weight: '7', color: 'yellow', taste: 'bland'};

const fruit = [apple, pear, grape, kiwi, banana];

console.log(fruit);

for(let i=0; i<fruit.length; i++) {
    const food = fruit[i];
    console.log('weight by index', i, food.weight);
}

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