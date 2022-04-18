const areaTexto = document.getElementById("text-area");
const btnEncriptar = document.getElementById("encriptar");
const btnDesencriptar = document.getElementById("desencriptar");
const mostrarTexto = document.getElementById("mostrar-texto");
const btnCopiar = document.getElementById("btn-cop");

cambiarContenedor();
btnEncriptar.addEventListener("click", (e) => {
  cambiarContenedor();
});
btnDesencriptar.addEventListener("click", (e) => {
  desencriptarContenedor();
});
btnCopiar.addEventListener("click", (e) => {
  copiarTexto();
});

function encriptar(texto) {
  let textMin = "";
  let textoMi = texto.toLowerCase();
  for (let i = 0; i < texto.length; i++) {
    if (textoMi[i] === "e") textMin += "enter";
    else if (textoMi[i] === "i") textMin += "imes";
    else if (textoMi[i] === "a") textMin += "ai";
    else if (textoMi[i] === "o") textMin += "ober";
    else if (textoMi[i] === "u") textMin += "ufat";
    else textMin += textoMi[i];
  }
  return textMin;
}

function desencriptar(texto) {
  let textoDes = "";
  
}

function cambiarContenedor() {
  if (areaTexto.value == "") {
    mostrarTexto.innerHTML = `<img src="/img/img-desktop.svg" alt="imagen-niño" class="footer-img">
    <h3 class="footer-title">Ningún mensaje fue encontrado</h3>
    <p type="text" class="footer-subtitle">
      Ingresa el texto que desees encriptar o desencriptar.
    </p>`;
  } else {
    mostrarTexto.innerHTML = `<p class="resultado" id="text-co">${encriptar(
      areaTexto.value
    )}</p>
    <button class="button btn-copiar" id="btn-cop">Copiar</button>`;
  }
}

function copiarTexto() {
  const textoCopia = document.getElementById("text-co");
  textoCopia.select();
  document.execCommand('copy');
}

function desencriptarContenedor() {
  mostrarTexto.innerHTML = `<p class="resultado" id="text-co">${desencriptar(
    areaTexto.value
  )}</p>
  <button class="button btn-copiar" id="btn-cop">Copiar</button>`;
}
