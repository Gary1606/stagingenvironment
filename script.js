window.onload = function () {
  let path = window.location.href;
  console.log(path);
  if (path.includes("amazon")) {
    let importedScript = document.createElement("script");
    importedScript.src = "amazon/script.js";
    importedScript.type = "text/javascript";
    importedScript.defer = true;
    document.getElementsByTagName("head").item(0).appendChild(importedScript);
  } else if (path.includes("ebay")) {
    let importedScript = document.createElement("script");
    importedScript.src =
      "https://cdn.jsdelivr.net/gh/Gary1606/stagingenvironment@2.0v5/ebay/script.js";
    importedScript.type = "text/javascript";
    importedScript.defer = true;
    document.getElementsByTagName("head").item(0).appendChild(importedScript);
  } else if (path.includes("better")) {
    let importedScript = document.createElement("script");
    importedScript.src =
      "https://cdn.jsdelivr.net/gh/Gary1606/stagingenvironment@2.0v5/better/script.js";
    importedScript.type = "text/javascript";
    importedScript.defer = true;
    document.getElementsByTagName("head").item(0).appendChild(importedScript);
  } else if (path.includes("onedrive")) {
    let importedScript = document.createElement("script");
    importedScript.src =
      "https://cdn.jsdelivr.net/gh/Gary1606/stagingenvironment@2.0v5/onedrive/script.js";
    importedScript.type = "text/javascript";
    importedScript.defer = true;
    document.getElementsByTagName("head").item(0).appendChild(importedScript);
  } else if (path.includes("kohls")) {
    let importedScript = document.createElement("script");
    importedScript.src =
      "https://cdn.jsdelivr.net/gh/Gary1606/stagingenvironment@2.0v5/kohls/script.js";
    importedScript.type = "text/javascript";
    importedScript.defer = true;
    document.getElementsByTagName("head").item(0).appendChild(importedScript);
  }
};
