/*
window.localStorage.setItem('item', JSON.stringify(item))

console.log(window.localStorage.getItem('item'))

console.log(JSON.parse(window.localStorage.getItem('item')))

console.log(window.localStorage.clear())

console.log(JSON.parse(window.localStorage.getItem('item')))
*/


// store item
let store = () => {
    let name = document.getElementById('item-name').value;
    let price = document.getElementById('item-price').value;
    let key = document.getElementById('key').value;

    const item = {
        name: name,
        price: price
    }

    window.localStorage.setItem(key, JSON.stringify(item))
}


// retrieve item
function retrieveItems() {
    console.log('retrieving items...')
    
    const key = document.getElementById('retrieve-key').value
    const items = window.localStorage.getItem(key)
    const paragraph = document.createElement("p")
    const createdText = document.createTextNode(items)
    const retrieveSection = document.getElementById('retrieve')

    paragraph.appendChild(createdText)
    retrieveSection.appendChild(paragraph)
}


// remove item
let removeItem = () => {
    const key = document.getElementById('remove-key').value
    localStorage.removeItem(key)

    console.log('Item removed...')
}


// clear local storage
let clearStorage = () => {
    localStorage.clear()
    console.log("All items cleared...")
}

window.onload = () => {
    document.getElementById("cart-form").onsubmit = store
    document.getElementById("clear-button").onclick = clearStorage
    document.getElementById("remove-button").onclick = removeItem
    document.getElementById("retrieve-button").onclick = retrieveItems
}





