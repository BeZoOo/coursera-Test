/*jslint plusplus: true */
/*global console*/

/* 
    Document Object Model 
    /////////////////////
    Find Elements By:
    
    [1] - document.getElementById()
    [2] - document.getElementsByTagName()
    [3] - document.getElementsByClassName() | Not Compatible With IE 8
    [4] - document.querySelectorAll(./#)  | Not Compatible With IE 8
    [5] - document.querySelector(tag) // Hygebly 2wl wa7d
*/

var myElement = document.querySelectorAll('p');

myElement[0].innerHTML = "Changed From Javascript";

/*
    Find Element by object
    
    [1] - document.title
    [2] - document.images[N]
    [3] - document.forms // document.forms[N].name.attribute;
    [4] - document.body
    [5] - document.anchors // <a href= .... >
    [6] - document.links // 
    
*/

var myDiv = document.getElementById('show');

myDiv.innerText = document.forms[1].z2.value;

/*
    Elements >> Get, Set Element 
    
    innerText // Not Standard
    outerText // Not Standard
    innerHTML
    outerHTML
    textContent
    
    // Get Html Content
    ELement.innerHtml
    
    // Get text content
    Element.textContent
    
    // Attributes
    
    Element.getAttribute('Attribute Name');
    Element.setAttribute('Attribute Name', 'Attribute Value');
    Element.removeAttribute('Attribute Name');
    Element.hasAttribute('Attribute Name');
    
    // ClassList
    
    Element.classList.contains('classLast'); **
    Element.classList.item('classLast');
    Element.classList.add();
    Element.classList.remove();
    Element.classList.toggle();
    
*/

var myPrag = document.getElementById('prag'),
    button = document.getElementById('btn'),
    myDiv  = document.getElementById('div'),
    butn   = button.textContent,
    numb   = butn.length;

function myfunction() {
    "use strict";
    
    if (myPrag.classList.contains(butn)) {
    
        myDiv.innerHTML = "Yes It's Exist " + "And Its Length Is " + numb;
        
    } else {
        myDiv.innerHTML = "Sorry It Cannot Be Found!";
    }

}

/*
    Children
    
    Element.firstChild >> 2wl node
    Element.first/lastElmentChild >> 2wl element
    Element.children  
    Element.childElementCount
    Element.childNodes
    
    nextSibling
    nextElementSibling 
    previousElementSibling
*/

var myUp   = document.getElementById('up'),
    
    myNew  = document.createElement('div'),
    
    myP    = document.createElement('p'),
    
    pText  = document.createTextNode('This is fucking paragraph'),
    
    myText = document.createTextNode('Hello from javaScript');

myP.appendChild(pText);

myNew.appendChild(myText);

myNew.appendChild(myP);

myUp.appendChild(myNew);

myUp.insertBefore(myP, myUp.childNodes[3]);

var myFirstDiv  = document.getElementById('first'),
    mySecondDiv = document.getElementById('second'),
    myCopy      = myFirstDiv.firstElementChild.cloneNode(true);

mySecondDiv.appendChild(myCopy);

/*
    Client [Height,Weidth]:
    
    Viewable Area
    Including Padding
    No Border
    No Margin
    No Scroll
    
    Scroll [Height,Weidth]:
    
    All area including invisible area
    Padding
    No border
    No margin
    
    Offset [Height,weidth]:
    
    Viewable Area
    Include Padding
    Include Border
    Include Scroll
    No Margin
*/

var myMainDiv = document.getElementById('client');

console.log(myMainDiv.clientHeight + "px");


var myMainButton = document.getElementById('main'),
    myPower = document.getElementById('power');

myMainButton.onclick = function () {
    
    'use strict';
    
    document.getElementById('monster1').style.display = 'none';

};


myPower.onclick = function () {
    
    'use strict';
    
    myMainButton.addEventListener('click', function () {
       
        document.getElementById('monster2').style.display = 'none';
        
    });

};

/*  Static Way

    var myBlock1 = document.getElementById('block1'),
        myBlock2 = document.getElementById('block2'),
        myBlock3 = document.getElementById('block3'),
        myBlock4 = document.getElementById('block4');*/

var myBlock = document.querySelectorAll('.block');

window.onscroll = function () {
    
    'use strict';
    
    for (var i = 0; i < myBlock.length; i++) {
        
        if (document.body.scrollTop > myBlock[i].offsetTop-90) {
            
            myBlock[i].classList.add('show');
        }
    }
    
   /* if (document.body.scrollTop >= 550) {
        
        myBlock1.classList.add('show');
    }
    
    if (document.body.scrollTop >= 1000) {
        myBlock2.classList.add('show');
        
    }
    if (document.body.scrollTop >= 1450) {
        myBlock3.classList.add('show');
        
    }
    if (document.body.scrollTop >= 1900) {
        myBlock4.classList.add('show');
    }*/
};

console.log(myBlock.length);

/*
    Document :
    
    1- Document.InputEncoding >> t3rf L trmez L f Lsf7a eh 
    2- Document.lastModified >> 2a5r t3del lek f L document
    3- Document.URL >> [uniform resorce locator]
*/

// Create The Main Element
var myElement = document.createElement('div');

// Append TO Body
document.body.appendChild(myElement);

// Create paragraph
var myParg = document.createElement('p');

// Create Text Node
var myText = document.createTextNode('This A Paragraph From Javascript');

// Append To Paragraph
myParg.appendChild(myText);

// Append To Body
myElement.appendChild(myParg);

// Create Attribute

var myAttr = document.createAttribute('class');
myAttr.value = 'custom';

myElement.setAttributeNode(myAttr);

/*
    Events :
            1- onload,onscroll,onresize
            2- onfocus,onblur,onsubmit >> [for validation]
            3- onclick,oncontextmenu>>{btmn3 L right click} [.preventDefault] >> 2w2f event mo3yn 
            4- onmouseenter,onmouseleave >> [ L hwa L hover y3ny]
            5- onkeyup,down,press
            6- Resources >> []
*/

window.onresize = function () {
    'use strict';
    
    console.log('window is resizing');
};

/*
    document.childNode[0] >> 34an 23rf L3nasr
*/


function sayHello () {
    
    'use strict';
    
    var name = document.getElementById('name').value,
        message = "<h3>Hello " + name + " !</h3>";
    
        document.getElementById('content').innerHTML = message;

}











