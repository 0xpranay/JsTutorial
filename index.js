// LOOK AT CHROME JS BOOKMARKS TOO


let company = prompt("Enter the brand");
const pi = 3.14;

//This is an object "literal". Declared and created right here.
let inventory = {
    [company + "Laptops"] : 10, // Use [] for variable property names 
    order:124,
    prefer:true,
    name:"pranay",
    pi:[pi], // [] can also be used as value of a variable
};

alert(`We have ${inventory.appleLaptops} ${company} laptops`);

alert('appleLaptops' in inventory); // Checks if property is in the object


for(key in inventory) //Iterate over the key value pairs
{
    alert(`Property ${key} is ${inventory[key]}`);
}


let pranay = {
    name:"pranay",
    age:22,
    major:"ec",
    id:2142,
}

let pranav = {
    name:"pranav",
    age:19,
    major:"cse",
    id:2002,
}

function name(){
    alert(this.name);
}

pranay.namePrint = name;
pranav.namePrint = name;

pranay.namePrint();
pranav.namePrint();
 

// Calculator

let calculator = { // You are creating an object right away here. 
                    // This isn't a class. An object defined and created right here
    x:0,
    y:0,
    read(){
        this.x = Number(prompt("Enter first number"));
        this.y = Number(prompt("Enter second number"));
    },

    sum(){
        return this.x + this.y;
    },

    multiply(x, y){
        return this.x * this.y;
    },

    [Symbol.toPrimitive](hint){ // This code is used by JS. Kind of like operator overloading
        alert(`Hint is ${hint}`);//when it detects that object is used as a string somewhere
        return hint == "string" ? "This is an object, don't print it" : 536456456456;
    },

};

function Calculator(x, y){ // Constructors in JS. Not linked to any object. 
                            //Just returns an object based on what's written in it
    this.x = x;
    this.y = y;

    this.sum = function(){
        return x + y;
    };

    this.multiply = function(){
        return x*y;
    }
}

let c = calculator;

c.read();

alert(c.sum());
alert(c.multiply());


let clone = Object.assign({}, calculator);


clone.y = 423423;
console.log(clone);
alert(clone);

let num = 1_000_000_000; // _ can be used as syntactic sugar. Engine ignores the _
let otherNum = 1e9; // 1 followed by 9 zeroes.
let farNum = 7.3e9; // 7.3 multiplied by 10 raised to 9.
let milliSecond = 1e-6; // 1 multiplied to 10 power -6.

// toString(base) returns number in the given base as a string

let sixteen = 16;
sixteen.toString(2);// Returns 10000 binary as a string.

//For direct use on number literal, use double dots or wrapper

123456..toString(16);
//OR
(123456).toString(16);

// Two NaNs are never equal. NaN === NaN is FALSE. Use isNaN(object) to see if it is NaN.
// isFinite(object) is also another function. 

parseInt('100px', base = 16); // Gives 100. parseInt gives whatever number is extracted till 
                    // a string/weird character like $ is found. Base can also be used.

alert(+"100px"); //Using this shortcut to convert to number fails as 'px' isn't a number




// ARRAY METHODS START HERE

for(keys in object); //iterates over an object 
for(let fruit of fruits); //iterates over fruits array. The element is fruit, a value

let arr = new Array(3); //Length 3 array
arr = new Array(["Apple", "Banana", "Orange"]); // Actual array with elements

arr.toString() === 'Apple, Banana, Orange'; // Returns true. toString gives csv

arr.splice(1, 1); //removes 1 element from position 1
arr.splice(1, 2, "first", "second"); // Removes 2 elements from position 1. 
                                    //Adds first, second in their place

// arr.splice() no args gives a COPY OF ARRAY.                                    
arr.slice(startPos, tillPos); //Gives arr[startPos, tillPos - 1];

arr.concat([3, 4]); // Adds whatever is given. Can be arrays or csvs.

arr.forEach(function(item, index, array){
    alert(`${item} is at ${index} ${array}`); // array variable is a ref to whole array. Full array is printed.
});

arr.indexOf(item, startFrom); // Returns item index located after startFrom
arr.lastIndexOf(item, startFrom); //Same but from the right to left
arr.includes(item, from); // Same but returns true/false 


arr.find(function(item, index, array){
    //return true or false. If true is returned, the item is returned. 
    //Else Undefined is returned.
});

//example

arr.find(item => item === "Apple");
arr.findIndex(); // Same but returns index instead of element


let result = arr.filter(function(item, index, array)
{
    //if fxn returns true, element is added to result and moves forward.
    //Same but doesn't stop on first true
})

result = arr.map(function(item, index, array){
    //Apply the function to each of the element
})

//Example
result = arr.map(item => item += 1);

arr.sort(function(a, b){
    return a > b;
}); //Sorts the array based on the function ordering

result = arr.reverse(); //Simply returns the reverse array 

result = arr.split(','); //Gives an [1,2,3] from "1,2,3"

arr.reduce(function(sum, current){
    //sum is the accumulated data
    //current is the current element
    sum += current;
    //returns sum of the array. Reduce gives a single value from an array. 
});

Array.isArray(arr); //returns true. Used to diff from objects


//Array destructuring. Right part needs to be an iterable one. Even Maps/Sets/Objects
let [firstName, , lastName] = ["Pranay", "Reddy", "Malipatel"]; // take first and last names.Ignore the second one

//used mostly in loops

for(let [key, value] of Object.entries(user)){
    //use key and value
}


//Extra items are ignored. ..rest puts them in variable rest as an object
[guest, admin, ...rest] = ["guest", "admin", "here comes ignored stuff", "ignore", "ignored"];
//rest now is ["here comes ignored stuff", "ignore", "ignored"]


//destructuring
let {a, b, c} = {a : 5, b : 6, c : 7}; // Weird feature lmao


let fruit = {
    name : "orange",
    identify : function(){
        alert(`I'm a ${this.name}`);
    }
};

let vegetable = {
    name : "tomato",
};

//Call fruit's function in the context of vegetable. call explicitly passes the 'this' value of caller to the function
fruit.identify.call(vegetable, ...args);

//IMPORTANT. Calling fxn2 inside fxn1 sets fnx2's this variable to UNDEFINED. So set context first, i.e use call/apply
//But when do we use it? See https://javascript.info/call-apply-decorators#using-func-call-for-the-context
// call vs apply is that call expects list of arguemnts, so ...args while apply asks for a array like [arguments]. 

function func(greeting){
    alert(this.name);
    alert(greeting);
}

let funcUser = func.bind(vegetable);
//BIND a function to a context returns a callable object "funcUser" that BINDS func to vegetable
//So even if somewhere in the future, we set vegetable.name = "cucmber" the function still prints "tomato"
funcUser(greeting); // Calling as is, same arguments

// Call/Apply vs bind : Call/Apply simply set this of function to a reference. Bind sets this of a function to a COPY





// Arrow functions don't have dynamic this.
// this value inside arrow functions is fixed while declaration


//whatever this value is here
let group = {
    name : "tribal",

    printName : () => {
        alert(this.name); //... is also the this here. Not group object.
    }
}

//Arrow functions can't also contain new as they don't have this


//there can also be getters and setters.  
let user = {
    name : "John", 
    surname : "Smith",

    get fullName(){ //This is a getter
        return `${this.name} ${this.surname}`
    },

    set fullName(parameter){ //This is a setter
        [this.name, this.surname] = parameter.split(" ");
    }
}

alert(user.fullName); // John Smith
user.fullName = "Pranay Reddy"; // sets name and surname


// Inheritance
let parent = {
    role : "parent",
    get getRole(){
        return `${parent}`;
    },
    set setRole(val){
        this.role = val;
        //NO MATTER WHERE USED, this used in an object or it's prototype 
        //is always object before dot (.)
    }
};

let child = {
    id : "child",
    __proto__ : parent, // Setting the parent
};

alert(child.role); // parent


//IMPORTANT, setter and getter of PARENT, MODIFY THE CHILD!

child.getRole; // Gives "parent"
child.setRole = "son"; // Creates role variable in child and sets child.role = "son", parent unmodified

// Not only setters or getters, this variable in functions always refers to caller object. 


// Can also set the "prototype" variable of constructors to assign a parent when new used

function child(name){
    this.name = name;
}

child.prototype = parent; // Setting the parent here
let c = new child("john"); // Parent set in object during creation

// Above all is depreciated old stuff, modern way is... 
let childObject = Object.create(parentObject); // childObject's parent is now parentObject

//can also specify descriptors like... 

childObject = Object.create(parentObject, {
    jumps : true,
    name : "John",
});


childObject.name == "John"; //True



class Car{
    _fuel = 42432;
}

let benz = new Car();
alert(benz);
alert(benz._fuel);



//Promises
// resolve and reject are supplied by JS. The inner code of promise is what we write
//When the function we write waits and is done async-ly, on success resolve is called
//on failure reject is called
let successPromise = new Promise(function(resolve, reject){

    //Producer or our actual code
    setTimeout(() => resolve("Promise done"), 1000);
})

let errorPromise = new Promise(function(resolve, reject){
    reject(new Error("Well fuck, we crashed"));
})

successPromise.result; // Promise done
errorPromise.result; // Object Error, toString = "Well fuck, we crashed"

successPromise.state;// Pending or Resolved or Rejected

//result and state are internal. Can only access them via getters

//Consumer code
successPromise.then(function(){
    console.log("Handling resolved promise");
},
function(){
    console.log("Handling rejected promise");
});

//Consumer code
errorPromise.then(result => alert(result), error => {
    console.log("We have an error");
});





// HTML Selectors. Nodes mean even spaces/new-lines along with DOM elements. 
// Elements mean only DOM elements. 

let elem = document.getElementById('some-id');

elem.childNodes; // Gives all child nodes. Even spaces, new lines together with actual child DOM elements
elem.firstChild === elem.childNodes[0]; // True
elem.lastChild === elem.childNodes[elem.childNodes.length - 1]; // True


//Getting parents/siblings
document.body.parentNode === document.documentElement; // True. Note that documentElement is HTML
document.head.nextSibling === document.body; // True
document.body.previousSibling === document.head; // True


// Add 'Element' to get DOM Elements 
elem.children; // Gives DOM children only instead of spaces/newlines. Compare with childNodes
elem.firstElementChild; // First DOM child element
elem.lastElementChild; // Last DOM child element
elem.parentElement; // Parent DOM element


// Exception
document.documentElement.parentNode === document; // True as document itself is a node, not element
document.documentElement.parentElement === null; // True, no elements above HTML


// Getting DOM Elements. Note that all return a Collection, not array. Can't use filter etc.,
// But can be converted by let arr = Array.from(domCollection) 
document.getElementById('id'); // Selects the element with id. 
document.querySelector('css-selector'); // Select first element satisfying given css selector. Versatile
document.querySelectorAll('css-query'); // Selects all that match
document.getElementsByClassName('class-name'); // Gives class matched elements
document.getElementsByTagName('tag'); // tag is 'input', 'div' etc.. DOM tags
lander; // Is a reference to DOM element with id lander. Rarely used due to naming conflicts

elem.matches('css-selector'); // True/False is element satisfies the selector

elem.closest('css-selector'); // Runs from elem to HTML to find first element matching. Jumps each child level like, elem->elem-outer->body->html

// All Above give dynamic references except query selector. 
// Changes to or adding new elements WILL reflect in a previously declared getElementsBy* methods
// querySelector is static. Changed wont reflect


//Creating DOM Elements
let div = document.createElement('div'); // Element with div tag created
div.className = "className"; // Set the class name of element. Write/Prewrite CSS for this inside css file
div.innerHTML = "<strong> Hi there!</strong> You've read an important message."; // Notice no <div> or </div>. Inner tags will be parsed as HTML tho. 

document.body.append(div); // Add the element at the end of body to display.  
document.body.prepend(div); // Add the element to the start of the body 
node.replaceWith(div); // Replace node element with div

elem.before("text or a DOM node"); // add the text/node before the element(not inside like above)
elem.after("text or DOM node"); // add the text/node after the element. 
elem.remove(); // Removes the DOM element
elem.after(anotherElem); // All insert fxns swap the places, no need to remove and add


// Adding class names and styles
elem.className; // Gives the classes list. Replacing replaces the whole class list
elem.classList; // Gives the list of class names.
elem.classList.add('newClassName'); // Add new class name to the list
elem.classList.toggle('className'); // Adds the class, if already existing removes it
elem.contains('className'); //Checks if class is in class list 
elem.style.cssText; // Gives the full css text of the element

for(let clss of elem.classList); // Can iterate over classList

// Changing Styles. - replaced by camelCase
elem.style.backgroundColor; // background-color is backgroundColor. 
elem.style.zIndex; 


// Elem computed styles
elem.clientWidth; // Is content width + padding. Scrollbar excluded
elem.clientHeight; // Is content height + padding. Scroll excluded 
elem.scrollWidth; // Total width including any scrollable width. 
elem.scrollHeight; // Total height including any scrollable height. 
elem.scrollTop; // How much more can we scroll up. Changes as we scroll. 
elem.scrollLeft; // How much more can we scroll left. Changes as we scroll.  

elem.scrollTop += 10; // Example, Scrolls 10px down every time executed. 

window.innerWidth; // Width of total available window for HTML. Includes scrollbar
document.documentElement.clientWidth; // Width of actual HTML

window.scrollX; // Current scrollbar position
window.scrollY; // Current scrollbar position   

// Do a scroll
window.scrollBy(x_offset, y_offset); // Realtive to current position, scroll
window.scrollTo(x, y); // Scroll to absolute co ordinate positions


// Focus on an element. See more features at https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
elem.scrollIntoView(top = false); // Scroll such that elem is at bottom of user's view
elem.scrollIntoView(top = true); // Scroll such that elem is at the top of user's view

// Freeze the scroll. Like those paywall ads
document.body.style.overflow = 'hidden';
document.body.style.overflow = ""; // reset


// Co ordinates
elem.getBoundingClientRect(); // Gets the top, left, right, bottom co ordinates of elem
// Note that css top/right/left are different. They are offsets. These are co ordinates



// Javascript Events and Handlers
// Click Event. Specify function in the 'onclick' attr of HTML. See HTML

function runClick(){
    alert("Button Clicked");
}
// Or specify here in JS. Note that this needs the DOM to be rendered first. 
let btnElem = document.getElementById('btn');
btnElem.onclick = function(){
    alert("Button clicked, received from DOM function");
    alert(`${this} inside handler is the DOM element itself`)
};
// onclick property takes only one value,hence only one handler can be used

function alreadyExisted(){
    alert("I already exist");
}
// Adding existing function to the element, note no brackets ()s
document.getElementById('btn').onclick = alreadyExisted; 

// onclick limited to only one event. Adding more, use addEventListener()
// Note that event param is click not onClick
btnElem.addEventListener("click", alreadyExisted, options);

options = [once, capture, passive]; // More on this later

// Removing an event
btnElem.removeEventListener("click", alreadyExisted, options);
// handlers can take in event objects are parameters

document.getElementById('btn').onclick = function(event){
    alert(event.type + "at" + event.currentTarget); // current target is the element to which this handler is attached. Also equal to 'this' unless arrow funtion
    alert(document.getElementById('btn') === event.currentTarget); // True
    alert("Mouse is at " + event.clientX + ", " + event.clientY);
};

// Assigning objects to as event handlers

let handlerObject = {
    handleEvent(event){ // The name is FIXED. JS looks for 'handleEvent' when event occours
        alert("This is an event type of " + event.type);
    }
};

btnElem.addEventListener('click', handlerObject);


// Event Bubbling, event from child elem is also detected and raised by parent. So event bubbles up
// far towards nested ancestors too. 

event.target; // Use inside a handler, globally is deprecated. 
//It is the deepest element that caused the event, so use in parent to find the origin

// event.target vs event.currentTarget inside a handler
// event.target is the origin of event. event.currentTarget is the current 'this' inside handler
//In a parent's handler, event.target is origin element(child), event.currentTarget is parent i.e 'this'


this === event.currentTarget; // Means we're in the origin element

event.stopPropagation(); // Stops event from going up.
event.stopImmediatePropagation(); // Stops at handler level. i.e other handlers on same event aren't raised

// Event Delegation
// Aim is to highlight a td element inside a table element no matter which td, should be inside a table
table.onclick = function(event) {
    let td = event.target.closest('td'); // Get closest td ancestor from origin to way up
  
    if (!td) return; // Doesn't exist mean that the event didn't happen inside a td
  
    if (!table.contains(td)) return; // Check if the td is actually from inside our table or
                                    // from some outer element (cuz closest runs till html to find a td tag) 
  
    highlight(td); // Verifications done. Do your handling. 
  };



// https://javascript.info/event-delegation#delegation-example-actions-in-markup
// Check this for modular/class based handling of events on an element. 


// Best method, document wide. https://javascript.info/event-delegation#the-behavior-pattern

// Creating and throwing custom events
let custom_event = new Event(type = "click", bubbles = true, cancelable = false);
targetElem.dispatchEvent(custom_event); // Raise an event on that DOM element

// onEvent is only for built-in events. use addEventListener for custom events
elem.addEventListener(custom_event);

//Throwing built in events
let mouseEvent = new MouseEvent("click", {
    bubbles : true,
    cancelable : true,
    clientX : 100,
    clientY : 100,
});

elem.dispatchEvent(mouseEvent);


let elem = document.getElementById("btn");
// using CustomEvent constructor for custom event lets us specify an extra detail object
let customEvent = new CustomEvent("helloEvent", {
    bubbles : true,
    cancelable : true,
    detail : {
        name : "randomName",
        message : "See how extra details can be embedded in the custom evet object",
        extraMessage : "Normal event constructor won't allow other than type, bubbles, cancelable",
    },
});

function runClick(){
    alert("fAfsdfs");
    if(!elem.dispatchEvent(customEvent)){
        alert("Event was cancelled");
    } // returns false
}

// custom events can also be canceled/prevented by handlers. Confusing? see https://javascript.info/dispatch-events#event-preventdefault
elem.addEventListener("helloEvent", function(event){
    event.preventDefault(); // NOTE THIS IS DIFFERENT IN CASE OF CUSTOM EVENTS
                            // preventDefault makes dispatchEvent() return FALSE
});


// Mouse Events
// left button can trigger : mousedown, mouseup, click (in that order)
// right button can trigger : mousedown, contextmenu, mouseup ( in that order)
// middle wheel can trigger : mousedown, mouseup ( in that order)
// to differentiate who raised a mousedown/up, use event.button

event.button === 0; // left
event.button === 1; // middle wheel
event.button === 2; // right
event.button === 3; // X1 back btn, yes the ones like logitech extra buttons 
event.button === 4; // X2 forward, yes the ones like logitech extra buttons

event.buttons; // Is also usable. Same as above but powers of 2. 0, 1, 2, 4, 8, 16

event.shiftKey; // True if shift is pressed
event.altKey; // alt on win and opt for mac
event.ctrlKey; // ctrl key  
event.metaKey; // CMD key on mac

if(event.metaKey || event.ctrlKey); // Best for all OS users 


//mouseover means mouse pointer came onto element.
event.target; // is the current element where mouse landed
event.relatedTarget; // Where it came from

//mouseout event means mouse pointer left the element
event.target; // current element where mouse left
event.relatedTarget; // element where it went and landed

// Simpler mouseenter and mouseleave
// mouseenter triggers only on pointer coming over element. Doesn't matter on elem/child and also doesn't bubble
// similarly mouseleave. check https://javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave#events-mouseenter-and-mouseleave


// Handling forms, all forms are in a collection called document.forms
let form = document.forms;
// get the inputs, text or submit etc.., are ordered within
let element = form.elements.one; // get <input name = "one"></input> element
//if there are two inputs with same name, above element is a collection so use ordering
let firstInputOne = element[0];

//accessing their inputs/values
let inputValue = firstInputOne.value;
//changing it
firstInputOne.value = 3123;
//similarly, 
textarea.value = "This is a lorem paragraph";



// Browser level events
// DOMContentLoaded - base html is loaded, can use/handle DOM nodes
// load (after DOMContentLoaded) - even imgs and stylesheets are loaded
// beforeunload - user is leaving the page, can still interrupt user and ask something
// unload - user almost left, now all left is sending out stats or activity logging 


