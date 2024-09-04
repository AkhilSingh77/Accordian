const accordianContentBoxElement = document.querySelectorAll(
  ".accordian__contentBox"
);

accordianContentBoxElement.forEach((single) => {
  single.addEventListener("click", () => {
    accordianContentBoxElement.forEach((item) => {
      if (item !== single) {
        const icon = item.querySelector(".headerContainer__right i");
        icon.classList.remove("fa-circle-minus");
        icon.classList.add("fa-circle-plus");

        item.classList.remove("active");
      }
    });

    const icon = single.querySelector(".headerContainer__right i");

    single.classList.toggle("active");
    if (single.classList.contains("active")) {
      icon.classList.remove("fa-circle-plus");
      icon.classList.add("fa-circle-minus");
    } else {
      icon.classList.remove("fa-circle-minus");
      icon.classList.add("fa-circle-plus");
    }
  });
});
