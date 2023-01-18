console.log("Navigating the bar...")

const NavBar = `
    <div class="nav">
        <a href="#title" class="box1"><img src="/img/home.png" alt="Home button" id="homeIcon"></a>
        <a href="#health" class="box2">Health</a>
        <a href="#places" class="box3">Places</a>
        <a href="#activities" class="box4">Activities</a>
        <a href="#contact" class="box5">Contact</a>
        <a href="404.html" class="box6">EN</a>
    </div>
`;

document.getElementById("navbar").innerHTML = NavBar;

const Footer = `
    <p style="color: #D1E1CD;">Copyright 2022 © Marta Zarebska</p>
`;

document.getElementById("copyright").innerHTML = Footer;