$(document).ready(function() {
    $('#formulario').submit(function(event) {
      event.preventDefault();
      var email = $('#email').val();
      var password = $('#password').val();
  

      if (email === 'correodeprueba@gmail.com' && password === 'prueba') {
          window.location.href = 'menu.html';
      } else {
        alert('Usuario o contraseña invalido. Inténtalo de nuevo.');
      }
    });
  });
  
    let balance = localStorage.getItem('balance');
    if (balance !== null) {
      balance = parseFloat(balance);
      $('#balance').text(balance);
    } else {
      $('#balance').text('0.00');
    }


    $('#realizarDepositoBtn').click(function() {
      let depositAmount = parseFloat($('#depositAmount').val());
      if (!isNaN(depositAmount) && depositAmount > 0) {
        balance += depositAmount;
        $('#depositAmount').val('');
        alert('¡Depósito realizado!');
        localStorage.setItem('balance',balance)
        $('#balance').text(balance);
      } else {
        alert('Monto inválido. Por favor, ingrese un número positivo.');
      }
    });
  
    
    $('#enviarDinerobtn').click(function() {
      let enviarDinero = parseFloat($('#enviarDinero').val());
      if (!isNaN(enviarDinero) && enviarDinero > 0 && enviarDinero <= balance) {
        balance -= enviarDinero;
        $('#enviarDinero').val('');
        alert('¡Envío exitoso!');
        localStorage.setItem('balance',balance)
        $('#balance').text(balance);
      } else {
        alert('Cantidad no válida. Ingrese un número válido dentro de su saldo.');
      }
    });

  
  