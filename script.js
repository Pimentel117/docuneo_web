window.onload = function() {
    var nav = document.querySelector("nav");
    nav.addEventListener("mouseover", function(e) {
      var option = e.target;
  
      option.style.backgroundColor = "orange";
    });
  
    nav.addEventListener("mouseout", function(e) {
      var option = e.target;
  
      option.style.backgroundColor = "gray";
    });
  };
  