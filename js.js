function darFondoyPopUp(id){

    switch(id){

        case 'home':
            var botonHome = document.getElementById("home");
             botonHome.style.backgroundColor = "rgb(5, 155, 255)";
             alert("Usted presionó el boton Valores");
            break;

    case 'gift':
        var botonGift = document.getElementById("gift");
         botonGift.style.backgroundColor = "rgb(5, 155, 255)";
         alert("Usted presionó el boton Mercado Interno");
        break;

    case 'circle':
        var botonCircle = document.getElementById("circle");
        botonCircle.style.backgroundColor = "rgb(5, 155, 255)";
        alert("Usted presionó el boton Modo Dark");
         break;
    }
    
}


function expandirBarra(){

var flag = document.getElementById("hamburguesa");






    var barraLateral = document.getElementById("barraLateral");
   
      barraLateral.display = "block";
    barraLateral.style.width = "15%";

    var all = document.getElementsByClassName('botones');
    for (var i = 0; i < all.length; i++) {
        all[i].style.display = 'inline';
        all[i].style.paddingLeft = "15px";
        
    }

    var texto = document.getElementById("home2");
    texto.innerHTML = "Valores";
   
    texto.style.paddingLeft = "20px";

    

    var texto2 = document.getElementById("gift2");
    texto2.innerHTML = "Mercado Interno";

    texto2.style.paddingLeft = "20px";


    var texto3 = document.getElementById("circle2");
    texto3.innerHTML = "Modo Dark";

    texto3.style.paddingLeft = "20px";


}






