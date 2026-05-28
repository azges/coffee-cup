// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

// Select the button and the menu
const toggleBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('collapsible-menu');

// Add a click event to toggle the class
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('expanded');
});

document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(accordion => {
        accordion.addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            
            if (panel.style.maxHeight && panel.style.maxHeight !== "0px") {
                // 1. Explicitly lock the current height value so the browser knows where to start from
                panel.style.maxHeight = panel.scrollHeight + "px";
                
                // 2. Force a browser reflow/repaint (this is the magic trick that stops the chop)
                panel.offsetHeight; 
                
                // 3. Now safely animate it down to 0
                panel.style.maxHeight = "0px";
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
});
