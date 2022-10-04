const menu =(limite)=>{
    const main = document.querySelector(".menu");
    let listaPadre = document.createElement("ul");
    main.appendChild(listaPadre);
    listaPadre.classList.add("listaPadre");
    for (let i = 0; i < limite; i++) {
        let listaHija = "";
        listaHija = document.createElement("li");
        listaHija.innerText = "Menú "+(i+1);
        listaPadre.appendChild(listaHija);
        listaHija.classList.add("listaHija");
        for (let j = 0; j < limite; j++) {
            let subLista = "";
            subLista = document.createElement("a");
            subLista.innerText= "SubMenú "+(j+1);
            listaHija.appendChild(subLista);
            subLista.classList.add("subLista");
        }
    }
}
menu(8);
