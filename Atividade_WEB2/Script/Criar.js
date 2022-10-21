var btnContinuar = document.getElementById('Continuar')
btnContinuar.addEventListener('click', Continuar)
var BankUser = []
function Continuar(){
    var nome = document.getElementById('Nome').value
    var usuario = document.getElementById('usuario').value
    var Correio = document.getElementById('Email').value
    var senha = document.getElementById('Senha').value

    fetch("http://localhost:8081/cadastrar",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
        nome: nome,
        usuario: usuario,
        email: Correio,
        senha:senha
    })

})
.then(function(res){  
    if(res.status == 500 ){
        alert('Thiago')
} })
.catch(function(res){ console.log(res) })
}