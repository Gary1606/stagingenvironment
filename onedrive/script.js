console.log("It is onedrive");

// Create tag at right corner
let body = document.querySelector("body");
let tag = document.createElement("div");
tag.innerText = "STAGING";
tag.className += "corner-ribbon";
tag.style.cssText =
  "width: 200px; background: #2c7; z-index: 100; box-shadow: 0 0 3px rgb(0 0 0 / 30%); position: absolute;  text-align: center; line-height: 50px; letter-spacing: 1px; color: #fff;  top: auto; bottom: 25px; left: -50px; transform: rotate(45deg); -webkit-transform: rotate(45deg);";
body.appendChild(tag);

// Create style document
let styles =
  ".o365sx-navbar, .o365cs-base .o365sx-appName, .o365cs-base .o365sx-appName:visited, .o365cs-base .o365sx-appName:hover, .o365cs-base .o365sx-waffle, .o365cs-base .o365sx-waffle:hover, .o365cs-base .o365sx-button, .o365cs-base .o365sx-button:hover, .o365cs-base .o365sx-button:visited { background-color: #184b71 !important; } .o365cs-base .o365sx-appName, .o365cs-base .o365sx-appName:visited, .o365cs-base .o365sx-waffle, .o365cs-base .o365sx-button:hover, .o365cs-base .o365sx-button {background-color: #184b71; } .od-Button.od-Button--primary, .od-OverQuota .od-OverQuota-buttonArea .od-Button+.od-Button {color: #184b71 !important; border: 1.5px solid #184b71 !important; background-color: transparent !important;} .od-Button.od-Button--primary .od-Button-label, .od-OverQuota .od-OverQuota-buttonArea .od-Button+.od-Button .od-Button-label { color: #184b71 !important } .isFluent .od-Button.od-Button--primary:hover, .isFluent .od-Button:hover, .od-OverQuota .od-OverQuota-buttonArea .od-Button+.od-Button:hover { color: #184b71 ; background-color: #184b71 !important; border-color: #184b71 !important; } .od-OverQuota .od-OverQuota-buttonArea .od-Button+.od-Button:hover .od-Button-label, .isFluent .od-Button:hover .od-Button-label {color: #fff !important} .tile_9c46d494.selectable_9c46d494:hover {border-color: #f4f4f4 !important; box-shadow: 0 8px 16px 0 rgb(0 0 0 / 10%); transition: border-color .167s linear,box-shadow .167s linear; background-color: #fff;} .od-BasePage-belowBar {background-color: #b1d2ea26} .tile_9c46d494 {background-color: transparent;} .ms-Tile-check { right: initial !important; left: 0; } .o365cs-base ._1LmT2pyh06k_FxmBeyjKZG {width: 100% !important} .od-BasePage-topBar .ms-CommandBar{flex-direction: row-reverse;} .ms-CommandBar-primaryCommand{flex-grow: unset; flex-direction: row-reverse;} .ms-CommandBar-secondaryCommand{flex-grow: 1;} .od-TilesList {background: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 8px 16px 0 rgb(0 0 0 / 10%); } @media screen and (min-width: 992px) { [dir=ltr] .od-BasePage-leftNavVisible .od-BasePage-leftNav {left: initial !important; right: 0} [dir=ltr] .isFluent .od-BasePage-topBar.suiteNav-search-spacing .od-TopBar {left: 0 !important} [dir=ltr] .isFluent.xxlg .od-BasePage-leftNavVisible .od-BasePage-belowBar, [dir=ltr] .isFluent.xlg .od-BasePage-leftNavVisible .od-BasePage-belowBar { margin-left: 0 !important; margin-right: 228px; } }";
let css = document.createElement("style");
css.type = "text/css";
if (css.styleSheet) css.styleSheet.cssText = styles;
else css.appendChild(document.createTextNode(styles));
// Append style to the tag name
document.getElementsByTagName("head")[0].appendChild(css);

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
  const isButtonLoaded = document.querySelector(".od-OverQuota-buttonArea");
  const isAppLoaded = document.querySelector("#appRoot");
  const isLeftNavLoaded = document.querySelector(".LeftNav-subLinks");
  const isHeaderLoaded = document.getElementById("O365_HeaderLeftRegion");
  if (isButtonLoaded && isAppLoaded && isLeftNavLoaded && isHeaderLoaded) {
    // Changing ids and classnames of all the elements by appending it with '-proxy'
    Array.from(
      document.querySelector("main").querySelectorAll("*[id]")
    ).forEach((item) => {
      item.id = item.id + " " + item.id + "-proxy";
    });
    Array.from(document.querySelectorAll(".od-Button")).forEach((item) => {
      item.className = item.className + " " + "od-Button--primary";
    });
    Array.from(
      document.querySelector("#appRoot").querySelectorAll("*[class]")
    ).forEach((item) => {
      item.className = item.className + " " + item.classList[0] + "-proxy";
    });

    // randomising the left nav links
    const frag = document.createDocumentFragment();
    const list = document.querySelector(".LeftNav-subLinks");
    const items = list.querySelectorAll(".LeftNav-subLink");
    const itemsArray = Array.from(items);
    const shuffledArray = shuffle(itemsArray);
    for (let item of shuffledArray) {
      frag.appendChild(item);
    }
    list.appendChild(frag);

    // changing the position of buttons
    const buttonFrag = document.createDocumentFragment();
    const buttonList = document.querySelector(".od-OverQuota-buttonArea");
    const buttonItems = buttonList.querySelectorAll(".od-Button");
    const buttonItemsArray = Array.from(buttonItems);
    buttonFrag.appendChild(buttonItemsArray[1]);
    buttonFrag.appendChild(buttonItemsArray[0]);
    buttonList.appendChild(buttonFrag);

    // changing the position of app menu
    document
      .getElementById("O365_HeaderLeftRegion")
      .addEventListener("click", function (event) {
        setTimeout(function () {
          const appFrag = document.createDocumentFragment();
          const appList = document.querySelector(".FAdEbQISkGJuszLsyYq5z");
          const appItems = appList.querySelectorAll("._1LmT2pyh06k_FxmBeyjKZG");
          const appItemsArray = Array.from(appItems);
          const shuffledAppItemsArray = shuffle(appItemsArray);
          for (let item of shuffledAppItemsArray) {
            appFrag.appendChild(item);
          }
          appList.appendChild(appFrag);
        }, 50);
      });

    clearInterval(modifyContentInterval);
  }
};
let modifyContentInterval = setInterval(modifyContent, 2000);
