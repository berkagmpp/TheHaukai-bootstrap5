// sticky nav manu with the hamburger icon
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
}

cancelBtn.onclick = () => {
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
}

window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// footer: copyright auto generation
let copyYear = "2021";
let now = new Date;
let curYear = now.getFullYear();
let credit = document.getElementById("text-muted");

if (copyYear == curYear) credit.innerHTML = copyYear + ", The HAUKAI";
else credit.innerHTML = copyYear + "-" + curYear + ", The HAUKAI";

// contact page: submit button click
if(document.getElementById("submit")){
    document.getElementById("submit").addEventListener("click", function(event) {
        event.preventDefault(); // prevent opening the URL
        let name = document.getElementById("cus_name");
        let email = document.getElementById("cus_email");
        let content = document.getElementById("cus_content");
        if (name.value == "" || email.value == "" || content.value == "") {
            alert("Please enter all boxes.");
            return false;
        } else {
            if (confirm ("Are you sure to submit?\n\n Name: " + name.value
                + "\n Email: " + email.value + "\n Content: \n" + content.value) == true) {
                    // below would be change for the backend integration
                    name.value = "";
                    email.value = "";
                    content.value = "";
                    alert("complete.");
            } else {
                return false;
            }
        }
    })
}

// modal
let modal = document.getElementById("myModal");

if(document.getElementById("myBtn")){
    document.getElementById("myBtn").onclick = function() {
        modal.style.display = "block";
    }      
}

if(document.getElementById("close")){
    document.getElementById("close").onclick = function() {
        modal.style.display = "none";
    }
}
