// window.open("books I prefer/Smart Thinking Skills for Critical Understanding and Writing.pdf"); MAIN 

// window.Location = "books I prefer/Smart Thinking Skills for Critical Understanding and Writing.pdf";

// document.getElementById('link3').innerHTML = "books I prefer/Smart Thinking Skills for Critical Understanding and Writing.pdf"

// window.localStorage = "books I prefer/Smart Thinking Skills for Critical Understanding and Writing.pdf" ;

// window.location.replace = "books I prefer/Smart Thinking Skills for Critical Understanding and Writing.pdf";

function password() {
    var btnId = event.target.id;
    let naam = "bhupesh";

    setTimeout(() => {

        pasvd = prompt("ENTER THE PASSWORD");


        if (pasvd == naam) {

            if (btnId == "link1") {
                window.open("books I prefer/Logic Made Easy How to Know When Language Deceives You.pdf");
            }

            if (btnId == "link2") {
                window.open("books I prefer/Smart Thinking Skills for Critical Understanding and Writing.pdf");
            }
            if (btnId == "link3") {
                window.open("books I prefer/Think Like a Rocket Scientist Simple Strategies You Can Use to Make Giant Leaps in Work and Life.pdf");
            }
        }

        else {
            alert("wrong password");
        }

    }, 1000);



}
function password1() {
    var btnId = event.target.id;
    let naam = "BHUPESH";

    setTimeout(() => {

        pasvd = prompt("ENTER THE PASSWORD");


        if (pasvd == naam) {

            if (btnId == "link4") {
                window.open("books I prefer/Who will Cry When You Die.pdf");
            }

            if (btnId == "link5") {
                window.open("books I prefer/Atomic Habits by James Clear.pdf");
            }
            if (btnId == "link6") {
                window.open("books I prefer/The-Monk-Who-Sold-His-Ferrari.pdf");
            }
        }

        else {
            alert("wrong password");
        }

    }, 1000);



}

function toggle() {
    if (servicescontainer2.style.display == "none") {
        servicescontainer2.style.display = "block";
    }

    else {
        servicescontainer2.style.display = "none";
    }
}