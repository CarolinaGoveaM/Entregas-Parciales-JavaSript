// FUNCION PARA LOCAL STORAGE

const saveToLocalStorage = (key, {itemPrice, itemImage, itemAmount}) => {
    let dataToSaveInLocal = {itemPrice, itemImage, itemAmount}
    localStorage.setItem(key, JSON.stringify(dataToSaveInLocal))
}