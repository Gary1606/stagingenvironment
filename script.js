window.onload = function () {
  let path = window.location.href;
  console.log(path);
  const PATH = "https://cdn.jsdelivr.net/gh/Gary1606/stagingenvironment@3.0v8";

  if (path.includes("amazon")) {
    let importedScript = document.createElement("script");
    importedScript.src = `${PATH}/amazon/script.js`;
    importedScript.type = "text/javascript";
    importedScript.defer = true;
    document.getElementsByTagName("head").item(0).appendChild(importedScript);
  } else if (path.includes("ebay")) {
    let importedScript = document.createElement("script");
    importedScript.src = `${PATH}/ebay/script.js`;
    importedScript.type = "text/javascript";
    importedScript.defer = true;
    document.getElementsByTagName("head").item(0).appendChild(importedScript);
  } else if (path.includes("better")) {
    let importedScript = document.createElement("script");
    importedScript.src = `${PATH}/better/script.js`;
    importedScript.type = "text/javascript";
    importedScript.defer = true;
    document.getElementsByTagName("head").item(0).appendChild(importedScript);
  } else if (path.includes("onedrive")) {
    let importedScript = document.createElement("script");
    importedScript.src = `${PATH}/onedrive/script.js`;
    importedScript.type = "text/javascript";
    importedScript.defer = true;
    document.getElementsByTagName("head").item(0).appendChild(importedScript);
  } else if (path.includes("kohls")) {
    let importedScript = document.createElement("script");
    importedScript.src = `${PATH}/kohls/script.js`;
    importedScript.type = "text/javascript";
    importedScript.defer = true;
    document.getElementsByTagName("head").item(0).appendChild(importedScript);
  } else if (path.includes("airbnb")) {
    let importedScript = document.createElement("script");
    importedScript.src = `${PATH}/airbnb/script.js`;
    importedScript.type = "text/javascript";
    importedScript.defer = true;
    document.getElementsByTagName("head").item(0).appendChild(importedScript);
  } else if (path.includes("theyes")) {
    let importedScript = document.createElement("script");
    importedScript.src = `${PATH}/yes/script.js`;
    importedScript.type = "text/javascript";
    importedScript.defer = true;
    document.getElementsByTagName("head").item(0).appendChild(importedScript);
  } else if (path.includes("servicenow")) {
    let importedScript = document.createElement("script");
    importedScript.src = `${PATH}/servicenow/script.js`;
    importedScript.type = "text/javascript";
    importedScript.defer = true;
    document.getElementsByTagName("head").item(0).appendChild(importedScript);
  }
};
