
let body = document.body;
let title = document.title = 'My assignment';
let link = document.createElement("link");
link.rel = 'icon';
link.type = 'image/x-icon';
link.href = 'https://cdn-icons-png.flaticon.com/128/2420/2420366.png';
document.head.appendChild(link)
/*
Assignment 1: Deleting Elements with Delay
Task:
Create an HTML page with five elements (e.g., <div> or <p>) each containing some content.
Use JavaScript to remove the elements sequentially with delays.
 The first element should be removed after 2 seconds, the second after 5 seconds,
  the third after 8 seconds, the fourth after 11 seconds, and the fifth after 14 seconds.
 */
// let div = document.createElement("div");
// div.innerText = "2 sec";
// let v =  body.appendChild(div)

// setTimeout(()=>{
  
//    v.remove();

// },2000);

// let div1 = document.createElement("a");
// div1.innerText = "5 sec";
// let v1 =  body.appendChild(div1)
// setTimeout(()=>{
  
//    v1.remove();

// },5000);
// let div2 = document.createElement("p");
// div2.innerText = "8 sec";
// let v2 =  body.appendChild(div2);
// setTimeout(()=>{
  
//    v2.remove();

// },8000);
// let div3 = document.createElement("h1");
// div3.innerText = "11 sec";
// let v3 =  body.appendChild(div3)
// setTimeout(()=>{
  
//    v3.remove();

// },11000);
// let div4 = document.createElement("h2");
// div4.innerText = "14 sec";
// let v4 =  body.appendChild(div4)
// setTimeout(()=>{
  
//    v4.remove();

// },14000)

/*
Assignment 2: Adding and Removing List Items with Delay
Task:
Extend your HTML page to include an unordered list (<ul>).

Dynamically add five list items (<li>) to the unordered list,
 each with unique content.
Implement a function to remove the list items sequentially with delays. 

The first list item should be removed after 2 seconds, 
the second after 5 seconds,
 the third after 8 seconds, 
the fourth after 11 seconds, 
and the fifth after 14 seconds.
 Utilize the removeChild method for removal.
 */

// let unOrderList = document.createElement("ul");
// body.appendChild(unOrderList);
// list 1
// let list = document.createElement("li");
// list.innerText = '2 seconds';
// let removeList = unOrderList.appendChild(list);
//  setTimeout(()=>{
// removeList.remove();
// },2000);
// list 2
// let list1 = document.createElement("li");
// list1.innerText = '5 seconds';
// let removeList1 = unOrderList.appendChild(list1);
//  setTimeout(()=>{
// removeList1.remove();
// },5000);
// list 3 
// let list2 = document.createElement("li");
// list2.innerText = '8 seconds';
// let removeList2 =  unOrderList.appendChild(list2);
//  setTimeout(()=>{
// removeList2.remove();
// },8000);
// list 4 
// let list3 = document.createElement("li");
// list3.innerText = '11 seconds';
// let removeList3 = unOrderList.appendChild(list3);
//  setTimeout(()=>{
// removeList3.remove();
// },11000);
// list 5 
// let list4 = document.createElement("li");
// list4.innerText = '14 seconds';
// let removeList4 = unOrderList.appendChild(list4);
//  setTimeout(()=>{
// removeList4.remove();
// },14000);

/*
Assignment 3: Retrieving Attributes of an Image Element
Task:
Further enhance your HTML page by adding an image element (<img>).
Use JavaScript to retrieve and log to the console:
All attributes of the image element.
Specifically, the value of the src attribute.
*/

// let img = document.getElementById("carImg");
// let alter = img.getAttribute("alt");
// let hRef = img.getAttribute("href");
// console.log(img)
// console.log("Alternative Text:", alter);
// console.log("Source:", hRef);
/*
Assignment 4: Set Image Source and other attributes
Task:
Add an image (<img>) to your HTML page.
Using JavaScript, add attributes to the image element using the setAttribute method of the element.
*/
// let carId = document.getElementById("myBmw");
// let carAlt = carId.getAttribute("alt")
// let source = carId.getAttribute("src")
// console.log("Car Id:", carId)
// console.log("Car alt:", carAlt);
// console.log("Car source:", source)


/*
Assignment 5: Logging Favorite Programming Languages
Task:
Create an array with your favorite programming languages.
Utilize the for...of loop in JavaScript to log each programming language to the console.
 */

// let favProLang = ["JavaScript", "Python","Java","C++","Rust","PhP"];

// for (let favourit of favProLang){
//     console.log(favourit);
// }


/*
Assignment 6:
Add content using innerHTML innertext and text content property of element 
And tell the differences between them
 */

/*
Inner HTML: "inner html" refer to thoes steps in dom which help us to add elements of Html in the foam of child elements along 
with text but it shows us only text on our browser and behind the scene of javascript it added.

Inner text: we use "inner text" in dom by used of adding text in our html elements dynamically. If we want to add amy element in our
HTML in the foam of paraent child relation, however it only treated them as a text. Other characterists of it is that 
it donot count spaces as well as hidden contant.

Text content: "Text contant" helps us to return all hidden elements as well as shows as spaces which we give in our text. 
*/



