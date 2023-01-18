let text = document.getElementById("textOutput");

// [input]Focus and Blur
let FocusBx = (NameTxt) => NameTxt.style.background = "yellow";
let BlurBx = (NameTxt) => NameTxt.style.background = "#fff";

let txtOut = () => {
    let Fn = document.forms["FORM"]["fname"].value;
    let Sn = document.forms["FORM"]["sname"].value;
    let Cld = document.getElementById("calendar").value;
    let Lan = document.getElementById("lang").value;

    if(Fn != null || Fn != "", Sn != null || Sn != "", Cld) {
        let showLan = Lan != "unselect" ? Lan : "";
        text.style.color = "green";
        text.innerHTML = Fn + "," + Sn + "," + Cld + "," + showLan;
    } else {
        let alertFn = Fn == null || Fn == "" ? "Insert Name<br>" : "";
        let alertSn = Sn == null || Sn == "" ? "Insert Surname<br>" : "";
        let alertCld = Cld == "" ? "Insert Birth date<br>" : "";
        let alertLan = Lan == "unselect" ? "Select Language" : "";
        text.style.color = "red";
        text.innerHTML = alertFn + alertSn + alertCld + alertLan;
    }
}