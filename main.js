let disActivo = false;
let sizeLetra = false;

let checkDislexia = () => {
    if (disActivo) {
        document.getElementById("btn-Dislexia").innerHTML = "Activar Dislexia";
        invDislexia();
    } else {
        document.getElementById("btn-Dislexia").innerHTML = "Desactivar Dislexia";
        aplicarDislexia();
    }
};

let checkSizeLetra = () => {
    if (sizeLetra) {
        document.getElementById("btn-sizeLetra").innerHTML = "Aumentar tamaño de letra";
        invSizeLetra();
    } else {
        document.getElementById("btn-sizeLetra").innerHTML = "Encojer tamaño de letra";
        aplicarSizeLetra();
    }
};

let checkInit = () => {
    if (disActivo) {
        document.getElementById("btn-Dislexia").innerHTML = "Desactivar Dislexia";
    } else {
        document.getElementById("btn-Dislexia").innerHTML = "Activar Dislexia";
    }
    if (!sizeLetra) {
        document.getElementById("btn-sizeLetra").innerHTML = "Aumentar tamaño de letra";
    } else {
        document.getElementById("btn-sizeLetra").innerHTML = "Encojer tamaño de letra";
    }
};

document.addEventListener(
    "DOMContentLoaded",
    function() {
        checkInit();
    },
    false
);

const aplicarDislexia = () => {
    disActivo = true;
    let body = document.querySelector("body");
    (body.style.fontFamily = "opendislexic"), "Arial";
    console.log("Aplico dislexia");
};


const aplicarSizeLetra = () => {
    sizeLetra = true;
    document.querySelector("h1").style.fontSize = '2.5em';
    document.querySelector("body").style.fontSize = '1.5em';
    console.log("Aumento tamaño de letra");
};

const invDislexia = () => {
    disActivo = false;
    let body = document.querySelector("body");
    (body.style.fontFamily = "Roboto"), "Arial";
    dislexiaActiva = false;
    console.log("Invierto dislexia");
};

const invSizeLetra = () => {
    sizeLetra = false;
    document.querySelector("h1").style.fontSize = '2em';
    document.querySelector("body").style.fontSize = '1em';
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