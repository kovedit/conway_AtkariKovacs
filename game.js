let oszlopok = document.getElementById("oszlopok").value;
let sorok = document.getElementById("sorok").value;

const table = document.getElementsByTagName("table")[0];

let row;
let col;


for (let i = 0; i < sorok; i++) {
    row = document.createElement("tr");
    for (let j = 0; j < oszlopok; j++) {
        col = document.createElement("td");
        row.append(col);
    }
    table.append(row);
}