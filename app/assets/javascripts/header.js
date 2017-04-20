
$(document).on('turbolinks:load', function () {
  // Breakpoint for using menu hamburger or buttons
  processNavmenu();
})

$(window).resize(function() {
  // Breakpoint for using menu hamburger or buttons
  processNavmenu();
})

function processNavmenu() {
  if ($(document).width() >= 480) {
    hideDropdown();
    showNavbtns();
  } else {
    showDropdown();
    hideNavbtns();
  }
}
function hideDropdown() {
  $("li.dropdown").hide();
}

function hideNavbtns() {
  $("span.navbtns").hide();
}

function showDropdown() {
  $("li.dropdown").show();
}

function showNavbtns() {
  $("span.navbtns").show();
}
