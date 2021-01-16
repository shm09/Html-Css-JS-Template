/*global console*/
/*
	{ Find Element By [Class , Id , Tag ] } .....
		[1] - document.getElementById('')
		[2] - document.getElementsByTagName()
		[3] - document.getElementsByClassName()
		[4] - document.querySelectorAll()

	{ Find Element By Object } .....
		[1] - document.title
		[2] - document.images
		[3] - document.forms
		[4] - document.body
		[5] - document.anchors
		[6] - document.links

	{ Element [Get , Set] Element Content }
		innerText //Not Standard
		outerText //Not Standard
		innerHTML
		outerHTML
		textContent


		//Get Html Element
			Element.innerHTML;

		//Get Text Element
			Element.textContent



	hasAttribute();
	removeAttribute();



	ClassList
		.contains
		.item
		.add(class name you want to add ) // use to add a new class
		.remove(class name you want to remove ) // use to remove class from the main classs
		.toggle(class name ) // if the class name was present, it wolud be deleted // and if the class name wasn't present, it wolid be added


	Element children , chlidrenNodes
		childElementCount; //show how many the [div , or ....] have element
		children // show the element in the div inside object {}
		childNodes // count any thing inside the div like space , comment , text , elemenet

		[first/last]child
		[first/last]Elementchild

	Element Node
		.childNodes[?].nodeName // Show Name The Element
		.childNodes[?].nodeValue // Show Order Number Of The Item In Index
		.childNodes[?].nodeType // Show Number Debend on What inside the Element

								if element => 1 , attribute => 2 ,text => 3 , comment => 8


	Element Node
		cloneNode(false , true) // This option Copy The Element From Div To Another Div
								fales => copy the element without the text inside
								true => copy the element with the text inside him

	Element Next,previous sibling
		.nextSibling; // show the next
		.nextElementSibling;//show the next element sibling


	Element Click
		click(); // usually ues with function
		setTimeout // but time to fun to work usually use with fun

		setTimeout (function () {
		}, )
	Element - AddEventListener
		.addEventListener //
		.removeEventListener


	Element - Contains
		.contains(write here Name of the Element who want to search on it)

	Element - Clint[Height , Width]
		Viewable Area
		Include Padding
		No Margin
		No Border
		No Scroll
		.clientHeight;
		.clientWidth;


	Element - offset[Height , Width]
		Include Padding
		Include Border
		Include Scroll
		No Margin

	Element - Scroll [Height , width]
		All Area Include Invisible Area
		Include Padding
		No Border
		No Margin
		.scrollHieght;
		.scrollWidth;

	Element - Client[Top , Left]
		.clientTop
		.clientLeft
		Include Border

	Element - Style
		Element.style.property = value

	Element - Document
		.inputEncoding // show charset the website like UTF-8
		.lastModified // show time the last edit was be



	JavaScript Bom => Browser Object Model

	Window Methodes
		[alert , prompt, confirm];
		setTimeout(function () {} , millisecond);
		clearTimeout(wirte here name on var how have setTimeout , Id )

		setInterval(function () {} , millisecond);
		clearInterval(wirte here var name who have setInterval);

		Window.Open( url , name or attribute , specification , History Replace)
			- specification:
				- width = [Only Number Without Px]
		window.scrollBy(x , y) // Numbers only in pixels without write px
		window.scrollTo(x , y) // Numbers only in pixels without write px

		E.stop();
		E.close();
		E.focus();

		[inner/outer]Hieght;
		[inner/outer]Width;

	Window Properties
		pageXOffset
		pageYOffset

	window location properties
		window.location.href
		location.href =
			-absolite URL
			-page within the current web page
			-hash id within the page
			-protocol [FTP , Mail , File]
		location.host
		location.hash
		location.protocol [Http // Hypertext Transfer Protocol
						   Https // Hypertext Transfer Protocol Secured
						   File , Mail , Ftp // Flie Transfer Protocol]

	window screen properties
		screen.width
		screen.height
		screen.availheight
		screen.availwidth
		screen.ColorDep ||	screen.pixelDepth

	Cookies
		document.cookie("name = value; expires = Date; path = ")



	Learn ECMAScript 6
		Variables
		var
		-Function Scope
		-Can Be Redeclare
		-Undefined When Accessing a Varible Before it's Declared
		-Create Properties in The Window Object

		let
		-Block Scope
		-Can't Be Redeclare
		-ReferenceError When Accessing a Varible Before it's Declared
		-Dosn't Create properties in the window object

		const
		-Block Scope
		-Can't Be Redeclare
		-ReferenceError When Accessing a Varible Before it's Declared
		-Dosn't Create properties in the window object

	Arrow Function
		// Regular Function With No Parameter
		let regulrTestone = function () {
			return 1;
		};

		// Arrow Function With No Parameter
		let arrowTest = () => {
			return 2;
		};
		let arrowTestone = () => 2;
		let arrowTesttwo = _ => 2;

		// Regular Function With one Parameter
		let regulrTesttwo = function (param) {
			return param * 2;
		};

		// Arrow Function With One Param
		let arrowTestthree = (param) => param * 2;
		let arrowTestfour = param => param * 2;

		// Regular Function With Multipile Parameters
		let regulrTestthree = function (param1 , param2) {
			return param1 * param2;
		};

		// Arrow Function With Multipile Parameters
		let arrowTestfive = (param1 , param2) => param1 * param2;

	Template Literals [Template Strings]
		New Waye to Wirte a String But The Word Between ` Here ` Its Would solve alot of Proplems 

	Spread Operator 
	...Name The Array
*/

//    ================================================================================================    //

// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem('color-option');

if (mainColors !== null) {
	
	document.documentElement.style.setProperty('--main--color' , mainColors);

	//Remove Active Class From All Children
	document.querySelectorAll('.colors-list li').forEach(element => {

		element.classList.remove('active');

		// Add Active Class On Element With Date-Color === Local Storage Item
		if (element.dataset.color === mainColors) {

			//add Active Class
			element.classList.add('active');
		};
	});
};

// Random Background Option 
let backgroundOption = true;

// varibale to control the interval
let backgroundInterval;

// Check if there's local storage random background item
let backgroundLocalItem = localStorage.getItem('background-option');

// check 
if (backgroundLocalItem !== null)  {
	
	// remove active class from all span
	document.querySelectorAll('.random-background span').forEach(element => {
		element.classList.remove('active');
	});
	if (backgroundLocalItem === "true") {
		backgroundOption = true;
		document.querySelector('.random-background .yes').classList.add('active');
	}else {
		backgroundOption = false;
		document.querySelector('.random-background .no').classList.add('active');
	};
};

let mySettingBox = document.querySelector('.setting-box'),

	myIconGear = document.querySelector('.setting-toggle .fa-gear');

myIconGear.onclick = function () {

	// Toggle Class Fa-spin to The Icon
	myIconGear.classList.toggle('fa-spin');

	// Toggle Class Open To The Main Setting Box
	mySettingBox.classList.toggle('open');
};

// // Selecte All Bullet
const allBullet = document.querySelectorAll('.nav-bullets .bullet');

// // Selecte All Links
const allLinks = document.querySelectorAll('.links li a');

function scrollSomeWhere(element) {

	element.forEach(ele => {

		ele.addEventListener('click' , (e) => {
	
			// Use To Made a Work (To Delete #)
			e.preventDefault();
	
			document.querySelector(e.target.dataset.section).scrollIntoView({
	
				behavior: 'smooth'
	
			});
		});
	});
}
scrollSomeWhere(allBullet);
scrollSomeWhere(allLinks);


// Switch Color
const colorLi = document.querySelectorAll('.colors-list li');

colorLi.forEach(li => {

	// Click On Every List Item 
	li.addEventListener('click', (e) => {

		//set Color on Root
		document.documentElement.style.setProperty('--main--color' , e.target.dataset.color);

		// Set Color On Local Storage
		localStorage.setItem('color-option', e.target.dataset.color);

		handelActive(e)
	});
});

// Switch Random Background
const randomBackEl = document.querySelectorAll('.random-background span');

// Loop On All Span
randomBackEl.forEach(span => {

	// Click On Every List Item 
	span.addEventListener('click', (e) => {

		handelActive(e)

		if (e.target.dataset.background === 'yes') {
			backgroundOption = true;

			randomizeImage();
			
			localStorage.setItem('background-option', true);
		} else {
			backgroundOption = false;

			clearInterval(backgroundInterval);

			localStorage.setItem('background-option', false);
		};
	});
});

// selector landing page element
let landingNumber = document.querySelector('.landing-page');

//get array of images
let arrayImage = ['01.jpg', '02.jpg', '03.png', '04.jpg', '05.jpg'];

// Function To randomaize Image
function randomizeImage() {

	if (backgroundOption === true) {

		//put a Function To Change a background image 
		backgroundInterval = setInterval(() => {

			//Get a Random Number
			let randomNumber = Math.floor(Math.random() * arrayImage.length);

			//Set a Random Bckground Image 
			landingNumber.style.backgroundImage = 'URL("photo/' + arrayImage[randomNumber] + '")';

		}, 5000);
	};
};
randomizeImage();

// select skills selectors
let ourskills = document.querySelector('.skills .start-animation');

window.onscroll = function () {

	// window height
	let windowHeight = this.innerHeight;

	// skills offset top
	let skillsOffsetTop = ourskills.offsetTop;

	// outter height
	let skillsOuterHeight = ourskills.offsetHeight;

	// window Scroll Top
	let windowScrollTop = this.pageYOffset;

	if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

		let allSkills = document.querySelectorAll('.skill-box .skill-progress span');

		allSkills.forEach(skill => {

			skill.style.width = skill.dataset.progress;

		});
	};
};

// Create PopUp With The Image
let ourGallary = document.querySelectorAll('.gallary img');

ourGallary.forEach(img => {
	
	img.addEventListener('click' , (e) => {

		// Create OverLay Element
		let overlay = document.createElement('div');

		// Add Class To OverLay Element
		overlay.className = 'popup-overlay';

		// Append Overlay Element to The Body
		document.body.appendChild(overlay);

		// Create the popup box
		let popupbox = document.createElement('div');

		// Add Class To The Popup Box
		popupbox.className = 'popup-box';
	
		if (img.alt !== null) {

			// Create Heading
			let imageHeading = document.createElement('h3');

			// Create Text Form Heading
			let imageText = document.createTextNode(img.alt);

			// Append The Text To The Heading
			imageHeading.appendChild(imageText);

			// Append The Heading To The Popup Box
			popupbox.appendChild(imageHeading);
		};

		// create the close span
		let closeButton = document.createElement("span");

		// create the close button text 
		let closeButtonText = document.createTextNode('X');

		// Append text node to close Botton
		closeButton.appendChild(closeButtonText);

		// add class to close button
		closeButton.className = 'close-button';

		// add close button to popup box
		popupbox.appendChild(closeButton);

		// create The Image
		let popupImage = document.createElement('img');

		// Set Image Source 
		popupImage.src = img.src;

		// Add img To Popup Box
		popupbox.appendChild(popupImage);

		//Append Popup Box To The Body
		document.body.appendChild(popupbox);

	});
});

// Close Popup
document.addEventListener('click' , function (e) {

	if(e.target.className == 'close-button') {

		// Remove the popup 
		e.target.parentElement.remove();

		// Remove The Overlay
		document.querySelector('.popup-overlay').remove();

	};
});

function handelActive(ev) {

	//Remove Active Class From All Children
	ev.target.parentElement.querySelectorAll('.active').forEach(element => {

		element.classList.remove('active');
	});

	//Add Active Class Form List Item
	ev.target.classList.add('active');

};

let bulletSpan = document.querySelectorAll('.bullet-option span');

let	navBullet = document.querySelector('.nav-bullets');

let bulletLocalItem = localStorage.getItem('bullet-option');

if (bulletLocalItem !== null) {	
	bulletSpan.forEach(span => {
		span.classList.remove('active');
	});
	if (bulletLocalItem === 'block') {
		navBullet.style.display = 'block';
		document.querySelector('.bullet-option .yes').classList.add('active');
	} else {
		navBullet.style.display = 'none';
		document.querySelector('.bullet-option .no').classList.add('active');
	};
};

bulletSpan.forEach(span  => {

	span.addEventListener('click' , (e) => {

		handelActive(e);

		if (span.dataset.display === 'Show') {

			navBullet.style.display = 'block';

			localStorage.setItem('bullet-option' , 'block');

		} else {

			navBullet.style.display = 'none';

			localStorage.setItem('bullet-option' , 'none');

		};
	});
});


// Reset Button 
document.querySelector('.reset-option').onclick = function () {
	 
	localStorage.clear();

	window.location.reload();
};

// Toggle Menu 
let toggleButton = document.querySelector('.toggle-span');

let tLink = document.querySelector('.links');

toggleButton.onclick = function (e) {

	//Stop Properganda
	e.stopPropagation();

	// Toggle Class 'menu-active' To The Button
	this.classList.toggle('menu-active');

	// Toggle Class 'open' To The Links
	tLink.classList.toggle('open');

};

// click anywhere outside the menu and button 
document.addEventListener('click' , (e) => {
	
	if (e.target !== toggleButton && e.target !== tLink) {

		// Check if Menu Have Class Open
		if (tLink.classList.contains('open')) {
			
			// Toggle Class 'menu-active' To The Button
			toggleButton.classList.toggle('menu-active');
			
			// Toggle Class 'open' To The Links
			tLink.classList.toggle('open');
		};
	};
})

// Stop Propagation on Menu 
tLink.onclick = (e) => e.stopPropagation();