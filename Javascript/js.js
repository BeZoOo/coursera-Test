/*jslint evil: true*/
/*global console, alert, prompt*/

/*  
    **Writing With camalCase**
    
    Start With letters, Undersocre, $
    
    var = JavaScript Variable Keyword
    
    myPrice = Variable Name
    
    ( = ) = Assignment Operator
    
    100 = Variable Value
*/

/* 
    DataType:
    
    (1) Boolean.
    
    check if the product has discount or no.
    true = Yes Has Discount
    false = No It Has No Discount
    
    (2) Array ["facebook.com", "youtube.com", "google.com"]
    
    EX: var myInfo : ["facebook.com", "youtube.com", "google.com"]
    
    document.getElementById("price").innerHTML = myInfo[0];
    
    (3) Object : {firstName: "Osama", lastname: "Mohamed"}
    
    document.getElementById("price").innerHTML = myInfo.firstName;
    
    (4) String : "Mohamed"
    
    (5) Number : 32 
    
    (6) Undefined 
    
    (7) Null
    
    (8) Nan = Not A Number
    
    (9) Symbol
*/

/*
    function = Function Keyword In JavaScript
    
    function sayHello() {
     content...
    }
    
    // Calling Function
    
    sayHello();
*/
/*
function myAgeInDays() {
    "use strict";
    
    var myName = "Mohamed",
        
        myAge = 20;
    
    return myAge * 365;
}

var daysCalc = myAgeInDays();

document.getElementById("price").innerHTML = "Your Age In Days Is: " + daysCalc + " days";

function myAge(age) { // Dynamic Function
    
    "use strict";
    
    var year = 365;
    
    return age * year + " Days";
}

var dynamicAge = prompt("What is your age?");

document.getElementById("test").innerHTML = myAge(dynamicAge);
*/
function convertion() {
    "use strict";
    
    var amount = document.getElementById("dollar").value,
    
        result = amount * 18,
        
        message =  document.getElementById("message");
        
    //message.innerHTML = amount + " Dollar Is Worth " + result + " In L.E";
    
    if (amount === "") {
     
        message.innerHTML = "This Field Is Required";
    
    } else if (isNaN(amount)) {
        
        message.innerHTML = "It must be a number";
        
    } else if (amount === "0") {
        
        message.innerHTML = "The Value Must Not Be 0";
        
    } else if (amount < 0) {
        
        message.innerHTML = " The value Must Not Be Negative";
   
    } else {
        message.innerHTML = amount + " Dollar Is Worth " + result + " In LE ";
    }
    
}



/*
    switch (expression) {
        
    case x:
        Code To Excute;
        breake;
        
    default:
         Code To Excute;   
    }
*/

/*
    Events:
    
    1- onload 
    2- onclick
    3- ondblclick
    
    4- onkeydown
    5- onkeyup
    6- onkeypress
    
    7- onmouseover
    8- onmouseout
    9- onchange // 2ktr 7aga byst5dm feha heya L select box
*/

var myInput = document.getElementById("input"),
    
    myDiv = document.getElementById("div"),
    
    myCurrency = document.getElementById("currency");

myCurrency.onchange = function () {
    
    "use strict";
    
    myDiv.innerHTML = "Worth " + myInput.value * myCurrency.value + " Egyption Pound";
};

/*
   Arrays 
   
   var arrayName = ["Element1", "Element2"];

// Constractor Way

var friends = new Array();

friends[0] = "Hassan";
friends[1] = "Soha";
friends[2] = "Ahmed";
friends[3] = "Zahra";
friends[4] = "Elbaz";

console.log(friends);

== 

var friends = new Array("Ahmed", "Hassan", "Sarah");

// Literal way

var friends = [];

------------------------- Array's Methods -------------------------

// To Check

if (Array.isArray(friends)){
    code to excute
}

if(freinds.constractor===Array){
    code to excute
}

------------------------------------------------------------------

// To get length

friends.length;

// To set length

friends.lenght = 2; For example

------------------------------------------------------------------

// Convert To String

friends = friends.toString();

friends = friends.toLocaleString();

friends = friends.join(" - ");

-------------------------------------------------------------------

// To add elements

1- friends[friends.length] = "Sameh";
2- friends.push("Sameh", "Nada"); // Hydef Fe L2a5er
3- friends.unShift("Mazen"); // Hydef Fe L2wl
4-
    arrayName.splice(index, How many => 3dd L3nasr L ana 3awz 24elha, Item1, Item2, Item3); // Hdef bmzagy fe 2y mkan
    
--------------------------------------------------------------------

// To remove elements 

1- friends.pop(); // Hyms7 25er 3onsor
1- friends.shift(); // Hyms7 2wl 3onsor

--------------------------------------------------------------------

// To sort and reverse elements

1- friends.sort();
2- friends.reverse();

--------------------------------------------------------------------

// Array Slicing and combining

1- arrayName.slice(start, end); Tbd2 mn L bdaya
    EX : friends.slice(2, 5);
    EX : friends.slice(-2, -5); Tbd2 mn L nhaya

2- firstArray.concat(secondArray, thirdArray);

--------------------------------------------------------------------

// Array search

1- freinds.indexOf("Element", startingIndex);
2- freinds.lastIndexOf("Element", startingIndex);

*/

var friends = [
    "Baz",
    "Boto",
    "Esraa",
    "Gaber",
    "Ahmed",
    "Hassan",
    "Hagar",
    "Glal",
    "Rewan"
];

console.log(friends);

if (Array.isArray(friends)) {
    console.log("Yes this is array");
} else {
    console.log("no this is not array");
}

var specialFriend = friends.indexOf("Esraa");

console.log(friends[specialFriend]);

/*
    split  : split( separator, limit);
    slice  : slice( Start, End);
    subStr : substr( start, Length);
    substring : subString( start, End);
    
    charAt(index);
    charCodeAt(index); L unicode ll 7rf dh kam
    replace(Value, New value);
    
    String.fromCharCode(Num1, Num2, Num3, Num4);
    concat(String, String, String);
    
    .toLowerCase();
    .toUpperCase();
    
*/

/*
    Loops:
    
    for (i = 0; i <= 10; i += 1) {
        Code to excute...
    }
    
    For/In Loop
    
    for ( Variable In Object ) {
    
        if ( object.hasOwnProperty(Variable) ){
            Code To excute...
        }
    }
*/

var names = ["Baz", "Boto", "Esraa", "Shalaby"];

var i;

for (i = 0; i < names.length; i += 1) {
    
    console.log(names[i]);
}

var myCar = {
    colour: "Black",
    type: "Hatch Back",
    model: "2017",
    price: "500.000"
};

var prop;

for (prop in myCar) {
    
    if (myCar.hasOwnProperty(prop)) {
        console.log(prop + ": " + myCar[prop]);
    }
}

function generateYears(start, End) {
    "use strict";
    
    document.write("<select>");
    var years;
    
    for (years = start; years <= End; years += 1) {
        document.write("<option value= \"" + years + "\">" + years + "</option>");
    }
    
    document.write("</select>");
    
}

generateYears(1900, 2017);

generateYears(1980, 2017);

/*
    Regular Expression Syntax
    /pattern/attributes
    Search | Replace | Math | Split | Test
    Attributes List
    [ i ] => Case Insensitive // 34n L 7rof mtb2a4 7sasa
    [ g ] => Global Search // 34an y8yer 2y 7aga 2na 3awzha
    [ m ] => Multi Line Search
    Brackets Use
    [...] => Character
    [^..] => Not Character
    [a-e] => Range
    [0-9] => Range Numbers
    [^0-9] => Not Range
    [A-g] => Range[A-Z] Range[a-g]
    [0-9a-z] => Double Range
    Quantifiers
    Letter+ => Word Conatain One Letter
    Letter{Number} => Word Contain Number Of Letter
    Letter{Number,Number} => Word Contain Number Or Number
    Letter{Number,} => Word Contain At Least Number.
    
*/

var string = "Elbaaaz Learning Javascript",
    result = string.replace(/a{3}/ig, "@");

console.log(result);

/*  ***DATE***

        new Date(); // Print Current Date & Time
        new Date(Millseconds); // Print Millseconds From UTC 1 Jan, 1970 00:00:00
        new Date("DateString"); // "March 29, 1997 12:20:35"
        new Date(Year, Month, Day, Hour, Minutes, Seconds, Millseconds) // Month Start With 0 => It means jan is 0
        new Date(YYY-MM-DD hh:mm:ss TZD) // ISO TZD=> Time Zone Desinator
        
        Functions:
        getDate(); // Day Of The Month 1-31
        getDay(); // Day of the week 0-6
        getFullYear() // Get The Full Year
        getHours() // Get Hours 0-59
        getMinutes() // Get Minutes 0-59
        getSeconds() // Get Seconds 0-59
        getMilliseconds() // Get Milliseconds 0-999
        getTime() // Number of Milliseconds from 1970 or specific day
        getTimezoneOffset() // Get Def Between UTC & Your Local Time In Minutes
        
        setDate(day[Req]);
        setFullYear(Year[Req], Month[opt], Day[opt]);
        
        now();
        parse();
        toIsoString();
        toDateString();
        toTimeString();
        
        parseInt();
*/


var currentDate = new Date(1997, 2, 29, 10, 20, 5, 60);

console.log(currentDate);


function getTime() {
    "use strict";
    
    function printTime() {
        
        var d = new Date(),
            hours = d.getHours(),
            mins = d.getMinutes(),
            secs = d.getSeconds();
        document.getElementById("date").innerHTML = hours + ":" + mins + ":" + secs;
    }
    setInterval(printTime, 1000);

}


//Function Constructors
function Circle(radius) {
    'use strict';
    
    this.radius = radius;
}

Circle.prototype.getArea = function () {
    'use strict';
    
    return Math.PI * Math.pow(this.radius, 2);
};

var myCircle = new Circle(10);
console.log(myCircle.getArea());

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);


// Object Literals and "this"
var literalCircle = {
    radius: 10,
    
    getArea: function () {
        'use strict';
        var self = this; // 34an t3alg L bug 
        console.log(this);
        
        var increaseRadius = function () {
            self.radius = 20;
        };
        increaseRadius();
        console.log(this.radius);
        
        return Math.PI * Math.pow(this.radius, 2);
    }
};

console.log(literalCircle.getArea());












 
