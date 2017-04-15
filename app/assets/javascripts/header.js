
window.onload = function () {
  // Breakpoint for using menu hamburger or buttons
  if ($(document).width() >= 480) {
    hideDropdown();
    showNavbtns();
  } else {
    showDropdown();
    hideNavbtns();
  }
}

$(window).resize(function() {
  // Breakpoint for using menu hamburger or buttons
  if ($(document).width() >= 480) {
    hideDropdown();
    showNavbtns();
  } else {
    showDropdown();
    hideNavbtns();
  }
})

function hideDropdown() {
  $("li").hide();
}

function hideNavbtns() {
  $("span.navbtns").hide();
}

function showDropdown() {
  $("li").show();
}

function showNavbtns() {
  $("span.navbtns").show();
}
