document.addEventListener('DOMContentLoaded', function () {
    // Espera a que se cargue el DOM antes de agregar el event listener
    var slider1 = document.getElementById('slider1');
    var slider2 = document.getElementById('slider2');
    var eti1 = document.getElementById('eti1');

    slider1.addEventListener('input', function () {
        // Esta función se ejecutará cada vez que cambies el valor del slider
        var valorSlider1 = slider1.value;

        if (valorSlider1 == 0) {
            etiqueta1.innerHTML = "Riesgo bajo";
            etiqueta1.style.color = "green"
            mensaje = "Riesgo bajo"
        } else if (valorSlider1 == 1) {
            etiqueta1.innerHTML = "Riesgo medio";
            etiqueta1.style.color = "orange"
            mensaje = "Riesgo medio"
        } else if (valorSlider1 == 2) {
            etiqueta1.innerHTML = "Riesgo medio";
            etiqueta1.style.color = "orange"
            mensaje = "Riesgo medio"
        } else if (valorSlider1 == 3) {
            etiqueta1.innerHTML = "Riesgo alto";
            etiqueta1.style.color = "red"
            mensaje = "Riesgo alto"
        } else if (valorSlider1 == 4) {
            etiqueta1.innerHTML = "Riesgo alto";
            etiqueta1.style.color = "red"
            mensaje = "Riesgo alto"
        } else if (valorSlider1 == 5) {
            etiqueta1.innerHTML = "Riesgo alto";
            etiqueta1.style.color = "red"
            mensaje = "Riesgo alto"
        }

        fetch('https://smati-victors-projects-4d00ac16.vercel.app/api/xbee/registro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idXbee: "1",
                nivel: valorSlider1,
                mensaje: mensaje
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });

    slider2.addEventListener('input', function () {
        // Esta función se ejecutará cada vez que cambies el valor del slider
        var valorSlider2 = slider2.value;
        var mensaje = "";

        if (valorSlider2 == 0) {
            etiqueta2.innerHTML = "Riesgo bajo";
            etiqueta2.style.color = "green"
            mensaje = "Riesgo bajo"
        } else if (valorSlider2 == 1) {
            etiqueta2.innerHTML = "Riesgo medio";
            etiqueta2.style.color = "orange"
            mensaje = "Riesgo medio"
        } else if (valorSlider2 == 2) {
            etiqueta2.innerHTML = "Riesgo medio";
            etiqueta2.style.color = "orange"
            mensaje = "Riesgo medio"
        } else if (valorSlider2 == 3) {
            etiqueta2.innerHTML = "Riesgo alto";
            etiqueta2.style.color = "red"
            mensaje = "Riesgo alto"
        } else if (valorSlider2 == 4) {
            etiqueta2.innerHTML = "Riesgo alto";
            etiqueta2.style.color = "red"
            mensaje = "Riesgo alto"
        } else if (valorSlider2 == 5) {
            etiqueta2.innerHTML = "Riesgo alto";
            etiqueta2.style.color = "red"
            mensaje = "Riesgo alto"
        }

        fetch('https://smati-victors-projects-4d00ac16.vercel.app/api/xbee/registro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idXbee: "2",
                nivel: valorSlider2,
                mensaje: mensaje
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });
});
