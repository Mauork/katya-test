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
