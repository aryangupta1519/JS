//singelton

//object literals

//symbol define in javascript
const sym1 = Symbol("key1");

const JSUser ={
    name: "Aryan",
    "fullname" : "Aryan Sahu",
    [sym1]: "key001",
    age: 21,
    laocation: "India",
    email: "aryan.sahu4245@gmail.com",
    isLogedIn: false,
    lastLogin: ["Monday", "Tuesday", "Wednesday"]
}

// console.log(JSUser.name);
//ye object call karne ka normal tarika hai 
// console.log(JSUser["name"]);
//ye object call karne ka another tarika hai jo maximum use hota hai agar name ko uppar hum "name" define karte to . method se kabhi usse access nahi kar sakte hai phr uss case me [] method ka hi use karenge 
// console.log(JSUser.sym1);
//yha pe sym1 key ke value ko access kar par re but jo sym1 symbol hai wo symbol ki trah behave nahi kar ra
//wo abhi bhi string mai hai to sahi tarika 
// console.log(JSUser[sym1]);
//ye ek proper traika hai symbol ko abject me define kar ke access karne ka 
// console.log(typeof JSUser[sym1]);  //string
// console.log(typeof sym1);  //symbol 

// JSUser.email = "aryan.gupta@gmail.com";
//yha pe maine email ko update kia hai value change ho gya hai

//but mai chahta hun ki abb koi email update na kar paye 

// Object.freeze(JSUser.email);
//freeze method se hum object ke kisi v key ko update nahi kar sakte hai

// console.log(JSUser);

JSUser.Gretting = function (){
    console.log("Hello JS User");
}
//yha pe maine object ke andar function define kia hai
JSUser.GrettingTwo = function(){
    console.log(`Hello JS User : ${this.name}`);
}
//yha pe maine object ke andar function define kia hai aur this keyword ka use kia hai jisse mai current object ke andar koi v key ko access kar saku

console.log(JSUser.Gretting());
console.log(JSUser.GrettingTwo());