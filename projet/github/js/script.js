const dark = document.querySelector('.dark');
const light = document.querySelector('.light');
let titre = document.querySelector('.title');
let lum = document.querySelector('.lum');
let sun = document.querySelector('.sun');
let pseudo = document.querySelector('.pseudo');
let bio = document.querySelector('.bio');
let date = document.querySelector('.date');
let repo = document.querySelector('.repository');
let reponb = document.querySelector('.reposnb');
let wers = document.querySelector('.wers');
let wersnb = document.querySelector('.wersnb');
let wing = document.querySelector('.wing');
let wingnb = document.querySelector('.wingnb');
let position = document.querySelector('.position');
let imgposi = document.querySelector('.imgposi');
let lien = document.querySelector('.lien');
let imglink = document.querySelector('.imglink');
let tweet = document.querySelector('.tweet');
let imgtweet = document.querySelector('.imgtweet');
let agit = document.querySelector('.agit');
let imgagit = document.querySelector('.imgagit');
let body = document.querySelector('body');
let search = document.querySelector('.search');
let block = document.querySelector('.block');
let infosgit = document.querySelector('.infosgit');
let main = document.querySelector('main');
let yep = document.querySelector('.yep');

window.addEventListener('load', function (){
    dark.style.display = "flex";
})

dark.addEventListener('click', sombre);
light.addEventListener('click', clair);

function sombre() {
    dark.style.display = "none";
    light.style.display = "flex";
    titre.style.color = "#ffffff";
    sun.style.color = "#ffffff";
    pseudo.style.color = "#ffffff";
    bio.style.color = "#ffffff";
    date.style.color = "#ffffff";
    repo.style.color = "#ffffff";
    reponb.style.color = "#ffffff";
    wers.style.color = "#ffffff";
    wersnb.style.color = "#ffffff";
    wing.style.color = "#ffffff";
    wingnb.style.color = "#ffffff";
    position.style.color = "#ffffff";
    imgposi.style.color = "#ffffff";
    lien.style.color = "#ffffff";
    imglink.style.color = "#ffffff";
    tweet.style.color = "#ffffff";
    imgtweet.style.color = "#ffffff";
    agit.style.color = "#ffffff";
    imgagit.style.color = "#ffffff";
    body.style.backgroundColor = "#141D2F";
    search.style.backgroundColor = "#1E2A47";
    block.style.backgroundColor = "#1E2A47";
    infosgit.style.backgroundColor = "#141D2F";
    main.style.backgroundColor = "#141D2F";
    yep.style.color = "#ffffff";
    yep.classList.add("yep2");
    yep.classList.remove("yep3");
}

function clair() {
    dark.style.display = "flex";
    light.style.display = "none";
    titre.style.color = "#2B3442";
    sun.style.color = "#2B3442";
    pseudo.style.color = "#2B3442";
    bio.style.color = "#2B3442";
    date.style.color = "#2B3442";
    repo.style.color = "#2B3442";
    reponb.style.color = "#2B3442";
    wers.style.color = "#2B3442";
    wersnb.style.color = "#2B3442";
    wing.style.color = "#2B3442";
    wingnb.style.color = "#2B3442";
    position.style.color = "#2B3442";
    imgposi.style.color = "#2B3442";
    lien.style.color = "#2B3442";
    imglink.style.color = "#2B3442";
    tweet.style.color = "#2B3442";
    imgtweet.style.color = "#2B3442";
    agit.style.color = "#2B3442";
    imgagit.style.color = "#2B3442";
    body.style.backgroundColor = "#F6F8FF";
    search.style.backgroundColor = "#FEFEFE";
    block.style.backgroundColor = "#FEFEFE";
    infosgit.style.backgroundColor = "#F6F8FF";
    main.style.backgroundColor = "#F6F8FF";
    yep.style.color = "#222731";
    yep.classList.remove("yep2");
    yep.classList.add("yep3");
}

let btn = document.querySelector('button');
let icon = document.querySelector('.icon');
let apseudo = document.querySelector('.apseudo');
let posite = document.querySelector('.position');

let dato = {
    "login": "octocat",
    "id": 583231,
    "node_id": "MDQ6VXNlcjU4MzIzMQ==",
    "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/octocat",
    "html_url": "https://github.com/octocat",
    "followers_url": "https://api.github.com/users/octocat/followers",
    "following_url": "https://api.github.com/users/octocat/following{/other_user}",
    "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
    "organizations_url": "https://api.github.com/users/octocat/orgs",
    "repos_url": "https://api.github.com/users/octocat/repos",
    "events_url": "https://api.github.com/users/octocat/events{/privacy}",
    "received_events_url": "https://api.github.com/users/octocat/received_events",
    "type": "User",
    "site_admin": false,
    "name": "The Octocat",
    "company": "@github",
    "blog": "https://github.blog",
    "location": "San Francisco",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 8,
    "followers": 4763,
    "following": 9,
    "created_at": "2011-01-25T18:44:36Z",
    "updated_at": "2022-01-24T15:08:43Z"
  }
            
let api = "https://api.github.com/users/";

btn.addEventListener('click', log);
/* yep.addEventListener('keyup', entrer); */

function log(e) {
    e.preventDefault();

    let yepa = document.querySelector('.yep').value;

    let originalName = yepa.split(' ').join('');
    
    fetch(api + yepa)
    .then((result) => result.json())
    .then((data) => {
        let nop = document.querySelector('.nop');
        console.log(data);
        
        
        if (data.message) {
            nop.style.display = "block";
            nop.innerHTML = "No results";
        } else {
            let dat_at = new Date (data.created_at);
            console.log(dat_at);
            let jour = dat_at.getDate();
            let mois = dat_at.getMonth();
            let anne = dat_at.getFullYear();
            let moislettre = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
            /* let datat = dat_at.substr(-4, [10]);
            console.log(datat); */
            date.innerHTML = "Joined " + jour + " " + moislettre[mois]  + " " + anne;
            console.log(date);

            pseudo.innerHTML = data.name;
            bio.innerHTML = data.bio;
            if (data.bio == null) {
                bio.innerHTML = "This profile has no bio";
            }

            reponb.innerHTML = data.public_repos;
            if (data.public_repos == null) {
                reponb.innerHTML = "0";
            }

            wersnb.innerHTML = data.followers;
            if (data.followers == null) {
                wersnb.innerHTML = "0";
            }

            wingnb.innerHTML = data.following;
            if (data.following == null) {
                wingnb.innerHTML = "0";
            }

            apseudo.innerHTML = "@" + data.login;


            posite.innerHTML = data.location;
            if (data.location == null) {
                posite.innerHTML = "Not available";
                
            }

            lien.innerHTML = data.blog;
            if (data.blog == null) {
                lien.innerHTML = "Not available";
                
            }

            tweet.innerHTML = data.twitter_username;
            if (data.twitter_username == null) {
                tweet.innerHTML = "Not available";
            } else {
                tweet.style.opacity = "1";
            }

            agit.innerHTML = data.company;
            if (data.company == null) {
                agit.innerHTML = "Not available";
            }
            
            let iconsrc = icon.getAttribute('src');
            let iconurl = data.avatar_url;
            iconsrc = icon.setAttribute('src', iconurl);
            
            icon.innerHTML = iconsrc;
            

            if (iconurl == null) {
                let icondef = document.querySelector('.icon').scr;
                icon.innerHTML = icon.setAttribute('src', icondef);
            }
        }
    })
}

/*

anthonyr-14051997

data.(login, id, node_id ...)

{
  "message": "Not Found",
  "documentation_url": "https://docs.github.com/rest/reference/users#get-a-user"
}


 */