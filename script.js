window.onload = function () {
  let path = window.location.href;
  console.log(path);
  const HEADER_STYLE =
    "padding:28px;font-size:20px;background:greenyellow;border-radius:17px";
  const BORDER_STYLE = "border: 5px solid #ff2d2d;";
  if (path.includes("amazon")) {
    let importedScript = document.createElement("script");
    importedScript.src =
      "https://cdn.jsdelivr.net/gh/Gary1606/stagingenvironment@2.0v3/amazon/script.js";
    importedScript.type = "text/javascript";
    importedScript.defer = true;
    document.getElementsByTagName("head").item(0).appendChild(importedScript);
  } else if (path.includes("ebay")) {
    let importedScript = document.createElement("script");
    importedScript.src =
      "https://cdn.jsdelivr.net/gh/Gary1606/stagingenvironment@2.0v3/ebay/script.js";
    importedScript.type = "text/javascript";
    importedScript.defer = true;
    document.getElementsByTagName("head").item(0).appendChild(importedScript);
  } else if (path.includes("better")) {
    let importedScript = document.createElement("script");
    importedScript.src =
      "https://cdn.jsdelivr.net/gh/Gary1606/stagingenvironment@2.0v3/better/script.js";
    importedScript.type = "text/javascript";
    importedScript.defer = true;
    document.getElementsByTagName("head").item(0).appendChild(importedScript);
  } else if (path.includes("onedrive")) {
    let importedScript = document.createElement("script");
    importedScript.src =
      "https://cdn.jsdelivr.net/gh/Gary1606/stagingenvironment@2.0v3/onedrive/script.js";
    importedScript.type = "text/javascript";
    importedScript.defer = true;
    document.getElementsByTagName("head").item(0).appendChild(importedScript);
  } else if (path.includes("kohls")) {
    let importedScript = document.createElement("script");
    importedScript.src =
      "https://cdn.jsdelivr.net/gh/Gary1606/stagingenvironment@2.0v3/kohls/script.js";
    importedScript.type = "text/javascript";
    importedScript.defer = true;
    document.getElementsByTagName("head").item(0).appendChild(importedScript);
  }
};
