// const tinderUser = new Object() // singleton

const tinderUser ={} // non-singleton

tinderUser.id = "123abc";
tinderUser.name = "mayank";
tinderUser.isLoggin = false


// console.log(tinderUser);

const regularUser = {
    email: "Something2gamil.com",
    fullname: {
        userfullname: {
            firstname: "Mayank",
            lastname: "Goyal"
        }
    }
}
// console.log(regularUser.fullname.userfullname);

const obj1={1:"a", 2:"b"};
const obj2={3:"c", 4:"d"};

// const obj3 = {obj1,obj2}

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)

const obj4={...obj1,...obj2};
console.log(obj4)

const users= [
    {id:1,name:"mayank"},
    {id:2,name:"mayank2"},
    {id:3,name:"mayank3"}
]
users[1].name
// console.log(tinderUser)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggin'))

const course ={
    coursename:"js in hindi",
    price:"999",
    courseInstructor: "Mayank"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(courseInstructor)

console.log(instructor)