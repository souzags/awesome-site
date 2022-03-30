function showSection(evt, sectionName) {
  var content, tabButton;

  // Get all content elements and hide them:
  content = document.getElementsByClassName("tabContent");
  for (let index = 0; index < content.length; index++) {
    content[index].style.display = "none";
  }

  // Get all navlinks and remove class 'active'.
  tabButton = document.getElementsByClassName("tabButton");
  for (let index = 0; index < tabButton.length; index++) {
    tabButton[index].className = tabButton[index].className.replace(
      " active",
      ""
    );
  }

  // Show section that matches 'sectionName' and add 'active' class to the caller button.
  document.getElementById(sectionName).style.display = "block";
  evt.currentTarget.className += " active"; // Needs to be added with a space so it doesn't overwrite the navlink class.
}

// Prime Sieve Function
function getPrimes() {
    maxNumber = parseInt(document.getElementById("calcInput").value);
    output = document.getElementById("output-container");
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
            output.innerHTML += "<p>" + i + "</p>";
        }
    }
}