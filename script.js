// Este código se ejecuta al cargar la página
window.onload = function() {
    // Obtenemos el elemento del menú
    var nav = document.querySelector("nav");
  
    // Añadimos un evento al elemento del menú para que se active cuando el cursor pase sobre él
    nav.addEventListener("mouseover", function(e) {
      // Obtenemos el elemento de la opción sobre la que está el cursor
      var option = e.target;
  
      // Ponemos un recuadro naranja de fondo a la opción
      option.style.backgroundColor = "orange";
    });
  
    // Añadimos un evento al elemento del menú para que se desactive cuando el cursor se aleje de él
    nav.addEventListener("mouseout", function(e) {
      // Obtenemos el elemento de la opción sobre la que está el cursor
      var option = e.target;
  
      // Ponemos el fondo de la opción a gris
      option.style.backgroundColor = "gray";
    });
  };
  