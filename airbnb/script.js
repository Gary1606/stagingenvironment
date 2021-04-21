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
  "._lqnc70 ._hnjsyx {background-color: #ff395b !important; } ._1us6f63 {--background-color-hex: #16a3b1 !important; --text-color-hex: #fff !important;} footer._1tywmry {background-color: #ff395b !important; border-top: 1px solid #f5273d !important} ._wmuyow ._o06542u, ._wmuyow ._o06542u:hover, h4._tfslnm, ._opoa3c a, ._opoa3c span, ._opoa3c a:hover, ._19c5bku a span,._19c5bku a:hover span, ._1br4kkl {color: #fff !important} ._kdkpwk a svg path {fill: #fff !important;}";
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
modifyTab = function () {
  const isMainTabLoaded = document.querySelector("._17fy1ix");
  if (isMainTabLoaded) {
    // // changing the position of buttons
    const tabFrag = document.createDocumentFragment();
    const tabList = document.querySelector("._17fy1ix");
    const tabItems = tabList.querySelectorAll("._3hmsj");
    const tabItemsArray = Array.from(tabItems);
    tabFrag.appendChild(tabItemsArray[1]);
    tabFrag.appendChild(tabItemsArray[0]);
    tabList.appendChild(tabFrag);
    clearInterval(modifyTabInterval);
  }
};

modifyContent = function () {
  const isContentListLoaded = document.querySelectorAll("._19qnt1y ._1gw6tte");
  const isOnlineExpLinkLoaded = document.querySelector("._p4ul2ts");
  const isTabListLoaded = document.querySelector("._qc3ank");
  if (isOnlineExpLinkLoaded) {
    isOnlineExpLinkLoaded.href = "javascript:void(0)";
  }
  document
    .getElementById("field-guide-toggle")
    .addEventListener("click", function (event) {
      setTimeout(function () {
        const isSimpleProfileLoaded = document.querySelector(
          "#simple-header-profile-menu"
        );
        if (isSimpleProfileLoaded) {
          const appFrag = document.createDocumentFragment();
          const appList = document.querySelector("#simple-header-profile-menu");
          const appItems = appList.querySelectorAll("div a._1qvp8oxp");
          const appItemsArray = Array.from(appItems);
          const shuffledAppItemsArray = shuffle(appItemsArray);
          for (let item of shuffledAppItemsArray) {
            appFrag.appendChild(item);
          }
          appList.appendChild(appFrag);
        }
      }, 50);
    });

  if (isContentListLoaded && isTabListLoaded) {
    //randomising the tabs
    const btnFrag = document.createDocumentFragment();
    const btnList = document.querySelector("._qc3ank");
    const btnItems = btnList.querySelectorAll("button");
    const btnItemsArray = Array.from(btnItems);
    const shuffledBtnItemsArray = shuffle(btnItemsArray);
    for (let item of shuffledBtnItemsArray) {
      btnFrag.appendChild(item);
    }
    btnList.appendChild(btnFrag);

    // randomising the main contents
    const frag = document.createDocumentFragment();
    const list = document.querySelector("._19qnt1y");
    const items = list.querySelectorAll("._1gw6tte");
    const itemsArray = Array.from(items);
    itemsArray.splice(0, 1);
    const shuffledItemsArray = shuffle(itemsArray);
    frag.appendChild(items[0]);
    for (let item of shuffledItemsArray) {
      frag.appendChild(item);
    }
    list.appendChild(frag);
    clearInterval(modifyContentInterval);
  }
};
let modifyTabInterval = setInterval(modifyTab, 500);
let modifyContentInterval = setInterval(modifyContent, 2000);
