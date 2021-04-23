// Create tag at right corner
let body = document.querySelector("body");
let tag = document.createElement("div");
tag.innerText = "STAGING";
tag.className += "corner-ribbon";
tag.style.cssText =
  "width: 200px; background: #2c7; z-index: 1000; box-shadow: 0 0 3px rgb(0 0 0 / 30%); position: fixed; font-size: 20px;  text-align: center; line-height: 50px; letter-spacing: 1px; color: #fff;  top: auto; bottom: 25px; left: -50px; transform: rotate(45deg); -webkit-transform: rotate(45deg);";
body.appendChild(tag);

// Create style document
let styles =
  ".contentContainer > .fresnel-container, .footerWrapper, .navbar__element__search {background: #855dad !important;}";
let css = document.createElement("style");
css.type = "text/css";
if (css.styleSheet) css.styleSheet.cssText = styles;
else css.appendChild(document.createTextNode(styles));
// Append style to the tag name
document.getElementsByTagName("head")[0].appendChild(css);

Array.from(document.querySelectorAll("*[class]")).forEach((item) => {
  item.className = item.className + " " + item.classList[0] + "-proxy";
});

// randomising array
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

modifyContent = function () {
  const isButtonLoaded = document.querySelector(".rbutton");
  document
    .querySelector("button.MuiIconButton-edgeEnd")
    .addEventListener("click", function (event) {
      setTimeout(function () {
        const menuContentLoaded = document.querySelector(
          ".menuContentContainer > .jsx-2336095114"
        );
        if (menuContentLoaded) {
          const appFrag = document.createDocumentFragment();
          const appList = document.querySelector(
            ".menuContentContainer > .jsx-2336095114"
          );
          const appItems = appList.querySelectorAll(".menuSection");
          const appItemsArray = Array.from(appItems);
          appFrag.appendChild(appItemsArray[1]);
          appFrag.appendChild(appItemsArray[0]);
          appList.appendChild(appFrag);
        }
      }, 50);
    });
  if (isButtonLoaded) {
    let button = document.getElementsByClassName("rbutton")[0];
    let anchor = document.createElement("a");
    anchor.innerHTML = button.innerHTML;
    anchor.className = button.className;
    anchor.href = "javascript:void(0)";
    button.parentNode.replaceChild(anchor, button);
  }
  clearInterval(modifyContentInterval);
};
modifyFooterLinks = function () {
  const isFooterLinkLoaded = document.querySelector(".footerLinkGroup");
  if (isFooterLinkLoaded) {
    const footerAnchor = document.querySelectorAll(".footerAnchor");
    for (let item of footerAnchor) {
      let button = document.createElement("button");
      button.innerHTML = item.innerHTML;
      button.className = item.className;
      button.style.cssText =
        "color: #fff; cursor: pointer; width: auto; height: auto; text-align: left; margin-bottom: 10px;";
      item.parentNode.replaceChild(button, item);
    }
    clearInterval(modifyFooterLinkInterval);
  }
};
swapMainContent = function () {
  const isMainContentLoaded = document.querySelector(".hpSlide");
  if (isMainContentLoaded) {
    const mainFrag = document.createDocumentFragment();
    const mainList = document.querySelector(".hpSlide");
    const mainItems = mainList.querySelectorAll("div.jsx-3365011147");
    const mainItemsArray = Array.from(mainItems);
    mainFrag.appendChild(mainItemsArray[1]);
    mainFrag.appendChild(mainItemsArray[0]);
    mainList.appendChild(mainFrag);
    clearInterval(swapContentInterval);
  }
};
let swapContentInterval = setInterval(swapMainContent, 500);
let modifyFooterLinkInterval = setInterval(modifyFooterLinks, 500);
let modifyContentInterval = setInterval(modifyContent, 2000);
