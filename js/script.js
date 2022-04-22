let btnfr = document.querySelector('#fr');
let btnen = document.querySelector('#en');

let fr = document.querySelectorAll('.fr');
let en = document.querySelectorAll('.en');

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

/* let btnfull = document.querySelector('.full');
let btnbox = document.querySelector('.box');
let boxsize = document.querySelector('.boxsize'); */

btnfr.addEventListener('click', function() {
        langue(this.id)
});
btnen.addEventListener('click', function() {
        langue(this.id)
});

function langue(id) {
        console.log('cc');
        console.log(id);
        if (id == "en") {
                console.log('cc1');
                fr.forEach(element => {
                        element.style.display = "none";
                });
                en.forEach(element => {
                        element.style.display = "block";
                });

        } else if (id == "fr") {
                console.log('cc2');
                fr.forEach(element => {
                        element.style.display = "block";
                });
                en.forEach(element => {
                        element.style.display = "none";
                });
        } else {
                console.log('cc3');
                fr.forEach(element => {
                        element.style.display = "block";
                });
                en.forEach(element => {
                        element.style.display = "none";
                });
        }
}

langue();

/* anime.js */

/* btn langue */

btnfr.addEventListener('click', () => {
        animfr.play();
        btnen.style.background = "whitesmoke";
})
btnen.addEventListener('click', () => {
        animen.play();
        btnfr.style.background = "whitesmoke";
})

let animfr = anime({
        targets: '#fr',
        autoplay: false,
        width: {
                value: ['-=20px', '+=20px']
        },
        rotate: {
                value: '+=2turn'
        },
        duration: 1800,
        easing: 'easeInOutSine',
        background: 'rgb(0, 252, 168)'
});
let animen = anime({
        targets: '#en',
        autoplay: false,
        width: {
                value: ['-=20px', '+=20px']
        },
        rotate: {
                value: '+=2turn'
        },
        duration: 1800,
        easing: 'easeInOutSine',
        background: 'rgb(0, 252, 168)'
});

/* card */



projetsbtn.addEventListener('click', function () {
        projets.style.animation = "ease-in 1s scaling";
})

/* btnfull.addEventListener('click', () => {
        boxsize.style.boxShadow = "0px 0px 0px 0px black";
        btnbox.style.background = "whitesmoke";
        animfull.play();
})
btnbox.addEventListener('click', () => {
        boxsize.style.boxShadow = "0px 0px 20px 20px black";
        btnfull.style.background = "whitesmoke";
        animbox.play();
})

let animbox = anime({
        targets: '.box',
        autoplay: false,
        width: {
                value: ['-=20px', '+=20px']
        },
        rotate: {
                value: '+=2turn'
        },
        duration: 1800,
        easing: 'easeInOutSine',
        background: 'rgb(0, 252, 168)'
});
let animfull = anime({
        targets: '.full',
        autoplay: false,
        width: {
                value: ['-=20px', '+=20px']
        },
        rotate: {
                value: '+=2turn'
        },
        duration: 1800,
        easing: 'easeInOutSine',
        background: 'rgb(0, 252, 168)'
}); */
/* fin de scale */



dark.addEventListener('click', () => {
        document.documentElement.style.setProperty('--dark_first','#171717');
        document.documentElement.style.setProperty('--dark_txt','whitesmoke');
        git.src = "images/img_perso/github.png";
        link.src = "images/linkedin logo.png";
        mail_dark.src = "images/mail.png";
        call_dark.src = "images/call.png";
        logo_about.src = "images/img_perso/logo-white.svg";
        logo_nav.src = "images/img_perso/logo-white.svg";
        logo_nav_first.src = "images/img_perso/logo-white.svg";
        /* boxsize.style.boxShadow = "whitesmoke"; */
})
light.addEventListener('click', () => {
        document.documentElement.style.setProperty('--dark_first','whitesmoke');
        document.documentElement.style.setProperty('--dark_txt','#171717');
        git.src = "images/img_perso/git_dark.png";
        link.src = "images/img_perso/in_dark.png";
        mail_dark.src = "images/img_perso/mail_dark.png";
        call_dark.src = "images/img_perso/tel_dark.png";
        logo_about.src = "images/img_perso/logo-black.svg";
        logo_nav.src = "images/img_perso/logo-black.svg";
        logo_nav_first.src = "images/img_perso/logo-black.svg";
        /* boxsize.style.boxShadow = "black"; */
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



/* validation du mail */
/* function validateForm() {
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
}
document.getElementById('status').innerHTML = "Sending...";
formData = {
  'name': $('input[name=name]').val(),
  'email': $('input[name=email]').val(),
  'subject': $('input[name=subject]').val(),
  'message': $('textarea[name=message]').val()
}; */

const form = document.querySelector('form');

form.addEventListener('submit', e => {
    
        e.preventDefault();

        

    const formData = new FormData(form);

    fetch('../php/mail.php', {
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
    })

})
/* fin de validation mail */

/* api medium */

let blog_title = document.querySelector('.blog_title');
let blog_img = document.querySelector('.blog_img');
let blog_date = document.querySelector('.blog_date');
let blog_descri = document.querySelector('.blog_descri');

let url = "https://mediumpostapi.herokuapp.com/?usermedium=aruby9905";

fetch(url)
.then((resp) => resp.json())
.then((data) => {
    console.log(data);
    let article_un = data.dataMedium[0];
    let article_deux = data.dataMedium[1];
    let b_title = document.createTextNode(article_deux.title);
    blog_title.appendChild(b_title);
    let b_date = document.createTextNode(article_deux.date);
    blog_date.appendChild(b_date);
    let b_descri = document.createTextNode(article_deux.descritpion);
    blog_descri.appendChild(b_descri);
    let b_img = article_deux.image;
    blog_img.src=b_img;
})