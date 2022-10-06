var btnContinuar = document.getElementById('Continuar')
btnContinuar.addEventListener('click', Continuar)
var BankUser = []
function Continuar(){
    var nome = document.getElementById('Nome').value
    var Correio = document.getElementById('Email').value
    var senha = document.getElementById('Senha').value
    if(nome == '' || Correio == '' || senha == ''){
        alert('Prença todos os cambos') 
    }
    else{
        var usuario = {
            name: nome,
            email: Correio,
            Passoword : senha,
        }
        if(BankUser.length == 1){
            BankUser.push(usuario)
            localStorage.BankUser = JSON.stringify(BankUser)
            console.log(BankUser)
            document.getElementById('Nome').value = ''
            document.getElementById('Email').value = ''
                document.getElementById('Senha').value = ''
        }
        else{
            console.log(BankUser)
            let teste = 2
            let pass = JSON.parse(localStorage.getItem("BankUser"))
            for(i in pass){
                
                
                if(pass[i].email == Correio || pass[i].name == nome){

                    alert('Nome ou Email ja exitem')
                   return teste = 4
                   
                }
                
            }
            console.log(teste)
            if(teste == 2){
                if(localStorage.BankUser){
                    BankUser = JSON.parse(localStorage.getItem('BankUser'))
                }
                BankUser.push(usuario)
                localStorage.BankUser = JSON.stringify(BankUser)
                console.log("Deu certo")
                document.getElementById('Nome').value = ''
                document.getElementById('Email').value = ''
                document.getElementById('Senha').value = ''
                
                
            }
        }
        
    
}
        
}
        
        
console.log(BankUser)
window.addEventListener("load", loading())
function loading(){
    JSON.parse(localStorage.getItem("BankUser")).forEach(a => {
       BankUser.push(a)
       
      })
   
}