function obtenerListaUsuarios(){
  var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs'));
  
  if(listaUsuarios == null){
    listaUsuarios =
    [
      //Rol 1 corresponde a administrador, Rol 2 corresponde a profesor
      ['Jeferson','Fuentes','jeferson.fg710@gmail.com','4nders@n123.','2004-10-07','1','119180003'],
      ['Alexander','Monge','alexander_monge@covao.ed.cr','12345', '1980-10-18','2','303620701']
    ]
  }
  return listaUsuarios;
}




document.querySelector('#btnRegistro').addEventListener('click', ()=>{
  Registro();
  Registro2();

});

function Registro(){
  var listaUsuarios = obtenerListaUsuarios();


  var Correoo = document.querySelector('#txtNCorreo').value;
  var Contra = document.querySelector('#txtNContrasena').value;


  listaUsuarios.push([
    document.querySelector('#txtNNombre').value,
    document.querySelector('#txtNApellido').value,
    Correoo,
    Contra,
    document.querySelector('#txtNFecha').value,
    document.querySelector('#txtNRol').value,
    document.querySelector('#txtNCedula').value,
  ])

  console.log(listaUsuarios);
  return(listaUsuarios);

}

function Registro2(){
  var listaUsuarios = Registro();
  var Correo1 = document.querySelector('#txtNCorreo').value;
  var Contra1 = document.querySelector('#txtNContrasena').value;
  var Nombre =document.querySelector('#txtNNombre').value;
  var Appllido = document.querySelector('#txtNApellido').value;
  var bAcceso = false;
  alert("Bienvenido "+ Nombre + " " + Appllido);
    bAcceso = validarCredencialesRegistro(Correo1, Contra1);


  if(bAcceso == true)
  {

    ingresar();

  }else{alert("a")}

}

function validarCredencialesRegistro(pCorreo, pContrasena){
  var listaUsuarios = Registro();
  var bAcceso = false;
  for(var i = 0; i< listaUsuarios.length; i++){
    if(pCorreo == listaUsuarios[i][2] && pContrasena == listaUsuarios[i][3]){
      bAcceso = true;
      sessionStorage.setItem('usuarioActivo', listaUsuarios[i][0] + ' ' + listaUsuarios[i][1]);
      sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[i][5]);
    }
  }
  return bAcceso;

}
function validarCredenciales(pCorreo, pContrasena){
  var listaUsuarios = obtenerListaUsuarios();
  var bAcceso = false;
  for(var i = 0; i< listaUsuarios.length; i++){
    if(pCorreo == listaUsuarios[i][2] && pContrasena == listaUsuarios[i][3]){
      bAcceso = true;
      sessionStorage.setItem('usuarioActivo', listaUsuarios[i][0] + ' ' + listaUsuarios[i][1]);
      sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[i][5]);
    }
  }
  return bAcceso;

}

