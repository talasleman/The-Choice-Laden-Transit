
let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);

btn.onclick = function () {
    var audio = document.getElementById("sound").src = 'https://www.youtube.com/embed/zo3hXRd7q44?&autoplay=1';


    container.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 1000);


    var podcast =
        [{ pod1: 'https://open.spotify.com/episode/4Y6z42BNxsqaHcpPShOsbG', desc1: "Joe Rogan - #1330 - Bernie Sanders - Candidate for US President - Political Issues in the United States" },
        { pod1: 'https://open.spotify.com/episode/02G6G2tFE4yfu5FupMUCA2', desc1: "Joe Rogan - #974 - Megan Phelps-Roper - Social Media Activist - Freedom of Speeh, division, Hatred in religion and politics" },
        { pod1: 'https://open.spotify.com/episode/2uGE94NYug3uBsuyDVtyeu', desc1: "Joe Rogan - #737 - Lance Armstrong - Tour de France 7 times winner - Performance-enhancing drugs and its controversy" },
        { pod1: 'https://open.spotify.com/episode/1WtITGcwwZYQZHVJGciMJp', desc1: "Joe Rogan - #1109 - Matthew Walker - Sleep and dream specialist - Oversleep, importance of sleep, sleep patterns, healthy sleep" },
        { pod1: 'https://open.spotify.com/episode/7MaJD5vZsNSNrKQVEk5gbD', desc1: "Joe Rogan - #1368 - Edward Snowden - Former Intelligence agency employee - How did Edward Snowden manage to leak the National Agency's top-secret data in 2013" },
        { pod1: 'https://open.spotify.com/episode/3JGuLUtsJ32YBA7qI6IcsO', desc1: "Joe Rogan - #1054 - Dr.Rhonda Patrick - Health Specialist - Benefits of diet and exercise" },
        { pod1: 'https://open.spotify.com/episode/2elziB2q9eRqXbwSe3QYXK', desc1: "Joe Rogan - #1283 - Russell Brand - Comedian - Casual, funny talk" },
        { pod1: 'https://open.spotify.com/episode/0ZEDvQuPtAEBnXE37slSoX', desc1: "Joe Rogan - #1531 - Miley Cyrus - Singer-Songwriter - Authentic talk about Mileys' life" },
        { pod1: 'https://open.spotify.com/episode/1UEwPJtW37sZ3Y8ncykCDP?si=c-YuOvsRRhacAR-wsfJABA', desc1: "Joe Rogan - #1900 - Steve-O - Stunt Performer - Why Steve-O stopped being vegan" },
        { pod1: 'https://open.spotify.com/episode/6bAfaDJakoQ3bIxLjASyxH?si=RtApkWWkQwCd_bj_3JWXfw', desc1: "Joe Rogan - #1889 - Dr.Phil - Author and Psychologist - Dr.Phil show" },
        { pod1: 'https://open.spotify.com/episode/7Gg4Qi578G5SXoEtaLVVpx?si=T_XrNa3XRG6wUIK7UNKrqg', desc1: "Joe Rogan - #1315 - Bob Lazar & Jeremy Corbell - Physicist and Artist - Reverse engineering extraterrestrial technology in Area 51" },
        { pod1: 'https://open.spotify.com/episode/1R23aydtvvAFkAb5iCj0et?si=c006310665dc4b58', desc1: "Joe Rogan - #1258 - Jack Dorsey, Vijaya Gadde & Tim Pool - Computer Programmer, CEO of Twitter, Global lead - Twitter" },
        { pod1: 'https://open.spotify.com/episode/3LwOYeS2uNT1GP7rI2Kj98?si=0aa8a330b8204cbb', desc1: "Joe Rogan - #1006 - Jordan Peterson & Bret Weinstein - Pyschologist - Intellectual Dark Web" },
        { pod1: 'https://open.spotify.com/episode/2DqY7ozqwSXlsYP73atrFA?si=bc19ad795ff4450c', desc1: "Joe Rogan - #138 - Anthony Bourdain - Joe Rogan sits down with Anthony Bourdain" },
        { pod1: 'https://open.spotify.com/episode/38S004IeCWqwEscGoiPtgO?si=0f3f03ed2ada42e6', desc1: "Joe Rogan - #1891 - Duncan Trussell - Comedian and podcaster - Exploring consciousness" },
        { pod1: 'https://open.spotify.com/episode/3eyIb9FD8YomW1ExySieF0?si=973894adae084907', desc1: "Joe Rogan - #142 - Graham Hancock - Author - Theory of human Civilization 1" },
        { pod1: 'https://open.spotify.com/episode/28NjcnhgduoERiKLaIYO4x?si=ccc6c19afdc44436', desc1: "Joe Rogan - #1284 - Graham Hancock - Author - Theory of human Civilization 2" },
        { pod1: 'https://open.spotify.com/episode/2xvmTo09BFMd6tJfJPmmvT?si=4af28b9ed3d84080', desc1: "Joe Rogan - #1897 - Graham Hancock - Author - Theory of human Civilization 3" },
        { pod1: 'https://open.spotify.com/episode/6Ev4gmWsNrBn8gSPomXrhK?si=39f5eb13c36e420a', desc1: "Joe Rogan - #1521 - Josh Dubin & Jason Flom - Advocates - Eye-opening discussion about wrongfully convicted people" },
        { pod1: 'https://open.spotify.com/episode/2Ag30gtZuGQio0j1aM2tvt?si=7ea151918bc44237', desc1: "Joe Rogan - #1277 - Gabrielle Reece - Athletic Prowess - Determination, self-worth, parenting" },
        { pod1: 'https://open.spotify.com/episode/5N3DTJENpGqbRDFYalntkT?si=e227e47dc39e476e', desc1: "Joe Rogan - #1709 - Amanda Knox - Prisoner - Amanda was wrongfully convicted of the murder of her roomate and spent years in the Italian prison" },
        { pod1: 'https://open.spotify.com/episode/2hLQKOUBlYdMpdtNeos7xY?si=e2baa354f42c490b', desc1: "Lex Fridman - #167 - Saagar Enjeti - Politician - Politics, History and Power" },
        { pod1: 'https://open.spotify.com/episode/6ZxnMtVbiLWo86XZK8pyNf?si=a6a5649fc43d4497', desc1: "Lex Fridman - #161 - Jason Calacanis - Investor - Startups, Angel Investing, Tech, Capitalism and Friendship" },
        { pod1: 'https://open.spotify.com/episode/3DBNkrAY5sCIX2sqHpZ567?si=3a2a3115359a4e01', desc1: "Lex Fridman - #218 - Jaron Lanier - Computer Scientist - Vitrual Reality, Social Media and the future of humans and AI" },
        { pod1: 'https://open.spotify.com/episode/0uGLujDgVPl0w0oXS1GsxG?si=cfd4de7d89444222', desc1: "Lex Fridman - #185 - Sam Harris - Neuroscientist - Consciousness, free will, psychedelics, AI, UFOs and meaning" },
        { pod1: 'https://open.spotify.com/episode/5AFEcLmpxJNRAACESLgrxq?si=4b726ca44acf4b7e', desc1: "RadioLab - Colors - Where do colors come from? What colors actually are..." },
        { pod1: 'https://open.spotify.com/episode/2CanVDpZK79pThFA0S05SH?si=5fc89f6bbe524174', desc1: "WTF - #613 - Barack Obama - President - Colleges, race relations, comedians, gun violence, overcoming fear and fatherhood" },
        { pod1: 'https://open.spotify.com/episode/2ZRVxPgjm8aPRqYf1FA7WV?si=49ffca846e024f39', desc1: "Serial - #1 - The Alibi - True crime in 1999, a high-school senior suddenly disappears" },

        ];

    var rando = podcast[Math.floor(Math.random() * podcast.length)];


    setTimeout(() => {
        var link = document.getElementById("choice");
        link.setAttribute("href", rando.pod1); document.getElementById("desc").innerHTML = rando.desc1;
        document.getElementById("link").style.visibility = "visible";
    }, 5000);


}



