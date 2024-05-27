let nivel_1 = document.getElementById("nivel_1");
let descripcion_1 = document.getElementById("descripcion_1");
let nivel_2 = document.getElementById("nivel_2");
let descripcion_2 = document.getElementById("descripcion_2");
let mensaje = "";
let nivel = 0;
let id_intervalo = 0;

export function comenzarEnvioDatos() {

    id_intervalo = setInterval(() => {
        cambiarInformacionTramo1();
        cambiarInformacionTramo2();

        // fetch('https://smati-victors-projects-4d00ac16.vercel.app/api/xbee/registro', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         idXbee: "2",
        //         nivel: nivel,
        //         mensaje: mensaje
        //     })
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('Success:', data);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    }, 2000);
}

export function detenerEnvioDatos() {
    clearInterval(id_intervalo);
}

function cambiarInformacionTramo1() {
    nivel = cambiarNivel(nivel_1);
    if (nivel == 0) {
        nivel_1.innerHTML = nivel;
        nivel_1.style.color = "green";
        descripcion_1.innerHTML = "RIESGO BAJO";
        descripcion_1.style.color = "green";
        mensaje = "RIESGO BAJO";
    } else if (nivel == 1) {
        nivel_1.innerHTML = nivel;
        nivel_1.style.color = "orange";
        descripcion_1.innerHTML = "RIESGO MEDIO";
        descripcion_1.style.color = "orange";
        mensaje = "RIESGO MEDIO";
    } else if (nivel == 2) {
        nivel_1.innerHTML = nivel;
        nivel_1.style.color = "orange";
        descripcion_1.innerHTML = "RIESGO MEDIO";
        descripcion_1.style.color = "orange";
        mensaje = "RIESGO MEDIO";
    } else if (nivel == 3) {
        nivel_1.innerHTML = nivel;
        nivel_1.style.color = "red";
        descripcion_1.innerHTML = "RIESGO ALTO";
        descripcion_1.style.color = "red";
        mensaje = "RIESGO ALTO";
    } else if (nivel == 4) {
        nivel_1.innerHTML = nivel;
        nivel_1.style.color = "red";
        descripcion_1.innerHTML = "RIESGO ALTO";
        descripcion_1.style.color = "red";
        mensaje = "RIESGO ALTO";
    } else if (nivel == 5) {
        nivel_1.innerHTML = nivel;
        nivel_1.style.color = "red";
        descripcion_1.innerHTML = "RIESGO ALTO";
        descripcion_1.style.color = "red";
        mensaje = "RIESGO ALTO";
    }
}

function cambiarInformacionTramo2() {
    nivel = cambiarNivel(nivel_2);
    if (nivel == 0) {
        nivel_2.innerHTML = nivel;
        nivel_2.style.color = "green";
        descripcion_2.innerHTML = "RIESGO BAJO";
        descripcion_2.style.color = "green";
        mensaje = "RIESGO BAJO";
    } else if (nivel == 1) {
        nivel_2.innerHTML = nivel;
        nivel_2.style.color = "orange";
        descripcion_2.innerHTML = "RIESGO MEDIO";
        descripcion_2.style.color = "orange";
        mensaje = "RIESGO MEDIO";
    } else if (nivel == 2) {
        nivel_2.innerHTML = nivel;
        nivel_2.style.color = "orange";
        descripcion_2.innerHTML = "RIESGO MEDIO";
        descripcion_2.style.color = "orange";
        mensaje = "RIESGO MEDIO";
    } else if (nivel == 3) {
        nivel_2.innerHTML = nivel;
        nivel_2.style.color = "red";
        descripcion_2.innerHTML = "RIESGO ALTO";
        descripcion_2.style.color = "red";
        mensaje = "RIESGO ALTO";
    } else if (nivel == 4) {
        nivel_2.innerHTML = nivel;
        nivel_2.style.color = "red";
        descripcion_2.innerHTML = "RIESGO ALTO";
        descripcion_2.style.color = "red";
        mensaje = "RIESGO ALTO";
    } else if (nivel == 5) {
        nivel_2.innerHTML = nivel;
        nivel_2.style.color = "red";
        descripcion_2.innerHTML = "RIESGO ALTO";
        descripcion_2.style.color = "red";
        mensaje = "RIESGO ALTO";
    }
}

function cambiarNivel(nivel) {
    if (nivel == 0) {
        nivel++;
    } else if (nivel == 5) {
        nivel--;
    } else {
        if (Math.floor(Math.random() * 2) == 0) {
            nivel++;
        } else {
            nivel--;
        }
    }
    return nivel;
}