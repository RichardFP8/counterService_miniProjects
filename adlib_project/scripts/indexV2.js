"use strict";

window.onload = () => {

    document.getElementById("inlineAdlibFormOne").onclick = displayIWTBAA_form;

    // the button for the first adlib, once submitted, it'll display the final message with their input
    document.getElementById("IWTBAA_submitbutton").onclick = display_IWTBAAAdlibMessage;

    // similar to the first checkbox, the second checkbox executes to show the second adlib
    document.getElementById("inlineAdlibFormTwo").onclick = displayBFWAD_form;

    // similarly to the first adlib's button, this button will display the final message for the second adlib
    document.getElementById("BFWAD_submitbutton").onclick = display_BFWADAdlibMessage;

    // once the rightmost checkbox is clicked, display the third adlib
    document.getElementById("inlineAdlibFormThree").onclick = display_HTForm;

    // similarly to the first adlib's button, this button will display the final message for the second adlib
    document.getElementById("HT_submitbutton").onclick = display_HTAdlibMessage;
}


function displayIWTBAA_form() {
    const firstAdlibColumn = document.getElementById("firstAdlibColumn");
    if (firstAdlibColumn.classList.contains("d-none")) {
        firstAdlibColumn.className = "col-12 col-md-6 col-lg-4";
        document.getElementById("secondAdlibColumn").className = "d-none";
        document.getElementById("thirdAdlibColumn").className = "d-none";

    }
    else {
        firstAdlibColumn.className = "d-none";
        if(document.getElementById("display_adlib_message") !== null) document.getElementById("display_adlib_message").remove();
    }
}
function display_IWTBAAAdlibMessage() {
    // get all the input boxes that are inside of the parent element of the IWTBAA adlib
    const allIWTBAAInputs = document.getElementById("IWantToBeAnAstronaut_form").querySelectorAll("input");

    // this will seperate each of the lists of words used for this adlib
    let newInputs = [];

    // convert the input boxes into elements of an array-> then FOR EACH  of the elements(input boxes) of this array-> APPEND the value of that input box into another array called newInputs
    Array.from(allIWTBAAInputs).forEach(input => newInputs.push(input.value));
    let currentWord = -1;

    let adlibMessage = document.createElement("p");

    adlibMessage.innerHTML = `Instead of ${newInputs[++currentWord]} every day to an office, I want to ${newInputs[++currentWord]} to outer space on a ${newInputs[++currentWord]} for my job. I'd ${newInputs[++currentWord]} science experiments using ${newInputs[++currentWord]} and ${newInputs[++currentWord]}, and get to see ${newInputs[++currentWord]} holes and ${newInputs[++currentWord]} stars up close. Maybe I'd even get to meet an alien life form, with ${newInputs[++currentWord]} skin and ${newInputs[++currentWord]} ${newInputs[++currentWord]} and ${newInputs[++currentWord]}. When it's time to ${newInputs[++currentWord]} to Earth, I'll ${newInputs[++currentWord]} in a ${newInputs[++currentWord]} and land safely in a ${newInputs[++currentWord]}, where friends and family will ${newInputs[++currentWord]} me and welcome me home`;

    // IWTBAA_adlib.push(newInputs);
    document.getElementById("display_adlib_message").appendChild(adlibMessage);
    return false;
}

function displayBFWAD_form() {
    const secondAdlibColumn = document.getElementById("secondAdlibColumn");
    if (secondAdlibColumn.classList.contains("d-none")) {
        secondAdlibColumn.className = "col-12 col-md-6 col-lg-4";
        document.getElementById("firstAdlibColumn").className = "d-none";
        document.getElementById("thirdAdlibColumn").className = "d-none";
    }
    else {
        secondAdlibColumn.className = "d-none";
        if(document.getElementById("display_adlib_message") !== null) document.getElementById("display_adlib_message").remove();
    }
}
function display_BFWADAdlibMessage() {
    // get all the input boxes that are inside of the parent element of the IWTBAA adlib
    const allBFWADInputs = document.getElementById("bestFriendsWithADragon_form").querySelectorAll("input");

    // this will seperate each of the lists of words used for this adlib
    let newInputs = [];

    // convert the input boxes into elements of an array-> then FOR EACH  of the elements(input boxes) of this array-> APPEND the value of that input box into another array called newInputs
    Array.from(allBFWADInputs).forEach(input => newInputs.push(input.value));
    let currentWord = -1;

    const adlibMessage = document.createElement("p");
    adlibMessage.innerHTML = `Let me introduce you to my dragon friend, ${newInputs[++currentWord]}! They are ${newInputs[++currentWord]} years old, and their favorite food is ${newInputs[++currentWord]}. When I was little, I traveled to ${newInputs[++currentWord]} with my mom and dad, and met them when I was ${newInputs[++currentWord]}, because I'd been ${newInputs[++currentWord]} all day long. When ${newInputs[0]} flew right into ${newInputs[3]} and landed right next to me, my mom fainted! But I didn't. I thought my dragon friend looked ${newInputs[++currentWord]}, and I burst out laughing, and then they did too! We started talking about how we both like ${newInputs[++currentWord]} ${newInputs[++currentWord]} and ${newInputs[++currentWord]} so I started calling them ${newInputs[++currentWord]} and swapped phone numbers to stay in touch!`;

    document.getElementById("display_adlib_message").appendChild(adlibMessage);
    return false;
}
function display_HTForm() {
    const thirdAdlibColumn = document.getElementById("thirdAdlibColumn");
    if (thirdAdlibColumn.classList.contains("d-none")) {
        thirdAdlibColumn.className = "col-12 col-md-6 col-lg-4";
        document.getElementById("firstAdlibColumn").className = "d-none";
        document.getElementById("secondAdlibColumn").className = "d-none";
    }
    else {
        thirdAdlibColumn.className = "d-none";
        if(document.getElementById("display_adlib_message") !== null) document.getElementById("display_adlib_message").remove();    }
}
function display_HTAdlibMessage() {
    // get all the input boxes that are inside of the parent element of the IWTBAA adlib
    const allHTInputs = document.getElementById("halloweenTreats_form").querySelectorAll("input");

    // this will seperate each of the lists of words used for this adlib
    let newInputs = [];

    // convert the input boxes into elements of an array-> then FOR EACH  of the elements(input boxes) of this array-> APPEND the value of that input box into another array called newInputs
    Array.from(allHTInputs).forEach(input => newInputs.push(input.value));
    let currentWord = -1;

    const adlibMessage = document.createElement("p");
    adlibMessage.innerHTML = `Halloween is the best time to ${newInputs[++currentWord]}.The weather is ${newInputs[++currentWord]} and ${newInputs[++currentWord]} and you go door to door, saying 'Trick or Treat!' and people give you ${newInputs[++currentWord]} and ${newInputs[++currentWord]} to eat. This year, I will dress up as a ${newInputs[++currentWord]}, a ${newInputs[++currentWord]} ${newInputs[++currentWord]} ${newInputs[++currentWord]}, or maybe a ${newInputs[++currentWord]} ${newInputs[++currentWord]}. If someone says 'Trick!' instead of giving you a treat, you migh have to ${newInputs[++currentWord]} or ${newInputs[++currentWord]} to try and scare them into giving you a ${newInputs[++currentWord]} ${newInputs[++currentWord]} or a ${newInputs[++currentWord]} ${newInputs[++currentWord]} as a treat.`;

    document.getElementById("display_adlib_message").appendChild(adlibMessage);
    return false;
}