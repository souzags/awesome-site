function showSection(evt, sectionName) {
    var content, navlinks;

    
    // Get all content elements and hide them:
    content = document.getElementsByClassName("content");

    for (let index = 0; index < content.length; index++) {
        content[index].style.display = "none";        
    }


    // Get all navlinks and remove class 'active'
    navlinks = document.getElementsByClassName("navlink");

    for (let index = 0; index < navlinks.length; index++) {
        navlinks[index].className = navlinks[index].className.replace("active", "");
    }


    // Show section that matches 'sectionName' and add 'active' class to the caller button
    document.getElementById(sectionName).style.display = "block";
    evt.currentTarget.className = "active";
}