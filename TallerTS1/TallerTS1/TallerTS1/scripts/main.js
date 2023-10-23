// Imports
import { series } from './data.js';

// Constants or DOM elements
const component = document.getElementById('series');
const componentavg = document.getElementById('avg');

// Utility functions
function newRow(serie) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td style="font-weight: bold;">${serie.id}</td>
        <td style="color:#547dde;">${serie.name}</td>
        <td>${serie.station}</td>
        <td>${serie.seasons}</td>
    `;
    component.appendChild(row);
}

function newRows() {
    series.forEach(serie => newRow(serie));
}

function avg() {
    const totalSeasons = series.reduce((acc, s) => acc + s.seasons, 0);
    const average = totalSeasons / series.length;
    return Math.round(average).toString();
}

// Initialization or main functions
newRows();
componentavg.innerHTML = `Seasons average: ${avg()}`;
