let btnAjouter = document.getElementById("btn_ajouter")
let listeTaches = document.getElementById("liste_taches")
let nbId = 0

btnAjouter.addEventListener("click", () => {
    let tache = document.getElementById("tache")

    if (tache && tache.value.length > 0) {
        const tr = createElement(++nbId, tache.value)
        listeTaches.appendChild(tr)
    }
})

function createElement(tacheId, name) {
    let tr = document.createElement("tr")
    let id = document.createElement("td")
    id.innerText = tacheId

    let nom = document.createElement("td")
    nom.innerText = name

    let action = document.createElement("td")
    let btnSupprimer = document.createElement("button")
    btnSupprimer.classList.add("btn")
    btnSupprimer.classList.add("btn-sm")
    btnSupprimer.classList.add("btn-danger")
    btnSupprimer.innerText = "Supprimer"

    let btnModifier = document.createElement("button")
    btnModifier.classList.add("btn")
    btnModifier.classList.add("btn-sm")
    btnModifier.classList.add("btn-info")
    btnModifier.classList.add("me-2")
    btnModifier.innerText = "Modifier"

    action.appendChild(btnModifier)
    action.appendChild(btnSupprimer)
    action.classList.add("d-flex")
    action.classList.add("gap-2")
    tr.appendChild(id)
    tr.appendChild(nom)
    tr.appendChild(action)

    return tr
}