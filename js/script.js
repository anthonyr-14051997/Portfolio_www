let btnfr = document.querySelector('#fr');
let btnen = document.querySelector('#en');

let card = document.querySelectorAll('.card__image--inner');

/* fin anime.js */

/* effet click particules langue */



/* anime particles */

/* fin anime particles */

/* scroll */

/* fin de scroll */

/* scale */

let projetsbtn = document.querySelector('#portfolio-link');
let projets = document.querySelector('#portfolio');

/* changez couleurs d'action */

let change = document.querySelectorAll('.change');

let brek1 = document.querySelector('#breaker');
let brek2 = document.querySelector('#breaker-two');

let btncv = document.querySelector('.dwnld');

/* dark_mod */
let html = document.querySelector('.html');
let contact = document.querySelector('#contact');
let body = document.querySelector('body');
let header = document.querySelector('#header');
let about = document.querySelector('#about');
let blog = document.querySelector('#blog');
let lab = document.querySelector('#lab');
let git = document.querySelector('.git');
let link = document.querySelector('.link');
let mail_dark = document.querySelector('.mail_dark');
let call_dark = document.querySelector('.call_dark');
//projets  ||  //boxsize

let dark = document.querySelector('.dark');
let light = document.querySelector('.light');

let colorbase = document.querySelector('.colorbase');

let backcolor = document.querySelector('.backcolor');
let textcolor = document.querySelector('.textcolor');
let loadercolor = document.querySelector('.loadercolor');
let navcolor = document.querySelector('.navcolor');
let grey = document.querySelector('.grey');
let black = document.querySelector('.black');
let progcolor = document.querySelector('.progcolor');

let blue = document.querySelector('.blue');
let vert = document.querySelector('.vert');
let rouge = document.querySelector('.rouge');
let white = document.querySelector('.white');
let base = document.querySelector('.base');

const logo_nav = document.querySelector('.logo_nav');
const logo_about = document.querySelector('.logoabout');
const logo_nav_first = document.querySelector('.logo_nav_first');

btnfr.addEventListener('click', function() {
        window.location = "../portfolio_www/index.html"
});
btnen.addEventListener('click', function() {
        window.location = "../portfolio_www/index_en.html"
});

/* anime.js */

/* card */



projetsbtn.addEventListener('click', function () {
        projets.style.animation = "ease-in 1s scaling";
})

/* fin de scale */



dark.addEventListener('click', () => {
        document.documentElement.style.setProperty('--dark_first','#171717');
        document.documentElement.style.setProperty('--dark_txt','whitesmoke');
        git.src = "images/img_perso/github.svg";
        link.src = "images/linkedin logo.svg";
        mail_dark.src = "images/mail.svg";
        call_dark.src = "images/call.svg";
        logo_about.src = "images/img_perso/logo-white.svg";
        logo_nav.src = "images/img_perso/logo-white.svg";
        logo_nav_first.src = "images/img_perso/logo-white.svg";
})
light.addEventListener('click', () => {
        document.documentElement.style.setProperty('--dark_first','whitesmoke');
        document.documentElement.style.setProperty('--dark_txt','#171717');
        git.src = "images/img_perso/git_dark.svg";
        link.src = "images/img_perso/in_dark.svg";
        mail_dark.src = "images/img_perso/mail_dark.svg";
        call_dark.src = "images/img_perso/tel_dark.svg";
        logo_about.src = "images/img_perso/logo-black.svg";
        logo_nav.src = "images/img_perso/logo-black.svg";
        logo_nav_first.src = "images/img_perso/logo-black.svg";
})



blue.addEventListener('click', () => {
        change.forEach(element => {
                element.classList.add("aqua");
                element.classList.remove("red");
                element.classList.remove("green");
                element.classList.remove("blanc");
                element.classList.remove("colorbase");
        });
        
        brek1.classList.add("baqua");
        brek1.classList.remove("bred");
        brek1.classList.remove("bgreen");
        brek1.classList.remove("bblanc");
        brek1.classList.remove("bcolorbase");

        brek2.classList.add("baqua");
        brek2.classList.remove("bred");
        brek2.classList.remove("bgreen");
        brek2.classList.remove("bblanc");
        brek2.classList.remove("bcolorbase");

        btncv.classList.add("baqua");
        btncv.classList.remove("bred");
        btncv.classList.remove("bgreen");
        btncv.classList.remove("bblanc");
        btncv.classList.remove("bcolorbase");

        document.documentElement.style.setProperty('--couleur_base','aqua');

})
rouge.addEventListener('click', () => {
        change.forEach(element => {
                element.classList.add("red");
                element.classList.remove("aqua");
                element.classList.remove("green");
                element.classList.remove("blanc");
                element.classList.remove("colorbase");
        });
        
        brek1.classList.add("bred");
        brek1.classList.remove("baqua");
        brek1.classList.remove("bgreen");
        brek1.classList.remove("bblanc");
        brek1.classList.remove("bcolorbase");

        brek2.classList.add("bred");
        brek2.classList.remove("baqua");
        brek2.classList.remove("bgreen");
        brek2.classList.remove("bblanc");
        brek2.classList.remove("bcolorbase");

        btncv.classList.add("bred");
        btncv.classList.remove("baqua");
        btncv.classList.remove("bgreen");
        btncv.classList.remove("bblanc");
        btncv.classList.remove("bcolorbase");

        document.documentElement.style.setProperty('--couleur_base','crimson');
        
})
vert.addEventListener('click', () => {
        change.forEach(element => {
                element.classList.add("green");
                element.classList.remove("red");
                element.classList.remove("aqua");
                element.classList.remove("blanc");
                element.classList.remove("colorbase");
        });
        
        brek1.classList.add("bgreen");
        brek1.classList.remove("bred");
        brek1.classList.remove("baqua");
        brek1.classList.remove("bblanc");
        brek1.classList.remove("bcolorbase");

        brek2.classList.add("bgreen");
        brek2.classList.remove("bred");
        brek2.classList.remove("baqua");
        brek2.classList.remove("bblanc");
        brek2.classList.remove("bcolorbase");

        btncv.classList.add("bgreen");
        btncv.classList.remove("bred");
        btncv.classList.remove("baqua");
        btncv.classList.remove("bblanc");
        btncv.classList.remove("bcolorbase");

        document.documentElement.style.setProperty('--couleur_base','greenyellow');
        
})
white.addEventListener('click', () => {
        change.forEach(element => {
                element.classList.add("blanc");
                element.classList.remove("red");
                element.classList.remove("aqua");
                element.classList.remove("green");
                element.classList.remove("colorbase");
        });
        
        brek1.classList.add("bblanc");
        brek1.classList.remove("bred");
        brek1.classList.remove("baqua");
        brek1.classList.remove("bgreen");
        brek1.classList.remove("bcolorbase");

        brek2.classList.add("bblanc");
        brek2.classList.remove("bred");
        brek2.classList.remove("baqua");
        brek2.classList.remove("bgreen");
        brek2.classList.remove("bcolorbase");

        btncv.classList.add("bblanc");
        btncv.classList.remove("bred");
        btncv.classList.remove("baqua");
        btncv.classList.remove("bgreen");
        btncv.classList.remove("bcolorbase");
        
        document.documentElement.style.setProperty('--couleur_base','whitesmoke');
        
})
base.addEventListener('click', () => {
        change.forEach(element => {
                element.classList.add("colorbase");
                element.classList.remove("red");
                element.classList.remove("aqua");
                element.classList.remove("blanc");
                element.classList.remove("green");
        });
        
        brek1.classList.add("bcolorbase");
        brek1.classList.remove("bred");
        brek1.classList.remove("baqua");
        brek1.classList.remove("bblanc");
        brek1.classList.remove("bgreen");

        brek2.classList.add("bcolorbase");
        brek2.classList.remove("bred");
        brek2.classList.remove("baqua");
        brek2.classList.remove("bblanc");
        brek2.classList.remove("bgreen");

        btncv.classList.add("bcolorbase");
        btncv.classList.remove("bred");
        btncv.classList.remove("baqua");
        btncv.classList.remove("bblanc");
        btncv.classList.remove("bgreen");
        
        document.documentElement.style.setProperty('--couleur_base','#00fca8');
        
})

/* fin de changez couleur d'action  */

const floatAnimation = () => {
        const tlCan = new TimelineMax({repeat:-1});
        /*Can Animation*/
       tlCan
           //move top left
       .to('.can > img', 3, { y:'-=30', x:'+=20',  rotation:'-=5', ease:Power1.easeInOut})
       
           //move down right
       .to('.can > img', 2, { y:'+=30', x:'-=20', rotation:'-=5', ease:Power1.easeInOut})
       
       
       .to('.can > img', 3, { y:'-=20',  rotation:'+=5', ease:Power1.easeInOut})
       
       .to('.can > img', 3, { y:'+=20',  rotation:'+=5', ease:Power1.easeInOut})
       
       
       .to('.can > imgn', 3, { y:'-=50', ease:Power1.easeInOut})
          
       .to('.can > img', 3, { y:'+=50', ease:Power1.easeInOut})
       
       
       .to('.can > img', 3, { y:'-=30', ease:Power1.easeInOut})
          
       .to('.can > img', 3, { y:'+=30', ease:Power1.easeInOut})
       
       
       .to('.can > img', 2, { y:'-=30', ease:Power1.easeInOut})
          
       .to('.can > img', 2, { y:'+=30', ease:Power1.easeInOut})
 
     TweenLite.to(tlCan, 27, {ease:Power1.easeInOut})

   }
   floatAnimation();

/* scroll pos animation */

const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
                const square = entry.target.querySelector('.square');

                if (entry.isIntersecting) {
                square.classList.add('square-animation');
                return; // if we added the class, exit the function
                }

                // We're not intersecting, so remove the class!
                square.classList.remove('square-animation');
        });
});

observer.observe(document.querySelector('.square-wrapper'));

const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
                const square2 = entry.target.querySelector('.square2');

                if (entry.isIntersecting) {
                square2.classList.add('square-animation2');
                return; // if we added the class, exit the function
                }

                // We're not intersecting, so remove the class!
                square2.classList.remove('square-animation2');
        });
});

observer2.observe(document.querySelector('.square-wrapper2'));

const observer3 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
                const square3 = entry.target.querySelector('.square3');

                if (entry.isIntersecting) {
                square3.classList.add('square-animation3');
                return; // if we added the class, exit the function
                }

                // We're not intersecting, so remove the class!
                square3.classList.remove('square-animation3');
        });
});

observer3.observe(document.querySelector('.square-wrapper3'));

/* validation du mail */

const form = document.querySelector('form');

form.addEventListener('submit', e => {
    
    e.preventDefault();

    const formData = new FormData(form);

    fetch('./php/mail.php', {
        method: 'POST',
        body: formData
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        var name =  document.getElementById('name').value;
        if (name == "") {
                document.querySelector('.status').innerHTML = "Name cannot be empty";
        return false;
        }
        var email =  document.getElementById('email').value;
        if (email == "") {
                document.querySelector('.status').innerHTML = "Email cannot be empty";
        return false;
        } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
                document.querySelector('.status').innerHTML = "Email format invalid";
        return false;
        }
        }
        var subject =  document.getElementById('subject').value;
        if (subject == "") {
                document.querySelector('.status').innerHTML = "Subject cannot be empty";
        return false;
        }
        var message =  document.getElementById('message').value;
        if (message == "") {
                document.querySelector('.status').innerHTML = "Message cannot be empty";
        return false;
        }
        document.querySelector('.status').innerHTML = "Sending...";

        if (data.validation == "Email envoyé") {
                form.reset();
                document.querySelector('.status').innerHTML = "Mail envoyé, merci !";
        }
    })
})
/* fin de validation mail */

/* api medium */

const blog_ = document.querySelector('.blog_')

let url = "https://mediumpostapi.herokuapp.com/?usermedium=aruby9905";

fetch(url)
.then((resp) => resp.json())
.then((data) => {
        console.log(data);
        for (let index = 0; index < data.dataMedium.length; index++) {
                create_blog(data.dataMedium[index]);
        }

        function create_blog(index){
                blog_titre(index.title)
                blog_imag(index.image)
                blog_texte(index.description)
                blog_date(index.date)
                blog_link(index.link)
        }

        function blog_titre(titre){
                if (titre == "") {
                        let h2 = document.createElement('h2')
                        blog_.appendChild(h2)
                        let h2_text = document.createTextNode("Pas de titre...")
                        h2.appendChild(h2_text)
                } else {
                        let h2 = document.createElement('h2')
                        blog_.appendChild(h2)
                        let h2_text = document.createTextNode(titre)
                        h2.appendChild(h2_text)
                }
        }

        function blog_imag(source){
                if (source == "https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=53431a36f8f5") {
                        let blog_imag = document.createElement('p')
                        blog_.appendChild(blog_imag)
                        let img_text = document.createTextNode('')
                        blog_imag.appendChild(img_text)
                } else {
                        let blog_imag = document.createElement('img')
                        blog_.appendChild(blog_imag)
                        blog_imag.src = source
                }
        }

        function blog_texte(text){
                if (text == "") {
                        let blog_descri = document.createElement('p')
                        blog_.appendChild(blog_descri)
                        let descri_text = document.createTextNode("Pas de description...")
                        blog_descri.appendChild(descri_text)
                } else {
                        let blog_descri = document.createElement('p')
                        blog_.appendChild(blog_descri)
                        let descri_text = document.createTextNode(text)
                        blog_descri.appendChild(descri_text)
                }
                
        }

        function blog_date(date){
                if (date == "") {
                        let blog_date = document.createElement('p')
                        blog_.appendChild(blog_date)
                        let date_text = document.createTextNode("Pas de description...")
                        blog_date.appendChild(date_text)
                } else {
                        let blog_date = document.createElement('p')
                        blog_.appendChild(blog_date)
                        let date_text = document.createTextNode("Parue le : " + date)
                        blog_date.appendChild(date_text)
                }
        }

        function blog_link(link){
                if (link == "") {
                        let blog_link = document.createElement('a')
                        blog_.appendChild(blog_link)
                        blog_link.href = "#"
                        let link_text = document.createTextNode("Pas de lien ...")
                        blog_link.appendChild(link_text)
                        blog_link.classList.add('blog_section')
                        blog_link.setAttribute('target', 'blank_')
                } else {
                        let blog_link = document.createElement('a')
                        blog_.appendChild(blog_link)
                        blog_link.href = link
                        let link_text = document.createTextNode("Lien de l'article")
                        blog_link.appendChild(link_text)
                        blog_link.classList.add('blog_section')
                        blog_link.setAttribute('target', 'blank_')
                }
                
        }
})


