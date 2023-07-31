
function password() {
    let naam = "bhupesh";
    setTimeout(() => {
        pasvd = prompt("ENTER THE PASSWORD");


        if (pasvd == naam) {

            console.log("hi");

            window.Location = "books I prefer/Smart Thinking Skills for Critical Understanding and Writing.pdf";

            // document.getElementById('link3').innerHTML = "books I prefer/Smart Thinking Skills for Critical Understanding and Writing.pdf"

            window.localStorage = "books I prefer/Smart Thinking Skills for Critical Understanding and Writing.pdf";

            window.location.href = "books I prefer/Smart Thinking Skills for Critical Understanding and Writing.pdf";

            window.location.replace = "books I prefer/Smart Thinking Skills for Critical Understanding and Writing.pdf";

            console.log("bye");
        }
    }, 1000);
}