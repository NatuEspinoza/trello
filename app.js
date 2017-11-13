window.onload = function() {
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
  addList.onclick = function() {
    form.removeChild(addList);
    form.className = 'newForm';
    form.appendChild(input).className = 'newInput';
    input.setAttribute("placeholder", "Añadir una lista...")
    form.appendChild(buttom).className = 'btn';
    form.appendChild(closeButtom).className = 'btn-close';
  }

  //función para cerrar el formulario
  closeButtom.onclick = function() {
    form.className = 'formInit'
    form.appendChild(addList);
    form.removeChild(input);
    form.removeChild(buttom);
    form.removeChild(closeButtom);
  }

  //Función para guardar la lista al hacer click en el boton "guardar"
  buttom.onclick = function() {
    //condicionando al usuario para que no pueda agregar campo vacío
    if (input.value == "") {
      buttom.disabled = true;
    } else {
      buttom.disabled = false;
      var section = document.getElementById('section');
      var form = document.getElementById('form');
      //generando div que contendra el nombre de la lista y el link para añadir una tarjeta
      var formAddTarjet = document.createElement('div');
      formAddTarjet.setAttribute('id', 'newForm')
      formAddTarjet.className = 'addTarjet';
      var addTarjetLink = document.createElement('a');
      addTarjetLink.setAttribute('href', '#');
      addTarjetLink.setAttribute('id', 'add');
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
  }

  //Función para añadir una tarjeta abriendo un text-area y un boton para añadir
  document.addEventListener("DOMContentLoaded", function() {
    var formAddTarjet = document.getElementById('newForm');
    var addTarjetLink = document.querySelector('a');
    addTarjetLink.addEventListener('click', function() {
      var textArea = document.createElement('textarea').className = 'text-area';
      var addBtn = document.createElement('buttom').className = 'addBtn';
      var textAddBtn = document.createTextNode('Añadir');
      addBtn.appendChild(textAddBtn);
      formAddTarje.appendChild(textArea);
      formAddTarjet.appendChild(addBtn);
      formAddTarjet.insertBefore(textArea, addTarjetLink);
      formAddTarjet.insertBefore(addBtn, addTarjetLink);
    })
  })

}
