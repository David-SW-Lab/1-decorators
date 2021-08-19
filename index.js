import "./style.css";
import * as tizen from "./platform/tizen/index.js";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

tizen.createDirectory("d:").then(data => {
  console.log("createDir : ", data);
});

tizen.getMacAddress().catch(e => {
  console.log("getMacAddress : ", e);
});
