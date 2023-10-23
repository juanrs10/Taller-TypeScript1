// Imports
import { Serie } from './Serie.js';
import { series } from './data.js';

// Constants or DOM elements
const component: HTMLElement = document.getElementById('series')!;
const componentePromedio: HTMLElement = document.getElementById('avg')!;

// Utility functions
function newRows(): void {
    series.forEach(c => newRow(c));
}

function newRow(serie: Serie): void {
    let fila = document.createElement('tr');
    fila.innerHTML = `
        <td style="font-weight: bold;">${serie.id}</td>
        <td style="color:#547dde;">${serie.name}</td>
        <td>${serie.station}</td>
        <td>${serie.seasons}</td>
    `;
    component.appendChild(fila);
}

function avg(): string {
    let totalSeasons = series.reduce((acc, s) => acc + s.seasons, 0);
    const average = Math.round(totalSeasons / series.length);
    return average.toString();
}

// Initialization or main functions
newRows();
componentePromedio.innerHTML = `Seasons average: ${avg()}`;
