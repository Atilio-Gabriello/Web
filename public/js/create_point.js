function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
    .then(res => res.json())
    .then(states => {
        for(const state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

populateUFs()

function getCities(event){
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")
    const ufValue = event.target.value
    const indexSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexSelectedState].text
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    
    citySelect.innerHTML = `<option value="">Selecione a cidade</option>`
    citySelect.disabled = true
    
    fetch(url)
    .then(res => res.json())
    .then(cities => {
        for(const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        
        citySelect.disabled = false
    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change",getCities)

//Itens de coleta
const itemsCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsCollect){
    item.addEventListener("click",handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")
let selectedItems = []

function handleSelectedItem(event){
    const itemLi = event.target
    itemLi.classList.toggle("selected")
    
    const itemId = itemLi.dataset.id

    const alreadySelected = selectedItems.findIndex(item =>{
        const itemFound = item == itemId
        return itemFound
    })

    if(alreadySelected != -1){
        const filteredItems = selectedItems.filter(item => {
            const itemDifferent = item != itemId
            return itemDifferent
        })

        selectedItems = filteredItems
    }else{
        selectedItems.push(itemId)
    }

    collectedItems.value = selectedItems
}