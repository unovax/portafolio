particlesJS(
	"particles-js", 
	{"particles":
	{"number":
	{"value":20,
	"density":
	{"enable":true,
	"value_area":1362.9002517356944}},
	"color":{"value":"#95b9d7"},
	"shape":{
		"type":"polygon",
		"stroke":{
			"width":3,
			"color":
			"#8e4e4e"},
	"polygon":
		{"nb_sides":4},
	"image":{"src":"img/github.svg","width":100,"height":100}},
	"opacity":{
		"value":1,
		"random":false,
	"anim":{
		"enable":false,
		"speed":1,
		"opacity_min":0.1,
		"sync":false}},
	"size":{
		"value":24.05118091298284,
		"random":false,
	"anim":{
		"enable":true,
		"speed":48.7246327380807,
		"size_min":0,
		"sync":false}},
	"line_linked":{
		"enable":true,
		"distance":0,
		"color":"#ffffff",
		"opacity":0.4,
		"width":1},
	"move":{
		"enable":true,
		"speed":6,
		"direction":"none",
		"random":false,
		"straight":false,
		"out_mode":"out",
		"bounce":false,
	"attract":{
		"enable":false,
		"rotateX":600,
		"rotateY":1200}}},
	"interactivity":{
		"detect_on":"canvas",
	"events":{
		"onhover":{
			"enable":true,
			"mode":"repulse"},
		"onclick":{
			"enable":false,
			"mode":"remove"},
			"resize":true},
		"modes":{
			"grab":{
				"distance":400,
				"line_linked":{
					"opacity":1}},
			"bubble":{
				"distance":400,
				"size":40,
				"duration":2,
				"opacity":8,
				"speed":3},
			"repulse":{
				"distance":200,
				"duration":0.4},
			"push":{
				"particles_nb":4},
			"remove":{
				"particles_nb":2}}},
			"retina_detect":true});


const BotonPokeball = document.getElementById('BotonPokeball');
const PokeGif = document.getElementById('PokeGif');
const PokeImg = document.getElementById('PokeImg');
const Audio = document.getElementById('Audio');
const BotonTema = document.getElementById('BotonTema');
const TemaDark = document.getElementById('TemaDark');
const TemaLight = document.getElementById('TemaLight');
const Textos = document.querySelectorAll('.textos');
const Fondo = document.getElementById('particles-js');
const Fondos = document.querySelectorAll('.fondos');
const FlechasLight = document.querySelectorAll('.flecha-light');
const FlechasDark = document.querySelectorAll('.flecha-dark');
const logos = document.querySelectorAll('.logo');
const contLogos = document.getElementById('grid-habilidades');
var MusicOn = false;
var ModeDark = false;
BotonPokeball.addEventListener('click', ()=>{
	if (MusicOn){
		PokeGif.classList.add('d-none');
		PokeImg.classList.remove('d-none');
		MusicOn = false;
		Audio.pause()
	}
	else{
		PokeGif.classList.remove('d-none');
		PokeImg.classList.add('d-none');
		MusicOn = true;
		Audio.play()
	}
})
logos.forEach((logo) => {
            logo.addEventListener('mouseenter', (e) => {
                const elemento = e.currentTarget;
                setTimeout(() => {
                    logos.forEach(logo => {
                        logo.classList.remove('hover');
                        });
                    
                    elemento.classList.add('hover');
                },300);
            } );
        });

        contLogos.addEventListener('mouseleave', () =>{
            logos.forEach(logo => {
                logo.classList.remove('hover');
                });

        });
BotonTema.addEventListener('click', ()=>{
	if(ModeDark){
		TemaDark.classList.add('d-none');
		TemaLight.classList.remove('d-none');
		Textos.forEach(texto =>{
			texto.classList.remove('text-dark');
			texto.classList.add('text-light');
		})
		Fondo.classList.remove('bg-light');
		Fondo.classList.add('bg-dark');

		FlechasDark.forEach(flecha =>{
			flecha.classList.add('d-none');
		})

		FlechasLight.forEach(flecha =>{
			flecha.classList.remove('d-none');
		})

		Fondos.forEach(fondo=>{
			fondo.classList.remove('bg-light-2');
			fondo.classList.add('bg-dark-2');
		})

		ModeDark = false;
	}
	else{
		TemaDark.classList.remove('d-none');
		TemaLight.classList.add('d-none');
		ModeDark = true;
		Textos.forEach(texto =>{
			texto.classList.add('text-dark');
			texto.classList.remove('text-light');
		})
		Fondo.classList.add('bg-light');
		Fondo.classList.remove('bg-dark');

		FlechasDark.forEach(flecha =>{
			flecha.classList.remove('d-none');
		})

		FlechasLight.forEach(flecha =>{
			flecha.classList.add('d-none');
		})

		Fondos.forEach(fondo=>{
			fondo.classList.add('bg-light-2');
			fondo.classList.remove('bg-dark-2');
		})
	}
})