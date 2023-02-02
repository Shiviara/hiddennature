console.log("Navigating the bar...")

//Universal footer with copyright
const Footer = `
    <p>Copyright 2022 © Marta Zarebska</p>
`;

document.getElementById("copyright").innerHTML = Footer;

//Smooth scrolling
/*document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});*/

//Mobile nav bar
function myFunction() {
    var x = document.getElementById("expended");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

//"Universal nav bar", but now it's only for the front page
const NavBar = `
    <div class="nav">
        <a href="index.html" class="box1"><img src="img/home.png" alt="Home button" id="homeIcon"></a>
            <section id="expended">
                <a href="index.html" class="box2">Health</a>
                <a href="index.html" class="box3">Places</a>
                <a href="index.html" class="box4">Activities</a>
                <a href="index.html" class="box5">Contact</a>
            </section>
        <img src="img/hamburger.png" id="more" onclick="myFunction()" alt="Hamburger menu">
        <a href="404.html" class="box6">EN</a>
    </div>
`;

document.getElementById("navbar").innerHTML = NavBar;