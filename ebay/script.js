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
