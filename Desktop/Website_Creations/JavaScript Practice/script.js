//  let guests = prompt('How many people are coming to your wedding?');

// function getPrice(guests){
//     let cost = 0;
//     // Your code here
//     if (guests<=50){
//         cost=4000;
//     } else if (guests<=100) {
//         cost=10000;
//     } else if (guest<=200) {
//         cost=15000;
//     } else {
//         cost=20000;        
//     }
//     return cost;

// }

// let price = getPrice(guests);
// console.log('Your wedding will cost '+price+' dollars');




// 99 bottles of milk on the wall, 99 bottles of milk. Take one down and pass it around, 98 bottles of milk on the wall.
// 1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.
// No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.

// let num = 99;
// while (num >= 0) {

//     if (num === 2) {
//         console.log(num + " bottles of milk on the wall, " + num + " bottles of milk. Take one down and pass it around, " + (num - 1) + " bottle of milk on the wall.")
//     } else if (num === 1) {
//         console.log(num + " bottle of milk on the wall, " + num + " bottle of milk. Take one down and pass it around, " + (num - 1) + " bottles of milk on the wall.")
//     } else if (num === 0){
//         console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, no more bottles of milk on the wall.")
//     } else {
//         console.log(num + " bottles of milk on the wall, " + num + " bottles of milk. Take one down and pass it around, " + (num - 1) + " bottles of milk on the wall.")
//     }
//     num--;
// }

// or

// for (let num = 99; num > 0; num--) {
//     if (num === 2) {
//         console.log(num + " bottles of milk on the wall, " + num + " bottles of milk. Take one down and pass it around, " + (num - 1) + " bottle of milk on the wall.")
//     } else if (num === 1) {
//         console.log(num + " bottle of milk on the wall, " + num + " bottle of milk. Take one down and pass it around, " + (num - 1) + " bottles of milk on the wall.")
//     } else if (num === 0) {
//         console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, no more bottles of milk on the wall.")
//     } else {
//         console.log(num + " bottles of milk on the wall, " + num + " bottles of milk. Take one down and pass it around, " + (num - 1) + " bottles of milk on the wall.")
//     }
// }




const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
    const choice = select.value;

    if (choice === 'sunny') {
        para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
    } else if (choice === 'rainy') {
        para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
    } else if (choice === 'snowing') {
        para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
    } else if (choice === 'overcast') {
        para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
    } else {
        para.textContent = '';
    }
}
