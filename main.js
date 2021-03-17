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
            inputLabel: "Seleccione una:",
            confirmButtonText: '¡Listo!',
            inputOptions: {
                dislexia: "Dislexia",
                daltonismo: "Daltonismo",
            },
            inputPlaceholder: `Seleccione una:`,
        });
        if (disc) {
            Swal.fire(`Seleccionaste: ${disc}`)
        }
    }
})();


console.log(bowser.name, bowser.version);