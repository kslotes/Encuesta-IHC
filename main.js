const aplicarDislexia = () => {
    let body = document.querySelector("body");
    (body.style.fontFamily = "opendislexic"), Times, serif, "Arial";
};
const aplicarDaltonismo = () => {
    let section = document.querySelectorAll(".seccion-container");
    let comentarios = document.querySelector("#comentarios");
    let body = document.querySelector("body");
    let inputEdad = document.querySelector("#input-edad");
    inputEdad.style.backgroundColor = "#FF8039";
    body.style.backgroundColor = "#cf9139";
    comentarios.style.backgroundColor = "#f0ce9e";
    section.forEach(el => {
        el.style.backgroundColor = "#f0ce9e";
    })
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
            `;
    if (disc) {
        Swal.fire({
            title: `¿Cuál?`,
            icon: `question`,
            html: html,
            inputValue: 2,
            confirmButtonText: "¡Listo!",
            showCancelButton: true,
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {

                if (document.getElementById('checkBoxDaltonismo').checked) {
                    aplicarDaltonismo();
                    console.log('Aplico daltonismo')
                }
                if (document.getElementById('checkBoxDislexia').checked) {
                    aplicarDislexia();
                    console.log('Aplico dislexia')

                }
            }
        })
    }
})();