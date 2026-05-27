var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Select the button and the menu
const toggleBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('collapsible-menu');

// Add a click event to toggle the class
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('expanded');
});
