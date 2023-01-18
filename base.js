console.log("Navigating the bar...")

const NavBar = `
    <div class="nav">
        <a href="index.html" class="box1"><img src="/img/home.png" alt="Home button" id="homeIcon"></a>
        <a href="health.html" class="box2">Health</a>
        <a href="places.html" class="box3">Places</a>
        <a href="activities.html" class="box4">Activities</a>
        <a href="contact.html" class="box5">Contact</a>
        <a href="404.html" class="box6">EN</a>
    </div>
`;

document.getElementById("navbar").innerHTML = NavBar;

const Footer = `
    <p style="color: #D1E1CD;">Copyright 2022 © Marta Zarebska</p>
`;

document.getElementById("copyright").innerHTML = Footer;