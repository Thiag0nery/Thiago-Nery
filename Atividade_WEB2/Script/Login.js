var BankUser = []
window.addEventListener("load", loading())
function loading(){
    JSON.parse(localStorage.getItem("BankUser")).forEach(a => {
       BankUser.push(a)
      })
   
}

/* PARTE  */
var btnCriar = document.getElementById('Criar')
var btnContinuarAcesso = document.getElementById('ContinuarAcesso')
btnContinuarAcesso.addEventListener('click', Acessar)
btnCriar.addEventListener('click', Criar)
function Criar(){
    window.location.href = 'Criar.html'
}
function Acessar(){
    var inpNome = document.getElementById('Nome').value
    var inpSenha = document.getElementById('Senha').value
    
                
    let pass = JSON.parse(localStorage.getItem("BankUser"))
    for(i in pass){
                
               
        if(pass[i].name == inpNome && pass[i].Passoword == inpSenha){

            return window.location.href = 'index.html'
            
        }
        if(pass[i].name != inpNome && pass[i].Passoword != inpSenha){

             alert("Usuario ou senha incoretos")
            
        }
        
       
        
        
    }          
    
                
     
    

    // if(inpNome == 'Thiago' && inpSenha == 5){
    //     window.location.href = 'index.html'
    // }
    // else{
    //     alert('Usuario ou senha incoretos! ')
    // }
}