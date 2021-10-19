let ccedula = 0;
let ex1 = 0;
let ex2 = 0;
let pr = 0;
let q1 = 0;
let q2 = 0;
let ct = 0;
let el;
let i;

let data = [
];
let panel = document.getElementById("panel");

function clearForm() {
document.getElementById("fname").value = "";
document.getElementById("ap1").value = "";
document.getElementById("ap2").value = "";
document.getElementById("Cedula").value = "";
document.getElementById("FechaN").value = "";
document.getElementById("sMateria").value = "";

}

function renderItem() {

panel.textContent = "";
data.forEach(x => {
  el = document.createElement("option");
  el.innerText = `${x.firstname} | ${x.lastname} | ${x.lastname2} | ${x.id} | ${x.born} | ${x.mat}`;
  panel.append(el);
});
}

function create() {
let fn = document.getElementById("fname").value;
let a1 = document.getElementById("ap1").value;
let a2 = document.getElementById("ap2").value;
let ced = document.getElementById("Cedula").value;
let fec = document.getElementById("FechaN").value;
let matt = document.getElementById("sMateria").value;


data = [...data, { firstname: fn, lastname: a1, lastname2: a2, id: ced, born: fec, mat: matt }];
clearForm();
console.log(data)
renderItem();
}

function panelClick() {
i = panel.selectedIndex;
document.getElementById("fname").value = data[i].firstname;
document.getElementById("ap1").value = data[i].lastname;
document.getElementById("ap2").value = data[i].lastname2;
document.getElementById("Cedula").value = data[i].id;
document.getElementById("FechaN").value = data[i].born;
document.getElementById("sMateria").value = data[i].matt;
}

function update() {
data[i].firstname = document.getElementById("fname").value;
data[i].lastname = document.getElementById("ap1").value;
data[i].lastname2 = document.getElementById("ap2").value;
data[i].id = document.getElementById("Cedula").value;
data[i].born = document.getElementById("FechaN").value;
data[i].matt = document.getElementById("sMateria").value;

renderItem();
}

function deleteItem() {
data.splice(i, 1);
renderItem();
}

renderItem();




let e;
let j;
let dataN = [
];
let panelN = document.getElementById("panelN");

function clearFormN() {
document.getElementById("c").value = 0;
document.getElementById("Examen1").value = 0;
document.getElementById("Examen2").value = 0;
document.getElementById("Proyecto").value = 0;
document.getElementById("Quiz1").value = 0;
document.getElementById("Quiz2").value = 0;
document.getElementById("Cotidiano").value = 0;

}

function renderItemN() {

panelN.textContent = "";
dataN.forEach(x => {
  e = document.createElement("option");
  e.innerText = `Cedula: ${x.CCedula} | Examen 1: ${x.examen1} | Examen 2: ${x.examen2} | Proyecto: ${x.proyecto} |  Quiz 1: ${x.quiz1} | Quiz 2: ${x.quiz2} | Cotidiano: ${x.cotidiano}`;
  panelN.append(e);
});
}

function createN() {
  ccedula = document.getElementById("c").value;
  ex1 = document.getElementById("Examen1").value;
  ex2 = document.getElementById("Examen2").value;
  pr = document.getElementById("Proyecto").value;
  q1 = document.getElementById("Quiz1").value;
  q2 = document.getElementById("Quiz2").value;
  ct = document.getElementById("Coti").value;


dataN = [...dataN, { CCedula: ccedula, examen1: ex1, examen2: ex2, proyecto: pr, quiz1: q1, quiz2: q2, cotidiano: ct}];
clearForm();
console.log(dataN)
renderItemN ();
}

function panelClickN() {
j  = panelN.selectedIndex;
document.getElementById("c").value = dataN[j].CCedula;
document.getElementById("Examen1").value = dataN[j].examen1;
document.getElementById("Examen2").value = dataN[j].examen2;
document.getElementById("Proyecto").value = dataN[j]. proyecto;
document.getElementById("Quiz1").value = dataN[j].quiz1;
document.getElementById("Quiz2").value = dataN[j].quiz2;
document.getElementById("Coti").value = dataN[j].cotidiano;
}

function updateN() {


dataN[j].CCedula= document.getElementById("c").value;
dataN[j].examen1 = document.getElementById("Examen1").value;
dataN[j].examen2 = document.getElementById("Examen2").value;
dataN[j].proyecto = document.getElementById("Proyecto").value;
dataN[j].quiz1 = document.getElementById("Quiz1").value;
dataN[j].quiz2 = document.getElementById("Quiz2").value;
dataN[j].cotidiano = document.getElementById("Coti").value;
renderItemN ();
}

function deleteItemN() {
dataN.splice(j, 1);
renderItemN ();
}
renderItemN();

//rubricas

document.getElementById('btnAddRubricas').addEventListener('click', addRubricas);

var  Rubricas = [];

function addRubricas(){

  Rubricas.push({
        Ex1: document.getElementById('pEx1').value,
        Ex2: document.getElementById('pEx2').value,
        Proy: document.getElementById('pProye').value,
        Q1: document.getElementById('pQ1').value,
        Q2: document.getElementById('pQ2').value,
        Coti: document.getElementById('pCoti').value,
  })


  for(var i = 0; i<Rubricas.length; i++){
    notas3 = Rubricas[i].Ex1 /= 100;
    notas4 = Rubricas[i].Ex2 /= 100;
    notas5 =  Rubricas[i].Proy /= 100;
    notas6 =  Rubricas[i].Q1 /= 100;
    notas7 =  Rubricas[i].Q2 /= 100;
    notas8 =  Rubricas[i].Coti /= 100;
  }

  console.log(Rubricas);
  const Btabla = document.getElementById('nTablaEstudiantes');
  for(var j = dataN.length; j<dataN.length+1; j++){
    Btabla.innerHTML += `<tr>
      <td>${ccedula}</td>
      <td>${ex1 * notas3}</td>
      <td>${ex2 * notas4}</td>
      <td>${pr * notas5}</td>
      <td>${q1 * notas6}</td>
      <td>${q2 * notas7}</td>
      <td>${ct * notas8}</td>
      <td>${ex1 * notas3+ex2 * notas4 + pr * notas5 + q1 * notas6 + q2 * notas7 + ct * notas8}</td>
    </tr>`
  }
}
