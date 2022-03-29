var input = document.getElementById("calcInput");
input.addEventListener("keyup", function(evt) {
    if (evt.key === "Enter") {
        evt.preventDefault();
        document.getElementById("calcButton").click();
    }
});

function showSection(evt, sectionName) {
    var content, navlinks;

    
    // Get all content elements and hide them:
    content = document.getElementsByClassName("content");

    for (let index = 0; index < content.length; index++) {
        content[index].style.display = "none";        
    }


    // Get all navlinks and remove class 'active'.
    navlinks = document.getElementsByClassName("navlink");

    for (let index = 0; index < navlinks.length; index++) {
        navlinks[index].className = navlinks[index].className.replace(" active", "");
    }


    // Show section that matches 'sectionName' and add 'active' class to the caller button.
    document.getElementById(sectionName).style.display = "block";
    evt.currentTarget.className += " active"; // Needs to be added with a space so it doesn't overwrite the navlink class.
}

// Prime Sieve Function
function getPrimes() {
    maxNumber = parseInt(document.getElementById("calcInput").value);
    output = document.getElementById("calcOutput");
    n = new Array(maxNumber + 1);

    n.fill(true);
    output.innerHTML = "";

    n[0] = n[1] = false;

    for (let i = 2; i < n.length - 1; i++) {

        if (n[i]) {
            for (let j = i + 1; j < n.length; j++) {
                if (j % i == 0) {
                    n[j] = false;
                }
            }
        }
    }

    for (let i = 0; i < n.length; i++) {
        if (n[i]) {
            output.innerHTML += "<p>" + i + "</p>"
        }
    }

    console.log(n);
}