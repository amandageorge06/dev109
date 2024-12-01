    var myButton = document.querySelector("#clear-button");

    myButton.addEventListener("click", function(event) {
      var elements = document.getElementsByClassName("dot");
      for (let index = elements.length - 1; index >= 0; index--) {
        elements[index].parentNode.removeChild(elements[index]);
      }

      event.stopPropagation();
    });

    addEventListener("click", function(event) {
      var dot = document.createElement("div");
      dot.className = "dot";
      dot.style.left = (event.pageX - 4) + "px";
      dot.style.top = (event.pageY - 4) + "px";
      document.body.appendChild(dot);
    });
