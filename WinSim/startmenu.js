document.addEventListener("DOMContentLoaded", function() {
  const toggleDivs = document.querySelectorAll(".homebutton");
  const divs = document.querySelectorAll(".startmenu");

  // Function to show the div
  function showDiv(div) {
    div.style.display = "flex";
  }

  // Function to hide the div
  function hideDiv(div) {
    div.style.display = "none";
  }

  // Toggle the div when the toggleDiv is clicked
  toggleDivs.forEach(function(toggleDiv, index) {
    toggleDiv.addEventListener("click", function(e) {
      if (divs[index].style.display === "none" || divs[index].style.display === "") {
        showDiv(divs[index]);
      } else {
        hideDiv(divs[index]);
      }
      e.stopPropagation();
    });
  });

  // Close the div when clicking anywhere except the toggleDiv or the div itself
  document.addEventListener("click", function(e) {
    divs.forEach(function(div, index) {
      if (e.target !== div && e.target !== toggleDivs[index] && !div.contains(e.target)) {
        hideDiv(div);
      }
    });
  });
});
