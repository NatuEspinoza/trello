window.onload = function() {
    //agregando formulario
    var form = document.getElementById('form');
    var addList = document.getElementById('addList');
    var input = document.createElement('input');
    var buttom = document.createElement('buttom');
    var textButtom = document.createTextNode('Guardar');
    buttom.appendChild(textButtom);
    var closeButtom = document.createElement('buttom');
    var textCloseButtom = document.createTextNode('X');
    closeButtom.appendChild(textCloseButtom);
    //función que me despliega el formulario
    addList.onclick = function () {
      form.removeChild(addList);
      form.className = 'newForm';
      form.appendChild(input).className = 'newInput';
      input.setAttribute("placeholder","Añadir una lista...")
      form.appendChild(buttom).className = 'btn';
      form.appendChild(closeButtom).className = 'btn-close';
    }
  }
