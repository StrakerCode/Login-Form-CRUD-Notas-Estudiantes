document.querySelector('#btnIngresar').addEventListener('click', iniciarSesion);

function iniciarSesion(){
  var sCorreo='';
  var sContrasena='';
  var bAcceso = false;

  sCorreo = document.querySelector('#txtCorreo').value;
  sContrasena = document.querySelector('#txtContrasena').value;

  bAcceso = validarCredenciales(sCorreo,sContrasena);

  if(bAcceso == true)
  {
    ingresar();

  }else{alert("Error al iniciar sesion, reivsa el correo o la contraseña")}
}

function ingresar(){
  var rol = sessionStorage.getItem('rolUsuarioActivo')
  switch (rol) {
    case '1':
    window.location.href = 'admin.html';
    break;

    case '2':
    window.location.href = 'profesor.html'
    break;

    default:
      window.location.href = 'index.html'
    break;

  }
}