const aplicarDaltonismo = () => {
    // #f0ce9e secciones
    //#cf9139 fondo
    let section = document.querySelectorAll('.seccion-container');
    let comentarios = document.querySelector("#comentarios")
    let body = document.querySelector('body');
    let inputEdad = document.querySelector('#input-edad');
    inputEdad.style.backgroundColor = "#FF8039";
    body.style.backgroundColor = "#cf9139";
    comentarios.style.backgroundColor = "#f0ce9e";
    for (let i = 0; i <= section.length; i++) {
        section[i].style.backgroundColor = "#f0ce9e";
    }
}
const aplicarDislexia = () => {
    let body = document.querySelector('body');
    body.style.fontFamily = 'opendislexic', Times, serif, 'Arial';
}

if (bowser.name.toLowerCase() !== 'chrome') {
    Swal.fire({
        title: `Navegador desactualizado!`,
        text: `Estas usando ${bowser.name} ${bowser.version}. Para que la encuesta funcione correctamente, te recomendamos utilizar un navegador actual.`,
        icon: `warning`,
        confirmButtonText: `Entendido`
    })

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

    if (disc) {
        const { value: disc } = await Swal.fire({
            title: `¿Cuál?`,
            icon: `question`,
            input: "select",
            confirmButtonText: '¡Listo!',
            inputOptions: {
                dislexia: "Dislexia",
                daltonismo: "Daltonismo",
            },
            inputPlaceholder: `Seleccione una:`,
        });
        switch (disc) {
            case 'daltonismo':
                aplicarDaltonismo();
                break;
            case 'dislexia':
                aplicarDislexia();
                break;
            default:
                break;
        }
    }
})();


console.log(bowser.name, bowser.version);