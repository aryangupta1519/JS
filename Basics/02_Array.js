const marvel_heros = ['Ironman', 'Captain America', 'Thor'];
const dc_heros = ['Superman', 'Batman'];

// marvel_heros.push(dc_heros);

//yha pe jo maine direct push kia uske wajh se direct array insert ho gya main array me jaisa ki hume pata hai ki array koi v type of variable ko hold kar sakta hai
//ab jab v hum 3 element ko access karenge to vo ek array me store return karega 
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);  //Batman


// const new_arr = marvel_heros.concat(dc_heros);
//concat method se hum multiple array ko ek sath merge kar sakte hai but iss bar proper string ke form me values merger hui hai..

// console.log(new_arr);

// const all_new_heroes = [...marvel_heros, ...dc_heros];
//yha pe maine spread operator ka use kia hai jisse maine dono array ko merge kar diya hai

// console.log(all_new_heroes);

const another_arr = [1,2,3,[4,5,6],[1,2,[3,4,5]]];

const new_arr1 = another_arr.flat(Infinity);
//flat method se hum nested array ko ek single array me convert kar sakte hai

// console.log(new_arr1);

// console.log(Array.isArray("ARYAN"));
//isArray method se hum check kar sakte hai ki koi v variable array hai ya nhi

// console.log(Array.from("ARYAN"));
//from method se hum string ko array me convert kar sakte hai

console.log(Array.from({name: "ARYAN"}));
//yha pe maine object ko array me convert kia hai but object me name key hai isliye vo empty array return karega