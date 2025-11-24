import { renderMessage } from "./dom.js";
import { getCatFact, getDogImage } from "./api.js";

//For saving the user name temporarily
let userName = "";

// Grab references to various parts of the HTML page
const userForm = document.querySelector("#user-form");
const userInput = document.querySelector("#user");
const catForm = document.querySelector("#cat-form");
const catOutput = document.querySelector("#cat-output");
const dogForm = document.querySelector("#dog-form");
const dogOutput = document.querySelector("#dog-output");//I mistyped an extra w "#wdog-output" so it wasn't working 

//Keep the name for the user name
userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    userName = userInput.value.trim();
    //For a dialog box to thank the user
    if (userName) {
        alert(`Thanks, ${userName}!`);
    }
});

catForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  renderMessage(catOutput, "Loading mishi fact…");

  try {
    const fact = await getCatFact();


    //This is from the starter but I want to keep the note for comparison
    /*if (data.length === 0) {
        renderMessage(cityList, `No results found for "${city}".`);
        return;
    }
    let message = `Found ${data.length} result(s) for "${city}":`;
    message += "<ul>";
    data.forEach((item) => {
        message += `<li>${item.name}, ${item.country} (Lat: ${item.latitude}, Lon: ${item.longitude})</li>`;
    });
    message += "</ul>";*/


    //Copied this from my assistant because I wanted the cat emoji
    //Also had to fix it to include the user's name, 
    renderMessage(catOutput, `<p>${userName ? userName + ', here is a cat fact: ' : ''}🐱${fact}</p>`);

  } catch (err) {
    renderMessage(catOutput, `Error: ${err.message}`);
  }
});

dogForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    //This is from the starter but I want to keep the note for comparison
    /*const latStr = document.querySelector("#lat").value.trim();
    const lonStr = document.querySelector("#lon").value.trim();

    if (!latStr || !lonStr) {
        renderMessage(weatherOutput, "Please provide both latitude and longitude.");
        return;
    }

    const lat = parseFloat(latStr);
    const lon = parseFloat(lonStr);
    if (Number.isNaN(lat) || Number.isNaN(lon)) {
        renderMessage(weatherOutput, "Latitude and longitude must be valid numbers.");
        return;
    }*/

    renderMessage(dogOutput, "Loading good boy image…");

    try {
        const image = await getDogImage();
        //My assistant suggested this way to render the image but I think I can do it in css
        renderMessage(dogOutput,`<img src="${image}" alt="Random dog picture" style="max-width:100%;">`);
    } catch (err) {
        renderMessage(dogOutput, `Error: ${err.message}`);
    }
});
