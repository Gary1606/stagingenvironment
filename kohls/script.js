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
  "#kohls_logo a {cursor: default;} .top-global-header #navigation.dropdown-navigation{background: transparent;} .top-global-header .dropdown-navigation .navigation-item{background: #11518f;} .top-global-header .dropdown-navigation .navigation-item:hover, .top-global-header .dropdown-navigation-container .nav-overlay{background: #2c76bd !important;} .top-global-header #navigation li h2 a, .nav-overlay h3 a, .nav-overlay a, .top-global-header .dropdown-navigation .nav-overlay h3 {color: #fff !important} .nav-overlay h3 a font, #utility-nav-wallet .utility-nav-wallet-text a:hover { color: #f27521 !important;} .top-global-header #new-equity-banner {background: #f27521; border-botton: none;} .top-global-header #new-equity-banner a, .top-global-header #tr_phase2_ShoppingBg .close-bag .kas-newpb-shopping-bag-label {color: #fff !important;} .top-global-header #header-container {background: #115090;} #open-drawer.closed, #open-drawer.closed .semi-circle, #open-drawer.open button.semi-circle, #open-drawer p.offer-ticker { background: #f27521 !important;} #kohls_logo svg g path {fill: #fff;} #utility-nav svg g path, #checkout-container svg g path{ fill: #fff;} .top-global-header .greeting-container, .top-global-header .account-signin, .top-global-header #utility-nav a, .top-global-header #checkout-container .checkout-link, .top-global-header .mini-cart-header .number-items, .top-global-header .mini-cart-header .subtotal {color: #fff;} .top-global-header #utility-nav:hover, .top-global-header .skava-mini-cart:hover, .top-global-header #checkout-container:hover, .utility-nav-background-color {background-color: #f27521 !important} .top-global-header .dropdownsignout {background-color: #134f8ebf;} .top-global-header .dropdownsignout .dropdownsigninbtn #pb_signin {background-color: #f27521} .top-global-header .dropdownsignout ul li {background-color: #fff; } .top-global-header #utility-nav a:hover, .top-global-header #utility-nav-wallet .utility-nav-wallet-text a:hover, .top-global-header #utility-nav .create-account:hover, .top-global-header #utility-nav a.create-account:hover { color: #fff !important; } #utility-nav-wallet .utility-nav-wallet-text a, .top-global-header .yes2you-logo-text a, .top-global-header .yes2you-logo-text:hover a, .top-global-header .kohls-cash-logo-text a, .top-global-header .kohls-cash-logo-text:hover a { color: #f27521 !important;} .tr_phase2_purchase_earning_meter, .tr_phase2_order_summary_ghr h5, .tr_phase2_order_summary_ghr h6, .tr_phase2_order_summary_ghr h4, .tr_phase2_order_summary_right-float {color: #fff;} .tr_phase2_headerPanel, .tr_phase2_headerPanel {background: #134f8ebf !important;} .tr_phase2_sub_header, .tr_phase2_shopping-bag_content { background: transparent;} .mini-cart-header.loadedNewPB { background-color: #f27521 !important;} .tr_phase2_purchase_earning_meter_signup a, .tr_phase2_purchase_earning_meter_signup a:hover  {color: #fff;} .hp2-creative .moms-bubbles__nav .divider, .creative-slot.creative-slot.hero .hero__categories {background: #11518f !important;} .hp2-creative .moms-bubbles__nav a.bubble-link, .creative-slot.creative-slot.hero .hero__flex .hero__flex__box {border: 5px solid #11518fa6 !important;} .hp2-creative .moms-bubbles__nav .bubble-link p, .creative-slot.creative-slot.hero .hero__flex .hero__flex__top, .creative-slot.creative-slot.hero .hero__flex .hero__flex__cta, .creative-slot.creative-slot.hero .hero__flex .hero__flex__price {color: #f27621 !important;} .hp2-creative #hp2__bkg__block {background-color: #f2752199 !important;} .footer-global {background-color: #134f8ebf !important;} .footer-slot .footer-links__category-list__link, .footer-slot .footer-top__header--social, .footer-slot .footer-top__header--native-app, #footer .footer-legal__copy p, .footer-legal__copy p, .footer-slot .footer-top__native-app__badges p, .footer-top__native-app__badges p, .footer-slot .footer-legal a {color: #fff !important;} .footer-slot .footer-top__native-app .scancode__button {background-color: #f27521 !important; text-decoration: none !important;} .footer-top__social-list__link svg path{fill: #fff !important;} .footer-slot .footer-links__category__header, .top-global-header #utility-nav a:hover, .top-global-header #utility-nav-wallet .utility-nav-wallet-text a:hover {color: #f27521 !important;}";
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
  const isHamburgerLoaded = document.querySelector(".kohls-charge-link");
  const isLogoLoaded = document.querySelector("#kohls_logo");
  const isNavigationLoaded = document.querySelector("#navigation");
  if (isNavigationLoaded) {
    Array.from(
      document.querySelector("#navigation").querySelectorAll("*[class]")
    ).forEach((item) => {
      item.className = item.className + " " + item.classList[0] + "-proxy";
    });
  }
  if (isLogoLoaded) {
    isLogoLoaded.querySelector("a").href = "javascript:void(0)";
  }
  if (isHamburgerLoaded) {
    // changing the position of app menu
    document
      .getElementById("top-nav-left")
      .addEventListener("click", function (event) {
        setTimeout(function () {
          const appFrag = document.createDocumentFragment();
          const appList = document.querySelector(".dropdown-navigation");
          const appItems = appList.querySelectorAll(".navigation-item");
          const appItemsArray = Array.from(appItems);
          appItems[10].querySelector("h2 a").href = "javascript:void(0)";
          const shuffledAppItemsArray = shuffle(appItemsArray);
          for (let item of shuffledAppItemsArray) {
            appFrag.appendChild(item);
          }
          appList.appendChild(appFrag);
        }, 50);
      });

    document
      .getElementById("utility-nav")
      .addEventListener("click", function (event) {
        setTimeout(function () {
          const frag = document.createDocumentFragment();
          const list = document.querySelector(".dropdownsignout ul");
          const items = list.querySelectorAll("li");
          const itemsArray = Array.from(items);
          const shuffledItemsArray = shuffle(itemsArray);
          for (let item of shuffledItemsArray) {
            frag.appendChild(item);
          }
          list.appendChild(frag);
        }, 50);
      });

    clearInterval(modifyContentInterval);
  }
};
let modifyContentInterval = setInterval(modifyContent, 2000);
