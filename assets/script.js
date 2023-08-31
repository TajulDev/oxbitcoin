document.addEventListener("DOMContentLoaded", function () {
  const parentElements = document.querySelectorAll(".parent");

  parentElements.forEach((parent) => {
    const child = parent.querySelector(".child");
    const arrowIcon = parent.querySelector(".fa-chevron-right");

    parent.addEventListener("click", function (event) {
      // Check if the click originated from the child element
      if (!event.target.closest(".child")) {
        arrowIcon.classList.toggle("rotate-icon");
        if (child.style.display === "block") {
          child.style.display = "none";
        } else {
          child.style.display = "block";
        }
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  var copyButton = document.querySelector(".copy_text .btn");
  var copyContainer = document.querySelector(".copy_text");
  var range = document.createRange();
  range.selectNode(copyContainer);
  var tooltip = new bootstrap.Tooltip(copyButton); // Initialize the tooltip

  copyButton.addEventListener("click", function () {
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
      document.execCommand("copy");
      tooltip.hide(); // Hide the default tooltip
      tooltip.dispose(); // Dispose of the tooltip instance

      copyButton.setAttribute("title", "Copied");
      tooltip = new bootstrap.Tooltip(copyButton); // Create a new tooltip instance
      tooltip.show(); // Show the "Copied" tooltip

      // Reset the tooltip after a delay
      setTimeout(function () {
        copyButton.setAttribute("title", "Copy");
        tooltip.dispose(); // Dispose of the current tooltip instance
        tooltip = new bootstrap.Tooltip(copyButton); // Create a new tooltip instance
      }, 2000); // Adjust the delay as needed (2 seconds in this case)
    } catch (error) {
      console.error("Copy failed:", error);
    }

    window.getSelection().removeAllRanges();
  });
});

