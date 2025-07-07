//Agregar el dashboad
document.getElementById("confirm").addEventListener("click", () => {
  showButtonInfo("Confirmar", "Este botón confirma la configuración actual del analizador de redes.");
});

//Flechas
document.getElementById("up").addEventListener("click", () => {
  showButtonInfo("Flecha Arriba", "Este botón permite desplazarte al siguiente dispositivo en la lista de análisis.");
});


// botones de función
document.getElementById("full-f1").addEventListener("click", function() {
  document.getElementById("screen").innerText = "F1 Presionado";
});
document.getElementById("f2").addEventListener("click", function() {
  document.getElementById("screen").innerText = "F2 Presionado";
});
document.getElementById("f3").addEventListener("click", function() {
  document.getElementById("screen").innerText = "F3 Presionado";
});
document.getElementById("f4").addEventListener("click", function() {
  document.getElementById("screen").innerText = "F4 Presionado";
});
document.getElementById("f5").addEventListener("click", function() {
  document.getElementById("screen").innerText = "F5 Presionado";
});


// botón confirmar
document.getElementById("confirm").addEventListener("click", function() {
  document.getElementById("screen").innerHTML = "<img src='pantalla2.jpg' style='width:100%'/>";
});
// botón regresar
document.getElementById("return").addEventListener("click", function() {
  document.getElementById("screen").innerHTML = "<img src='pantalla3.jpg' style='width:100%'/>";
});
// botón preguntas
document.getElementById("ask").addEventListener("click", function() {
  document.getElementById("screen").innerHTML = "<img src='pantalla4.jpg' style='width:100%'/>";
});
// botón apagar o ensender
document.getElementById("close").addEventListener("click", function() {
  document.getElementById("screen").innerHTML = "<img src='pantalla5.jpg' style='width:100%'/>";
});

// flechas
document.getElementById("up").addEventListener("click", function() {
  document.getElementById("screen").innerText = "Arriba";
});
document.getElementById("down").addEventListener("click", function() {
  document.getElementById("screen").innerText = "Abajo";
});
document.getElementById("left").addEventListener("click", function() {
  document.getElementById("screen").innerText = "Izquierda";
});
document.getElementById("right").addEventListener("click", function() {
  document.getElementById("screen").innerText = "Derecha";
});

// calculadora numérica
let currentCalc = "";
document.getElementById("num1").addEventListener("click", function() {
  currentCalc += "1";
  document.getElementById("screen").innerText = currentCalc;
});
document.getElementById("num2").addEventListener("click", function() {
  currentCalc += "2";
  document.getElementById("screen").innerText = currentCalc;
});
document.getElementById("num3").addEventListener("click", function() {
  currentCalc += "3";
  document.getElementById("screen").innerText = currentCalc;
});
document.getElementById("num4").addEventListener("click", function() {
  currentCalc += "4";
  document.getElementById("screen").innerText = currentCalc;
});
document.getElementById("num5").addEventListener("click", function() {
  currentCalc += "5";
  document.getElementById("screen").innerText = currentCalc;
});
document.getElementById("num6").addEventListener("click", function() {
  currentCalc += "6";
  document.getElementById("screen").innerText = currentCalc;
});
document.getElementById("num7").addEventListener("click", function() {
  currentCalc += "7";
  document.getElementById("screen").innerText = currentCalc;
});
document.getElementById("num8").addEventListener("click", function() {
  currentCalc += "8";
  document.getElementById("screen").innerText = currentCalc;
});
