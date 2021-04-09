let daltActivo = false;
let disActivo = false;
let sizeLetra = false;


const aumentoLetraH1 = '2.5em';
const sizeLetraH1 = '2em';

const aumentoLetraNormal = '1.25em';
const sizeLetraNormal = '1em';

let checkDaltonismo = () => {
    if (daltActivo) {
        invDaltonismo();
        document.getElementById("btn-Daltonismo").innerHTML = "Activar Daltonismo";
    } else {
        aplicarDaltonismo();
        document.getElementById("btn-Daltonismo").innerHTML = "✓ Desactivar Daltonismo";
    }
};
let checkDislexia = () => {
    if (disActivo) {
        document.getElementById("btn-Dislexia").innerHTML = "Activar Dislexia";
        invDislexia();
    } else {
        document.getElementById("btn-Dislexia").innerHTML = "✓ Desactivar Dislexia";
        aplicarDislexia();
    }
};

let checkSizeLetra = () => {
    if (sizeLetra) {
        document.getElementById("btn-sizeLetra").innerHTML = "Aumentar tamaño de letra";
        invSizeLetra();
    } else {
        document.getElementById("btn-sizeLetra").innerHTML = "✓ Encojer tamaño de letra";
        aplicarSizeLetra();
    }
};

let checkInit = () => {
    if (daltActivo) {
        document.getElementById("btn-Daltonismo").innerHTML = "✓ Desactivar Daltonismo";
    } else {
        document.getElementById("btn-Daltonismo").innerHTML = "Activar Daltonismo";
    }
    if (disActivo) {
        document.getElementById("btn-Dislexia").innerHTML = "✓ Desactivar Dislexia";
    } else {
        document.getElementById("btn-Dislexia").innerHTML = "Activar Dislexia";
    }
    if (!sizeLetra) {
        document.getElementById("btn-sizeLetra").innerHTML = "Aumentar tamaño de letra";
    } else {
        document.getElementById("btn-sizeLetra").innerHTML = "✓ Encojer tamaño de letra";
    }
};

document.addEventListener(
    "DOMContentLoaded",
    function() {
        checkInit();
    },
    false
);

function cambiarSizeLetra(tamLetraH1, tamLetraNormal) {
    console.log("entraAaAaAa en funcion");
    document.querySelector("h1").style.fontSize = tamLetraH1;
    document.querySelector("body").style.fontSize = tamLetraNormal;
    document.querySelector("#input-edad").style.fontSize = tamLetraNormal;
    document.querySelector("#comentarios").style.fontSize = tamLetraNormal;
    document.querySelector("#pregunta14").style.fontSize = tamLetraNormal;
    document.querySelector("#pregunta15").style.fontSize = tamLetraNormal;
    document.querySelector("#pregunta16").style.fontSize = tamLetraNormal;
}

function  cambiarDaltonismo(comentariosColor, bodyColor, inputEdadColor, sectionColor){
    let section = document.querySelectorAll(".seccion-container");
    document.querySelector("#comentarios").style.backgroundColor = comentariosColor;
    document.querySelector("body").style.background = bodyColor;
    document.querySelector("#input-edad").style.backgroundColor = inputEdadColor;
    section.forEach((el) => {
        el.style.backgroundColor = sectionColor;
    });
}

function cambiarDislexia(letra){
    let body = document.querySelector("body");
    (body.style.fontFamily = letra), "Arial";
}


const aplicarDislexia = () => {
    disActivo = true;
    cambiarDislexia("opendislexic");
    console.log("Aplico dislexia");
};

const aplicarSizeLetra = () => {
    sizeLetra = true;
    cambiarSizeLetra(aumentoLetraH1, aumentoLetraNormal);
    console.log("Aumento tamaño de letra");
};

const aplicarDaltonismo = () => {
    daltActivo = true;
    cambiarDaltonismo("#f0ce9e", "linear-gradient(to bottom, #cf8539 0%, rgba(233, 160, 65, 1) 100%)","#FF8039","#f0ce9e");
    console.log("Aplico daltonismo");
};

const invDaltonismo = () => {
    daltActivo = false;
    cambiarDaltonismo("#e6b570", "linear-gradient(to bottom, rgba(233, 191, 124, 0.9) 0%, rgba(233, 160, 65, 0.5) 100%)","rgba(233, 191, 124, 0.9)", "#e6b570");
    console.log("Invierto daltonismo ");
};

const invDislexia = () => {
    disActivo = false;
    cambiarDislexia("Roboto");
    console.log("Invierto dislexia");
};

const invSizeLetra = () => {
    sizeLetra = false;
    cambiarSizeLetra(sizeLetraH1, sizeLetraNormal);
    console.log("Encojo letra");
};

if (bowser.name.toLowerCase() !== "chrome") {
    Swal.fire({
        title: `Navegador desactualizado!`,
        text: `Estas usando ${bowser.name} ${bowser.version}. Para que la encuesta funcione correctamente, te recomendamos utilizar un navegador actual.`,
        icon: `warning`,
        confirmButtonText: `Entendido`,
    });
}

(async() => {
    const { value: disc } = await Swal.fire({
        title: `¿Tienes una discapacidad visual?`,
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: `Si`,
        cancelButtonColor: "#d33",
        cancelButtonText: `No`,
        icon: `question`,
    });
    let html = `
            <section class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="checkBoxDislexia">
                  <label class="form-check-label" for="checkBoxDislexia">
                        Dislexia
                  </label>
            </section>
            <section class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="checkBoxDaltonismo">
                  <label class="form-check-label" for="checkBoxDaltonismo">
                        Daltonismo
                  </label>
            </section>
            <section class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="checkBoxSizeLetra">
                  <label class="form-check-label" for="checkBoxSizeLetra">
                        Aumentar tamaño de letra
                  </label>
            </section>
            `;
    if (disc) {
        Swal.fire({
            title: `¿Cuál?`,
            icon: `question`,
            html: html,
            inputValue: 2,
            confirmButtonText: "¡Listo!",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                if (document.getElementById("checkBoxDaltonismo").checked) {
                    aplicarDaltonismo();
                }
                if (document.getElementById("checkBoxDislexia").checked) {
                    aplicarDislexia();
                }
                if (document.getElementById("checkBoxSizeLetra").checked) {
                    aplicarSizeLetra();
                }
            }
            checkInit();
        });
    }
})();