function hola(){
  alert("hola");
}

function link(tienda){
    switch (tienda) {
      case "clickauto":
        window.open("https://clikauto.com/autos-seminuevos");
      break;
      case "olx":
        window.open('https://www.olxautos.com.mx/comprar-un-auto');
      break;
      case "habolt":
        window.open('https://habolt.mx/marketplace?page=1');
      break;
      case "odetta":
        window.open('https://odetta.com/autos-usados');
      break;
    }
  }
