// Listen for orientation changes
window.addEventListener("orientationchange", function() {
  // Announce the new orientation number
  alert(window.orientation);
}, false);

// or simply
if(window.innerHeight > window.innerWidth){
    alert("Please use Landscape!");
}
