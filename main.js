function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

   
    if (elemento && elemento.localName === 'audio') {
        elemento.play()        
    }
    
    else {
        alert=('Elemento não encontrado!')
    }
}



const listadeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listadeTeclas.length; i++) {

    const tecla = listadeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;



    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento){
      if(evento.code === "space" || evento.code === "Enter"){
        tecla.classList.add('ativa');  
      }      
    };
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');      
    };

}