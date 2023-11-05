document.addEventListener("DOMContentLoaded", function() {
    console.log("the DOM has been loaded and parsed!");
    /* here's where JS goes for when DOM is loaded */

    let myNav = document.querySelector("nav");
    let myUL = document.querySelector("ul");

    // set 'click' event that will toggle the menu state
   
    myNav.addEventListener("click", function() {
        // add or remove (i.e. 'toggle') a class that controls hidden or expanded.
        myUL.classList.toggle("collapsed");
        myNav.classList.toggle("reveal");
    });
});