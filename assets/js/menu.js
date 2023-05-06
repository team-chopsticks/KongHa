// JavaScript
$(document).ready(function () {
  const openMenuButton = $("#open-menu");
  const closeMenuButton = $("#close-menu");
  const modalMenu = $(".modal-menu");
  const main = $(".main");
  const header1 = $(".header-left");
  const header2 = $(".header-middle");
  const header3 = $(".header-middle-left");
  const header4 = $(".header-middle-right");
  const footer1 = $(".footer-left");
  const footer2 = $(".footer-right");

  // Open menu on button click
  openMenuButton.on("click", () => {
    modalMenu.show().animate({ right: "0" }, 500);
    closeMenuButton.show();
    $("body").css("overflow", "hidden");
    main.css({ filter: "blur(5px) opacity(0.5)", pointerEvents: "none" });
    header1.css({ filter: "blur(5px) opacity(0.5)", pointerEvents: "none" });
    header2.css({ filter: "blur(5px) opacity(0.5)", pointerEvents: "none" });
    header3.css({ filter: "blur(5px) opacity(0.5)", pointerEvents: "none" });
    header4.css({ filter: "blur(5px) opacity(0.5)", pointerEvents: "none" });
    footer1.css({ filter: "blur(5px) opacity(0.5)", pointerEvents: "none" });
    footer2.css({ filter: "blur(5px) opacity(0.5)", pointerEvents: "none" });
  });

  // Close menu on button click
  closeMenuButton.on("click", () => {
    modalMenu.animate({ right: "-100vw" }, 700, function () {
      $(this).hide();
    });
    closeMenuButton.hide();
    $("body").css("overflow", "auto");
    main.css({ filter: "", pointerEvents: "auto" });
    header1.css({ filter: "", pointerEvents: "auto" });
    header2.css({ filter: "", pointerEvents: "auto" });
    header3.css({ filter: "", pointerEvents: "auto" });
    header4.css({ filter: "", pointerEvents: "auto" });
    footer1.css({ filter: "", pointerEvents: "auto" });
    footer2.css({ filter: "", pointerEvents: "auto" });
  });
});