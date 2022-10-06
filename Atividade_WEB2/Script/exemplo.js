
var Bankconsole = []
function Enviar(){
    var usuario = {
        nome: document.getElementById('Nome').value,
        email: document.getElementById('Email').value
    }
        
   
    if(localStorage.Bankconsole){
        Bankconsole = JSON.parse(localStorage.getItem('Bankconsole'))
    }
    Bankconsole.push(usuario)
    localStorage.Bankconsole = JSON.stringify(Bankconsole)

}
window.addEventListener("load", loading())
function loading(){
    JSON.parse(localStorage.getItem("Bankconsole")).forEach(a => {
        Bankconsole.push(a)
        if(a.emai == 'Thiago'){
            alert ("Thiago")
        }
        console.log(Bankconsole)
      })
   
}