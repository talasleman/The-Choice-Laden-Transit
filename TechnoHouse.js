var body = document.getElementById("test");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    body.style.backgroundColor = getRandomColor();
}

setInterval(changeColor, 450);


let container = document.querySelector(".container");
let btn = document.getElementById("generate");
let number = Math.ceil(Math.random() * 1000);

btn.onclick = function () {

    number += Math.ceil(Math.random() * 1000);


    var techno =
        [
            { link1: 'https://www.youtube.com/watch?v=QHDRRxKlimY&t=3998s', desc1: 'Solomun at Theatre Antique in France for Cercle', img1: 'img1.png' },
            { link1: 'https://www.youtube.com/watch?v=bk6Xst6euQk&t=858s', desc1: 'Solomun Boiler Room DJ Set', img1: 'img2.png' },
            { link1: 'https://youtu.be/2h1h1JdaWGk', desc1: 'Nicolas Jaar - Essential Mix', img1: 'img3.png' },
            { link1: 'https://youtu.be/SGqg_ZzThDU', desc1: 'Black Coffee at Salle Wagram in Paris for Cercle', img1: 'img4.png' },
            { link1: 'https://youtu.be/MoyZRbodpWg', desc1: 'Keinemusik - Adam Port', img1: 'img5.png' },
            { link1: 'https://youtu.be/cDaepLDC0oE', desc1: 'Nicolas Jaar - Episode 33 - Part 2', img1: 'img6.png' },
            { link1: 'https://youtu.be/Wmxxp0jTwhs', desc1: 'HNNY Boiler Room Stockholm', img1: 'img7.png' },
            { link1: 'https://youtu.be/IUjWumGIqe8', desc1: 'Nicolas Jaar Boiler Room NYC', img1: 'img8.png' },
            { link1: 'https://youtu.be/b0SrmA01Qpk', desc1: 'Daft Punk - Essential Mix 1997', img1: 'img9.png' },
            { link1: 'https://youtu.be/-5EQIiabJvk', desc1: 'Kaytranada Boiler Room Montreal', img1: 'img10.png' },
            { link1: 'https://youtu.be/5vHRUsP20dQ', desc1: 'Maceo Plex Boiler Room Berlin DJ Set', img1: 'img11.png' },
            { link1: 'https://youtu.be/vy-k0FopsmY', desc1: 'Carl Cox Boiler Room Ibiza', img1: 'img12.png' },
            { link1: 'https://youtu.be/BcJCNLgEsHs', desc1: 'Nicolas Cruz Boiler Room', img1: 'img13.png' },
            { link1: 'https://youtu.be/mRfwdJx0NDE', desc1: 'David August Boiler Room', img1: 'img14.png' },
            { link1: 'https://youtu.be/c0-hvjV2A5Y', desc1: 'Fred Again... Boiler Room', img1: 'img15.png' },
            { link1: 'https://youtu.be/m_qewI-1cEs', desc1: 'Honey Dijon Boiler Room', img1: 'img16.png' },
            { link1: 'https://youtu.be/uynCeLheCPc', desc1: 'Bonobo Boiler Room', img1: 'img17.png' },
            { link1: 'https://youtu.be/n-B7IOEfOdY', desc1: 'Tala House Mix', img1: 'img18.png' },
            { link1: 'https://youtu.be/wamL0A9Qzxg', desc1: 'BLACK COFFEE spiritual DJ set', img1: 'img19.png' },
            { link1: 'https://youtu.be/m_GoB8SFOeM', desc1: 'Sunset Deep House Mix', img1: 'img20.png' },
            { link1: 'https://www.youtube.com/watch?v=9ba3coWgSPg', desc1: 'Solomun Cocaine Set', img: 'img21.png' }

        ];

    var rando = techno[Math.floor(Math.random() * techno.length)];

    var link = document.getElementById("link");

    link.setAttribute("href", rando.link1);
    document.getElementById("link").innerHTML = rando.desc1;

    document.getElementById("image").src = rando.img1;

    document.getElementById("link").style.visibility = "visible";

    document.getElementById("image").style.visibility = "visible";



}
