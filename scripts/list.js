// ADDING ITEMS TO START AND END OF LIST
let list = document.getElementsByTagName('ul')[0];    // Get the <ul> element

// ADD NEW ITEM END OF LIST
let newLastItem = document.createElement('li');  // Create element
let newTextLast = document.createTextNode('half and half cream'); // Create text node
newLastItem.appendChild(newTextLast);    // Add text node to element
list.appendChild(newLastItem);   // Add element to list


// ADD NEW ITEM TO START OF LIST
let newFirstItem = document.createElement('li');  // Create element
let newTextFirst = document.createTextNode('lettuce');     // Create text node
newFirstItem.appendChild(newTextFirst);   // Add text node to element
list.appendChild(newFirstItem);   // Add element end of list


let listItems = document.getElementsByTagName('li');    // All <li> elements

// ADD A CLASS OF COOL TO ALL LIST ITEMS
let i;// Counter variable
for (i = 0; i < listItems.length; i++)
{
    listItems[i].className = 'cool';
    
}       // Loop through elements
// Change class to cool


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
let heading = document.querySelector('h2'); // h2 element
let headingText = heading.firstChild.nodeValue;  // h2 text
let totalItems = listItems.length;// No. of <li> elements
let newHeading = headingText + '<span>' + totalItems + '<span>';    // Content
heading.innerHTML = newHeading; // Update h2 using innerHTML (not textContent) because it contains markup