console.log("It is amazon");
let parent = document.getElementById("nav-logo");
let child = document.getElementById("nav-logo").firstElementChild;
let replacer = document.createElement("div");
parent.replaceChildren(replacer, child);
replacer.innerText = "Amazon Modified";
replacer.style.cssText = HEADER_STYLE;
parent.removeChild(child);
let uri = location.pathname.substring(1);
if (uri === "") {
  main_page_child = document.getElementById("gw-content-grid");
  main_page_parent = document.getElementById("gw-layout");
  main_page_parent.removeChild(main_page_child);
  main_page_parent.prepend(main_page_child);
  main_page_child.style.cssText = BORDER_STYLE;
} else if (uri === "gp/bestsellers/") {
  document.getElementById("zg_left_col2").style.cssText =
    "float: right;border: 5px solid #ff2d2d;";
  best_history = document.getElementById("rhf");
  best_history.remove();
  best_main_content = document.getElementById("zg");
  best_body = document.getElementsByTagName("body")[0];
  best_body.insertBefore(best_history, best_main_content);
  best_history.style.cssText = BORDER_STYLE;
}
