// Usa un array para representar estas áreas
let areas = [];

const formVehiculos = document.querySelector('form');
const resultadosDiv = document.getElementById('resultados');
const btnFiltrar = document.getElementById('btnFiltrarAreas');

// Usa un array para representar estas áreas y sus niveles de contaminación estimados
function mostrarAreasTotales(lista) {
    resultadosDiv.innerHTML = lista.map(area => `
        <div class="alert ${area.contaminacion ? 'alert-danger' : 'alert-success'}">
            <strong>${area.tipoVehiculo}</strong> en ${area.areaCiudad} - 
            ${area.cantVehiculos} vehículos (${area.contaminacion ? 'Contaminado' : 'No Contaminado'})
        </div>
    `).join('');
}

formVehiculos.addEventListener('submit', (e) => {
    e.preventDefault();

    const tipoVehiculo = document.getElementById('tipoVehiculo').value;
    const areaCiudad = document.getElementById('areaCiudad').value;
    const cantVehiculos = parseInt(document.getElementById('cantVehiculos').value);

    let contaminacion;
        if (cantVehiculos > 10) {
            contaminacion = true;
        } else {
            contaminacion = false;
        }

    areas.push({ tipoVehiculo, areaCiudad, cantVehiculos, contaminacion });
    mostrarAreasTotales(areas);
});

// permite a los usuarios aplicar filtros para ver solo las  áreas con alta contaminación.
btnFiltrar.addEventListener('click', () => {
    const areasFiltradas = areas.filter(area => area.contaminacion);
    mostrarAreasTotales(areasFiltradas);
});



