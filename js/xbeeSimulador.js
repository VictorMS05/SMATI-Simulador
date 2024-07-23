let nivel_1 = document.getElementById("nivel_1");
let descripcion_1 = document.getElementById("descripcion_1");
let nivel_2 = document.getElementById("nivel_2");
let descripcion_2 = document.getElementById("descripcion_2");
let mensaje = "";
let nivel = 0;
let id_intervalo = 0;
let nivel_minimo = 0;
let nivel_maximo = 2;

function comenzarEnvioDatos() {
    id_intervalo = setInterval(() => {
        cambiarInformacionTramo(true, parseInt(nivel_1.textContent));
        fetch('https://smati-victors-projects-4d00ac16.vercel.app/api/xbee/registro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_xbee: "1",
                nivel: nivel,
                mensaje: mensaje
            })
        })
            .then(response => response.json())
            .then(data => {
                cambiarInformacionTramo(false, parseInt(nivel_2.textContent));
                console.log('Success:', data);
                return fetch('https://smati-victors-projects-4d00ac16.vercel.app/api/xbee/registro', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id_xbee: "2",
                        nivel: nivel,
                        mensaje: mensaje
                    })
                });
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, 2000);
}

function detenerEnvioDatos() {
    clearInterval(id_intervalo);
}

function cambiarParametros() {
    if(nivel_minimo == 0 && nivel_maximo == 2) {
        nivel_minimo = 3;
        nivel_maximo = 5;
    } else {
        nivel_minimo = 0;
        nivel_maximo = 2;
    }
}

function cambiarInformacionTramo(es_tramo_1, nivel_anterior) {
    let color = "black";
    nivel = cambiarNivel(nivel_anterior);
    if (nivel == 0) {
        color = "blue";
        mensaje = "SIN RIESGO";
    } else if (nivel == 1) {
        color = "green";
        mensaje = "RIESGO BAJO";
    } else if (nivel == 2) {
        color = "gold";
        mensaje = "RIESGO MODERADO";
    } else if (nivel == 3) {
        color = "orange";
        mensaje = "RIESGO ALTO";
    } else if (nivel == 4) {
        color = "red";
        mensaje = "RIESGO INTENSO";
    } else if (nivel == 5) {
        color = "blackred";
        mensaje = "RIESGO MÁXIMO";
    }
    if (es_tramo_1) {
        nivel_1.innerHTML = nivel;
        nivel_1.style.color = color;
        descripcion_1.innerHTML = mensaje;
        descripcion_1.style.color = color;
    } else {
        nivel_2.innerHTML = nivel;
        nivel_2.style.color = color;
        descripcion_2.innerHTML = mensaje;
        descripcion_2.style.color = color;
    }
}

function cambiarNivel(nivel) {
    if (nivel_minimo == 0 && nivel > 2) {
        nivel = 2;
    }
    if (nivel_minimo == 3 && nivel < 3) {
        nivel = 3;
    }
    if (nivel == nivel_minimo) {
        nivel++;
    } else if (nivel == nivel_maximo) {
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

window.comenzarEnvioDatos = comenzarEnvioDatos;
window.detenerEnvioDatos = detenerEnvioDatos;
window.cambiarParametros = cambiarParametros;