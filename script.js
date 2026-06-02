// ── Gráfico 1: Diagrama de dispersión — Acreditación vs. Arancel ──────────────

new Chart(document.getElementById("dispersion"), {
    type: "scatter",
    data: {
        datasets: [
            {
                label: "Scatter Dataset",
                data: [
                    { name: "BACHILLERATO EN ARTES, ARQUITECTURA Y DISEÑO EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7200000 },
                    { name: "BACHILLERATO EN DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 10364360 },
                    { name: "DISEÑO EN LA UNIVERSIDAD AUSTRAL DE CHILE", x: 6, y: 5887000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD CATÓLICA DE TEMUCO", x: 5, y: 5276000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE CHILE", x: 7, y: 6486700 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE LA SERENA", x: 5, y: 4071000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE LAS AMERICAS", x: 5, y: 4730000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE PLAYA ANCHA DE CIENCIAS DE LA EDUCACION", x: 5, y: 4305000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE TALCA", x: 6, y: 5887000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE VALPARAISO", x: 6, y: 5713000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE VIÑA DEL MAR", x: 4, y: 4277000 },
                    { name: "DISEÑO DE EXPERIENCIAS INMERSIVAS Y VIDEOJUEGOS EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    { name: "DISEÑO DE IMAGEN ESPECIALIDAD MODA EN LA UNIACC", x: 3, y: 4210000},
                    { name: "DISEÑO DE INTERIORES Y AMBIENTES EN LA UNIACC", x: 3, y: 4030000 },
                    { name: "DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7136000 },
                    { name: "DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 5069000 },
                    { name: "DISEÑO DE MODA Y MANAGEMENT EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                    { name: "DISEÑO DE VESTUARIO Y TEXTIL EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7148000 },
                    { name: "DISEÑO DE VIDEOJUEGOS EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    { name: "DISEÑO EN ANIMACIÓN DIGITAL EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    { name: "DISEÑO EN COMUNICACIÓN VISUAL EN LA UTEM", x: 4, y: 4763300 },
                    { name: "DISEÑO EN COMUNICACION VISUAL EN LA UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 6552000 },
                    { name: "DISEÑO EN INTERACCION DIGITAL EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE CHILE", x: 7, y: 8080000 },
                    { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE VALPARAÍSO", x: 7, y: 6915000},
                    { name: "DISEÑO EN LA UNIVERSIDAD DE LAS AMÉRICAS", x: 5, y: 4730000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 9754692 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 6056038 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DIEGO PORTALES", x: 6, y: 7597000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                    { name: "DISEÑO EN MARKETING DIGITAL EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000},
                    { name: "DISEÑO GRÁFICO EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7065000 },
                    { name: "DISEÑO GRÁFICO EN LA UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4307000 },
                    { name: "DISEÑO GRÁFICO ESPECIALIDAD MULTIMEDIA EN LA UNIACC", x: 3, y: 4210000},
                    { name: "DISEÑO GRÁFICO MENCIÓN DISEÑO ESTRATÉGICO EN LA UNIVERSIDAD DE ANTOFAGASTA", x: 5, y: 5120000 },
                    { name: "DISEÑO INDUSTRIAL EN LA UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 4989000 },
                    { name: "DISEÑO INDUSTRIAL EN LA UTEM", x: 4, y: 4891000},
                    { name: "DISEÑO INDUSTRIAL EN LA UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4434000 },
                    { name: "DISEÑO MENCION INDUSTRIAL/GRÁFICO/AMBIENTES EN LA UNIVERSIDAD MAYOR", x: 5, y: 7214218},
                    { name: "DISEÑO MULTIMEDIA EN LA UNIVERSIDAD DE TARAPACA", x: 6, y: 6555000 },
                    { name: "DISEÑO TEATRAL EN LA UNIVERSIDAD DE CHILE", x: 7, y: 5492400 },
                    { name: "INGENIERIA EN DISEÑO DE PRODUCTOS EN LA UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA", x: 6, y: 6000000 },
                    { name: "INGENIERIA EN DISEÑO EN LA UNIVERSIDAD ADOLFO IBAÑEZ", x: 6, y: 9754692 },
                    { name: "INGENIERIA EN FABRICACION Y DISEÑO INDUSTRIAL EN LA UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA", x: 6, y: 5180000 },
                    { name: "INGENIERIA EN REALIDAD VIRTUAL Y DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD BERNARDO O'HIGGINS", x: 5, y: 5900000 },
                ],
                backgroundColor: "rgba(241,142,45,.75)",
                pointRadius: 5,
                pointHoverRadius: 5,
            },
            {
                label: "Línea de referencia",
                type: "line",
                data: [
                    { x: 3, y: 4030000 },
                    { x: 7, y: 8080000 },
                ],
                borderColor: "rgba(102,102,102,.2)",
                borderWidth: 1,
                pointRadius: 0,
                pointHoverRadius: 0,
                fill: false,
                tension: 0,
            },
        ],
    },
    options: {
        scales: {
            x: {
                type: "linear",
                position: "bottom",
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#ccc" },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return Number.isInteger(value) ? value + " años" : null;
                    },
                },
            },
            y: {
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#bbb", dash: [4, 4] },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return "$ " + value.toLocaleString("es-CL");
                    },
                },
            },
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "#fff",
                borderColor: "#ddd",
                borderWidth: 1,
                titleColor: "#111",
                bodyColor: "#555",
                titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                bodyFont: { family: "'Georama', sans-serif", size: 11 },
                padding: 10,
                filter: function (item) {
                    return item.datasetIndex === 0;
                },
                callbacks: {
                    label: function (context) {
                        const point = context.raw;
                        return [
                            point.name,
                            "Universidad acreditada por " + point.x + " años",
                            "Arancel $ " + point.y.toLocaleString("es-CL"),
                        ];
                    },
                },
            },
        },
    },
});


// ── Gráfico 2: Barras horizontales — Años estimados para recuperar el arancel ──
//
// Metodología: (arancel anual × duración de la carrera) / sueldo bruto al primer año
// Fuente salarial: SIES / Mifuturo — mediana sueldo primer año egresados 2022, carreras de Diseño.
// Se seleccionan programas representativos de distintos niveles de acreditación
// para mantener el hilo narrativo con el gráfico anterior.

const datosRetorno = [
    { programa: "Diseño — U. de Chile (7 años acred.)",        arancel: 6486700,  duracion: 5, sueldo: 640000  },
    { programa: "Diseño — PUC (7 años acred.)",                arancel: 8080000,  duracion: 5, sueldo: 820000  },
    { programa: "Diseño — USACH (7 años acred.)",              arancel: 6552000,  duracion: 5, sueldo: 620000  },
    { programa: "Diseño — UDP (6 años acred.)",                arancel: 7597000,  duracion: 5, sueldo: 680000  },
    { programa: "Diseño — U. del Desarrollo (6 años acred.)",  arancel: 9754692,  duracion: 6, sueldo: 750000  },
    { programa: "Diseño — U. Andrés Bello (6 años acred.)",    arancel: 7065000,  duracion: 6, sueldo: 590000  },
    { programa: "Diseño — U. Mayor (5 años acred.)",           arancel: 7214218,  duracion: 5, sueldo: 560000  },
    { programa: "Diseño — U. de Valparaíso (6 años acred.)",   arancel: 5713000,  duracion: 6, sueldo: 530000  },
    { programa: "Diseño — U. del Bío-Bío (5 años acred.)",     arancel: 4307000,  duracion: 5, sueldo: 490000  },
    { programa: "Diseño — UTEM (4 años acred.)",               arancel: 4763300,  duracion: 5, sueldo: 500000  },
    { programa: "Diseño — U. Gabriela Mistral (4 años acred.)",arancel: 4814000,  duracion: 4, sueldo: 480000  },
    { programa: "Diseño — UNIACC (3 años acred.)",             arancel: 4030000,  duracion: 3, sueldo: 440000  },
];

// Años para recuperar la inversión total: (arancel × duración) / (sueldo × 12)
const aniosRetorno = datosRetorno.map(d =>
    parseFloat(((d.arancel * d.duracion) / (d.sueldo * 12)).toFixed(1))
);
const etiquetas = datosRetorno.map(d => d.programa);

// Color según tiempo de retorno: verde < 4, amarillo 4–6, naranja > 6
const coloresBarras = aniosRetorno.map(v => {
    if (v < 4)  return "rgba(90, 160, 120, 0.8)";
    if (v <= 6) return "rgba(241, 142, 45, 0.8)";
    return "rgba(220, 80, 50, 0.8)";
});

new Chart(document.getElementById("retorno"), {
    type: "bar",
    data: {
        labels: etiquetas,
        datasets: [
            {
                label: "Años para recuperar la inversión",
                data: aniosRetorno,
                backgroundColor: coloresBarras,
                borderWidth: 0,
                borderRadius: 3,
            },
        ],
    },
    options: {
        indexAxis: "y",
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "#fff",
                borderColor: "#ddd",
                borderWidth: 1,
                titleColor: "#111",
                bodyColor: "#555",
                titleFont: { family: "'Georama', sans-serif", size: 11, weight: "600" },
                bodyFont:  { family: "'Georama', sans-serif", size: 11 },
                padding: 10,
                callbacks: {
                    title: function (items) {
                        return items[0].label;
                    },
                    label: function (context) {
                        const d = datosRetorno[context.dataIndex];
                        return [
                            "Años estimados para recuperar: " + context.raw,
                            "Arancel anual: $ " + d.arancel.toLocaleString("es-CL"),
                            "Duración: " + d.duracion + " años",
                            "Sueldo 1er año (mediana): $ " + d.sueldo.toLocaleString("es-CL"),
                        ];
                    },
                },
            },
        },
        scales: {
            x: {
                grid:   { color: "rgba(0,0,0,0.06)" },
                border: { color: "#ccc" },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return value + " años";
                    },
                },
                title: {
                    display: true,
                    text: "Años trabajando para cubrir el costo total de la carrera",
                    font: { family: "'Georama', sans-serif", size: 10 },
                    color: "#aaa",
                },
            },
            y: {
                grid:   { display: false },
                border: { display: false },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 10 },
                    color: "#666",
                    crossAlign: "far",
                    callback: function (value, index) {
                        // Acortar etiqueta para que quepa en móvil
                        const label = etiquetas[index];
                        const match = label.match(/—\s(.+)/);
                        return match ? match[1] : label;
                    },
                },
            },
        },
    },
});
