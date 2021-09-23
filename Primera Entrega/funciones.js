let inStock = (qty, stock) => {
    if (qty > stock) {
        alert(`No tenemos esa cantidad requerida, nos queda ${stock} disponible`);
        return false;
    } else return true;
}

let addBuy = (choice, qty) => {
    let look = discs.find(discs => discs.id === choice);
    if (inStock(qty, look.stock)) {
        shopping += (qty * look.price);
        discs[choice - 1].stock -= qty;
        alert(`${look.name} ha sido agregado`);
    }
}

let listDiscs = () => {
    let list = "Selecciona el Disco que deseas: \n";
    discs.forEach((discs) => {
        list += (discs.id + "-" + discs.name + "\n");
    });
    list += (discs.length + 1) + "-Fin";
    let show = parseInt(prompt(list));
    return show;
}