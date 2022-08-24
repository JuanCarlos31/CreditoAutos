function hola(){
  alert("hola");
}

function link(tienda){
    switch (tienda) {
      case "clickauto":
        window.open("https://clikauto.com/");
      break;
      case "olx":
        window.open('https://www.olxautos.com.mx/');
      break;
      case "habolt":
        window.open('https://habolt.mx/');
      break;
      case "odetta":
        window.open('https://odetta.com/');
      break;
    }
  }