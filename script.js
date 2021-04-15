window.onload = function () {
  let path = window.location.href;
  console.log(path);
  const HEADER_STYLE =
    "padding:28px;font-size:20px;background:greenyellow;border-radius:17px";
  const BORDER_STYLE = "border: 5px solid #ff2d2d;";
  if (path.includes("amazon")) {
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
  } else if (path.includes("ebay")) {
    let uri = location.pathname.substring(1);
    if (uri === "") {
      ebay_header = document.getElementById("gh-l-h1");
      ebay_logo = document.getElementById("gh-la");
      ebay_logo.remove();
      let ebay_replacer = document.createElement("div");
      ebay_replacer.innerText = "Ebay Modified";
      ebay_replacer.style.cssText = HEADER_STYLE;
      ebay_header.prepend(ebay_replacer);
      ebay_carousel = document.getElementById("rtm_list1");
      ebay_carousel_replacer = document.createElement("div");
      ebay_carousel_replacer.innerText = "I am the Carousel 🤯";
      ebay_carousel.replaceWith(ebay_carousel_replacer);
      ebay_carousel_replacer.style.cssText =
        "text-align: center;margin-top: 5rem;font-size: 4rem;";
    }
  } else if (path.includes("better")) {
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

      document.getElementsByTagName("footer")[0].style.cssText =
        "margin-left:20%";
      document.getElementsByClassName(
        "styles_nav-link__1P9F7"
      )[0].style.cssText = "margin-left: 4rem;";
      document.getElementsByClassName(
        "styles_mainNav__Albtx"
      )[0].style.cssText =
        "height: 100vh;width:20%;box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);" +
        BORDER_STYLE;
      document.getElementsByClassName(
        "styles_navContent__2aZrc"
      )[0].style.cssText = "display: grid;";
      document.getElementsByClassName(
        "styles_navLinks__10L5C"
      )[0].style.cssText = "display: inline-grid;";
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
      document.getElementById("startPage").style.cssText =
        "background: #222323;";
      document.getElementsByClassName(
        "styles_StartPage-sectionHolder__X3AbE"
      )[0].style.cssText =
        "grid-template-columns:none;width: 50%;margin: auto;";
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
          child_element = document.getElementsByClassName("🏠-QtpCE")[0]
            .children[0].children[0];
          // console.log(child_element)
          child_element.style.cssText = BORDER_STYLE;
          child_element.addEventListener(
            "DOMSubtreeModified",
            function (event) {
              rate_options = document.getElementsByClassName("🏠-2sssZ");
              if (rate_options.length != 0) {
                parent = rate_options[0].parentElement;
                for (var i = 0; i < rate_options.length; i++) {
                  temp = rate_options[i];
                  temp.style.cssText = BORDER_STYLE;
                  parent.prepend(temp);
                }
              }
            }
          );
        });
    }
  } else if (path.includes("onedrive")) {
    console.log("It is onedrive");

    // Create tag at right corner
    let body = document.querySelector("body");
    let tag = document.createElement("div");
    tag.innerText = "STAGING";
    tag.className += "corner-ribbon";
    tag.style.cssText =
      "width: 200px; background: #2c7; box-shadow: 0 0 3px rgb(0 0 0 / 30%); position: absolute;  text-align: center; line-height: 50px; letter-spacing: 1px; color: #fff;  top: auto; bottom: 25px; left: -50px; transform: rotate(45deg); -webkit-transform: rotate(45deg);";
    body.appendChild(tag);

    // Create style document
    let styles =
      ".o365sx-navbar { background-color: #184b71 !important; } .o365cs-base .o365sx-appName, .o365cs-base .o365sx-appName:visited, .o365cs-base .o365sx-waffle, .o365cs-base .o365sx-button:hover, .o365cs-base .o365sx-button {background-color: #184b71; } .od-Button.od-Button--primary, .od-OverQuota .od-OverQuota-buttonArea .od-Button+.od-Button {color: #184b71; border: 1.5px solid #184b71; background-color: transparent;} .od-Button.od-Button--primary .od-Button-label, .od-OverQuota .od-OverQuota-buttonArea .od-Button+.od-Button .od-Button-label { color: #184b71 } .isFluent .od-Button.od-Button--primary:hover, .isFluent .od-Button:hover, .od-OverQuota .od-OverQuota-buttonArea .od-Button+.od-Button:hover { color: #184b71; background-color: #184b71; border-color: #184b71; } .od-OverQuota .od-OverQuota-buttonArea .od-Button+.od-Button:hover .od-Button-label, .isFluent .od-Button:hover .od-Button-label {color: #fff} .tile_9c46d494.selectable_9c46d494:hover {border-color: #f4f4f4 !important; box-shadow: 0 8px 16px 0 rgb(0 0 0 / 10%); transition: border-color .167s linear,box-shadow .167s linear; background-color: #fff;} .od-BasePage-belowBar {background-color: #b1d2ea26} .tile_9c46d494 {background-color: transparent;} .ms-Tile-check { right: initial !important; left: 0; } .o365cs-base ._1LmT2pyh06k_FxmBeyjKZG {width: 100% !important} .od-BasePage-topBar .ms-CommandBar{flex-direction: row-reverse;} .ms-CommandBar-primaryCommand{flex-grow: unset; flex-direction: row-reverse;} .ms-CommandBar-secondaryCommand{flex-grow: 1;} .od-TilesList {background: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 8px 16px 0 rgb(0 0 0 / 10%); } @media screen and (min-width: 992px) { [dir=ltr] .od-BasePage-leftNavVisible .od-BasePage-leftNav {left: initial; right: 0} [dir=ltr] .isFluent .od-BasePage-topBar.suiteNav-search-spacing .od-TopBar {left: 0} [dir=ltr] .isFluent.xxlg .od-BasePage-leftNavVisible .od-BasePage-belowBar, [dir=ltr] .isFluent.xlg .od-BasePage-leftNavVisible .od-BasePage-belowBar { margin-left: 0; margin-right: 228px; } }";
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

    let modifyContentInterval = setInterval(modifyContent, 2000);

    modifyContent = function () {
      const isButtonLoaded = document.querySelector(".od-OverQuota-buttonArea");
      const isAppLoaded = document.querySelector("#appRoot");
      const isLeftNavLoaded = document.querySelector(".LeftNav-subLinks");
      if (isButtonLoaded && isAppLoaded && isLeftNavLoaded) {
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
        clearInterval(modifyContentInterval);
      }
    };

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
  }
};
