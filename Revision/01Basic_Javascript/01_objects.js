//singleton -constructor and if literals then no singleton
//singleton - object.create

const mySym = Symbol("Key1")

const JsUser = {
    name: "Mayank",
    [mySym]:"mykey1",
    age: 25,
    gender: "male",
    city: "Bangalore",
    country: "India",
    state: "Karnataka",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser[mySym]);

JsUser.name = "mayankym"
// Object.freeze(JsUser)
JsUser,name ="mayank"
console.log(JsUser.name);
// console.log(JsUser);


JsUser.greeeting = function(){
    console.log("hello Js User")
}

JsUser.greeeting2 = function(){
    console.log(`hello Js User, ${this.name}`)
}

console.log(JsUser.greeeting());
console.log(JsUser.greeeting2());