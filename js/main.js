const areaTexto = document.getElementById("text-area");
const btnEncriptar = document.getElementById("encriptar");
const btnDesencriptar = document.getElementById("desencriptar");
const mostrarTexto = document.getElementById("mostrar-texto");
const btnCopiar = document.querySelector("#btn-cop");
let band;

cambiarContenedor();
btnEncriptar.addEventListener("click", (e) => {
  band = false;
  cambiarContenedor(band);
});
btnDesencriptar.addEventListener("click", (e) => {
  band = true;
  cambiarContenedor(band);
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
  for (let i = 0; i < texto.length; i++) {
    switch (texto[i]) {
      case "a":
        if (texto[i + 1] == "i") {
          textoDes += texto[i];
          i += 1;
        }
        break;
      case "e":
        if (texto[i + 4] == "r") {
          textoDes += texto[i];
          i += 4;
        }
        break;
      case "i":
        if (texto[i + 3] == "s") {
          textoDes += texto[i];
          i += 3;
        }
        break;
      case "o":
        if (texto[i + 3] == "r") {
          textoDes += texto[i];
          i += 3;
        }
        break;
      case "u":
        if (texto[i + 3] == "t") {
          textoDes += texto[i];
          i += 3;
        }
        break;
      default:
        textoDes += texto[i];
    }
  }
  return textoDes;
}

function cambiarContenedor(band) {
  let variable;
  band
    ? (variable = desencriptar(areaTexto.value))
    : (variable = encriptar(areaTexto.value));
  if (areaTexto.value == "") {
    mostrarTexto.innerHTML = `<img src="./img/img-desktop.svg" alt="imagen-niño" class="footer-img">
    <h3 class="footer-title">Ningún mensaje fue encontrado</h3>
    <p type="text" class="footer-subtitle">
      Ingresa el texto que desees encriptar o desencriptar.
    </p>`;
  } else {
    mostrarTexto.innerHTML = `<textarea cols="30"
    rows="10" class="resultado" id="text-co" readonly>${variable}</textarea>
    <button onclick="copiarTexto()" class="button btn-copiar" id="btn-cop">Copiar</button>`;
  }
}

async function copiarTexto() {
  try {
    const text = document.querySelector("#text-co");
    await navigator.clipboard.writeText(text.value);
    console.log("Texto copiado correctamente");
  } catch (error) {
    console.log("Error al copiar el texto");
  }
}
