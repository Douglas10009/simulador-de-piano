const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input');
const keysCheck = document.querySelector('.keys-check input')

let mapedKeys = [];
let audio = new Audio() ;
let musica = new Audio('./src/tunes/Erik Satie - Gymnopédie No. 1.mp3');
musica.loop = true;


console.log('O que poderia acontecer se `musica` fosse tocada? 0-0');

// Tocar a nota
const playTune = (key) => {
    audio.src = `./src/tunes/${key}.wav` || "";
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add('active');

    // Depois de um tempo = setTimeout
    setTimeout(() => {
        clickedKey.classList.remove('active')
    }, 150)


};

// Mapeia todas as teclas 
pianoKeys.forEach((key) => {
    key.addEventListener('click', () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

document.addEventListener('keydown', (e) => {
    if (mapedKeys.includes(e.key)) {
        playTune(e.key);
    }
})

// Configurações do volume 

const handleVolume = (e) => {
    console.log(e.target.value);
    audio.volume = e.target.value;
}

volumeSlider.addEventListener('input', handleVolume);

// Mostrar/Esconder teclas
const showHideKeys = ()=>{
    pianoKeys.forEach(key => key.classList.toggle('hide'))
}

keysCheck.addEventListener('click', showHideKeys)


musica.addEventListener('playing', ()=>{
    console.log('Agora você é um profissa fi! ');
})