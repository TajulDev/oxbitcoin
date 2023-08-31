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

  copyButton.addEventListener("click", function () {
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
      document.execCommand("copy");
      copyButton.setAttribute("title", "Copied");
      var tooltip = new bootstrap.Tooltip(copyButton);
    } catch (error) {
      console.error("Copy failed:", error);
    }

    window.getSelection().removeAllRanges();
  });
});
