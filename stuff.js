// Page switching
function goTo(pageID){
    
    // Hide all the pages at first.
    var classes = document.getElementsByClassName("pages");
    for(var i = 0; i < classes.length; i++){
        classes[i].style.display = "none";
    }
        
    // Show the intended page.
    classes[pageID].style.display = "block";
}

// Avoid displaying them all at once initially
goTo(0); 
