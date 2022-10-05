let iphone = document.getElementById('iphone')
let computador = document.getElementById('computador')
let bebidas = document.getElementById('Bebidas')
let fone = document.getElementById('fone')
let monitor = document.getElementById('monitor')
//let catalago = document.getElementById('nav-click')
let placa = document.getElementById('placa')
let eletro = document.getElementById('eletrodomestico')
let catalago1 =  document.getElementById('catalagos1')
let catalago2 =  document.getElementById('catalagos2')
let catalago3 =  document.getElementById('catalagos3')
let catalago4 =  document.getElementById('catalagos4')
iphone.addEventListener('click',click1)
computador.addEventListener('click',click2)
bebidas.addEventListener('click',click3)
fone.addEventListener('click',click4)
placa.addEventListener('click',click5)
eletro.addEventListener('click',click6)
monitor.addEventListener('click',click7)
catalago1.addEventListener('mouseenter', dentro1)
catalago1.addEventListener('mouseout', fora1)
catalago2.addEventListener('mouseenter', dentro2)
catalago2.addEventListener('mouseout', fora2)
catalago3.addEventListener('mouseenter', dentro3)
catalago3.addEventListener('mouseout', fora3)
catalago4.addEventListener('mouseenter', dentro4)
catalago4.addEventListener('mouseout', fora4)

/* Inner text */
    catalago1.innerHTML = '<p> Cerveja Stella Artois Lata 269ml Pack - 8 unidades</p>'
    catalago2.innerHTML = '<p> Cerveja Coronita Extra Long Neck 210ml Pack - 6 unidades</p>'
    catalago3.innerHTML = '<p> Cerveja Heineken Pilsen Lata 269ml - 8 Unidades</p>'
    catalago4.innerHTML = '<p> Energético Baly Melancia Zero Açúcar Energy Drink 473ml - 6 Unidades</p>'

// CATALAGO1
function dentro1(){
    catalago1.className += ' cursor'
    
}
function fora1(){
    catalago1.classList.remove('cursor')
}
// CATALAGO2
function dentro2(){
    catalago2.className += ' cursor'
}
function fora2(){
    catalago2.classList.remove('cursor')
}
// CATALAGO 3
function dentro3(){
    catalago3.className += ' cursor'
}
function fora3(){
    catalago3.classList.remove('cursor')
}
// CATALAGO4
function dentro4(){
    catalago4.className += ' cursor'
}
function fora4(){
    catalago4.classList.remove('cursor')
}

function click1(){

    catalago1.className = 'iphone1'
    catalago1.innerHTML = '<p> iPhone 11 Apple 64GB branco, Tela de 6,1”, Câmera Dupla de 12MP, iOS</p>'
    catalago2.className = 'iphone2'
    catalago2.innerHTML = '<p> iPhone 11 Apple 64GB Preto, Tela de 6,1”, Câmera Dupla de 12MP, iOS</p>'
    catalago3.className = 'iphone3'
    catalago3.innerHTML = '<p>iPhone 12 Apple 128GB Branco Tela de 6,1”, Câmera Dupla de 12MP, iOS</p>'
    catalago4.className = 'iphone4'
    catalago4.innerHTML = '<p> iPhone 12 Apple 128GB Preto Tela de 6,1”, Câmera Dupla de 12MP, iOS </p>'
}
function click2(){
    catalago1.className = 'computador1'
    catalago1.innerHTML = '<p> PC Gamer Completo AMD 6-Core CPU 3.8Ghz 8GB (Placa de vídeo Radeon R5 2GB)...</p>'
    catalago2.className = 'computador2'
    catalago2.innerHTML = '<p> PC Gamer Intel Core i5 8GB HD 1TB (Nvidia Geforce GT) Kit Gamer e Monitor...</p>'
    catalago3.className = 'computador3'
    catalago3.innerHTML = '<p> Computador Completo Intel Core i5 8GB SSD 240GB Monitor LED 19.5" HDMI...</p>'
    catalago4.className = 'computador4'
    catalago4.innerHTML = '<p> Computador Completo Intel Core i5 8GB SSD 480GB Windows 10 Monitor 19" ...</p>'
}
function click3(){
    catalago1.className = 'bebidas1'
    catalago1.innerHTML = '<p> Cerveja Stella Artois Lata 269ml Pack - 8 unidades</p>'
    catalago2.className = 'bebidas2'
    catalago2.innerHTML = '<p> Cerveja Coronita Extra Long Neck 210ml Pack - 6 unidades</p>'
    catalago3.className = 'bebidas3'
    catalago3.innerHTML = '<p> Cerveja Heineken Pilsen Lata 269ml - 8 Unidades</p>'
    catalago4.className = 'bebidas4'
    catalago4.innerHTML = '<p> Energético Baly Melancia Zero Açúcar Energy Drink 473ml - 6 Unidades</p>'
}
function click4(){
    catalago1.className = 'fone1'
    catalago1.innerHTML = '<p> Headset Gamer Com Fio Thoth Eg-305Rd Red Evolut</p>'
    catalago2.className = 'fone2'
    catalago2.innerHTML = '<p> Headset sem Fio Sony Pulse 3D - PS5</p>'
    catalago3.className = 'fone3'
    catalago3.innerHTML = '<p> Headset Fone Gamer Havit H2232D Rgb Com Microfone 3.5Mm Usb</p>'
    catalago4.className = 'fone4'
    catalago4.innerHTML = '<p> Fone De Ouvido Headset Gamer Evolut EG301GR Têmis 32 Ohms Preto/Verde</p>'
}
function click5(){
    catalago1.className = 'placa1'
    catalago1.innerHTML = '<p> Placa de Vídeo Zotac Gaming NVIDIA GeForce RTX 2060, 6GB,...</p>'

    catalago2.className = 'placa2'
    catalago2.innerHTML = '<p> Placa de Vídeo EVGA NVIDIA GeForce GTX 1660 SC Ultra Gaming ...</p>'

    catalago3.className = 'placa3'
    catalago3.innerHTML = '<p> Placa de Vídeo Galax NVIDIA GeForce GTX 1660 Super (1-Click OC)...</p>'

    catalago4.className = 'placa4'
    catalago4.innerHTML = '<p> Placa de Vídeo VGA NVIDIA MSI GEFORCE GT 210 1GB DDR3 N210-MD1G/D3</p>'
    
}
function click6(){

    catalago1.className = 'eletrodomestico1'
    catalago1.innerHTML = '<p> Freezer Horizontal CHB53EBANA 534 Litros Consul</p>'
    catalago2.className = 'eletrodomestico2'
    catalago2.innerHTML = '<p> Forno de Micro-ondas Electrolux MI41S com Painel Integrado - 31L</p>'
    catalago3.className = 'eletrodomestico3'
    catalago3.innerHTML = '<p> Fogão Esmaltec 6 Bocas Veneza Super com Acendimento Automático - Branco</p>'
    catalago4.className = 'eletrodomestico4'
    catalago4.innerHTML = '<p> Lavadora de Roupa Midea LFA11X STORM WASH Inverter Tambor 4D...</p>'
}
function click7(){
    catalago1.className = 'monitor1'
    catalago1.innerHTML = '<p> Monitor Gamer Concórdia 27" LED Full HD, 165Hz, 1ms, HDMI/DisplayPort, FreeSync, Preto - G5s</p>'
    catalago2.className = 'monitor2'
    catalago2.innerHTML = '<p> Monitor Gamer Samsung Odyssey G3, 24 Full HD, 144Hz, 1ms, FreeSync Premium, HDMI/Displayport...</p>'
    catalago3.className = 'monitor3'
    catalago3.innerHTML = '<p> Monitor Samsung 31.5 LED, Curvo, Full HD, HDMI/DisplayPort, VESA, Ajuste de Ângulo, FreeSync...</p>'
    catalago4.className = 'monitor4'
    catalago4.innerHTML = '<p> Monitor Gamer Acer Nitro 23.6 LED, Curvo, 165 Hz, Full HD, 1ms, FreeSync Premium, HDMI/DisplayPort - EI242QR</p>'
}