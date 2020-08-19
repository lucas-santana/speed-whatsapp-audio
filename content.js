const interval = setInterval(() => {
    const header = document.querySelector("._3All_");

    if(header){
        clearInterval(interval);

        const button = document.createElement('button');
        button.innerHTML="2x";
        button.setAttribute('data-ativado', false);
        button.classList.add("increaseSpeed2x");
        

        button.addEventListener("click", () => {
            buttonAtivado = button.dataset.ativado;
            const audios = document.querySelectorAll('audio');

            if(buttonAtivado == 'true'){
                console.log("button ativado, desativando...");
                button.setAttribute('data-ativado', false);

                audios.forEach((audio)=>{
                    audio.playbackRate = 1;
                });

            }else{
                console.log("button desativado, ativando...");
                button.setAttribute('data-ativado', true);
                
                audios.forEach((audio)=>{
                    audio.playbackRate = 2;
                });
                
                
                
            }
            
           

        });

        header.appendChild(button);
        
        
    }
   

}, 100)
