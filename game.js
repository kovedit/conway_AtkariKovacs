const oszlopok = 6;
const sorok = 6;

const table = document.getElementsByTagName("table")[0];

let row;
let col;


for (let i = 0; i < sorok; i++) {
    row = document.createElement("tr");
    for (let j = 0; j < oszlopok; j++) {
        col = document.createElement("td");
        col.innerText = i * j;
        row.append(col);
    }
    table.append(row);
}