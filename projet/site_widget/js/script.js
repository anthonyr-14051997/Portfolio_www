/* heure */

function affichZero(nombre) {
	// cette fonction prend en paramètre un nombre
	// si ce nombre est inférieur à 10, on affiche 0 + ce nombre
	// Ex: il est 07h00
	return nombre < 10 ? '0' + nombre : nombre;
	}
	function dateEtHeure() {
	// Cette fonction fait deux choses :
	// 1 - Elle construit une constante avec l'objet Date()
	// qui renvoie (année, mois, jour, heure, minutes, seconde, millisecondes)
	// tout ça est dans l'objet infos
	 
	const infos = new Date();
	 
	// 2 - La fonction attribue du texte au div id="heure_exacte"
	// ce texte n'est autre que l'heure contenue dans l'objet infos
	// on ne souhaite afficher que l'heure et les minutes avec infos.getHours()
	// et infos.getMinutes(), On Sépare par ":" Ex: il est 07:00.
	 
	document.getElementById('heure_exacte').innerHTML = ' ' + affichZero(infos.getHours()) + ':' + affichZero(infos.getMinutes());
	}// Fin fonction dateEtHeure
	 
	// Pour actualiser l'heure chaque minutes, on rappelle la fonction dateEtHeure()
	// toutes les 100 millisecondes, donc toutes les secondes
	window.onload = function() {
	setInterval("dateEtHeure()", 100);
};

/* juste prix */

var prix = 0;
var secondes = 0;
var paris = null;
var isPlay = true;
var prixMax = 20;

$('document').ready(function(){
	
	$('.prixMax').html(prixMax);
	
	$('#commencer').click(function() {
		
		isPlay = true;
		secondes = 30;
		$('.chrono').html(secondes);
		$('.secondes').html('Secondes');
		prix = Math.floor(Math.random() * prixMax);
		$('#paris').css({'visibility': 'visible', 'opacity': '1'});
		setTimeout(function() {$('#nombre').focus()}, 100);
		$('#nombre').val('');
		
		var chrono = setInterval(function(){
		if (secondes == 0) {
			isPlay = false;
			clearInterval(chrono);
			$('.reponse').html('Perdu !');
			$('#paris').css({'visibility': 'hidden', 'opacity': '0'});
		}
		else if (isPlay) {
			secondes--;
			$('.chrono').html(secondes);
			if (secondes == 1) {
				$('.secondes').html('Seconde');
			}
		}
		else {
			clearInterval(chrono);
			$('#paris').css({'visibility': 'hidden', 'opacity': '0'});
		}
		}, 1000);
	});
	
	$('#paris').submit(function(event) {
		if (isPlay) {
		paris = $('#nombre').val();
		
		if (paris == prix) {
			isPlay = false;
			$('.reponse').html('Gagné !');
		}
		else if (paris < prix) {
			$('.reponse').html('Plus grand !');
		}
		else {
			$('.reponse').html('Plus petit !');
		}
		
		$('#nombre').val('');
		}
		event.preventDefault();
	});
	
});

/* compteur de carac */

let widget7 = document.getElementById('count');

document.getElementById('zoneTexte').addEventListener('keyup', function() {
	document.getElementById('caractere').innerHTML = zoneTexte.value.length;
});

/* generateur de mdp */

function getRandomNum(lbound, ubound) {
	return (Math.floor(Math.random() * (ubound - lbound)) + lbound);
	}
	function getRandomChar(number, lower, upper, other, extra) {
	var numberChars = "0123456789";
	var lowerChars = "abcdefghijklmnopqrstuvwxyz";
	var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var otherChars = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/? ";
	var charSet = extra;
	if (number == true)
		charSet += numberChars;
	if (lower == true)
		charSet += lowerChars;
	if (upper == true)
		charSet += upperChars;
	if (other == true)
		charSet += otherChars;
	return charSet.charAt(getRandomNum(0, charSet.length));
	}
	function getPassword(length/* ,  extraChars */, firstNumber, firstLower, firstUpper, firstOther,
		latterNumber, latterLower, latterUpper, latterOther) {
	var rc = "";
	if (length > 0)
		rc = rc + getRandomChar(firstNumber, firstLower, firstUpper, firstOther/*  ,   extraChars*/);
	for (var idx = 1; idx < length; ++idx) {
		rc = rc + getRandomChar(latterNumber, latterLower, latterUpper, latterOther/*  , extraChars*/);
	}
	return rc;
}

/* convertion */

let grammes = document.getElementById("grammes");
let kilos = document.getElementById("kilos");
let livres = document.getElementById("livres");

grammes.addEventListener("input", function(){convPoids(this.id, this.value);});
kilos.addEventListener("input", function(){convPoids(this.id, this.value);});
livres.addEventListener("input", function(){convPoids(this.id, this.value);});

function convPoids(id, valeur){
		console.log(valeur);
		
        if(id == "grammes"){
                kilos.value = valeur / 1000;
                livres.value = valeur * 0.0022046;
				if(!valeur) {
					livres.value = "";
					grammes.value = "";
					kilos.value = "";
					
				}
        }else if(id == "kilos"){
                grammes.value = valeur * 1000;
                livres.value = valeur * 2.2046;
				if(!valeur) {
					livres.value = "";
					grammes.value = "";
					kilos.value = "";
					
				}
        }else if(id == "livres"){
                grammes.value = valeur /0.0022046;
                kilos.value = valeur / 2.2046;
				if(!valeur) {
					livres.value = "";
					grammes.value = "";
					kilos.value = "";
					
				}
        }
}

let km = document.getElementById("km");
let m = document.getElementById("m");
let dm = document.getElementById("dm");
let cm = document.getElementById("cm");
let mm = document.getElementById("mm");
let mi = document.getElementById("mi");
let inch = document.getElementById("inch");
let ft = document.getElementById("ft");
let yrd = document.getElementById("yrd");

km.addEventListener("input", function(){convMesures(this.id, this.value);});
m.addEventListener("input", function(){convMesures(this.id, this.value);});
dm.addEventListener("input", function(){convMesures(this.id, this.value);});
cm.addEventListener("input", function(){convMesures(this.id, this.value);});
mm.addEventListener("input", function(){convMesures(this.id, this.value);});
mi.addEventListener("input", function(){convMesures(this.id, this.value);});
inch.addEventListener("input", function(){convMesures(this.id, this.value);});
ft.addEventListener("input", function(){convMesures(this.id, this.value);});
yrd.addEventListener("input", function(){convMesures(this.id, this.value);});

function convMesures(id, valeur){
        if(id == "km"){
                m.value = valeur * 1000;
                dm.value = valeur * 10000;
                cm.value = valeur * 100000;
                mm.value = valeur * 1000000;
                mi.value = valeur * 0.62137119223733;
                inch.value = valeur * 39370.078740157;
                ft.value = valeur * 3280.8398950131;
                yrd.value = valeur * 1093.6132983377;
				if(!valeur) {
					km.value = "";
					m.value = "";
					dm.value = "";
					cm.value = "";
					mm.value = "";
					mi.value = "";
					inch.value = "";
					ft.value = "";
					yrd.value = "";
				}
        }else if(id == "m"){
                km.value = valeur * 0.001;
                dm.value = valeur * 10;
                cm.value = valeur * 100;
                mm.value = valeur * 1000;
                mi.value = valeur * 0.00062137119223733;
                inch.value = valeur * 39.370078740157;
                ft.value = valeur * 3.2808398950131;
                yrd.value = valeur * 1.0936132983377;
				if(!valeur) {
					km.value = "";
					m.value = "";
					dm.value = "";
					cm.value = "";
					mm.value = "";
					mi.value = "";
					inch.value = "";
					ft.value = "";
					yrd.value = "";
				}
        }else if(id == "dm"){
                km.value = valeur * 0.0001;
                m.value = valeur * 0.1;
                cm.value = valeur * 10;
                mm.value = valeur * 100;
                mi.value = valeur * 0.000062137119223733;
                inch.value = valeur * 3.9370078740157;
                ft.value = valeur * 0.32808398950131;
                yrd.value = valeur * 0.10936132983377;
				if(!valeur) {
					km.value = "";
					m.value = "";
					dm.value = "";
					cm.value = "";
					mm.value = "";
					mi.value = "";
					inch.value = "";
					ft.value = "";
					yrd.value = "";
				}
        }else if(id == "cm"){
                km.value = valeur * 0.00001;
                m.value = valeur * 0.01;
                dm.value = valeur * 0.1;
                mm.value = valeur * 10;
                mi.value = valeur * 0.0000062137119223733;
                inch.value = valeur * 0.39370078740157;
                ft.value = valeur * 0.032808398950131;
                yrd.value = valeur * 0.010936132983377;
				if(!valeur) {
					km.value = "";
					m.value = "";
					dm.value = "";
					cm.value = "";
					mm.value = "";
					mi.value = "";
					inch.value = "";
					ft.value = "";
					yrd.value = "";
				}
        }else if(id == "mm"){
                km.value = valeur * 0.000001;
                m.value = valeur * 0.001;
                dm.value = valeur * 0.01;
                cm.value = valeur * 0.1;
                mi.value = valeur * 0.00000062137119223733;
                inch.value = valeur * 0.039370078740157;
                ft.value = valeur * 0.0032808398950131;
                yrd.value = valeur * 0.0010936132983377;
				if(!valeur) {
					km.value = "";
					m.value = "";
					dm.value = "";
					cm.value = "";
					mm.value = "";
					mi.value = "";
					inch.value = "";
					ft.value = "";
					yrd.value = "";
				}
        }else if(id == "mi"){
                km.value = valeur * 1.609344;
                m.value = valeur * 1609.344;
                dm.value = valeur * 16093.44;
                cm.value = valeur * 160934.4;
                mm.value = valeur * 1609344;
                inch.value = valeur * 63360;
                ft.value = valeur * 5280;
                yrd.value = valeur * 1760;
				if(!valeur) {
					km.value = "";
					m.value = "";
					dm.value = "";
					cm.value = "";
					mm.value = "";
					mi.value = "";
					inch.value = "";
					ft.value = "";
					yrd.value = "";
				}
        }else if(id == "inch"){
                km.value = valeur * 0.0000254;
                m.value = valeur * 0.0254;
                dm.value = valeur * 0.254;
                cm.value = valeur * 2.54;
                mm.value = valeur * 25.4;
                mi.value = valeur * 0.000015782828282828;
                ft.value = valeur * 0.083333333333333;
                yrd.value = valeur * 0.027777777777778;
				if(!valeur) {
					km.value = "";
					m.value = "";
					dm.value = "";
					cm.value = "";
					mm.value = "";
					mi.value = "";
					inch.value = "";
					ft.value = "";
					yrd.value = "";
				}
        }else if(id == "ft"){
                km.value = valeur * 0.0003048;
                m.value = valeur * 0.3048;
                dm.value = valeur * 3.048;
                cm.value = valeur * 30.48;
                mm.value = valeur * 304.8;
                mi.value = valeur * 0.00018939393939394;
                inch.value = valeur * 12;
                yrd.value = valeur * 0.33333333333334;
				if(!valeur) {
					km.value = "";
					m.value = "";
					dm.value = "";
					cm.value = "";
					mm.value = "";
					mi.value = "";
					inch.value = "";
					ft.value = "";
					yrd.value = "";
				}
        }else if(id == "yrd"){
                km.value = valeur * 0.0009144;
                m.value = valeur * 0.9144;
                dm.value = valeur * 9.144;
                cm.value = valeur * 91.44;
                mm.value = valeur * 914.4;
                mi.value = valeur * 0.00056818181818181;
                inch.value = valeur * 36;
                ft.value = valeur * 3;
				if(!valeur) {
					km.value = "";
					m.value = "";
					dm.value = "";
					cm.value = "";
					mm.value = "";
					mi.value = "";
					inch.value = "";
					ft.value = "";
					yrd.value = "";
				}
        }
}

/* calcule */

var operators= ['+','-','*','/'];
var formule_el = document.getElementById("formule");
var result_el = document.getElementById("result");

/**
* @description Cliquer sur une touche
*
* @param {String value chiffre|operateur}
* @returns {void}
*/
function click_touch(value){		
        // si on a déjà fait un calcul précédemment
        if (result_el.textContent.length > 0)
        {
        // on vide la formule
        formule_el.value = "";

        // si on a cliqué sur un operateur
        if(operators.indexOf(value) != -1){
                // On concate le résultat précédent
                formule_el.value = result_el.textContent;
        }
        
        // On vide le résultat
        result_el.textContent = "";
        }

        // On concate le chiffre/opérateur
        formule_el.value += value; 
}

/**
* @description Clic sur "="
*
* @returns {void}
*/
function egal(){
        var chiffre = formule_el.value;
        // Si la formule se termine par un opérateur
        if(operators.indexOf(chiffre.charAt(chiffre.length-1 )) !=-1 ){
        //Calculer le résultats avec le résultats par le dernier opérateur
        formule_el.value = formule_el.value + eval(chiffre.substring(0,chiffre.length-1));
        }
        result_el.textContent = eval(formule_el.value);
        formule_el.value = "";
}

/**
* @description Vider champs formule et résultat
*
* @returns {void}
*/
function erase(){
        formule_el.value = "";
        result_el.textContent = "";
}

/* meteo */


document.getElementById("resultat").style.visibility = "hidden";
var callBackGetSuccess = function(data) {
	let element = document.getElementById('zone_meteo');
	element.innerHTML = "";

    console.log("donnees api", data)
	let queryLoc = document.getElementById("queryLoc").value;
	let newContent = document.createTextNode(queryLoc + " " + data.main.temp + " C° " + data.weather[0].main);
	element.appendChild(newContent);
	var iconcode = data.weather[0].icon;
	var iconurl = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/" + iconcode + ".svg";
	$('#wicon').attr('src', iconurl);
	document.getElementById("resultat").style.visibility = "visible";
}

function buttonClickGET() {
	
	
    var queryLoc = document.getElementById("queryLoc").value;
	// api key : fe8b5facfcec5807d9bdc00e6bc4e4df

    var url = "https://api.openweathermap.org/data/2.5/weather?q="+queryLoc+"&appid=fe8b5facfcec5807d9bdc00e6bc4e4df&units=metric&lang=fr";
    
    $.get(url, callBackGetSuccess).done(function() {
        //alert( "second success" );
      })
      .fail(function() {
        alert( "error" );
      })
      .always(function() {
        //alert( "finished" );
      });
}