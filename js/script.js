    
    var autocomplete = document.getElementById("autocomplete");

    var db = [
      "Adam",
      "Adéla",
      "Alena",
      "Aleš",
      "Alois",
      "Andrea",
      "Aneta",
      "Anežka",
      "Anna",
      "Antonín"
    ];

    function popupClearAndHide() {
      autocomplete_result.innerHTML = "";
      autocomplete_result.style.display = "none";
    }

    function updPopup() {
      if(!autocomplete.value) {
        popupClearAndHide();
        return;
      }
      var a = new RegExp("^" + autocomplete.value, "i");
      for(var x = 0, b = document.createDocumentFragment(), c = false; x < db.length; x++) {
        if(a.test(db[x])) {
          c = true;
          var d = document.createElement("p");
          d.innerText = db[x];
          d.setAttribute("onclick", "autocomplete.value=this.innerText;autocomplete_result.innerHTML='';autocomplete_result.style.display='none';");
          b.appendChild(d);
        }
      }
      if(c == true) {
        autocomplete_result.innerHTML = "";
        autocomplete_result.style.display = "block";
        autocomplete_result.appendChild(b);
        return;
      }
      popupClearAndHide();
    }

    autocomplete.addEventListener("keyup", updPopup);
    autocomplete.addEventListener("change", updPopup);

  document.addEventListener('click', function(event) {
    var isClickInside = autocomplete_result.contains(event.target);
      if (!isClickInside) {
        popupClearAndHide();
      }
  });