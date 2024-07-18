function handleClick() {
    alert("Button clicked!");
}

function updateEventListener() {
    const button = document.getElementById("myButton");
    const mediaQuery = window.matchMedia("(min-width: 1024px)"); // lg breakpoint

    if (mediaQuery.matches) {
        // If screen size is lg or larger, remove the click event listener
        button.removeEventListener("click", handleClick);
    } else {
        // If screen size is smaller than lg, add the click event listener
        button.addEventListener("click", handleClick);
    }
}

// Add the event listener on initial load
updateEventListener();

// Update the event listener whenever the window is resized
window.addEventListener("resize", updateEventListener);
