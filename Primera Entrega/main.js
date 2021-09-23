do {
    let choice = listDiscs();
    if (choice === discs.length + 1)
        break;
    let qty = parseInt(prompt(selectQtyDisc));

    addBuy(choice, qty);

    next = prompt("Desea seguir agregando CDs? si/no");
} while (next === "si" || next === "SI" || next === "Si");

if (shopping > 0) {
    alert(`El total de su compra es $${shopping}`);
}

alert("Gracias por visitarnos");