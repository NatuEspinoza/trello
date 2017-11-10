
    //Variables
    var form = document.getElementById('form');
    var addList = document.getElementById('addList');
    var input = document.createElement('input');
    var buttom = document.createElement('buttom');
    var textButtom = document.createTextNode('Guardar');
    buttom.appendChild(textButtom);
    var closeButtom = document.createElement('buttom');
    var textCloseButtom = document.createTextNode('X');
    closeButtom.appendChild(textCloseButtom);

    //función que me despliega el formulario para guardar listas
    addList.onclick = function () {
      form.removeChild(addList);
      form.className = 'newForm';
      form.appendChild(input).className = 'newInput';
      input.setAttribute("placeholder","Añadir una lista...")
      form.appendChild(buttom).className = 'btn';
      form.appendChild(closeButtom).className = 'btn-close';
    }
    //Función para guardar la lista al hacer click en el boton "guardar"
    buttom.onclick = function () {
      var section = document.getElementById('section');
      var form = document.getElementById('form');
      //generando div que contendra el nombre de la lista y el link para añadir una tarjeta
      var formAddTarjet = document.createElement('div');
      formAddTarjet.className = 'addTarjet';
      var addTarjetLink = document.createElement('a');
      addTarjetLink.className = 'link';
      var addTarjetTxt = document.createTextNode('Añadir una tarjeta...');
      addTarjetLink.appendChild(addTarjetTxt);
      //Agregando los div con las listas antes del formulario inicial
      section.insertBefore(formAddTarjet, form);
      //guardando valor del input (texto ingresado por el usuario)
      var value = document.createElement('p');
      var valueP = document.createTextNode(input.value);
      value.appendChild(valueP);
      formAddTarjet.appendChild(value);
      formAddTarjet.appendChild(addTarjetLink);
    }

    //Función para añadir una tarjeta abriendo un text-area
    var addTarjet = document.getElementsByClassName('addTarjet')[0];
    var link = document.getElementsByClassName('link')[0];
    link.onclick = function(){
      var textArea = document.createElement('textarea');
      addTarjet.appendChild(textArea);
      addTarjet.insertBefore(textArea, link);
    }
