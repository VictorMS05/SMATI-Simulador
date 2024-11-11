let nivel_1 = document.getElementById("nivel_1").value;
let label_1 = document.getElementById("nivel_1");
let descripcion_1 = document.getElementById("descripcion_1");
let nivel_2 = document.getElementById("nivel_2").value;
let label_2 = document.getElementById("nivel_2");
let descripcion_2 = document.getElementById("descripcion_2");
let nivel_3 = document.getElementById("nivel_3").value;
let label_3 = document.getElementById("nivel_3");
let descripcion_3 = document.getElementById("descripcion_3");
let nivel_4 = document.getElementById("nivel_4").value;
let label_4 = document.getElementById("nivel_4");
let descripcion_4 = document.getElementById("descripcion_4");
let id_intervalo_1 = 0;
let id_intervalo_2 = 0;
let id_intervalo_3 = 0;
let id_intervalo_4 = 0;

function comenzarEnvioDatos(numero_tramo) {
    let nivel = 0;
    let id_intervalo = 0;
    id_intervalo = setInterval(() => {
        switch (numero_tramo) {
            case 1:
                nivel = nivel_1;
                id_intervalo_1 = id_intervalo;
                break;
            case 2:
                nivel = nivel_2;
                id_intervalo_2 = id_intervalo;
                break;
            case 3:
                nivel = nivel_3;
                id_intervalo_3 = id_intervalo;
                break;
            case 4:
                nivel = nivel_4;
                id_intervalo_4 = id_intervalo;
                break;
            default:
                break;
        }
        fetch('https://smati-victors-projects-4d00ac16.vercel.app/api/nivel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_xbee: numero_tramo,
                nivel: nivel
            })
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

function detenerEnvioDatos(numero_tramo) {
    let id_intervalo = 0;
    switch (numero_tramo) {
        case 1:
            id_intervalo = id_intervalo_1;
            break;
        case 2:
            id_intervalo = id_intervalo_2;
            break;
        case 3:
            id_intervalo = id_intervalo_3;
            break;
        case 4:
            id_intervalo = id_intervalo_4;
            break;
        default:
            break;
    }
    clearInterval(id_intervalo);
}

function cambiarInformacionTramo(numero_tramo, nivel) {
    let color = "black";
    let mensaje = "";
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
    } else {
        mensaje = "ERROR";
    }
    switch (numero_tramo) {
        case 1:
            label_1.style.color = color;
            descripcion_1.innerHTML = mensaje;
            descripcion_1.style.color = color;
            break;
        case 2:
            label_2.style.color = color;
            descripcion_2.innerHTML = mensaje;
            descripcion_2.style.color = color;
            break;
        case 3:
            label_3.style.color = color;
            descripcion_3.innerHTML = mensaje;
            descripcion_3.style.color = color;
            break;
        case 4:
            label_4.style.color = color;
            descripcion_4.innerHTML = mensaje;
            descripcion_4.style.color = color;
            break;
        default:
            break;
    }
}

document.getElementById("nivel_1").addEventListener("change", (event) => {
    nivel_1 = event.target.value;
    cambiarInformacionTramo(1, nivel_1);
});

document.getElementById("nivel_2").addEventListener("change", (event) => {
    nivel_2 = event.target.value;
    cambiarInformacionTramo(2, nivel_2);
});

document.getElementById("nivel_3").addEventListener("change", (event) => {
    nivel_3 = event.target.value;
    cambiarInformacionTramo(3, nivel_3);
});

document.getElementById("nivel_4").addEventListener("change", (event) => {
    nivel_4 = event.target.value;
    cambiarInformacionTramo(4, nivel_4);
});

window.comenzarEnvioDatos = comenzarEnvioDatos;
window.detenerEnvioDatos = detenerEnvioDatos;