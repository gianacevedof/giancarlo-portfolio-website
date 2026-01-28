import { annotate } from "https://unpkg.com/rough-notation?module";

// Make the function global so 'onclick' can find it
window.toggleMenu = function () {
  const menuList = document.getElementById("menuList");
  menuList.classList.toggle("show-menu");
};

// Annotate the element with id "my-name" when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector("#my-name");

  if (element) {
    const config = {
      type: "underline",
      strokeWidth: 2,
      color: "rgb(0, 195, 175)",
    };

    const a1 = annotate(element, config);
    a1.show();
  }
});
