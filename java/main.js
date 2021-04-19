// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color-option");

if (mainColors !== null) {
  document.documentElement.style.setProperty("--main--color", mainColors);

  //Remove Active Class From All Children
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");

    // Add Active Class On Element With Date-Color === Local Storage Item
    if (element.dataset.color === mainColors) {
      //add Active Class
      element.classList.add("active");
    }
  });
}

// Random Background Option
let backgroundOption = true;

// varibale to control the interval
let backgroundInterval;

// Check if there's local storage random background item
let backgroundLocalItem = localStorage.getItem("background-option");

// check
if (backgroundLocalItem !== null) {
  // remove active class from all span
  document.querySelectorAll(".random-background span").forEach((element) => {
    element.classList.remove("active");
  });
  if (backgroundLocalItem === "true") {
    backgroundOption = true;
    document.querySelector(".random-background .yes").classList.add("active");
  } else {
    backgroundOption = false;
    document.querySelector(".random-background .no").classList.add("active");
  }
}

let mySettingBox = document.querySelector(".setting-box"),
  myIconGear = document.querySelector(".setting-toggle .fa-gear");

myIconGear.onclick = function () {
  // Toggle Class Fa-spin to The Icon
  myIconGear.classList.toggle("fa-spin");

  // Toggle Class Open To The Main Setting Box
  mySettingBox.classList.toggle("open");
};

// // Selecte All Bullet
const allBullet = document.querySelectorAll(".nav-bullets .bullet");

// // Selecte All Links
const allLinks = document.querySelectorAll(".links li a");

function scrollSomeWhere(element) {
  element.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      // Use To Made a Work (To Delete #)
      e.preventDefault();

      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scrollSomeWhere(allBullet);
scrollSomeWhere(allLinks);

// Switch Color
const colorLi = document.querySelectorAll(".colors-list li");

colorLi.forEach((li) => {
  // Click On Every List Item
  li.addEventListener("click", (e) => {
    //set Color on Root
    document.documentElement.style.setProperty(
      "--main--color",
      e.target.dataset.color
    );

    // Set Color On Local Storage
    localStorage.setItem("color-option", e.target.dataset.color);

    handelActive(e);
  });
});

// Switch Random Background
const randomBackEl = document.querySelectorAll(".random-background span");

// Loop On All Span
randomBackEl.forEach((span) => {
  // Click On Every List Item
  span.addEventListener("click", (e) => {
    handelActive(e);

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;

      randomizeImage();

      localStorage.setItem("background-option", true);
    } else {
      backgroundOption = false;

      clearInterval(backgroundInterval);

      localStorage.setItem("background-option", false);
    }
  });
});

// selector landing page element
let landingNumber = document.querySelector(".landing-page");

//get array of images
let arrayImage = ["01.jpg", "02.jpg", "03.png", "04.jpg", "05.jpg"];

// Function To randomaize Image
function randomizeImage() {
  if (backgroundOption === true) {
    //put a Function To Change a background image
    backgroundInterval = setInterval(() => {
      //Get a Random Number
      let randomNumber = Math.floor(Math.random() * arrayImage.length);

      //Set a Random Bckground Image
      landingNumber.style.backgroundImage =
        'URL("photo/' + arrayImage[randomNumber] + '")';
    }, 5000);
  }
}
randomizeImage();

// select skills selectors
let ourskills = document.querySelector(".skills .start-animation");

window.onscroll = function () {
  // window height
  let windowHeight = this.innerHeight;

  // skills offset top
  let skillsOffsetTop = ourskills.offsetTop;

  // outter height
  let skillsOuterHeight = ourskills.offsetHeight;

  // window Scroll Top
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );

    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

// Create PopUp With The Image
let ourGallary = document.querySelectorAll(".gallary img");

ourGallary.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Create OverLay Element
    let overlay = document.createElement("div");

    // Add Class To OverLay Element
    overlay.className = "popup-overlay";

    // Append Overlay Element to The Body
    document.body.appendChild(overlay);

    // Create the popup box
    let popupbox = document.createElement("div");

    // Add Class To The Popup Box
    popupbox.className = "popup-box";

    if (img.alt !== null) {
      // Create Heading
      let imageHeading = document.createElement("h3");

      // Create Text Form Heading
      let imageText = document.createTextNode(img.alt);

      // Append The Text To The Heading
      imageHeading.appendChild(imageText);

      // Append The Heading To The Popup Box
      popupbox.appendChild(imageHeading);
    }

    // create the close span
    let closeButton = document.createElement("span");

    // create the close button text
    let closeButtonText = document.createTextNode("X");

    // Append text node to close Botton
    closeButton.appendChild(closeButtonText);

    // add class to close button
    closeButton.className = "close-button";

    // add close button to popup box
    popupbox.appendChild(closeButton);

    // create The Image
    let popupImage = document.createElement("img");

    // Set Image Source
    popupImage.src = img.src;

    // Add img To Popup Box
    popupbox.appendChild(popupImage);

    //Append Popup Box To The Body
    document.body.appendChild(popupbox);
  });
});

// Close Popup
document.addEventListener("click", function (e) {
  if (e.target.className == "close-button") {
    // Remove the popup
    e.target.parentElement.remove();

    // Remove The Overlay
    document.querySelector(".popup-overlay").remove();
  }
});

function handelActive(ev) {
  //Remove Active Class From All Children
  ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });

  //Add Active Class Form List Item
  ev.target.classList.add("active");
}

let bulletSpan = document.querySelectorAll(".bullet-option span");

let navBullet = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullet-option");

if (bulletLocalItem !== null) {
  bulletSpan.forEach((span) => {
    span.classList.remove("active");
  });
  if (bulletLocalItem === "block") {
    navBullet.style.display = "block";
    document.querySelector(".bullet-option .yes").classList.add("active");
  } else {
    navBullet.style.display = "none";
    document.querySelector(".bullet-option .no").classList.add("active");
  }
}

bulletSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    handelActive(e);

    if (span.dataset.display === "Show") {
      navBullet.style.display = "block";

      localStorage.setItem("bullet-option", "block");
    } else {
      navBullet.style.display = "none";

      localStorage.setItem("bullet-option", "none");
    }
  });
});

// Reset Button
document.querySelector(".reset-option").onclick = function () {
  localStorage.clear();

  window.location.reload();
};

// Toggle Menu
let toggleButton = document.querySelector(".toggle-span");

let tLink = document.querySelector(".links");

toggleButton.onclick = function (e) {
  //Stop Properganda
  e.stopPropagation();

  // Toggle Class 'menu-active' To The Button
  this.classList.toggle("menu-active");

  // Toggle Class 'open' To The Links
  tLink.classList.toggle("open");
};

// click anywhere outside the menu and button
document.addEventListener("click", (e) => {
  if (e.target !== toggleButton && e.target !== tLink) {
    // Check if Menu Have Class Open
    if (tLink.classList.contains("open")) {
      // Toggle Class 'menu-active' To The Button
      toggleButton.classList.toggle("menu-active");

      // Toggle Class 'open' To The Links
      tLink.classList.toggle("open");
    }
  }
});

// Stop Propagation on Menu
tLink.onclick = (e) => e.stopPropagation();
