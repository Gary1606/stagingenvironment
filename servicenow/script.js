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
  ".cmp-footer__wrapper.aem-GridColumn, .cmp-header__wrapper .experiencefragment.header .xf-content-height, .cmp-header__wrapper .experiencefragment.header .xf-content-height:hover, .cmp-header__wrapper .experiencefragment.header .xf-content-height:not(.cmp-button):hover, .cmp-header__wrapper .experiencefragment.header .xf-content-height.fixed-meganav.visible-meganav {background: #fed528; } .cmp-navigation__item:nth-of-type(1n+7) {display: none !important; }";
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
  const isNavLinkLoaded = document.querySelector(".cmp-navigation__group");

  if (isNavLinkLoaded) {
    const frag = document.createDocumentFragment();
    const list = document.querySelector(".cmp-navigation__group");
    const items = list.querySelectorAll(
      ".cmp-navigation__group .cmp-navigation__item"
    );
    const itemsArray = Array.from(items);
    const filteredItemsArray = itemsArray.slice(0, 5);
    const shuffledItemsArray = shuffle(filteredItemsArray);
    for (let item of shuffledItemsArray) {
      frag.appendChild(item);
    }
    list.appendChild(frag);
    clearInterval(modifyContentInterval);
  }
};
modifyAnchorLinks = function () {
  const isAnchorLoaded = document.querySelector("#container-c7009e2226");
  if (isAnchorLoaded) {
    const anchorLinks = document.querySelectorAll(
      "#container-c7009e2226 .button a"
    );
    for (let item of anchorLinks) {
      let button = document.createElement("button");
      button.innerHTML = item.innerHTML;
      button.className = item.className;
      button.style.cssText = "cursor: pointer; border: none;";
      item.parentNode.replaceChild(button, item);
    }
    clearInterval(modifyAnchorLinksInterval);
  }
};
modifyTabLinks = function () {
  const isTabsLoaded = document.querySelector(".cmp-tabs__tablist");
  if (isTabsLoaded) {
    const frag = document.createDocumentFragment();
    const list = document.querySelector(".cmp-tabs__tablist");
    const items = list.querySelectorAll(".cmp-tabs__tab");
    const itemsArray = Array.from(items);
    const shuffledItemsArray = shuffle(itemsArray);
    frag.appendChild(items[0]);
    for (let item of shuffledItemsArray) {
      frag.appendChild(item);
    }
    list.appendChild(frag);
    clearInterval(modifyTabLinksInterval);
  }
};
let modifyTabLinksInterval = setInterval(modifyTabLinks, 500);
let modifyAnchorLinksInterval = setInterval(modifyAnchorLinks, 500);
let modifyContentInterval = setInterval(modifyContent, 2000);
