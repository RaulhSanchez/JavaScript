var numeroUsuario = Number(prompt("Numero"));



function ComprobarPrimo(numeroUsuario){
    if(numeroUsuario / 2 ==0 && numeroUsuario/1==0){  
         
        return false;
    }
    else{
        
        return true;
    }
}

ComprobarPrimo(numeroUsuario)

console.log(ComprobarPrimo(numeroUsuario));