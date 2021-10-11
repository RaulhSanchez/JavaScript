var numeroUsuario = Number(prompt("Numero"));



function ComprobarPrimo(numeroUsuario){
    if(numeroUsuario / numeroUsuario ==1 && numeroUsuario/1 ==0){  
         
        return true;
    }
    else{
        
        return false;
    }
}

ComprobarPrimo(numeroUsuario)

console.log(ComprobarPrimo(numeroUsuario));