var go_up_btn = document.querySelector(".go-up");
function scrollChecker() {
  go_up_btn.style.display =
    document.body.scrollTop > 300 || document.documentElement.scrollTop > 300
      ? "flex"
      : "none";
}

window.addEventListener("scroll", scrollChecker, true);

go_up_btn.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

function favoriteLogic() {
  var favorites = document.querySelectorAll(".card__favorite");

  [].forEach.call(favorites, function (element, index) {
    element.addEventListener("click", function () {
      if (element.className.indexOf("selected") === -1) {
        alert("Кот добавлен в избранное!");
        element.className += " card__favorite-selected";
        return;
      }

      alert("Кот удален из избранных!");
      element.className = element.className
        .split(" ")
        .filter(function (el_class) {
          return el_class !== "card__favorite-selected";
        })
        .join("");
    });
  });
}

favoriteLogic();
