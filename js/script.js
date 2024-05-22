document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");
  accordionItems[0].classList.add("active");
  accordionItems.forEach(function (item) {
    const title = item.querySelector(".accordion-title");
    const icon = title.querySelector(".icon i");

    title.addEventListener("click", function () {
      // Close all active accordion items
      accordionItems.forEach(function (otherItem) {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
          otherItem
            .querySelector(".icon i")
            .classList.replace("fa-angle-up", "fa-angle-down");
        }
      });

      // Toggle active class on the clicked accordion item
      item.classList.toggle("active");
      icon.classList.toggle("fa-angle-down");
      icon.classList.toggle("fa-angle-up");
    });
  });
});
