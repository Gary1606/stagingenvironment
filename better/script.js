better_logo = document.getElementsByClassName(
  "styles_logo-link--corporation__3RnBE"
)[0];
let better_replacer = document.createElement("div");
better_replacer.innerText = "Better.com Modified";
better_replacer.style.cssText = HEADER_STYLE;

// let main = document.querySelector('main');
// console.log(main.children)
let uri = location.pathname.substring(1);
if (uri === "") {
  better_logo.replaceWith(better_replacer);
  let children = document.querySelector("main").children;
  for (var i = 0; i < children.length; i++) {
    // console.log(children[i])
    if (children[i].tagName != "HEADER") {
      let style = "";
      if (i == 1) {
        style = "position: relative;top: 0;";
      }
      children[i].style.cssText = "margin-left:20%;" + style + BORDER_STYLE;
    }
  }

  document.getElementsByTagName("footer")[0].style.cssText = "margin-left:20%";
  document.getElementsByClassName("styles_nav-link__1P9F7")[0].style.cssText =
    "margin-left: 4rem;";
  document.getElementsByClassName("styles_mainNav__Albtx")[0].style.cssText =
    "height: 100vh;width:20%;box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);" +
    BORDER_STYLE;
  document.getElementsByClassName("styles_navContent__2aZrc")[0].style.cssText =
    "display: grid;";
  document.getElementsByClassName("styles_navLinks__10L5C")[0].style.cssText =
    "display: inline-grid;";
  document.getElementsByClassName("styles_ctas__2CfRX")[0].style.cssText =
    "display: inline-grid;";
  document
    .getElementsByClassName("styles_HomeIntro-phoneInner__5yNF8")[0]
    .remove();
  document.getElementsByClassName(
    "styles_HomeHero-textWrapper__3uwox"
  )[0].children[0].style.cssText = "width:100%;text-align:center";
  document.getElementsByClassName(
    "styles_TextLockup-body__oM8iX"
  )[0].style.cssText = "max-width:100%";

  let header_children = document.getElementsByClassName(
    "styles_navLinks__10L5C"
  )[0].children;
  for (var i = 0; i < header_children.length; i++) {
    if (i != 0) {
      header_children[i].style.cssText = "margin: 1rem 0 1rem 2rem;";
    }
  }
} else if (uri === "start") {
  better_logo.replaceWith(better_replacer);
  document.getElementById("startPage").style.cssText = "background: #222323;";
  document.getElementsByClassName(
    "styles_StartPage-sectionHolder__X3AbE"
  )[0].style.cssText = "grid-template-columns:none;width: 50%;margin: auto;";
  let elements = document.getElementsByClassName(
    "styles_StartPage-section__1QLYL"
  );
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.cssText = "width:50%;margin:auto;border-radius:50%";
  }
  elements = document.getElementsByClassName("css-1s4nsni");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.cssText = "font-size:1px";
  }
} else if (uri.includes("start-purchase")) {
  console.log("start-purchase");
  document
    .getElementById("__next")
    .addEventListener("DOMCharacterDataModified", function (event) {
      document
        .getElementsByClassName("🏠-3sFrx")[0]
        .replaceWith(better_replacer);
      child_element = document.getElementsByClassName("🏠-QtpCE")[0].children[0]
        .children[0];
      // console.log(child_element)
      child_element.style.cssText = BORDER_STYLE;
      child_element.addEventListener("DOMSubtreeModified", function (event) {
        rate_options = document.getElementsByClassName("🏠-2sssZ");
        if (rate_options.length != 0) {
          parent = rate_options[0].parentElement;
          for (var i = 0; i < rate_options.length; i++) {
            temp = rate_options[i];
            temp.style.cssText = BORDER_STYLE;
            parent.prepend(temp);
          }
        }
      });
    });
}
