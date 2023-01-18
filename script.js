let text = document.getElementById("textOutput");

// [input]Focus and Blur
let FocusBx = (NameTxt) => NameTxt.style.background = "yellow";
let BlurBx = (NameTxt) => NameTxt.style.background = "#fff";

let txtOut = () => {
    let Fn = document.forms["FORM"]["fname"].value;
    let Sn = document.forms["FORM"]["sname"].value;
    let Cld = document.getElementById("calendar");
    let Lan = document.getElementById("lang");
}