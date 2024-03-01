const container = document.querySelector(".container");
const linkItems = document.querySelectorAll(".link-item");
const darkMode = document.querySelector(".dark-mode");
const logo = document.querySelector(".logo svg");

//Container Hover
container.addEventListener("mouseenter", () => {
  container.classList.add("active");
});

//Container Hover Leave
container.addEventListener("mouseleave", () => {
  container.classList.remove("active");
});

//Link-items Clicked
// Basically the below codes show the active button 

for (let i = 0; i < linkItems.length; i++) {
  if (!linkItems[i].classList.contains("dark-mode")) {
    linkItems[i].addEventListener("click", () => {
      linkItems.forEach((linkItem) => {
        // removing the previously added or by default added active class from 
        // previously clicked element. 
        linkItem.classList.remove("active");
      });
       //after removing, newly added active class to the newly clicked element
       // Here the targeted element is caught and added active class by for looping 
       // index number.    
      linkItems[i].classList.add("active");
    });
  }
}


//  I have stored the below commented codes for future using to show that 
//  which button is active among many buttons. 

// for (let i = 0; i < linkItems.length; i++) {
//     linkItems[i].addEventListener("click", () => {
//       linkItems.forEach((linkItem) => {
//         linkItem.classList.remove("active");
//       });
//       linkItems[i].classList.add("active");
//     });
// }



// Dark Mode Functionality
darkMode.addEventListener("click", function () {
  if (document.body.classList.contains("dark-mode")) {
    darkMode.querySelector("span").textContent = "dark mode";
    darkMode.querySelector("ion-icon").setAttribute("name", "moon-outline");

    logo.style.fill = "#363b46";
  } else {
    darkMode.querySelector("span").textContent = "light mode";
    darkMode.querySelector("ion-icon").setAttribute("name", "sunny-outline");
    logo.style.fill = "#fff";
  }
  document.body.classList.toggle("dark-mode");
});