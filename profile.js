

document.querySelector("#interests").addEventListener("click", interest)

document.querySelector("#skills").addEventListener("click", skills)

document.querySelector("#goals").addEventListener("click", goals)

function interest(event) {
    let list = document.querySelector(".profileUL")
    list.remove()
    let list_2 = document.createElement("ul")
    list_2.classList.add("profileUL")

    let list1 = document.createElement("li")
    list1.textContent = "Biking"
    let list2 = document.createElement("li")
    list2.textContent = "Hiking"
    let list3 = document.createElement("li")
    list3.textContent = "Playing soccer"
    let list4 = document.createElement("li")
    list4.textContent = "Playing table tennis"
    list_2.appendChild(list1)
    list_2.appendChild(list2)
    list_2.appendChild(list3)
    list_2.appendChild(list4)
    document.querySelector("#profilepage").appendChild(list_2)
}

function skills(event) {
    let list = document.querySelector(".profileUL")
    list.remove()
    let list_2 = document.createElement("ul")
    list_2.classList.add("profileUL")

    let list1 = document.createElement("li")
    list1.textContent = "Programming"
    let list2 = document.createElement("li")
    list2.textContent = "CAD design"
    let list3 = document.createElement("li")
    list3.textContent = "Prototyping"
    let list4 = document.createElement("li")
    list4.textContent = "Quality assurance"
    list_2.appendChild(list1)
    list_2.appendChild(list2)
    list_2.appendChild(list3)
    list_2.appendChild(list4)
    document.querySelector("#profilepage").appendChild(list_2)
}

function goals(event) {
    let list = document.querySelector(".profileUL")
    list.remove()
    let list_2 = document.createElement("ul")
    list_2.classList.add("profileUL")

    let list1 = document.createElement("li")
    list1.textContent = "Obtain a degree in computer science"
    let list2 = document.createElement("li")
    list2.textContent = "Get a PMP certificate"
    let list3 = document.createElement("li")
    list3.textContent = "Work on AI project"
    let list4 = document.createElement("li")
    list4.textContent = "Work on autonomous vehicle building project"
    list_2.appendChild(list1)
    list_2.appendChild(list2)
    list_2.appendChild(list3)
    list_2.appendChild(list4)
    document.querySelector("#profilepage").appendChild(list_2)
}


document.querySelector("#color").addEventListener("click", () => {
    if (document.querySelector(".profilebuttons")) {
    document.querySelector(".profilebuttons").remove()
}
    let para = document.createElement("p")
    para.classList.add("profilebuttons")
    document.querySelector("#profilepage").appendChild(para)
    para.textContent = "My favorite color is Blue"
})



document.querySelector("#place").addEventListener("click", () => {
    if (document.querySelector(".profilebuttons")) {
        document.querySelector(".profilebuttons").remove()
    }
    let para = document.createElement("p")
    para.classList.add("profilebuttons")
    document.querySelector("#profilepage").appendChild(para)
    para.textContent = "My favorite place is the beach"
})


document.querySelector("#ritual").addEventListener("click", () => {
    if (document.querySelector(".profilebuttons")) {
        document.querySelector(".profilebuttons").remove()
    }
    let para = document.createElement("p")
    para.classList.add("profilebuttons")
    document.querySelector("#profilepage").appendChild(para)
    para.textContent = "My favorite ritual is meditation"
})

