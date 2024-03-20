// let heading = document.getElementById("header");//h2
// console.dir(heading);

// let headings=document.getElementsByClassName("header");
// console.dir(headings);
// console.log(headings);

// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);
// let firstelements = document.querySelector("p");
// console.dir(firstelements);

// let allElements = document.querySelectorAll("p");
// console.dir(allElements);
// console.dir(document.body.firstChild);

// let div = document.querySelector("div");
// console.dir(div); 

// let heading = document.querySelector("h1");
// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " from my project"; 
// let divs= document.querySelectorAll(".box");
// let index =1;
// for(div of divs){
//     div.innerText = `new unique value ${index}`;
//     index++;
// }
 
// divs[0].innerText = "new uniquevalue 1";
// divs[1].innerText = "new uniquevalue 2";
// divs[2].innerText = "new uniquevalue 3";

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id); 

// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newclass"));
// div.style.backgroundColor = "green";
// let newBtn = document.createElement("button");
// newBtn.innerText = "click me !";
// console.log(newBtn);

// let div = document.querySelector("div");


// div.append(newBtn);

// let btn1 = document.querySelector("#btn1");

// btn1.onclick =() => {
//     console.log("btn1 was clicked");
//     let a= 25;
//     a++;
//     console.log(a);
// };

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("your are inside the box");
// };

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clickX,evt.clickY);
// };

// btn1.addEventListener("click",(evt) => {
//     console.log("button1 was clicked - handler1");
// });

// btn1.addEventListener("click",() => {
//     console.log("button1 was clicked - handler2");
// });


// btn1.addEventListener("click",(evt) => {
//     console.log("button1 was clicked - handler4");
// });

// const handler3= () => {
//     console.log("button1 was clicked - handler3");
// }

// btn1.addEventListener("click", handler3);

// btn1.removeEventListener("click",handler3);


// let modebtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currMode = "light";

// modebtn.addEventListener("click", () => {
//     if(currMode ==="light") {
//         currMode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
//     else {
//         currMode ="light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }

//     console.log(currMode);
// }); 

