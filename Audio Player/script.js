let musica = document.querySelector('audio');
let tocando = false;

document.querySelector('.play-pause').addEventListener('click', tocarMusica);



function tocarMusica(){
    if(tocando){
        musica.pause();
        tocando = false;
    }else{
        musica.play();
        tocando = true;
    }
    return tocando;
}